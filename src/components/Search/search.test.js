import { render, screen } from '@testing-library/react'
import Search from './Search'


it('input should be empty', () => {
    render(<Search setSearchPlayer="hello"/>);
    const searchElement = screen.getByRole('textbox');
    expect(searchElement.value).toBe('');
});
