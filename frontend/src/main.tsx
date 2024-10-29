import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Contract from "./components/Contract.tsx";
import Settings from "./components/Settings.tsx";
import Layout from "./components/Layout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";

import '../node_modules/@rainbow-me/rainbowkit/dist/index.css';

const config = getDefaultConfig({
  appName: "avs",
  projectId: "1243f16501b3ffe219ec79390bb4c171",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: false,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "contracts",
    element: <Contract />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact" >
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);
