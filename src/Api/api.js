import axios from 'axios';

const BaseUrl = "https://api.themoviedb.org/3";

const token = process.env.REACT_APP_API_TOKEN;
const headers = {
    Authorization: "bearer " + token,
}

export const FetchData = async (url, param) => {
    try {
        const { data } = await axios.get(`${BaseUrl}/${url}`, {
            headers,
            param
        });
        return data
    } catch (error) {
        console.log(error)
    }
}