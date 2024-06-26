import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({
    rules: [
      {
        pathPattern: "/p/**",
        apiPath: "https://blinks.cubik.so/contribution/**",
      },
    ],
  });
};
