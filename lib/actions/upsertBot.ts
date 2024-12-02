"use server";

import { supabase } from "../supabase";

export const upsertBot = async (formData: FormData) => {
  const id = Number(formData.get("id"));
  const name = (formData.get("name") as string) || "";
  const prompt = (formData.get("prompt") as string) || "";

  // Save data to your API here.

  if (!id) {
    const { error } = await supabase.from("bots").insert({
      prompt: prompt,
      name: name,
    });
    if (error) {
      throw error;
    }
    return;
  }
  const { error } = await supabase.from("bots").upsert({
    id: id,
    prompt: prompt,
    name: name,
  });

  if (error) {
    throw error;
  }
};
