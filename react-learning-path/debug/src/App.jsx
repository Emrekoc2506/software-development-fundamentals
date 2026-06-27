import './App.css';
import { useState } from 'react';

function App() {
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);

  // Ortalama hesaplama fonksiyonu
  const ortalamaBul = () => {
    const toplamSonuc = toplam() / 2;
    yazdir(toplamSonuc);
  };

  // Toplamı hesaplayan fonksiyon
  const toplam = () => {
    return vize1 + vize2;
  };

  // Sonucu console'a yazdıran fonksiyon
  const yazdir = (sonuc) => {
    console.log("Ortalama : " + sonuc);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="number"
            value={vize1}
            onChange={(e) => setVize1(Number(e.target.value))}
            placeholder="Vize 1"
          />
        </div>
        <div>
          <input
            type="number"
            value={vize2}
            onChange={(e) => setVize2(Number(e.target.value))}
            placeholder="Vize 2"
          />
        </div>
        <div>
          <button onClick={ortalamaBul}>Ortalama Hesapla</button>
        </div>
      </header>
    </div>
  );
}

export default App;