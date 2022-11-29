import React from "react"

const Card = ({ data }: TokenData) => {
    return <div className="flex flex-col md:flex-row justify-around items-center bg-slate-800 md:rounded-lg">
        <img className="md:h-[28rem] lg:h-[40rem]" src={data.image_url} alt={`${data.name}`} />
        <div className="flex flex-col items-center px-8 text-white">
            <h1 className="text-lg my-4 md:text-3xl md:my-8">{data.name}</h1>
            <p className="text-sm text-center text-grey w-full line-clamp-3">{data.description}</p>
            <a className="opacity-50 my-4 hover:opacity-70 hover:underline" href={data.external_url} target="_blank" rel="noreferrer">Click for more</a>
        </div>
    </div>
}

export default React.memo(Card)