import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstname] = useState("Emre");
  const [lastName, setLastname] = useState("Koç");
  const [userinfo] = useState({ userinfo: "EmreKoc", password: "1234" });
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  // Soyadı değiştirme fonksiyonu
  const handleChange = (newLastName) => {
    setLastname(newLastName);
  };

  // Sayaç artırma
  const arttir = () => {
    setCount(count + 1);
  };

  // Sayaç azaltma
  const azalt = () => {
    setCount(count - 1);
  };

  // useState : bir state'in değerini set metodu ile değiştirdiğinde component yeniden render edilir
  console.log("component render edildi");

  return (
    <div className="App">
      <header className="App-header">
        <div>{firstName} {lastName}</div>

        <div>
          <button onClick={() => setFirstname("Alpaslan")}>İsim Değiştir</button>
        </div>

        <div>
          <button onClick={() => handleChange("koc")}>Soyad Değiştir</button>
        </div>

        <hr /><hr />

        <div>
          <div>{count}</div>
          <div>
            <button onClick={arttir}>Arttır</button>
          </div>
          <div>
            <button onClick={azalt}>Azalt</button>
          </div>
        </div>

        <hr /><hr />

        <div>
          <button onClick={() => setShow(!show)}>
            {show ? 'Gizle' : 'Göster'}
          </button>

          <div>
            {show ? (
              <div>{userinfo.userinfo} {userinfo.password}</div>
            ) : (
              <div>Bilgileri gösterme</div>
            )}
          </div>

          {show && <div>Bu içerik görünür!</div>}
        </div>
      </header>
    </div>
  );
}

export default App;
