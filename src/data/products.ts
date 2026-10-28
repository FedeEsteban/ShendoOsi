export type Product = { id: string; slug: string; name: string; sku: string; brand: string; category: string; price: number; listPrice?: number; transferPrice: number; stock: number; badge?: string; featured?: boolean; offerPrice?: number; image: string; images?: string[]; localDraftId?: string; specs: Record<string, string>; variants?: ProductVariant[] };
export type ProductVariant = { id: string; sku: string; options: Record<string, string>; price: number; listPrice?: number; transferPrice: number; stock: number };
const placeholder = "/imagenes/producto-sin-foto.svg";
export const products: Product[] = [
  { id: "agenda", slug: "agenda-anillada", name: "Agenda anillada", sku: "SH-LIB-001", brand: "Shendo Osi", category: "Librería", price: 18900, transferPrice: 17010, stock: 12, badge: "Nuevo", featured: true, image: placeholder, specs: { Tipo: "Anillada", Categoría: "Papelería" } },
  { id: "taza", slug: "taza-diseno", name: "Taza con diseño", sku: "SH-BAZ-001", brand: "Shendo Osi", category: "Bazar", price: 14500, transferPrice: 13050, stock: 9, badge: "Favorito", featured: true, image: placeholder, specs: { Material: "Cerámica", Categoría: "Bazar" } },
  { id: "aros", slug: "aros-dorados", name: "Aros dorados", sku: "SH-BIJ-001", brand: "Shendo Osi", category: "Bijouterie", price: 9200, transferPrice: 8280, stock: 15, featured: true, image: placeholder, specs: { Color: "Dorado", Categoría: "Bijouterie" } },
  { id: "neceser", slug: "neceser-estampado", name: "Neceser estampado", sku: "SH-ACC-001", brand: "Shendo Osi", category: "Accesorios", price: 12800, transferPrice: 11520, stock: 7, badge: "Elegido", featured: true, image: placeholder, specs: { Cierre: "Metálico", Categoría: "Accesorios" } },
];
export function getProductBySlug(slug: string) { return products.find((product) => product.slug === slug); }
