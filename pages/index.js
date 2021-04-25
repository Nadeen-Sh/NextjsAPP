import styles from '../styles/Home.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getServerSideProps} from '../store/actions/postAction'
import Link from "next/link";

export default function Home() {
const dispatch= useDispatch();
const {posts} = useSelector(state => state.post)

useEffect(()=>{
  dispatch( getServerSideProps());
},[])


  return (
    <div className={styles.container}>
     
<h1>posts</h1>

<div className="row" >
{posts && posts.map(item=>(
<div  className="col-12 col-md-4" key={item.id}>
  <div className="card mb-4">
  <img

src={`https://source.unsplash.com/720x400/?technology/?${item.id}`}
   className="card-img-top"
   alt="dd"
   />
  <div className="card-body">
  <h5 className="card-title">
{item.title} </h5>
<Link href={`/${item.id}`}>
<a><p className="p-3 mb-2 bg-info text-white">CLICK</p></a>
</Link>
</div>
</div>
</div>
))}
</div>

     
    </div>
  )
}

