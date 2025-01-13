import { useRouter } from "next/router";
import MainLayout from "@/components/Layouts/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Create a QueryClient instance with staleTime set to 30 minutes
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1800000, // 30 minutes in milliseconds
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Check if the current route is '/signup' or '/login'
  const isAuthPage = router.pathname === "/" || router.pathname === "/login";

  return (
    <QueryClientProvider client={queryClient}>
      {isAuthPage ? (
        <>
          <Component {...pageProps} />
          <Toaster />
          <ToastContainer/>
        </>
      ) : (
        <MainLayout>
          <Component {...pageProps} />
          <Toaster />
        </MainLayout>
      )}
    </QueryClientProvider>
  );
}
