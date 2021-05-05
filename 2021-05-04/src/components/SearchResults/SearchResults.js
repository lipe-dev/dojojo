const SearchResults = ({ results }) => {

    return (
        <ul type="none">
            {results.map((result) => <li key={result}>{result}</li>)}
        </ul>
    )
}

export default SearchResults