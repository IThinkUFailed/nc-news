import { useState } from "react";
import { addCommentToArticle, getSingleArticleComments } from "../utility/api";
const PostComment = ({article_id, setComments}) =>{
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [comment, setComment] = useState('');
    const currUser = "grumpy19"
    const handleSubmit = (e) => {
        e.preventDefault();
        if (setIsSubmitting === true) {
            e.preventDefault();
        }
        if (comment.length === 0) { 
            e.preventDefault();
        } else if (comment.length !== 0) {
          addCommentToArticle(article_id, comment, currUser)
          .then((newComment) => {
            // create the entire comment object so it works
            const fullComment = {
              ...newComment,
              article_id: Math.random(), // we handle this on api
              author: currUser, // current logged in user
              body: comment, // body of comment
              created_at: Date.now(),
              votes: 0,
            };
            setComments((prevComments) => [fullComment, ...prevComments]);
            setComment('');
            setIsSubmitting(false);
          })
              .catch((err)=>{
                console.err("we broke:", err)
              })
        }
    };
  
    return (
      <>
        <form onSubmit={handleSubmit} className="comment-container" >
          <label htmlFor="comment-box"></label>
          <p>Post Comment</p>
          {comment.length === 0 ? <p className="comment-error">Please enter a comment!</p> : null}
          <input value={comment}
            onChange={(e) => {
                setComment(e.target.value);
            }}
            label="post comment"
            ></input>
          <div>
            <button className="Submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Comment'}
            </button>
          </div>
        </form>
      </>)

}

export default PostComment