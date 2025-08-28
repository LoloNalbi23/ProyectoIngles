import { useState } from 'react'
import './ingles.css'

const timelineData = [
  { year: "hasta 43 d.C.", title:"", text: "Texto explicativo del año 450", img: "[Imagen 450]" },
  { year: "43–410 d.C.", title:"", text: "Texto explicativo del año 1066", img: "[Imagen 1066]" },
  { year: "siglos V–VI", title:"", text: "Texto explicativo del año 1500", img: "[Imagen 1500]" },
  { year: "siglos VIII–XI", title:"", text: "Texto explicativo del año 1700", img: "[Imagen 1700]" },
  { year: "1066", title:"", text: "Texto explicativo del año 1900", img: "[Imagen 1900]" },
  { year: "siglos XII–XV", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "siglos XV–XVII", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "siglos XVIII–XX", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "450 – 800 AD", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "800 – 1100", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "1066", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "XII–XIII", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "~1258", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "1362", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "Finales del siglo XIV", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "1450", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "1476", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "Siglo XVI", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "1604", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "1611", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "1616", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
  { year: "1650–1800", title:"", text: "Texto explicativo del año 2000", img: "[Imagen 2000]" },
];

function Ingles() {

        return (
        <div>
        {/* NAVBAR */}
        <nav className="timeline-nav">
            <ul>
            {timelineData.map((item) => (
                <li key={item.year}>
                <a href={`#year-${item.year}`}>{item.year}</a>
                </li>
            ))}
            </ul>
        </nav>

        {/* TIMELINE */}
            <main className="timeline-container">
                {timelineData.map((item, index) => (
    <div 
        key={item.year} 
        className={`timeline-item ${index % 2 === 0 ? "normal" : "reverse"}`}
    >
        <img src={item.img} alt={`Imagen del año ${item.year}`} />
        <p><strong><u>{item.title}</u></strong></p>
        <p><u>{item.text}</u></p>
    </div>
    ))}
        </main>
        </div>
    );
}

export default Ingles
