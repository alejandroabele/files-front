import React from 'react';
import { render, screen } from '@testing-library/react';
import MainComponent from './MainComponent';

describe('MainComponent', () => {
    const fileData = [
        {
          file: 'test1.csv',
          lines: [],
        },
        {
          file: 'test2.csv',
          lines: [
            { text: 'Line 1', number: 123, hex: 'abc' },
            { text: 'Line 2', number: 456, hex: 'def' },
          ],
        },
      ];
    
    it('renders the table with headers', () => {
        render(<MainComponent fileData={fileData} />);

        const filenameHeader = screen.getByText('Filename');
        const textHeader = screen.getByText('Text');
        const numberHeader = screen.getByText('Number');
        const hexHeader = screen.getByText('Hex');

        expect(filenameHeader).toBeInTheDocument();
        expect(textHeader).toBeInTheDocument();
        expect(numberHeader).toBeInTheDocument();
        expect(hexHeader).toBeInTheDocument();
    });

    it('renders the table body with file data', () => {
        render(<MainComponent fileData={fileData} />);
    
        const file1 = screen.getByText('test1.csv');
        const file2Elements = screen.getAllByText('test2.csv');
        const line1 = screen.getByText('Line 1');
        const line2 = screen.getByText('Line 2');
    
        expect(file1).toBeInTheDocument();
        expect(file2Elements.length).toBe(2); // Verifica que haya dos elementos con el texto 'test2.csv'
        expect(line1).toBeInTheDocument();
        expect(line2).toBeInTheDocument();
      });

    it('renders no lines available message for empty file', () => {
        render(<MainComponent fileData={fileData} />);

        const noLinesMessage = screen.getByText('No lines available');

        expect(noLinesMessage).toBeInTheDocument();
    });
});