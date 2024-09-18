import { useState } from "react";
import { addCommentToArticle } from "../utility/api";

const PostComment = ({article_id}) =>{
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
            setIsSubmitting(true)
              addCommentToArticle(article_id, comment, currUser).then((data)=>{
                setIsSubmitting(false)
                setComment('')
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
            <button className="Submit" type="submit">
              Submit Comment
            </button>
          </div>
        </form>
      </>)

}

export default PostComment