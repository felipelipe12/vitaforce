import Link from "next/link";

export default function Home() {

  return (
    <main className="flex h-screen">
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
