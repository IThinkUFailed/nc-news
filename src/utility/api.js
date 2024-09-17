import axios from "axios"


export const getAllArticles = () => {
    const url = "https://nc-news-px9w.onrender.com/api/articles";
    return axios.get(url).then(({ data }) => {
        return data;
    })
}
