import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, LayoutDashboard } from "lucide-react";
import { ProductAdmin } from "@/components/product-admin";
import { AdminAuthGate } from "@/components/admin-auth-gate";

export const metadata: Metadata = { title: "Administrar productos | Shendo Osi" };

export default function AdminProductsPage() {
  return <main className="admin-page"><div className="container">
    <div className="admin-top-links"><Link className="link admin-back" href="/admin"><LayoutDashboard size={16} /> Panel general</Link><Link className="link admin-back" href="/"><ArrowLeft size={16} /> Volver al sitio</Link></div>
    <div className="admin-title"><span className="eyebrow">Administración</span><h1>Productos</h1><p>Carga manual y masiva del catálogo.</p></div>
    <AdminAuthGate><ProductAdmin /></AdminAuthGate>
  </div></main>;
}
