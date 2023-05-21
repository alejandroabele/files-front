import React from 'react';
import { render, screen } from '@testing-library/react';
import TheadComponent from './TheadComponent';
import Table from 'react-bootstrap/Table';
import ApiProvider from '../../context/ApiProvider'
describe('TheadComponent', () => {
    it('renders headers correctly', () => {
        const headers = ['Filename', 'Text', 'Number', 'Hex'];
        render(<ApiProvider><Table><TheadComponent  /></Table></ApiProvider>);
        headers.forEach(header => {
            expect(screen.getByText(header)).toBeInTheDocument();
        });
    });
});