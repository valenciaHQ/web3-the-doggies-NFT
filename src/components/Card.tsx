import React from "react"

const Card = ({ data }: TokenData) => {

    const navigateToOwner = `https://etherscan.io/token/${process.env.REACT_APP_CONTRACT_ADRESS}?a=${data.owner}`
    return <div className="flex flex-col md:flex-row justify-around items-center bg-slate-800 lg:rounded-lg">
        <img className="md:h-[28rem] lg:h-[40rem]" src={data.image_url} alt={`${data.name}`} />
        <div className="flex flex-col items-center pl-2 lg:px-8 text-white">
            <h1 className="text-lg my-4 md:text-4xl md:my-8 italic">{data.name}</h1>
            <a className="flex flex-col text-sm lg:text-lg text-center text-slate-300 hover:opacity-70 hover:underline break-all" href={navigateToOwner} target="_blank" rel="noreferrer">Owned by <span>{data.owner}</span></a>
            <p className="text-sm text-center w-full mt-10">{data.description}</p>
            <div className="flex flex-col rounded-lg bg-teal-800 my-4 py-4">
                <h3 className="text-center">Attributes</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm justify-center my-2 p-2">{data.attributes.map(attr => <span className="underline">{attr.trait_type}</span>)}</div>
            </div>
            <a className="opacity-50 my-4 hover:opacity-70 hover:underline" href={data.external_url} target="_blank" rel="noreferrer">Click for more</a>
        </div>
    </div>
}

export default React.memo(Card)

