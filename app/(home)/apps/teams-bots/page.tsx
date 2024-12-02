import { getBots } from "@/lib/fetcher/getBots";
import TeamsBotsTable from "./components/TeamsBotsTable";
import TeamsBotsToolbar from "./components/TeamsBotsToolbar";

export default async function TeamsBots() {
  const data = await getBots();
  return (
    <div className="space-y-4">
      <TeamsBotsToolbar />
      <TeamsBotsTable data={data} />
    </div>
  );
}
