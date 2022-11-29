import { InjectedConnector } from "@web3-react/injected-connector";

// We only need Ethereum Mainnet (id 1)
export const injected = new InjectedConnector({
    supportedChainIds: [
        1,
    ]
})