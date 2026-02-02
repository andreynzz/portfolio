"use client";

import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <main className="relative min-h-screen text-[#F5F5F5] p-4 md:p-6 font-mono selection:bg-[#FFC107] selection:text-black overflow-x-hidden">
            {children}
        </main>
    )
}