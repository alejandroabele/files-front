import React from 'react'
import { useApiContext } from '../../context/ApiProvider'
const TheadComponent = () => {
    const { headers } = useApiContext()
    return (
        <thead>

            <tr>
                {headers.map(header => (
                    <th key={header}>{header}</th>
                ))}
            </tr>
        </thead>)
}

export default TheadComponent