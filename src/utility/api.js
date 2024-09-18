import axios from "axios"


export const getAllArticles = () => {
    const url = "https://nc-news-px9w.onrender.com/api/articles"
    return axios.get(url).then(({ data }) => {
        return data
    })
}

export const getSingleArticle = (article_id) => {
    const url = `https://nc-news-px9w.onrender.com/api/articles/${article_id}`;
    
    return axios.get(url)
      .then(({data}) => {
        return data.article;
      })
  }
 
  export const getSingleArticleComments = (article_id) => {
    const url = `https://nc-news-px9w.onrender.com/api/articles/${article_id}/comments`;
    return axios.get(url)
      .then(({data}) => {
        return data.comments;
      })
  }

  export const incrementArticleVote = (article_id, amount) => {
    const url = `https://nc-news-px9w.onrender.com/api/articles/${article_id}`;
    return axios.patch(url, {
      inc_votes: amount 
    }).then(({data})=>{
      console.log(data)
    })
  }