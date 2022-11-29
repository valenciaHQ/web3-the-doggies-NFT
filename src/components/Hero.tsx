import React from "react"

const Hero = () => <main className="container mx-auto text-center py-10 lg:px-40 flex flex-col justify-center items-center">
    <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-500">The Sandbox.</h1>
    <p className="mt-10 text-2xl lg:text-4xl text-center text-white" >- Doggies NFT -</p>
</main>

export default React.memo(Hero)