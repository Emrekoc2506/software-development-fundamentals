import React, { useState } from 'react';
import './css/header.css';
import { courses } from './data';


function App() {
  const [launching, setLaunching] = useState(false);

  const handleClick = (targetId) => {
    setLaunching(true);
    setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      setLaunching(false);
    }, 800);
  };

  return (
    <div>
      {/* HEADER */}
      <div className='header'>
        <div className='title'>
          Roketsan Ürünleri
        </div>

        <div className='nav-menu'>
          <div
            className={`nav-item ${launching ? 'launch' : ''}`}
            onClick={() => handleClick('hakkinda')}
          >
            🚀 Hakkında
          </div>
          <div
            className={`nav-item ${launching ? 'launch' : ''}`}
            onClick={() => handleClick('projeler')}
          >
            🚀 Projeler
          </div>
          <div
            className={`nav-item ${launching ? 'launch' : ''}`}
            onClick={() => handleClick('iletisim')}
          >
            🚀 İletişim
          </div>
        </div>
      </div>

      {/* PROJELER */}
      <div id="projeler" className="course-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
        ))}
      </div>

      {/* HAKKINDA */}
      <div id="hakkinda" className="section">
        <h2>Hakkında</h2>
        <p>HAKKINDA.</p>
      </div>

      {/* İLETİŞİM */}
      <div id="iletisim" className="section">
        <h2>İletişim</h2>
        <p>İLETİŞİM</p>
      </div>
    </div>
  );
}

export default App;
