import React from 'react'

const List = ({ list, loading }) => {

  if (loading) {
    return <h2>Загрузка...</h2>
  }

  return (
    <div>
      {list.map((item) => (
        <div key={item.id} className="row align-items-center mb-5 tour-card">

          <div
            className="col-md-6 mb-3 mb-md-0 tour-image"
            style={{ height: "230px" }}
          >
            <img
              src={
                item.image
                  ? `http://localhost:8080/uploads/${item.image}`
                  : "./images/default.png"
              }
              alt={item.name}
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="col-md-6 order-md-1">
            <h3>{item.name}</h3>
            <p>{item.description}</p>

            <p><strong>Цена:</strong> {item.price} ₽</p>

            <a href={`/product/${item.id}`} className="btn btn-outline-dark px-4">
              Подробнее
            </a>
          </div>

        </div>
      ))}
    </div>
  )
}

export default List