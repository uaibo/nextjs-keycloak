import { NextResponse } from "next/server";

export async function POST(request) {
   /** 
    * TODO: Sync user data in database
    * 
    * 1. Check if user exists in database
    * 2. If user exists, update user data
    * 3. If user does not exist, create user
    * Return user data
    */
  return NextResponse.json({
      message: "User synced",
      user: request.body, // example response
  });
}
