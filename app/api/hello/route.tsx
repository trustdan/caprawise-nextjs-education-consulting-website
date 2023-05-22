import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  const resp = [
    {
      name: "John",
      age: 30,
      car: "bmw",
    },
    {
      name: "weq",
      age: 302,
      car: "ferrari", 
    },
  ];
  return new Response(JSON.stringify(resp));
}
