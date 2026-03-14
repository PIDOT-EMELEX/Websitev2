import { getLinkPreview } from "link-preview-js";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { url } = await req.json();

  try {
    const data: any = await getLinkPreview(url);

    return NextResponse.json({
      title: data.title || "",
      description: data.description || "",
      image: data.images?.[0] || "",
      url: data.url || url,
    });

  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch preview" });
  }
}