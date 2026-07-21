import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise (Clone) — Upskill Your Workforce at Scale",
  description:
    "A partial, original recreation of the Accredian Enterprise landing experience, built with Next.js and Tailwind CSS as part of a Full Stack Developer Intern assignment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
