const SearchBar = ({ textChangedCallback }) => {
    return <>
        <label htmlFor="search-input">Enter a game name</label>
        <input type="text" placeholder="Eg.: Super Mario Bros" id="search-input" onChange={textChangedCallback} />
    </>
}

export default SearchBar