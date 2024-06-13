import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Jumbotron from './components/jumbotron'
import Edu from './components/edu'
import Exp from './components/exp'



export default function App() {
  return (
    <>
    <Navbar/>
    <Jumbotron/>
    <Edu/>
    <Exp/>
    </>
    )
}