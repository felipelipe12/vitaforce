import Image from "next/image";
import Link from "next/link";

export default function Password() {

  return (
    <div className={`xl:bg-white p-6 2xl w-96 rounded-xl shadow-md absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
      <div className={`flex flex-col gap-4`}>
        <div className={`flex flex-col items-center`}>
          <h2>Solicite a mudança da senha</h2>
        </div>
        <form action="">
          <div className={`flex flex-col gap-4`}>
            <div className={`flex flex-col gap-1`}>
              <label htmlFor="E-mail" className={`text-xs`}>E-mail</label>
              <input type="email" className={`border-[1px] rounded-lg px-4 py-2`} />
            </div>
            <Link href="/dashboard" className={`btn-primary`}>Acessar</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
