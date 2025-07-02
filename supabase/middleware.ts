import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
// import { guestRoutes, authRoutes } from '@/lib/utils/routes';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // const url = request.nextUrl.clone();
  // const pathname = url.pathname;

  // if (!user && authRoutes.includes(pathname)) {
  //   // Not logged in and trying to access protected page
  //   url.pathname = '/signin';
  //   return NextResponse.redirect(url);
  // }

  // if (user && !authRoutes.includes(pathname) && pathname === '/signin') {
  //   // Logged in user trying to access /signin
  //   url.pathname = '/dashboard';
  //   return NextResponse.redirect(url);
  // }

  // if(user && pathname === '/') {
  //   url.pathname = '/dashboard';
  //   return NextResponse.redirect(url);
  // }

  return supabaseResponse;
}
