/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockOnClose = jest.fn();

afterEach(cleanup);

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal 
            currentPhoto={currentPhoto}
            onClose={mockOnClose}
        />)
    });
    it('matches snapshot', () => {
        const { asFragment } = render(<Modal 
            currentPhoto={currentPhoto}
            onClose={mockOnClose}
        />)
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Click event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal 
            currentPhoto={currentPhoto}
            onClose={mockOnClose}
            />)
            fireEvent.click(getByText('Close this modal'));

            expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});