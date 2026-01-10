import { NextResponse } from "next/server";

export async function GET() {
  const restaurants = [
    { id: 1, name: "Food Plaza", rating: 4.3 },
    { id: 2, name: "Spice Hub", rating: 4.6 },
    { id: 3, name: "Tandoori Nights", rating: 4.4 },
  ];

  return NextResponse.json(restaurants);
}
