import { supabase } from "../supabase";

export const getBot = async (id: string) => {
  const { data, error } = await supabase
    .from("bots")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    throw error;
  }
  return data;
};
