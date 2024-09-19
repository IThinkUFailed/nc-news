import axios from "axios"


export const getAllArticles = () => {
    const url = "https://nc-news-px9w.onrender.com/api/articles";
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
    })
  }

  export const addCommentToArticle = (article_id, comment, currUser) => {
    const url = `https://nc-news-px9w.onrender.com/api/articles/${article_id}/comments`;
    return axios.post(url, {
      username: currUser,
      body: comment
    }).then((data)=>{
    }).catch((err) => {
      console.error('Error posting comment:', err); 
    });
  }

  export const deleteComments = (comment_id) => {
    const url = `https://nc-news-px9w.onrender.com/api/comments/${comment_id}`;
    return axios.delete(url, {comment_id: comment_id}).then(({data})=>{
    }).catch((err)=>{
      console.error('Error deleting comment:', err)
    })
  }