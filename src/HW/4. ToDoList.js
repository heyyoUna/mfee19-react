//第37, 38行出錯，TypeError: Cannot read properties of undefined (reading 'toggle')
//換成add也一樣

import React, { useState } from 'react'
import './App.scss'

function App() {
  const [inputTxt, setInputTxt] = useState('')
  const [toDoList, setToDolist] = useState([])
  return (
    <section>
      <h3>待辦清單</h3>
      <input
        type="text"
        value={inputTxt}
        placeholder="待辦清單"
        onChange={(e) => {
          setInputTxt(e.target.value)
        }}
      />

      <button
        onClick={(e) => {
          e.preventDefault()
          if (inputTxt.length <= 0) { //沒內容不給送出
            alert('請輸入內容')
          } else {
            const newToDoList = [...toDoList, inputTxt] //把新增的工作，塞進列表內
            setToDolist(newToDoList)
            setInputTxt('') //送出後，將輸入框清空
          }
        }}
      >
        新增
      </button>

      {toDoList.map((v, i) => {
        return (
          <li
            key={i}
            value={v}
            onClick={(e) => {
              e.target.classlist.toggle('finished')
              setToDolist(e.target)
            }}
          >
            {v}
          </li>
        )
      })}
    </section>
  )
}
export default App

//出現錯誤 TypeError: toDoList.map is not a function，但不知道哪邊有寫錯...
