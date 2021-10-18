//把標籤button改成a，開檢查時hook會抓不到

import React, { useState } from 'react'
import './App.scss'

function App() {
  const [nav, setNav] = useState('')
  return (
    <>
      <ul className="activeHW">
        <li>
          <button
            href="#/"
            type="button"
            value="首頁"
            checked={nav === '首頁'}
            onClick={(e) => {
              e.target.classList.toggle('active')
              setNav(e.target.value)
            }}
          >
            首頁
          </button>
        </li>

        <li>
          <button
            href="#/"
            type="button"
            value="關於我們"
            checked={nav === '關於我們'}
            onClick={(e) => {
              e.target.classList.toggle('active')
              setNav(e.target.value)
            }}
          >
            關於我們
          </button>
        </li>

        <li>
          <button
            href="#/"
            type="button"
            value="產品"
            checked={nav === '產品'}
            onClick={(e) => {
              e.target.classList.toggle('active')
              setNav(e.target.value)
            }}
          >
            產品
          </button>
        </li>
      </ul>
    </>
  )
}
export default App
