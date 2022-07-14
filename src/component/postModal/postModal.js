import { createPosts  } from "../../redux/asyncThunk/postThunk"
import { useDispatch, useSelector } from "react-redux"
import {toast} from "react-toastify"
import {emojipicker,gifupload,imageupload} from "../../assets/postImges"
import { useState } from "react"
const PostModal=()=>{
    const dispatch=useDispatch()
    const {token}=useSelector((state)=>state.auth)
    const [post,setPost]=useState({content:""})
    const createPostHandler=async (data)=>{
        try {
      const response =dispatch(createPosts({ postData: data,token }));
      if (response?.payload.data.status === 201) {
        toast.success("Post successfully added")
      } else {
        toast.error(`${response.payload.errors[0]}`
        );
      }}
      catch(error){
        console.error(error)
      }
    }
  const savePostHandler=()=>{
  if (post.content !== "") {
      createPostHandler(post);
    }
      toast.warn("Post can't be blank");
    }
  
    return <section className="flex-col post-modal padding-sm margin-sm">
        <textarea
        type="textbox"
        className="textarea-post"
         onChange={(e) =>
              setPost((prev) => ({ ...prev, content: e.target.value}))
            }
        placeholder="start writing post.."
        ></textarea>
        <div className="flex-row flex-space-between flex-wrap">
          <div className="flex-row gap">
            <input 
             type="file"
              accept="image/*,video/*"
            />
            <img src={imageupload} alt="upload-pic"className="cursor-pointer"/>
           <img src={gifupload}alt="gif-upload"className="cursor-pointer"/>
            <img src={emojipicker}alt="emoji-picker"className="cursor-pointer"/>
          </div>
          <div>
            <button className="cursor-pointer post-modal-btn post-btn"onClick={savePostHandler}>post</button>
          </div>
        </div>
    </section>
}

export {PostModal}