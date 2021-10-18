import React from 'react'
import ProductItem from './ProductItem'

function OrderList(props) {
  // counts -> 陣列
  const { productsInOrder, setProductsInOrder } = props

  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              {productsInOrder.length}種商品項目
            </div>
          </div>
        </div>
        {productsInOrder.map((v, i) => {
          return (
            <ProductItem
              productsInOrder={productsInOrder}
              setProductsInOrder={setProductsInOrder}
              key={v.id}
              name={v.name}
              category={v.category}
              image={v.image}
              price={v.price}
              count={v.count}
              setCount={(newCount) => {
                const newProductsInOrder = [...productsInOrder] //(1) 設定一個新陣列（匯入舊資料）

                //(2) 更新陣列中對應商品數量，低消為1
                newProductsInOrder[i].count = newCount < 1 ? 1 : newCount

                //(3) 回傳
                setProductsInOrder(newProductsInOrder)
              }}
            />
          )
        })}
        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  )
}

export default OrderList
