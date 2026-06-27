import { useState } from 'react'
import './App.css'

function App() {
  const [count,setcount] = useState(0)

  const Arttir = ()=> (
    setcount(count+1) 
  )
  const azalt = ()=> {
    if ( count > 0) {
      setcount( count-1 )
    }
}

  return(
    <div>
      <div> {count} </div>
      <div><button onClick={Arttir} > Arttır </button>  <button onClick={azalt}> Azalt </button></div>
    </div>
  ) 

}

export default App
