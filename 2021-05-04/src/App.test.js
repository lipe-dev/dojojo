 import { render, screen } from '@testing-library/react';
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
})