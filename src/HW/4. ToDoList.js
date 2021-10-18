//出現錯誤 TypeError: toDoList.map is not a function，但不知道哪邊有寫錯QQ

import React, { useState } from 'react'
import './App.scss'

function App() {
  const [inputTxt, setInputTxt] = useState('')
  const [toDoList, setToDolist] = useState('')
  return (
    <>
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
          const newToDoList = [...toDoList, inputTxt] //把新增的工作，塞進列表內
          setToDolist(newToDoList)
          setInputTxt('') //送出後，將輸入框清空
        }}
      >
        新增
      </button>

      {toDoList.map((v, i) => {
        return (
          <li
            key={i}
            onClick={(e) => {
              e.target.classlist.add('finished')
            }}
          >
            {v}
          </li>
        )
      })}
    </>
  )
}
export default App

//出現錯誤 TypeError: toDoList.map is not a function，但不知道哪邊有寫錯...
