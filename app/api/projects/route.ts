import { filterProjects } from "@/data/project-list";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const projects = filterProjects({
    area: searchParams.get("area") || undefined,
    type: searchParams.get("type") || undefined,
    price: searchParams.get("price") || undefined,
    status: searchParams.get("status") || undefined,
    amenity: searchParams.get("amenity") || undefined,
    sort: searchParams.get("sort") || undefined,
    q: searchParams.get("q") || undefined,
  });

  return NextResponse.json({
    total: projects.length,
    projects,
  });
}
