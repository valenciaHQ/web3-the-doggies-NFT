type TokenData = {
    data: {
        image_url: string,
        name: string,
        description: string,
        external_url: string,
        owner: string,
        attributes: {
            trait_type
        }[]
    }
}

type FilterProps = {
    setFilter: (value: number) => void
}

type ErrorType = {
    message: string
}