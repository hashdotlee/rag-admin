import { supabase } from "@/lib/supabase";

export const GET = async (request: Request) => {
  try {
    const { API_KEY, BOT_NAME } = await request.json();

    const { data, error } = await supabase
      .from("bots")
      .select("*")
      .eq("name", BOT_NAME)
      .single();

    if (!error && !data) {
      return new Response("Bot not found", { status: 404 });
    }

    if (data?.api_key !== API_KEY) {
      return new Response("Unauthorized", { status: 401 });
    }

    return Response.json(data);
  } catch (_) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
