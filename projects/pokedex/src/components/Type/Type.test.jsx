import { render, screen } from "@testing-library/react"
import Type from './'

describe('Type component', function () {
    it('should show the type name', function () {
        render(<Type type="Water" />)

        screen.getByText('Water')
    });
});
