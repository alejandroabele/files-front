import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import FormControl from 'react-bootstrap/FormControl';
import useFiles from '../../hooks/useFiles'
import TheadComponent from '../TheadComponent';
import TbodyComponent from '../TbodyComponent';
import { useDispatch } from 'react-redux';
import { setFiles } from '../../redux/actions';



const MainComponent = () => {
    const [filterValue, setFilterValue] = useState('');
    const { findFilesByName } = useFiles()
    const [debouncedFilterValue, setDebouncedFilterValue] = useState('');

    
    const { getFiles } = useFiles()
    const dispatch = useDispatch();

    useEffect(() => {
        if (debouncedFilterValue) {
            findFilesByName(debouncedFilterValue).then(data => {
                dispatch(setFiles(data))
            }).catch(e => {
                dispatch(setFiles(e))
            })
        } else {
            getFiles().then(data => {
                dispatch(setFiles(data))
            }).catch(e => {
                dispatch(setFiles(e))
            })
        }

    }, [debouncedFilterValue]);



    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedFilterValue(filterValue);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [filterValue]);

    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
    };

    return (
        <div>
            <FormControl
                type="text"
                value={filterValue}
                onChange={handleFilterChange}
                placeholder="Filtrar por nombre"
            />
            <Table striped bordered hover>
                <TheadComponent />
                <TbodyComponent />
            </Table>
        </div>)
}

export default MainComponent