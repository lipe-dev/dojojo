import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import SearchBar from './SearchBar'

describe('SearchBar Component', () => {
    it('renders without crashing', () => {
        render(<SearchBar/>)
    });

    it('renders a text input', () => {
        render(<SearchBar/>)

        screen.getByPlaceholderText('Eg.: Super Mario Bros')
    });

    it('renders with an appropriate label', () => {
        render(<SearchBar/>)

        screen.getByLabelText('Enter a game name')
    });

    it('users can type', async () => {
        render(<SearchBar/>)

        let digi = screen.getByLabelText('Enter a game name')

        fireEvent.change(digi, { target: { value: "A" }})

        expect(digi.value).toBe("A")
    })
});