import React, {useContext, useEffect, useState, useRef}from 'react'
import { Global } from '../../../GlobalContext/useContext'; 
import { PhotoCommentsForm } from '../PhotoCommentsForm'; 
import {CommentContainer, CommentItem, Author} from './styles'; 
export const PhotoComments = (props) => {
  const [comments , setComments] = useState(() => props.comments); 
  const {login} = useContext(Global); 
  const commentSection = useRef(null) 

    useEffect(() => { 

      commentSection.current.scrollTop = commentSection.current.scrollHeight; 

    }, [comments])

  return (
    <>
      <CommentContainer ref={commentSection} single={props.single}> 
        {comments.map(comment => ( 
       
          <CommentItem key={comment.comment_ID}>
            
            <strong>{comment.comment_author}</strong>
             <Author>{comment.comment_content}</Author> 

          </CommentItem> 

        ))}
      </CommentContainer>
      {login && <PhotoCommentsForm single={props.single} id={props.id} setComments={setComments}/> }
    </>
  )
}
