import Header from "@/components/layout/Header";
import { MSWProvider } from "@/providers/MswProvider";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { QueryProviders } from "../providers/QueryClientProvider";
import { AuthProvider } from "../providers/AuthProvider";
import { initMocks } from "@/mocks";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
initMocks();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <QueryProviders>
          <ReactQueryDevtools initialIsOpen={false} />
          <MSWProvider>
            <AuthProvider>
              <Header />
              {children}
              <Footer />
            </AuthProvider>
          </MSWProvider>
        </QueryProviders>
      </body>
    </html>
  );
}
