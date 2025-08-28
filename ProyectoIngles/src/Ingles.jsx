import { useState } from 'react'
import './ingles.css'

const historiaData = [
  { 
    year: "until 43 A.D.", 
    title: "Pre-Roman Era", 
    text: "People in Britain spoke Celtic languages, mainly Brittonic. Brittonic later became Welsh, Cornish, and Breton.", 
    img: "https://www.megalithicireland.com/Limerick/Adare%20Ogham%20Stones.jpg" 
  },
  { 
    year: "43–410 A.D.", 
    title: "Roman Rule", 
    text: "The Romans ruled Britain and used Latin for the army and government. Most local people, however, still spoke Brittonic.", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSazr073YHuGibRuffH5oJoGpbCblWdjlXIxw&s" 
  },
  { 
    year: "5th–6th centuries", 
    title: "Germanic Invasions", 
    text: "The Angles, Saxons, and Jutes came from northern Europe. They brought Old English, which slowly replaced Celtic in most areas.", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWk6Q9vGFpVz2VDyAbM1fD2fg3RyzTWYUkg&s" 
  },
  { 
    year: "8th–11th centuries", 
    title: "Viking Influence", 
    text: "Vikings came to Britain and spoke Old Norse. English borrowed many words from them, like 'sky', 'leg', and 'they'.", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQnNAH0ZWfV9qCIhAQPBnD9ao-1byclrt1g&s" 
  },
  { 
    year: "1066", 
    title: "Norman Conquest", 
    text: "After the Norman Conquest, French became the language of rulers and nobles. Latin stayed in religion and schools, while English was spoken by common people.", 
    img: "https://images.immediate.co.uk/production/volatile/sites/7/2018/04/BT-section-2-f3182df.jpg?quality=90&resize=980,654" 
  },
  { 
    year: "12th–15th centuries", 
    title: "Middle English", 
    text: "English changed a lot in this time, mixing Old English, French, and Norse. A famous work from this period is 'The Canterbury Tales' by Geoffrey Chaucer.", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0kXyC8LbRr9MajLnrcx9Qdrewl5SXK3PPw&s" 
  },
  { 
    year: "15th–17th centuries", 
    title: "Early Modern English", 
    text: "In 1476, Caxton’s printing press started to standardize English spelling. The Renaissance also brought many Latin and Greek words into English.", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIGIyB9k8mPwcLaQEcDIPDr5hg6cBc-zaYdQ&s]" 
  },
  { 
    year: "18th–20th centuries", 
    title: "Global Expansion", 
    text: "English spread around the world through colonies and trade. It took new words from many languages, such as 'jungle' (Sanskrit) and 'sugar' (Arabic).", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYOnrlWeGbHqmEZjlRJ4oP8fMrCFBg3cbGg&s" 
  },
  { 
    year: "450–800 A.C", 
    title: "Old English", 
    text: "Also referred to as Anglo-Saxon, it is the language of the Germanic inhabitants. Evidence includes runic carvings on objects like metalwork and pottery. Important poems include Beowulf and Caedmon’s Hymn.", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBPv0NLMTsfAo9TmUo8flu32IOvC-hO60-YWyngheLtIFHV7vBI6tkD_ud0s35sT7Zrw&usqp=CAU" 
  },
  { 
    year: "800–1100", 
    title: "Viking Influence & Simplification", 
    text: "The main event was the Viking invasions. Old Norse influenced English, leading to simplification of grammar and inflections.", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDSRn9GYRQ0BwKUdzkB-QqdgHPErirke9Ny-JVU6NXWq4iEwxKloN0F6-4tSEflf-UHs&usqp=CAU" 
  },
  { 
    year: "1066", 
    title: "Norman Conquest", 
    text: "The invasion by Normans, French, Flemish, and Breton troops led to French dominating courts, churches, and law. English suffered and its progression was disrupted.", 
    img: "https://www.historytoday.com/sites/default/files/inline-images/Normandy%20Medieval%20Battle%20of%20Bouvines%20History%20Today.jpg" 
  },
  { 
    year: "12th–13th centuries", 
    title: "Resurgence of English", 
    text: "After the loss of Normandy in 1204, English replaced French as the language of the court. It also reappeared in official documents, first recorded in 1258.", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbV5ocKSwjPTB0W2T3u8TfudyToEaDnO_zgw&s" 
  },
  { 
    year: "1362", 
    title: "Statute of Pleading", 
    text: "English became the official language in courts. Before, French and Latin were used, but now people could use their own language.", 
    img: "https://tudortreasures.net/wp-content/uploads/2022/12/henryv-tl.jpg" 
  },
  { 
    year: "Late 14th century", 
    title: "Chaucer & the London Dialect", 
    text: "Geoffrey Chaucer wrote The Canterbury Tales using the London dialect, which helped make it the standard for English writing.", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2h5TbMJ_Ic_ImeC8CR6-b_H5oVqu3dJIgpA&s" 
  },
  { 
    year: "c. 1450", 
    title: "The Great Vowel Shift", 
    text: "The Great Vowel Shift changed how people pronounced long vowels. It is a reason why English spelling and pronunciation don’t always match today.", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXnSgFhK6y_QrhdmOglyDHYFy8kGjyohH4A&s" 
  },
  { 
    year: "1476", 
    title: "Printing Press", 
    text: "William Caxton set up the first printing press in Westminster. Books were produced more quickly and cheaply, and English spelling became more regular.", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9P8AX90RcJGr4rebrkkyYcMdJO3pHFdZGB_N4av1tlBoPTZ1kUb3-zZR1Pdz7fYgTkTsSipN9roV75h92-W9gvQ9teOWV0s_deg4YVFxZ" 
  },
  { 
    year: "16th century", 
    title: "Early Modern English", 
    text: "William Tyndale printed the New Testament (1526) and the full Bible (1534) in English. This helped people read religious texts and influenced the development of Early Modern English.", 
    img: "https://biteproject.com/wp-content/uploads/2021/04/william-tyndale-quien-fue-1024x1024.jpg" 
  },
  { 
    year: "1604", 
    title: "First English Dictionary", 
    text: "Robert Cawdrey published A Table Alphabeticall, the first English-only dictionary. It helped people understand and use English consistently.", 
    img: "https://ichef.bbci.co.uk/images/ic/480xn/p09dhvnt.jpg" 
  },
  { 
    year: "1611", 
    title: "King James Bible", 
    text: "The King James Bible was published and became very popular. Its style and phrases strongly influenced English literature and culture for centuries.", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbPV0Q8Mmno2PzMSaJxfJdbg0uGH0j6AarrA&ss" 
  },
  { 
    year: "1616", 
    title: "Shakespeare Dies", 
    text: "William Shakespeare died. His vocabulary and writing style had a strong influence on Early Modern English.", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUvycjGM2UAMntg2_JoMAE4G17ykPb0zChw&s" 
  },
  { 
    year: "1650–1800", 
    title: "Modern English Emerges", 
    text: "The essay and the novel became popular. English vocabulary grew with many Latin and Greek borrowings. In 1755, Samuel Johnson published 'A Dictionary of the English Language'.", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCt4NoBxDrt07lsPBVChk2hc6jqs9Yb41Vg&s" 
  },
];

function Ingles() {

  return (
    <div className="historia-page">
      {/* NAVBAR */}
      <nav className="historia-nav">
        <ul>
          {historiaData.map((item) => (
            <li key={item.year}>
              <a href={`#year-${item.year}`}>{item.year}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* TIMELINE */}
      <main className="historia-container">
        {historiaData.map((item, index) => (
          <div 
            key={item.year} 
            id={`year-${item.year}`} 
            className={`historia-item ${index % 2 === 0 ? "normal" : "reverse"}`}
          >
            <img src={item.img} alt={`Imagen del ${item.year}`} />
            <div className="historia-text">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Ingles
