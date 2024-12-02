import FormItem from "@/components/custom/FormItem";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getBot } from "@/lib/fetcher/getBot";
import { getDocumentsByBotId } from "@/lib/fetcher/getDocumentsByBotId";
import { notFound } from "next/navigation";

export default async function BotSetting({
  params,
}: {
  params: { botId: string };
}) {
  const { botId } = await params;
  if (!botId) {
    return notFound();
  }
  const bot = await getBot(botId);
  const documents = await getDocumentsByBotId(botId);

  return (
    <form className="space-y-4">
      <FormItem label="Name">
        <Input name="name" defaultValue={bot?.name || ""} type="text" />
      </FormItem>

      <FormItem label="Prompt">
        <Textarea defaultValue={bot?.prompt || ""} rows={10} />
      </FormItem>
      <FormItem label="Documents">
        <div>
          {documents.map((document) => (
            <div>{document?.type}</div>
          ))}
        </div>
      </FormItem>
    </form>
  );
}
