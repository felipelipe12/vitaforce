"use client"

import Link from "next/link";
import { useState } from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


export default function Dashboard() {
    const [open, setOpen] = useState(true);

    return (
        <main className="flex h-screen gap-4">
            <aside className={`${open ? "w-72" : "w-20"} bg-teal-100 my-4 ml-4 px-6 py-4 rounded-xl relative duration-300`}>
                <button className={`bg-teal-300 p-3 rounded absolute top-4 -right-7`} onClick={() => setOpen(!open)}>
                    {!open ? <FaAngleRight /> : <FaAngleLeft />}
                </button>
                <nav>
                    <div>
                        {!open ? <span>Side</span> : <span>Sidebar</span>}
                    </div>
                </nav>
            </aside>
            <section className={`w-full flex flex-col my-4 mr-4`}>
                <header className={`w-full bg-teal-50 px-6 py-4 rounded-xl flex justify-between`}>
                    Header
                    <Link href="/">Access</Link>
                </header>
            </section>
        </main>
    );
}
