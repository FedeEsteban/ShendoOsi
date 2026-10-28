import Link from "next/link";
import { ArrowRight, BookOpen, Camera as Instagram, CheckCircle2, Gem, Gift, Heart, MessageCircle, PackageCheck, ShoppingBag, Sparkles, Truck, WalletCards } from "lucide-react";
import { CartDrawer } from "@/components/cart-drawer";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";
import { getFeaturedProducts } from "@/lib/supabase-products";

export const dynamic = "force-dynamic";
const categories = [
  { name: "Regalería", text: "Detalles lindos para celebrar, agradecer y sorprender.", icon: Gift, tone: "rose" },
  { name: "Librería", text: "Papelería, escritura y objetos para crear todos los días.", icon: BookOpen, tone: "sage" },
  { name: "Bazar", text: "Elegidos útiles y originales para darle vida a tu casa.", icon: Sparkles, tone: "cream" },
  { name: "Accesorios", text: "Ese toque especial que transforma cualquier look.", icon: ShoppingBag, tone: "lavender" },
  { name: "Bijouterie", text: "Brillos, texturas y piezas para usar o regalar.", icon: Gem, tone: "peach" },
];

export default async function Home() {
  const featuredProducts = await getFeaturedProducts(products);
  return <><Header /><CartDrawer /><main>
    <section className="shendo-hero"><div className="container shendo-hero-grid"><div className="shendo-hero-copy"><span className="shendo-kicker"><Sparkles size={15} /> Cositas especiales</span><h1>Pequeñas cosas.<br /><em>Grandes alegrías.</em></h1><p>Regalos, papelería, bazar, accesorios y bijouterie elegidos para hacer más lindos tus días.</p><div className="hero-actions"><Link className="button" href="/tienda">Descubrir la tienda <ArrowRight size={18} /></Link><a className="button-outline" href="https://www.instagram.com/shendo_osi" target="_blank" rel="noreferrer"><Instagram size={18} /> Seguinos</a></div></div><div className="shendo-hero-art"><span className="doodle doodle-one">✦</span><span className="doodle doodle-two">♡</span><div className="hero-seal"><img src="/imagenes/shendo-logo-sello.png" alt="Shendo Osi" /></div><div className="hero-note">cosas bonitas<br />para regalarte<br />y regalar ✿</div></div></div></section>
    <section className="service-strip shendo-strip"><div className="container grid grid-3"><div className="service-item"><Truck /><div><h3>Envíos</h3><p>Coordinamos la mejor opción para vos.</p></div></div><div className="service-item"><WalletCards /><div><h3>Pagá como prefieras</h3><p>Transferencia, tarjetas y Mercado Pago.</p></div></div><div className="service-item"><PackageCheck /><div><h3>Compra segura</h3><p>Preparamos cada pedido con mucho amor.</p></div></div></div></section>
    <section id="catalogo" className="section shendo-categories"><div className="container"><div className="section-head shendo-section-head"><div><span className="eyebrow">Un mundo de cositas</span><h2>Encontrá eso que te hace feliz</h2></div><Link className="link" href="/tienda">Ver todo <ArrowRight size={16} /></Link></div><div className="category-bubbles">{categories.map(({ name, text, icon: Icon, tone }) => <Link className={`shendo-category ${tone}`} href={`/tienda?rubro=${encodeURIComponent(name)}`} key={name}><span className="category-icon"><Icon size={31} /></span><h3>{name}</h3><p>{text}</p><small>Explorar <ArrowRight size={14} /></small></Link>)}</div></div></section>
    <section id="ofertas" className="section shendo-featured"><div className="container"><div className="section-head shendo-section-head"><div><span className="eyebrow">Nuestros elegidos</span><h2>Favoritos de Shendo</h2><p>Una selección de cositas que nos encantan.</p></div><Link className="link" href="/tienda">Ir a la tienda <ArrowRight size={16} /></Link></div><div className="grid grid-4">{featuredProducts.map((product) => <ProductCard product={product} key={product.id} />)}</div></div></section>
    <section id="nosotros" className="section shendo-story"><div className="container shendo-story-grid"><div className="story-art"><div className="story-shape"><img src="/imagenes/shendo-logo-horizontal.png" alt="Shendo Osi" /></div><span className="story-tag"><Heart size={16} fill="currentColor" /> Elegido con amor</span></div><div className="story-copy"><span className="eyebrow">Sobre Shendo Osi</span><h2>Creemos en la magia de los pequeños detalles</h2><p>Shendo Osi es ese lugar donde encontrás una cosita especial sin estar buscándola. Seleccionamos objetos lindos, útiles y originales para acompañarte, regalar y celebrar lo cotidiano.</p><p><CheckCircle2 size={18} /> Productos elegidos con dedicación.</p><p><CheckCircle2 size={18} /> Atención cercana y personalizada.</p><Link className="button" href="/tienda">Conocé nuestros productos</Link></div></div></section>
    <section className="section shendo-instagram"><div className="container instagram-panel"><div><span className="shendo-kicker"><Instagram size={15} /> @shendo_osi</span><h2>Más cositas lindas,<br />todos los días</h2><p>Novedades, ideas para regalar y todos nuestros ingresos en Instagram.</p></div><a className="button light-button" href="https://www.instagram.com/shendo_osi" target="_blank" rel="noreferrer">Ver Instagram <ArrowRight size={18} /></a></div></section>
    <section id="contacto" className="section shendo-contact"><div className="container grid grid-2"><div><span className="eyebrow">Hablemos</span><h2>¿Buscás algo especial?</h2><p>Escribinos y te ayudamos a encontrar el regalo, accesorio o detalle perfecto.</p><div className="contact-social-card"><MessageCircle /><div><strong>También estamos en Instagram</strong><a href="https://www.instagram.com/shendo_osi" target="_blank" rel="noreferrer">@shendo_osi</a></div></div></div><ContactForm /></div></section>
  </main><a className="floating-whatsapp floating-instagram" href="https://www.instagram.com/shendo_osi" target="_blank" rel="noreferrer" aria-label="Contactar por Instagram"><Instagram /></a><Footer /></>;
}
