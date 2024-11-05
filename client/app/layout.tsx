import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Map",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%"}}>
      <body style={{ height: "100%"}}>
        {children}
      </body>
    </html>
  );
}
