'use client';

import "@/src/styles/index.css";
import { Footer, Header } from "@/src/components";
import { Provider } from "react-redux";
import store from "@/src/redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
