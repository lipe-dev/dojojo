 import {fireEvent, getByText, queryByText, render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () =>{
    render(<App/>)
  })

  it('appears on screen', () =>{
    render(<App/>)

    screen.getByLabelText('Enter a game name')

    screen.getByText('Rocket League: Collector\'s Edition - January 16')
  })

  it('if a key is pressed, start searching in the list', () => {
    render(<App/>)

    const keyPress = screen.getByLabelText('Enter a game name')
    fireEvent.change(keyPress, { target: { value: "Rocket"}})

    screen.getByText('Rocket League: Collector\'s Edition - January 16')
    screen.getByText('Rocket Fist (Bitten Toast Studios) - August 10')
    screen.getByText('Rocket League (Psyonix Games) - November 14')

    screen.getByText('OPUS: Rocket of Whispers (Flyhigh Works) - March 22')
    screen.getByText('Super Rocket Shootout (Plug In Digital) - April 5')

    expect(screen.queryByText('Lost Sphear (Square Enix) - January 23')).toBeFalsy()
  })

  it('should be case insenstive', () => {
    render(<App />)

    const input = screen.getByLabelText('Enter a game name')
    fireEvent.change(input, { target: { value: "rocket"}})

    screen.getByText('Rocket League: Collector\'s Edition - January 16')
    screen.getByText('Rocket Fist (Bitten Toast Studios) - August 10')
    screen.getByText('Rocket League (Psyonix Games) - November 14')

    screen.getByText('OPUS: Rocket of Whispers (Flyhigh Works) - March 22')
    screen.getByText('Super Rocket Shootout (Plug In Digital) - April 5')

    expect(screen.queryByText('Lost Sphear (Square Enix) - January 23')).toBeFalsy()
  });

  it('allows fuzzy searching', () => {
    render(<App />)

    const input = screen.getByLabelText('Enter a game name')
    fireEvent.change(input, { target: { value: "rocket"}})

    screen.getByText('Rocket League: Collector\'s Edition - January 16')
    screen.getByText('Rocket Fist (Bitten Toast Studios) - August 10')
    screen.getByText('Rocket League (Psyonix Games) - November 14')

    screen.getByText('OPUS: Rocket of Whispers (Flyhigh Works) - March 22')
    screen.getByText('Super Rocket Shootout (Plug In Digital) - April 5')
  })
})