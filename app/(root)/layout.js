import { Inter } from "next/font/google";
import "../globals.scss";

import { Header, RightSideBar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pycodecamp Blog",
  description:
    "All news updates about Pycodecamp , tech, Koforidua Technical University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-2 lg:px-10 mb-8">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
