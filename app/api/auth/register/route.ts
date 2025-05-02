import { type NextRequest, NextResponse } from "next/server"
import { registerUser } from "@/lib/auth-service"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const user = await registerUser(body)

    return NextResponse.json(user)
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Registration failed" }, { status: 400 })
  }
}
