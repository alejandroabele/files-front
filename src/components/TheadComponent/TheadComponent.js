import React from 'react'

const TheadComponent = ({ headers }) => {
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