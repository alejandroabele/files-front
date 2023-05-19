import axios from "axios";
import { urlConfig } from "../config";
export const get = async (url) => {
    let res;
    try {
        await axios
            .get(urlConfig + url)
            .then((response) => {
                res = response.data;
            })

    } catch (error) { }
    return res;
};
