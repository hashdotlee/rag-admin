"use server";
import { supabase } from "../supabase";

export const getBots = async () => {
  const { data, error } = await supabase.from("bots").select("*");
  if (error) {
    throw error;
  }
  return data;
};
