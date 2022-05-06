/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '../'

afterEach(cleanup);

describe('Contact component', () => {
    it('renders contact', () => {
        render(<Contact />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Contact Me', () => {
    it('matches Contact Me', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('contact')).toHaveTextContent('Contact me');        
    })
});

describe('submit button', () => {
    it('has text content: submit', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('submit')).toHaveTextContent('Submit');        
    })
})