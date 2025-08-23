import "./globals.css";
import Navbar from "@/Component/Navbar";
import Footer from "@/Component/Footer";


export const metadata = {
title: "Madonna College of Health Technology — Umuahia",
description: "Shaping Skilled Hands, Saving Future Lives.",
};


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="bg-white text-slate-800 antialiased">
<Navbar />
<main className="min-h-[70vh]">{children}</main>
<Footer />
</body>
</html>
);
}