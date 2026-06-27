import { useState } from 'react'
import './index.css'

// 1. DÜZELTME: Değişken adını 'initialData' yaptım ki aşağıda karışmasın.
// Ayrıca 3. satırdaki 'sahir' yazım hatasını düzelttim.
const initialData = [
  {id :1, title : "Volvo", fiyat :100, sehir :"Ankara" },
  {id :2, title : "Vue",   fiyat :200, sehir :"İstanbul"},
  {id :3, title : "BMW",   fiyat :300, sehir : "İzmir"}, 
  {id :4, title : "Audi",  fiyat :400, sehir :"Bursa"}
];

// Tekil Araba Bileşeni
function CarItem({ car }) {
  return (
    <li className="car-item">
      <strong>{car.title}</strong> 
      <span> - Fiyat: {car.fiyat} TL</span> 
      <span> - Şehir: {car.sehir}</span>
    </li>
  );
}

// 2. DÜZELTME: Fonksiyon adı 'List' (Büyük harf) olmalı.
// Prop adı olarak 'items' kullandım (App içinde items yolluyorsun).
function List ({ items }) {
  return ( 
    <div className='list'>
      <ul>
        {/* 3. DÜZELTME: Burada <Item> değil <CarItem> çağırmalısın.
            Çünkü Item senin veri listen, CarItem ise görünümü çizen bileşenin. */}
        {items.map((i) => (
            <CarItem key={i.id} car={i} /> 
        ))} 
      </ul>
    </div>
  );
}

function App() {
  // 4. DÜZELTME: useState(Item) yerine yukarıda tanımladığımız initialData'yı kullandık
  const [cars, setCars] = useState(initialData);    

  return (
    <div className="App">
      <h1>Galerim</h1>
      {/* 5. DÜZELTME: <list> değil <List> olmalı */}
      <List items={cars} />
    </div>
  );
}

export default App