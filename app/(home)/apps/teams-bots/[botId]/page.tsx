import FormItem from "@/components/custom/FormItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getBot } from "@/lib/fetcher/getBot";
import { getDocumentsByBotId } from "@/lib/fetcher/getDocumentsByBotId";
import { notFound } from "next/navigation";
import AddDocumentDialog from "../components/AddDocumentDialog";
import { Save, UploadCloud } from "lucide-react";

export default async function BotSetting({
  params,
}: {
  params: Promise<{ botId: string }>;
}) {
  const { botId } = await params;
  if (!botId) {
    return notFound();
  }
  const bot = await getBot(botId);
  const documents = await getDocumentsByBotId(botId);

  return (
    <form className="space-y-4">
      <div className="flex justify-between py-4 border-b items-center">
        <h3 className="text-xl font-bold"> Bot Setting </h3>
        <div className="flex space-x-4">
          <Button variant={"secondary"}>
            <UploadCloud size={24} />
            Publish
          </Button>
          <Button>
            <Save size={24} />
            Update
          </Button>
        </div>
      </div>
      <FormItem label="API Key">
        <Input
          name="api_key"
          disabled
          defaultValue={bot?.api_key || ""}
          type="text"
        />
      </FormItem>
      <FormItem label="Name">
        <Input name="name" defaultValue={bot?.name || ""} type="text" />
      </FormItem>

      <FormItem label="Prompt">
        <Textarea defaultValue={bot?.prompt || ""} rows={10} />
      </FormItem>
      <FormItem label="Documents">
        <div className="space-y-4">
          <AddDocumentDialog botId={Number(botId)} />
          <div className="grid gap-4 md:grid-cols-4 grid-cols-2">
            {documents.map((document) => (
              <div
                key={document?.id}
                className="p-4 space-y-4 rounded-md bg-gray-50 border shadow-sm"
              >
                <div className="p-2 text-xs text-white bg-slate-700 rounded-md inline-block">
                  {document?.type === 0 && <span>PDF</span>}
                  {document?.type === 1 && <span>Web Data</span>}
                  {document?.type === 2 && <span>Plain Text</span>}
                </div>
                <FormItem label="url">
                  <Input
                    name="url"
                    defaultValue={document?.url || ""}
                    type="text"
                    disabled
                  />
                </FormItem>
                <FormItem label="Content">
                  <Textarea
                    rows={5}
                    defaultValue={document?.content || ""}
                    disabled
                  />
                </FormItem>
                <FormItem label="Selector">
                  <Input
                    name="selector"
                    defaultValue={document?.selector || ""}
                    disabled
                  />
                </FormItem>
              </div>
            ))}
          </div>
        </div>
      </FormItem>
    </form>
  );
}
