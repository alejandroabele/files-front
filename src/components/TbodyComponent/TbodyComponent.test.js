import React from 'react';
import { render, screen } from '@testing-library/react';
import TbodyComponent from './TbodyComponent';

describe('TbodyComponent', () => {
    it('renders no lines available message when fileData is empty', () => {
        const fileData = [];
        render(<TbodyComponent fileData={fileData} />);

        const noLinesMessage = screen.getByText('No lines available');
        
        expect(noLinesMessage).toBeInTheDocument();
    });

    it('renders file data with lines', () => {
        const fileData = [
            {
                file: 'test1.csv',
                lines: []
            },
            {
                file: 'test2.csv',
                lines: [
                    { text: 'Line 1', number: 123, hex: 'abc' },
                    { text: 'Line 2', number: 456, hex: 'def' }
                ]
            }
        ];
        render(<TbodyComponent fileData={fileData} />);

        const noLinesMessage = screen.getByText('No lines available');
        expect(noLinesMessage).toBeInTheDocument();

        const files = screen.getAllByText('test2.csv');
        expect(files.length).toBe(2);


        const line1 = screen.getByText('Line 1');
        expect(line1).toBeInTheDocument();

        const number123 = screen.getByText('123');
        expect(number123).toBeInTheDocument();

        const hexABC = screen.getByText('abc');
        expect(hexABC).toBeInTheDocument();

        const line2 = screen.getByText('Line 2');
        expect(line2).toBeInTheDocument();

        const number456 = screen.getByText('456');
        expect(number456).toBeInTheDocument();

        const hexDEF = screen.getByText('def');
        expect(hexDEF).toBeInTheDocument();
    });
});