import {getByText, render, screen} from "@testing-library/react";
import SearchResults from './SearchResults'

describe('SearchResults component', () => {
    it('renders without crashing', () => {
        render(<SearchResults results={[]}/>)
    });

    it('renders a list of results', () => {
        const fakeResults = [
            'Resultado A',
            'Resultado B'
        ]

        render(<SearchResults results={fakeResults} />)

        screen.getByText('Resultado A')
        screen.getByText('Resultado B')

    });

})