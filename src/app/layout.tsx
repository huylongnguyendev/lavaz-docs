import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter, Outfit } from "next/font/google";
import { cn } from "@/lib/cn";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lavaz | Infrastructure-first State Management",
    template: "%s | Lavaz",
  },
  description:
    "A lightweight, type-safe state management library for React with built-in persistence and automatic ID conflict detection. Build scalable apps with zero boilerplate.",
  openGraph: {
    title: "Lavaz Store",
    description: "The Infrastructure-first state management library for React.",
    url: "https://lavaz-docs.vercel.app/",
    siteName: "Lavaz",
    images: [
      {
        url: "/og-image.png",
        width: 885,
        height: 630,
        alt: "Lavaz Store - State Management Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavaz Store",
    description: "Infrastructure-first state management with zero overhead.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className={cn("flex flex-col min-h-screen", outfit.className)}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
