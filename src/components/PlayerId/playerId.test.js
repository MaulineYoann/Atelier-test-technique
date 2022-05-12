/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react'


test('rank exist', () => {
    const { getByText } = render(<h4>rank</h4>);
    expect(getByText('rank')).toBeTruthy();
  });

