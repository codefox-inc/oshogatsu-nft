import React from "react";
import { useAccount, useContractRead } from "wagmi";
import { testNFTabi } from "../constant/testNFTabi";
import { contractAddressMap } from "../constant/contractAddressMap";
import { mint } from "../utils/axios";

export function GasFreeMintButton(props) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const [alreadyMinted, setAlreadyMinted] = React.useState(false);
  const [tokenId, setTokenId] = React.useState(0);
  const [start, setStart] = React.useState(false);
  const [isMintLoading, setIsMintLoading] = React.useState(false);
  const [mintError, setMintError] = React.useState(false);
  const { address, isConnected } = useAccount();

  const { data: mintedData } = useContractRead({
    address: contractAddressMap[props.name],
    abi: testNFTabi,
    functionName: "minted",
    args: [address],
    watch: true,
  });

  React.useEffect(() => {
    setAlreadyMinted(false);
    setIsMintLoading(false);
    setMintError(false);
  }, [address]);

  React.useEffect(() => {
    if (mintError) {
      setIsMintLoading(false);
    }
  }, [mintError]);

  React.useEffect(() => {
    if (mintedData && Number(mintedData) !== 0) {
      setTokenId(Number(mintedData));
      setAlreadyMinted(true);
      setIsMintLoading(false);
    }
  }, [mintedData]);

  React.useEffect(() => {
    if (start) {
      mintStart(address);
    }
    setStart(false);
  }, [start]);

  const mintStart = async () => {
    try {
      await mint(contractAddressMap[props.name], address);
    } catch (error) {
      console.error(error);
      setMintError(true);
    }
  };

  const onClickMint = () => {
    setMintError(false);
    setIsMintLoading(true);
    setStart(true);
  };

  const onClickMinted = () => {
    if (contractAddressMap[props.name]) {
      window.open(
        `https://testnets.opensea.io/ja/assets/goerli/${
          contractAddressMap[props.name]
        }/${tokenId}`
      );
    }
  };

  return (
    <>
      {mintError && <p style={{ color: "#FF6257" }}>発行に失敗しました。</p>}

      {mounted && isConnected && alreadyMinted && (
        <button
          type="button"
          disabled={!mint || isMintLoading}
          className="button-minted button-md"
          onClick={() => onClickMinted()}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "10px" }}>発行済</div>
          </div>
        </button>
      )}

      {mounted && isConnected && !alreadyMinted && (
        <button
          type="button"
          disabled={!mint || isMintLoading}
          className="button-mint button-md"
          onClick={() => onClickMint()}
        >
          {isMintLoading && "発行中..."}
          {!isMintLoading && "発行する"}
        </button>
      )}
    </>
  );
}
