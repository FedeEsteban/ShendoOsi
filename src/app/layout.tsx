import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { AdminAuthRedirect } from "@/components/admin-auth-redirect";
const montserrat = Montserrat({ subsets: ["latin"], display: "swap", variable: "--font-montserrat" });
export const metadata: Metadata = { title: "Shendo Osi | Cositas especiales", description: "Regalería, librería, bazar, accesorios y bijouterie. Cositas especiales para regalarte y regalar." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body className={montserrat.variable}><AdminAuthRedirect /><CartProvider>{children}</CartProvider></body></html>; }
