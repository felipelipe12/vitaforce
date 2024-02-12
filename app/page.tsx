import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className={`h-[100dvh] relative p-4`}>
      <Link href="/login" className="btn-primary">Ir para o login</Link>
    </main>
  );
}
