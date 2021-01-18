import React from 'react';
import '@testing-library/jest-dom';
import {screen, render} from '@testing-library/react';
import Comment from './Comment';

describe('<Comment /> tests', () => {
    it('should render Comment properly', () => {
        render(<Comment comment="My testing comment"/>);
        expect(screen.queryByText(/testing comment/i)).toBeInTheDocument();
    });
}); 