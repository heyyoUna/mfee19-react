import React, { useState, useRef } from 'react'
import './App.css'

function App() {
  const [birth, setBirth] = useState('')
  const [age, setAge] = useState('')
  const inputRef = useRef()
  return (
    <>
      <section id="dateInputSection"></section>
      <h2>年齡判斷器</h2>
      <label>請填入生日</label>
      <input
        type="date"
        value={birth}
        ref={inputRef}
        onChange={(e) => {
          setBirth(e.target.value)
        }}
      />
      <button
        onClick={() => {
          const birthDate = new Date(inputRef.current.value) //找出生日
          const birthDateTime = birthDate.getTime() //將日期轉換為毫秒

          const nowDate = Date.now() //現在時間(毫秒)

          // console.log('birthDate', birthDate)
          // console.log('nowDate', nowDate)
          // console.log('birthDateTime', birthDateTime)

          const difference = nowDate - birthDateTime // 時間差(毫秒)
          // console.log('difference', difference)
          const ageDate = new Date(difference) //毫秒轉時間
          const calAge = Math.abs(ageDate.getUTCFullYear() - 1970)

          setAge(calAge)
          if (calAge >= 18) {
            alert('歡迎進入大人的世界 ԅ( ¯་། ¯ԅ)')
          }
          if (calAge < 18) {
            alert('未成年不得進入')
          } else {
          }
        }}
      >
        年齡計算
      </button>

      <div id="ageResult">年齡:&emsp; {age}</div>
    </>
  )
}

export default App
