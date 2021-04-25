import App from 'next/app'
import React from 'react'
import {Provider} from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import store from '../store/store'
import '../styles/globals.css'
import Layout from "../Layout/Layout"


class MyApp extends App{
  render(){
    const {Component,pageProps}=this.props
   return(
     <Layout>
      <Provider store={store}>
<Component {...pageProps}></Component>
      </Provider>
      </Layout>
    )
  }

}

const makestore=()=> store;
const wrapper= createWrapper(makestore);


export default wrapper.withRedux( MyApp);
