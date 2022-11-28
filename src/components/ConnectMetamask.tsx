import { useEffect } from 'react'

import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { UserRejectedRequestError } from '@web3-react/injected-connector'
import { injected } from '../utils/connectors'
import { formatAddress } from '../utils/helpers'

const ConnectMetamask = () => {

    const { chainId, account, activate, deactivate, setError, active, library, connector } = useWeb3React<Web3Provider>()

    const onClickConnect = () => {
        activate(injected, (error) => {
            if (error instanceof UserRejectedRequestError) {
                // ignore user rejected error
                console.log("user refused")
            } else {
                setError(error)
            }
        }, false)
    }

    const onClickDisconnect = () => {
        deactivate()
    }

    return (
        <div>
            {active && typeof account === 'string' ? (
                <div>
                    <button type="button" onClick={onClickDisconnect}>
                        Account: {formatAddress(account, 4)}
                    </button>
                    <p>ChainID: {chainId} connected</p>
                </div>
            ) : (
                <div>
                    <button type="button" onClick={onClickConnect}>
                        Connect MetaMask
                    </button>
                    <p> not connected </p>
                </div>

            )}
        </div>
    )
}

export default ConnectMetamask