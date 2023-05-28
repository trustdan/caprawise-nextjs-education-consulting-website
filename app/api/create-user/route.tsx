import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { verifyJwt } from "@/app/lib/jwt";

export async function POST(request: NextRequest) {
  if (request.method === "POST") {
    try {
      const accessToken = request.headers.get("Authorization");
      if (!accessToken || !verifyJwt(accessToken)) {
        return new NextResponse(
          JSON.stringify({
            error: "Unauthorized Request: Invalid/No access token",
          }),
          {
            status: 401,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      const body = await request.json();
      const user = await prisma.user.create({
        data: {
          username: body.username,
          password: await bcrypt.hash(body.password, 10),
        },
      });

      const { password, ...userWithoutPass } = user;
      return new NextResponse(JSON.stringify(userWithoutPass), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error: any) {
      console.log(error.message)
      return new NextResponse(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
}
