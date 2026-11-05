import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville } from "next/font/google";
import { Sound } from "@/components/Sound";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// The serif: Libre Baskerville, the face of the case studies Syed pointed at (Rachel Chen's), and sturdier than
// Newsreader at heading sizes (checked in a rendered specimen beside Geist, Inter and Instrument Sans).
const serif = Libre_Baskerville({ variable: "--font-baskerville", subsets: ["latin"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: { default: "Syed Ali · Design engineer", template: "%s · Syed Ali" },
  description: "Trace, Animation Engine, KIPRUN, Kodex, Uniqkey and Anime Sports League, written up.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geist.variable} ${geistMono.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        {/* Before first paint: lets the scroll reveals hide their content only when JS is there to show it, puts back
            the theme the reader chose (light unless they picked dark), so the page never flashes the other one, and on
            every full load of the home page holds its content back for the scaffold reveal (Preloader.tsx). */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('theme')==='dark')d.dataset.theme='dark';if(location.pathname==='/'&&!matchMedia('(prefers-reduced-motion: reduce)').matches)d.classList.add('boot')}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-svh overflow-x-clip">
        {children}
        <Sound />
      </body>
    </html>
  );
}
