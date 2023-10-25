import "./globals.css";
import type { Metadata } from "next";
import AuthProvider from "../context/index"

export const metadata: Metadata = {
  title: "AppDoptame",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="es">
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
