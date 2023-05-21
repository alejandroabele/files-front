import { getFilesService, getFilesByNameService } from '../services/files';
const useFiles = () => {
    const getFiles = async () => {
        try {
            const filesData = await getFilesService();
            return filesData
        } catch (error) {
            console.error('Error al cargar los archivos:', error);
        }
    };


    const findFilesByName = async (name) => {
        try {
            const foundFiles = await getFilesByNameService(name);
            return foundFiles
        } catch (error) {
            console.error('Error al buscar los archivos:', error);
        }
    };

    return { findFilesByName, getFiles };
};

export default useFiles;