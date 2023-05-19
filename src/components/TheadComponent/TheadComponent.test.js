import React from 'react';
import { render, screen } from '@testing-library/react';
import TheadComponent from './TheadComponent';
import Table from 'react-bootstrap/Table';

describe('TheadComponent', () => {
    it('renders headers correctly', () => {
        const headers = ['Filename', 'Text', 'Number', 'Hex'];
        render(<Table><TheadComponent headers={headers} /></Table>);
        headers.forEach(header => {
            expect(screen.getByText(header)).toBeInTheDocument();
        });
    });
});