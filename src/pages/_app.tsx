import { useRouter } from "next/router";
import MainLayout from "@/components/Layouts/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Check if the current route is '/signup' or '/login'
  const isAuthPage = router.pathname === "/signup" || router.pathname === "/login";

  return (
    <>
      {isAuthPage ? (
        <Component {...pageProps} />
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </>
  );
}
