import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';
// useEffect: yan etkiler için kullanılır
// componentDidMount, componentDidUpdate, componentWillUnmount ın yerini alır
// useEffect 3 şekilde kullanılır
// 1. Her render sonrası çalışır
// 2. Sadece ilk render sonrası çalışır
// 3. Belirli state veya prop değişikliklerinde çalışır
function App() {

  const [firstname, setfirstname] = useState('');
  const [lastname, setLastName] = useState('');
  useEffect(() => {
    console.log("her zamna çalışır")
  }) // boş oldugu zaman sayfa yüklendiginde ve butona tılandıgında sürekli çalışıyor
  useEffect(() => {
    console.log("ilk render edildiginde çalışır")
  }, []) // [] oldugu zaman sayfa yüklendiginde 1 kere çalışıyor bir butona vs tılandıgında çalışmıyor

  useEffect(() => {
    console.log("ilk render edildiginde çalışır ve firstname state degeri degiştiginde çalışır")
  }, [firstname]) // [firstname] oldugu zaman sayfa yüklendiginde 1 kere çalışıyor ve firstname state değeri degiştiginde çalışıyor

  useEffect(() => {
    console.log(" ilk render edildiginde çalışır ve lastname state degeri degiştiginde çalışır ")
  }, [lastname]) // [lastname] oldugu zaman sayfa yüklendiginde 1 kere çalışıyor ve lastname state değeri degiştiginde çalışıyor

  return (
    <div className="App">
      <header className="App-header">
        <div><button onClick={() => setfirstname("Emre")}>Ad degiştir</button></div>
        <div> <button onClick={() => setLastName("Koç")}>Soyad degiştir</button></div>
      </header>
    </div>
  );
}

export default App;
