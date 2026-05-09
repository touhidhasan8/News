import { redirect } from "next/navigation";

export default async function Home() {
  const category_id = "01";
  redirect(`/category/${category_id}`);
}