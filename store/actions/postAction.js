import * as types from '../types'
 

    export const getServerSideProps=() => async dispatch => {
      try{
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=50"
        );
        const data = await res.json();
      
   dispatch({

        type:types.GET_POSTS,
        payload: data
    })
  
}
catch(e){
    console.log(e);
}
}