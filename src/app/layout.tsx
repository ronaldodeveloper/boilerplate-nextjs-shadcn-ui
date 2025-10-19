import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./../styles/globals.css";


const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "MilhasPix | Compra e Venda de milhas com PIX garantido!",
  description: "MilhasPix | Compra e Venda de milhas com PIX garantido!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={dmSans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
