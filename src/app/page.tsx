import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-20 gap-5 bg-slate-400">
      <Link href={"/HomePage"}>Home Page</Link>
      <Link href={"/NamePage"}>Name Page</Link>
    </main>
  );
}
