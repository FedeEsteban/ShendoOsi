# Configuración de Supabase

1. Abrir **SQL Editor** en el proyecto de Supabase.
2. Crear una consulta nueva y ejecutar `migrations/202609210001_catalog.sql`.
3. En **Project Settings → API**, copiar la URL y la clave pública `anon` a `.env.local`.
4. Ejecutar `migrations/202609210002_admin_auth.sql` para habilitar el acceso de
   `fedefernandez_7@hotmail.com` al panel administrativo.
5. Ejecutar `migrations/202609230001_featured_offers.sql` y
   `migrations/202609230002_sales_analytics.sql`.
6. Crear en **Authentication → Users** el usuario administrador con ese mismo correo.
7. Reiniciar el servidor de Next.js.

La migración crea el catálogo, las variantes, la galería y el bucket público
`product-images`. Por seguridad solo habilita lectura pública de productos publicados.
Las operaciones administrativas se habilitarán junto con Supabase Auth; no se usa la
clave `service_role` en el navegador.
