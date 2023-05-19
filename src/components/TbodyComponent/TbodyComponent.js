import React from 'react'

const TbodyComponent = ({ fileData }) => {
    return (
        <tbody>

            {fileData.length === 0 ? <React.Fragment>

                <tr>
                    <td colSpan="4" >No files available</td>
                </tr>
            </React.Fragment> :
                fileData.map(file => (
                    <React.Fragment key={file.file}>
                        {file.lines.length === 0 ? (
                            <tr>
                                <td>{file.file}</td>
                                <td colSpan="3">No lines available</td>
                            </tr>
                        ) : (
                            file.lines.map((line, index) => (
                                <tr key={`${file.file}-${index}`}>
                                    <td>{file.file}</td>
                                    <td>{line.text}</td>
                                    <td>{line.number || '-'}</td>
                                    <td>{line.hex || '-'}</td>
                                </tr>
                            ))
                        )}
                    </React.Fragment>
                ))}
        </tbody>)
}

export default TbodyComponent