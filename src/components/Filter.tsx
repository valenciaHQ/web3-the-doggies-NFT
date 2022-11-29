const Filter = ({ setFilter }: FilterProps) => <div className="flex justify-center my-10">
    <form>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="flex bg-white rounded-lg">
            <div className="flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 text-sm placeholder:text-sm bg-white rounded-lg focus:outline-none" placeholder="Token ID" onChange={e => setFilter(Number(e.currentTarget.value))} />
        </div>
    </form>
</div>

export default Filter