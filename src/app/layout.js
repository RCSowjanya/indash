import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/Components/Sidebar";
import DashboardHeader from "@/Components/DashboardHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dash Boards",
  description: "Installers DashBoards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <DashboardHeader />
        {children}
      </body>
    </html>
  );
}
