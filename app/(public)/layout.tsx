import { useState } from "react";
import { FaMoon } from "react-icons/fa6";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main className={`h-[100dvh] relative p-4`}>
            <div className={`h-full flex flex-col justify-between`}>
                <div className={`w-full flex gap-2 justify-end`}>
                    <button className={`bg-teal-50 rounded shadow-md p-2`}>
                        <FaMoon />
                    </button>
                    <span>Language</span>
                </div>
                {children}
                <div className="text-center">
                    <span className="text-xs">Desenvolvido por Mr. Cygnus</span>
                </div>
            </div>
        </main >
    );
}
