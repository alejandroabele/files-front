import React from 'react'
import Table from 'react-bootstrap/Table';
import TheadComponent from '../TheadComponent';
import TbodyComponent from '../TbodyComponent';
const headers = ['Filename', 'Text', 'Number', 'Hex'];

const MainComponent = ({ fileData }) => {
    return (
        <div>
            
            <Table striped bordered hover>
                <TheadComponent headers={headers} />
                <TbodyComponent fileData={fileData} />
            </Table>
        </div>)
}

export default MainComponent