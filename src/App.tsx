import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { Web3Provider } from '@ethersproject/providers'

import ConnectMetamask from "./components/ConnectMetamask";
import Filter from "./components/Filter";
import Hero from "./components/Hero";
import ReadERC721 from "./components/ReadERC721";

function App() {
  const [currentSearchId, setCurrentSearchId] = useState<number | null>(null)
  const { active } = useWeb3React<Web3Provider>()
  const addressContract = process.env.REACT_APP_CONTRACT_ADRESS

  let content = addressContract && active &&
    <>
      <Filter setFilter={(value) => setCurrentSearchId(value)} />
      <ReadERC721 addressContract={addressContract} currentTokenId={currentSearchId} />
    </>

  if (!addressContract) {
    content = <p className="error">Contract address is not avaiable.</p>
  }

  return (
    <div className="text-lg bg-slate-700 h-screen">
      <Hero />
      <ConnectMetamask />
      {
        content
      }
    </div>
  );
}

export default App;
