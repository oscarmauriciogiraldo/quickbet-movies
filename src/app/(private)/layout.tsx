import Header from "@/components/header/Header";
import { IBM_Plex_Sans } from "next/font/google";

const ibm = IBM_Plex_Sans({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700"] });


export default function MovieDetailLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={ibm.className}>
        <Header />

            {children}
        </body>
    </html>
  );
}