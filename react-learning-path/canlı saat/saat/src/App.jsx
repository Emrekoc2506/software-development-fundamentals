import { useState } from 'react'
import './App.css'

function App() {
  const hour = new Date().getHours()
  const openHour = 8;
  const closehour = 20;
  const isOpen = hour >= openHour && hour <= closehour;

  return (
    <footer>

    {
      isOpen ? (
        <p>Akşam {closehour} kadar sipariş verebilrisiniz </p>
      ) :
      (
        <p> şu an Kapalıyız açılış saatimiz {openHour} </p>
      )
    }

    </footer>
  )
  
}

export default App
