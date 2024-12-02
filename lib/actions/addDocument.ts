"use server";

import { supabase } from "../supabase";

export const addDocument = async (botId: number, formData: FormData) => {
  if (!botId) {
    throw new Error("Bot ID is required");
  }
  const data = {
    content: formData.get("content") as string | null,
    selector: formData.get("selector") as string | null,
    type: Number(formData.get("type")),
    url: formData.get("url") as string | null,
  };
  const { error, data: newDocument } = await supabase
    .from("documents")
    .insert([
      {
        ...data,
      },
    ])
    .select()
    .single();

  if (error) {
    throw error;
  }

  const { error: error2 } = await supabase.from("bot_documents").insert([
    {
      bot_id: botId,
      document_id: newDocument.id,
    },
  ]);

  if (error2) {
    throw error2;
  }
};
