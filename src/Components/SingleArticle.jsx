import {getSingleArticle, incrementArticleVote} from "../utility/api"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GetArticleComments from "./GetArticleComments";
import UpvoteArticle from "./UpvoteArticle";
const SingleArticle = () => {
  const [votes, setVotes] = useState(0)
const [isLoading, setIsLoading] = useState(true)
const [article, setArticle] = useState(null)
const { article_id } = useParams()

useEffect(() => {
    if (article_id) {
      getSingleArticle(article_id).then((data) => {
        setArticle(data)
        setVotes(data.votes)
        setIsLoading(false)
      }).catch((err) => {
        console.error(err)
        setIsLoading(false)
      });
    }
  }, [article_id]);

      if (isLoading) return <p>Loading...</p>;
      
      return (
      <article>
        <section className="single-article-container">
          <div key={article.article_id} className="single-article-div">
            <h2>{article.title}</h2>
            <img src={article.article_img_url} alt={article.title} />
            <div>
          <UpvoteArticle article_id={article_id} />
          </div>
            <p>{article.body}</p>
          </div>
        </section>
        <section className="comment-container">
          <h2 className="comment-tile">User Comments</h2>
        <GetArticleComments />
        </section>
        </article>
      )
    }

export default SingleArticle