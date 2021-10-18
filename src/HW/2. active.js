// 加上  e.target.classList.add('active')
//就會報錯，不確定要怎麼調整...

//把標籤button改成a，開檢查時hook又會抓不到

import React, { useState } from 'react'
import './App.scss'

function App() {
  const [nav, setNav] = useState('')

  return (
    <section id="activeHW">
      <ul>
        <li>
          <button
            href="/"
            type="button"
            value="首頁"
            checked={nav === '首頁'}
            onClick={(e) => setNav(e.target.value)}
            // e.target.classList.add('active')
          >
            首頁
          </button>
        </li>

        <li>
          <button
            href="/"
            type="button"
            value="關於我們"
            checked={nav === '關於我們'}
            onClick={(e) => setNav(e.target.value)}
            // e.target.classList.add('active')
          >
            關於我們
          </button>
        </li>

        <li>
          <button
            href="/"
            type="button"
            value="產品"
            checked={nav === '產品'}
            onClick={(e) => setNav(e.target.value)}
            // e.target.classList.add('active')
          >
            產品
          </button>
        </li>
      </ul>
    </section>
  )
}
export default App
