import React from 'react'
import Link from "next/link";


const navbar = () => {
    return (
        <div>
       
<nav class="navbar navbar-dark bg-dark">
<div >
<img src="/logo.jpg" width="50" height="42" />
  <span class="navbar-brand">NextJS app</span>
  </div>

  <form class="form-inline">
  <Link href="/">
    <button class="btn btn-outline-danger" type="button">SSR</button>
    </Link>
    <Link href="/static">
    <button class="btn btn-outline-warning" type="button">SSG</button>
    </Link>
  </form>

</nav>

        </div>
    )
}

export default navbar
