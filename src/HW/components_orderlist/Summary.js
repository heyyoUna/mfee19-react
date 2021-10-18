import React from 'react'

function Summary(props) {
  const { productCount, total, delivery, setDelivery } = props

  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>付款摘要</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col extra_items3">共 {productCount}項目</div>
          <div className="col text-right">NT&#36; {total - delivery}</div>
        </div>
        <form>
          <p>SHIPPING</p>
          <select
            value={delivery}
            onChange={(e) => {
              setDelivery(e.target.value)
            }}
          >
            <option className="text-muted" value="200">
              郵局 - NT&#36;200
            </option>
            <option className="text-muted" value="250">
              快遞 - NT&#36;250
            </option>
          </select>
        </form>
        <div className="row extra_row">
          <div className="col">總價</div>
          <div className="col text-right">NT&#36; {total}</div>
        </div>
        <button className="btn">前往付款</button>
      </div>
    </>
  )
}
export default Summary
