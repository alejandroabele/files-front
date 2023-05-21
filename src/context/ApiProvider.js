import React, { createContext, useContext, useEffect, useState } from 'react';
export const ApiContext = createContext({
});

const ApiContextProvider = ({ children }) => {
    const [headers, setHeaders] = useState([])

    useEffect(() => {
        setHeaders(['Filename', 'Text', 'Number', 'Hex'])
    }, [])


    return (
        <ApiContext.Provider
            value={{
                headers
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};

export default ApiContextProvider;

export function useApiContext() {
    const context = useContext(ApiContext);

    return context;
}
