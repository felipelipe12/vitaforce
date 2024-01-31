import Image from "next/image";

import { FaGoogle, FaMicrosoft } from "react-icons/fa6";

export default function Home() {

  return (
    <main className={`h-screen bg-gradient-to-t from-teal-300 from-50% to-teal-100 to-50% relative p-4`}>
      <div className={`2xl:bg-black xl:bg-blue-500 lg:bg-red-500 md:bg-yellow-500 sm:bg-green-500 p-6 2xl xl:w-96 rounded-xl shadow-md absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
        <div className={`flex flex-col gap-4`}>
          <div className={`flex flex-col items-center`}>
            <Image src="/assets/Vitaforce.png" width="200" height="100" alt="Logo" />
            <h2>Acesse com sua conta</h2>
          </div>
          <form action="">
            <div className={`flex flex-col gap-4`}>
              <div className={`flex flex-col gap-1`}>
                <label htmlFor="Email" className={`text-sm`}>E-mail</label>
                <input type="text" className={`border-[1px] rounded-xl p-2`} />
              </div>
              <div className={`flex flex-col gap-1`}>
                <label htmlFor="Password" className={`text-sm`}>Senha</label>
                <input type="password" className={`border-[1px] rounded-xl p-2`} />
                <div className={`flex gap-2 mt-1`}>
                  <input type="checkbox" />
                  <span className={`text-sm`}>Lembrar senha</span>
                </div>
              </div>
              <a href="/dashboard" className={`bg-teal-500 text-center text-white p-2 rounded-xl shadow-xl`}>Acessar</a>
            </div>
          </form>
          <div className={`flex flex-col gap-4`}>
            <div className={`text-center before:h-[1px] before:w-1/4 before:bg-gray-400 before:inline-block before:align-middle after:h-[1px] after:w-1/4 after:bg-gray-400 after:inline-block after:align-middle`}>
              <span className={`mx-4 text-sm text-gray-500`}>ou</span>
            </div>
            <div className={`flex justify-center gap-6`}>
              <a href="#" className={`w-full border-[1px] rounded p-2 shadow flex justify-center items-center gap-3`}>
                <FaGoogle />
                <span>Google</span>
              </a>
              <a href="#" className={`w-full border-[1px] rounded p-2 shadow flex justify-center items-center gap-3`}>
                <FaMicrosoft />
                <span>Microsoft</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span>oi</span>
      </div>
    </main>
  );
}
