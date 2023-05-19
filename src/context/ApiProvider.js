import React, { createContext, useContext } from 'react';
import { getFilesService } from '../services/files'

export const ApiContext = createContext({
});



const ApiContextProvider = ({ children }) => {

    const getFiles = async () => {
        try {
            const data = await getFilesService()
            return data
        } catch (error) {
            throw error;
        }
    }

    return (
        <ApiContext.Provider
            value={{
                getFiles,

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
