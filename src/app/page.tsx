import Link from "next/link";

export default function Home() {

  return (
    <main className={`h-screen bg-gradient-to-t from-teal-300 from-50% to-teal-100 to-50% relative`}>
      <div className={`absolute bg-white p-6 w-96 rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md`}>
        <div>
          <form action="">
            <div className={`flex flex-col gap-4`}>
              <div className={`flex flex-col gap-2`}>
                <label htmlFor="Email">E-mail</label>
                <input type="text" className={`border-[1px] rounded p-2`} />
              </div>
              <div className={`flex flex-col gap-2`}>
                <label htmlFor="Password">Password</label>
                <input type="password" className={`border-[1px] rounded p-2`} />
                <div className={`flex gap-2`}>
                  <input type="checkbox" />Remember me
                </div>
              </div>
              <a href="/dashboard" className={`bg-teal-600 text-center p-2 rounded`}>Acessar</a>
            </div>
            <div className={`flex flex-col gap-3`}>
              <div className={`text-center before:h-[1px] before:w-1/4 before:bg-black before:inline-block before:align-middle after:h-[1px] after:w-1/4 after:bg-black after:inline-block after:align-middle`}>
                <span className={`mx-4 my-2 text-sm`}>ou</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
