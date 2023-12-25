import { isUserCreated } from "@/app/lib/utils/authVars";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/select"];

export default function middleware(req: NextRequest) {
  // if (!isUserCreated) {
  //   console.log("🚀 ~ file: middleware.ts:2 ~ isUserCreated:", isUserCreated);
  //   return NextResponse.redirect("/");
  // }
}
