import Image from "next/image";

import { FaGoogle, FaMicrosoft } from "react-icons/fa6";

export default function Password() {

  return (
    <main className={`h-screen relative p-4`}>
      <div className={`2xl:bg-pink-500 xl:bg-white lg:bg-red-500 md:bg-yellow-500 sm:bg-green-500 p-6 2xl w-96 rounded-xl shadow-md absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
        <div className={`flex flex-col gap-4`}>
          <div className={`flex flex-col items-center`}>
            <Image src="/assets/Vitaforce.png" width="200" height="100" alt="Logo" />
            <h2>Acesse com sua conta</h2>
          </div>
          <form action="">
            <div className={`flex flex-col gap-4`}>
              <div className={`flex flex-col gap-1`}>
                <label htmlFor="E-mail" className={`text-xs`}>E-mail</label>
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
          <div className={`flex flex-col gap-4`}>
            <div className={`text-center before:h-[1px] before:w-1/4 before:bg-gray-400 before:inline-block before:align-middle after:h-[1px] after:w-1/4 after:bg-gray-400 after:inline-block after:align-middle`}>
              <span className={`mx-4 text-sm text-gray-500`}>ou</span>
            </div>
            <div className={`flex justify-center gap-6`}>
              <a href="#" className={`btn-auth w-full flex justify-center items-center gap-3 `}>
                <FaGoogle />
                <span>Google</span>
              </a>
              <a href="#" className={`btn-auth w-full flex justify-center items-center gap-3 `}>
                <FaMicrosoft />
                <span>Microsoft</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`h-full flex flex-col justify-between items-center`}>
        <span>Login</span>
        <span>Desenvolvido por</span>
      </div>
    </main>
  );
}
