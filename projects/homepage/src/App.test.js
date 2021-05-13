import { render } from '@testing-library/react'
import App from "./App";

describe('App', () => {
  it('Renders the homepage', () => {
    render(<App />)
  });
});
