import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";

import results from './results'
import {useState} from "react";

const App = () => {

    const [filteredList, setFilteredList] = useState(results)

    const doFilter = (event) => {
        const filter = event.target.value

        const filtrado = results.filter((curElement) => {
            return curElement.toLowerCase().includes(filter.toLowerCase())
        })

        setFilteredList(filtrado)
    }

    return (
        <div className="App">
            <header className="App-header">
                <SearchBar textChangedCallback={doFilter} />
                <SearchResults results={filteredList} />
            </header>
        </div>
    );
}

export default App;
