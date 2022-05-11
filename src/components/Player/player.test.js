import Player from "./Player";
import { render, screen} from '@testing-library/react';

test('player is not empty', () => {
    render(<Player players='Novak'/>);
    const playerElement = screen.getByText('Novak');
    expect(playerElement).toBeInTheDocument()
})

