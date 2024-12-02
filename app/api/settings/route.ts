import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export const GET = async ({ request }: { request: NextRequest }) => {
  const { API_KEY, BOT_NAME } = await request.json();

  const { data, error } = await supabase
    .from("bots")
    .select("*")
    .eq("name", BOT_NAME)
    .single();

  if (!error && !data) {
    return new NextResponse("Bot not found", { status: 404 });
  }

  if (data?.api_key !== API_KEY) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  return new NextResponse(JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });
};
