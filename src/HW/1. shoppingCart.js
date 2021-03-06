import { useState } from 'react'
import './App.scss'
import OrderList from './components_orderlist/OrderList'
import Summary from './components_orderlist/Summary'

// 產品訂購的項目
const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '白色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
  {
    id: 4,
    name: '金色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 100,
  },
]
// 初始化狀態用的函式 - 用陣列中的物件狀態
const initStateWithObjcet = (products) => {
  const state = []

  //將products的內容傳入for迴圈
  for (let i = 0; i < products.length; i++) {
    state.push({ ...products[i], count: 1 })
  }
  return state
}

function App() {
  const [productsInOrder, setProductsInOrder] = useState(
    initStateWithObjcet(products)
  )
  //運費
  const [delivery, setDelivery] = useState('200')

  // 計算商品總數量
  const productCount = () => {
    let totalCount = 0
    for (let i = 0; i < productsInOrder.length; i++) {
      totalCount += productsInOrder[i].count
    }
    return totalCount
  }

  // 計算商品總價
  const total = () => {
    let sum = 0
    for (let i = 0; i < productsInOrder.length; i++) {
      sum += productsInOrder[i].count * productsInOrder[i].price
    }

    //加運費
    if (delivery) {
      let cost = parseInt(delivery)
      const newsum = sum + cost
      return newsum
    }
    return sum
  }

  if (!productsInOrder.length) {
    console.log(!productsInOrder.length)
    console.log(!!total)
    console.log(productCount() == 0)
  }
  return (
    <div className="card">
      <div className="row">
        <OrderList
          productsInOrder={productsInOrder}
          setProductsInOrder={setProductsInOrder}
        />
        <Summary
          productsInOrder={productsInOrder}
          delivery={delivery}
          setDelivery={setDelivery}
          productCount={productCount()}
          total={total()}
        />
      </div>
    </div>
  )
}

export default App
