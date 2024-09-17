import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getSingleArticleComments } from "../utility/api";
const GetArticleComments = () => {
const [comments, setComments] = useState(null)
const [isLoading, setIsLoading] = useState(true)
const { article_id } = useParams()
useEffect(() => {
    if (article_id) {
        getSingleArticleComments(article_id).then((data) => {
        setComments(data)
        setIsLoading(false)
      }).catch((err) => {
        console.error(err)
        setIsLoading(false)
      });
    }
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  if (!comments) {
    return <p>No comments to display</p>
  }

    return (
        <section className="comment-container">
          {comments.map((comment) => (
            <div key={comment.comment_id} className="comment-div">
                <p className="comment-user">{comment.author}</p>
              <p className="comment-date">Posted on: {comment.created_at}</p>
              <p className="comment-body">{comment.body}</p>
              {comment.votes >=1 ? (
              <p className="positive-vote comment-votes">👍 {comment.votes}</p>)
               : ( <p className="negative-vote comment-votes">👎 {comment.votes}</p> )
               }
              </div>
            
        ))}
        </section>
  )
}
export default GetArticleComments