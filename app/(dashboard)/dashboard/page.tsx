// /app/(dashboard)/dashboard/page.tsx
import { redirect } from "next/navigation";

export default function DashboardRedirectPage() {
  redirect("/dashboard/home");
}
