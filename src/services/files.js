import { get } from "../utils/fetch";
import { filesPath } from "../constants/backendUrl";
const getFilesService = async () => {
  let response = [];
  try {
    const res = await get(filesPath());
    response = res?.payload;
  } catch (error) {}
  return response;
};



export {
  getFilesService,
};
