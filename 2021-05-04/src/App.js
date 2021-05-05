import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";

import results from './results'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <SearchBar/>
                <SearchResults results={results} />
            </header>
        </div>
    );
}

export default App;
