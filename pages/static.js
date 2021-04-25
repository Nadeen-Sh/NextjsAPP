import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getStaticProps} from '../store/actions/staticActions'
import Link from "next/link";

export default function Static() {
const dispatch= useDispatch();
const {statics} = useSelector(state => state.static)

useEffect(()=>{
  dispatch( getStaticProps());
},[])


  return (
    <div className={styles.container}>
     
<h1>statics</h1>

<div className="row" >
{statics && statics.map(item=>(
<div  className="col-12 col-md-4" key={item.id}>
  <div className="card mb-4">
  <img

src={`https://source.unsplash.com/720x400/?${item.id}`}
   className="card-img-top"
   alt="dd"
   />
  <div className="card-body">
  <h5 className="card-title">
{item.title} </h5>
<Link href={`/${item.id}`}>
<a><p  className="p-3 mb-2 bg-secondary text-white">GO</p></a>
</Link>
</div>
</div>
</div>
))}
</div>

     
    </div>
  )
}