import { renderHook } from '@testing-library/react';
import App from './App';

it('test', () => {
    const { result } = renderHook(() => App());
    expect(result.current.players).not.toEqual('')
})

