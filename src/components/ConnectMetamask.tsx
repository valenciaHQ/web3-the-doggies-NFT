import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { UserRejectedRequestError } from '@web3-react/injected-connector'
import { injected } from '../utils/connectors'
import { formatAddress } from '../utils/helpers'

const ConnectMetamask = () => {
    const { chainId, account, activate, deactivate, setError, active } = useWeb3React<Web3Provider>()

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

    const onClickDisconnect = () => deactivate()

    return (
        <div className='flex justify-center'>
            {active && typeof account === 'string' ? (
                <div className='flex flex-col items-center' >
                    <button className='button' type="button" onClick={onClickDisconnect}>
                        Account: {formatAddress(account, 4)}
                    </button>
                    <p className='text-white py-4' >ChainID: {chainId} connected</p>
                </div>
            ) : (
                <div className='flex flex-col items-center'>
                    <button type="button" className="button mt-10 " onClick={onClickConnect}>
                        Connect MetaMask
                    </button>
                    <p className='text-white py-4'> You are not connected, please connect your wallet. </p>
                </div>

            )}
        </div>
    )
}

export default React.memo(ConnectMetamask)