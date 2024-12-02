import { supabase } from "../supabase";

export const getDocumentsByBotId = async (botId: string) => {
  const { data, error } = await supabase
    .from("documents")
    .select(
      `
		*,
	    bots (id, name)
	`,
    )
    .eq("bots.id", botId);
  if (error) {
    throw error;
  }
  return data;
};
