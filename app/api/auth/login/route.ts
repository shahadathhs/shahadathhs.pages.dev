import { type NextRequest, NextResponse } from 'next/server';
import { login } from '@/lib/auth-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const user = await login(email, password);

    return NextResponse.json(user);
  } catch (error: unknown) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Login failed' }, { status: 401 });
  }
}
