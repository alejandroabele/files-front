import { get } from "../utils/fetch";
import { filesPath, filesPathByName } from "../constants/backendUrl";
const getFilesService = async () => {
  let response = [];
  try {
    const res = await get(filesPath());
    if (res && res.payload) {
      response = res.payload
    }
  } catch (error) {
    throw error

  }
  return response;
};
const getFilesByNameService = async (name) => {
  let response = [];
  try {
    const res = await get(filesPathByName(name));
    if (res && res.payload) {
      response = res.payload
    }
  } catch (error) {
    throw error
  }
  return response;
};




export {
  getFilesService,
  getFilesByNameService
};
