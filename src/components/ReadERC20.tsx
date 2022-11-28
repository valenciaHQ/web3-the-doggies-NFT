import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Contract } from "@ethersproject/contracts";
import { abi } from "../abi"

interface Props {
  addressContract: string
}

export default function ReadERC20(props: Props) {
  const addressContract = props.addressContract
  const { account, library } = useWeb3React<Web3Provider>()
  const [currentToken, setCurrentToken] = useState(null)
  console.log('account: ', account)

  useEffect(() => {
    (async () => {
      const erc20: Contract = new Contract(addressContract, abi, library);
      console.log('erc20: ', erc20)
      try {
        const tokenUrl = await erc20.tokenURI(2749);
        const tokenInfo = await fetch(tokenUrl).then(res => res.json())
        setCurrentToken(tokenInfo)
        console.log(tokenInfo)
      } catch (error) {
        console.error(error)
      }

    })()

  }, [addressContract, library])


  return (
    <div>
      <p >ERC20 Contract: {addressContract}</p>
      <p>Current token: {JSON.stringify(currentToken)}</p>
    </div>
  )
}