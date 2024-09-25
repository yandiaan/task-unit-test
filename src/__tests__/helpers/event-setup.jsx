import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const setup = (jsx) => {
    return {
        user: userEvent.setup(),
        ...render(jsx)
    }
}