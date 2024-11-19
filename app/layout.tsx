import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Doppi Lang",
  metadataBase: new URL("https://doppi-lang.uz"),
  description:
    "Bu vebsayt orqali , o'zbek tilida yoziluvchi dasturlash tillaridan biri doppi lang haqida tanishim olasz",
  icons: {
    icon: "/doppi-icon.png",
  },
  openGraph: {
    title: "Doppi Lang",
    description:
      "Bu vebsayt orqali , o'zbek tilida yoziluvchi dasturlash tillaridan biri doppi lang haqida tanishim olasz",
    url: "https://doppi-lang.uz",
    siteName: "Doppi Lang",
    images: [
      {
        url: "https://i.postimg.cc/4xjvcpgJ/doppi-brand.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // action to top and bottom position absolute button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-regular antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
