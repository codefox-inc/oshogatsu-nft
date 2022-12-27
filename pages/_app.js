import "./style.css";

import React from "react";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { polygon } from "wagmi/chains";
import { goerli } from "../constant/network";

const { chains, provider } = configureChains(
  [goerli, polygon],
  [
    alchemyProvider({ apiKey: "y8qlo3CaD9LfXJLHd0Jy7c3GfZXAssY7" }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "NewYear NFT",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function MyApp({ Component: Component, pageProps: pageProps }) {
  React.useEffect(() => import("@lottiefiles/lottie-player"));
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />;
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
