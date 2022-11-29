import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Contract } from "@ethersproject/contracts";
import { abi } from "../abi"
import Card from './Card';
import Loading from './Loading';

interface Props {
  addressContract: string
  currentTokenId: number | null
}

export default function ReadERC20(props: Props) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState<ErrorType>()

  const addressContract = props.addressContract
  const { library } = useWeb3React<Web3Provider>()

  useEffect(() => {
    const init = async () => {
      setLoading(true)
      try {
        const erc721: Contract = new Contract(addressContract, abi, library);
        const tokenUrl = await erc721.tokenURI(props.currentTokenId);
        const owner = await erc721.ownerOf(props.currentTokenId);
        if (!tokenUrl) throw Error("Url token not found")
        const tokenInfo = await fetch(tokenUrl).then(res => res.json())
        setData({ ...tokenInfo, owner })
        setError(undefined)
      } catch (error) {
        console.log("ERROR: ", error)
        if (error instanceof Error) {
          console.log(error.message)
          if (error.message.includes("ERC721Metadata: URI query for nonexistent token")) {
            setError({ message: "Sorry! Token not found, try again" })
            return;
          }
          setError(error)
        }
      } finally {
        setLoading(false)
      }
    }
    if (props.currentTokenId) {
      init()
    }
  }, [addressContract, library, props.currentTokenId])

  if (loading) {
    return <div className='mt-8'><Loading /></div>
  }

  if (error) {
    return <p className='error'>{error.message || "Something bad happened here! Contact support."}</p>
  }

  return (
    <div>
      {data && <Card data={data} />}
    </div>
  )
}