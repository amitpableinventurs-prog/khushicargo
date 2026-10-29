import "./globals.css";

export const metadata = {
  title: "KhushiCargo | Packers and Movers",
  description:
    "KhushiCargo makes home, office and vehicle moves easier with careful packing, dependable transport and storage services in Indore and across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Browser extensions (e.g. ColorZilla's cz-shortcut-listen) add attributes to <body> before hydration. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
