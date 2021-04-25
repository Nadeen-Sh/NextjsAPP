import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getServerSideProps} from '../store/actions/postAction'

import { useRouter } from 'next/router'

const User = () => {
    const dispatch= useDispatch();
const {posts} = useSelector(state => state.post)

useEffect(()=>{
  dispatch( getServerSideProps());
},[])

  const router = useRouter()
  const { id } = router.query
 
  return (
      <>
    
    {posts && posts.map(item =>
          item.id === parseInt(id) ? (

      <div className="container py-5" key={item.id}>
      <h2>{item.title}</h2>
    <hr />
     <p>{item.body}</p>
     </div>
          ):
        null
          )}
          </>
 
    )


}

export default User

