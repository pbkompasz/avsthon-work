import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  hardhat,
} from "wagmi/chains";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./components/App.tsx";
import Contract from "./components/contracts/Contract.tsx";
import Settings from "./components/Settings.tsx";
import Layout from "./components/Layout.tsx";
import Marketplace from "./components/Marketplace.tsx";
import "../node_modules/@rainbow-me/rainbowkit/dist/index.css";
import "./index.css";

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "avs",
  projectId: "1243f16501b3ffe219ec79390bb4c171",
  chains: [mainnet, polygon, optimism, arbitrum, base, hardhat],
  ssr: false,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "marketplace",
    element: <Marketplace />,
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
        <RainbowKitProvider modalSize="compact">
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);
