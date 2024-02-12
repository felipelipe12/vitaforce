import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className={`bg-white p-6 2xl w-96 rounded-xl shadow-md absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
      <div className={`flex flex-col gap-4`}>
        <div className={`flex flex-col items-center gap-2`}>
          <Image src="/assets/Vitaforce.png" width="300" height="75" alt="Logo" />
          <h2>Acesse sua conta</h2>
        </div>
        <form action="">
          <div className={`flex flex-col gap-4`}>
            <div className={`flex flex-col gap-1`}>
              <label htmlFor="E-mail" className={`text-xs`}>Usuário</label>
              <input type="email" className={`border-[1px] rounded-lg px-4 py-2`} />
            </div>
            <div className={`flex flex-col gap-1`}>
              <label htmlFor="Password" className={`text-xs`}>Senha</label>
              <input type="password" className={`border-[1px] rounded-lg px-4 py-2`} />
              <div className={`flex gap-2 mt-1`}>
                <input type="checkbox" />
                <span className={`text-sm`}>Lembrar senha</span>
              </div>
            </div>
            <a href="/dashboard" className={`btn-primary`}>Acessar</a>
          </div>
        </form>
        <div className={`text-center`}>
          <span className={`text-sm`}>Problemas ao conectar?</span> <Link href="/password" className={`text-teal-500 text-sm underline`}>Solicitar senha</Link>
        </div>
      </div>
    </div>
  );
}
