import { supabase } from "../supabase";

export const getDocumentsByBotId = async (botId: string) => {
  const { data, error } = await supabase
    .from("bot_documents")
    .select(
      `
	    documents (*)
	`,
    )
    .eq("bot_id", botId);

  if (error) {
    throw error;
  }

  return data.map((doc) => doc.documents);
};
