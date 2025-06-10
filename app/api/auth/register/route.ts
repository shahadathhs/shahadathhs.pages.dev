import { type NextRequest, NextResponse } from 'next/server';
import { registerUser } from '@/lib/auth-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const user = await registerUser(body);

    return NextResponse.json(user);
  } catch (error: unknown) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Registration failed' }, { status: 400 });
  }
}
