import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const List = ({ list, loading }) => {
  if (loading) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <>
      <style>{`
        .tour-card {
          border-radius: 24px;
          overflow: hidden;
          border: none;
          box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .tour-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.15);
        }

        .tour-img {
          height: 230px;
          overflow: hidden;
        }

        .tour-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .tour-card:hover .tour-img img {
          transform: scale(1.05);
        }

        .tour-body {
          padding: 30px;
        }

        .tour-title {
          font-weight: 700;
          margin-bottom: 15px;
        }

        .tour-text {
          color: #555;
          line-height: 1.6;
        }
      `}</style>

      <div>
        {list.map((item) => (
          <Card key={item.id} className="mb-5 tour-card">
            <div className="row g-0 align-items-center">

              {/* IMAGE */}
              <div className="col-md-6 tour-img">
                <img
                  src={
                    item.image
                      ? `http://localhost:8080/uploads/${item.image}`
                      : "./images/default.png"
                  }
                  alt={item.name}
                />
              </div>

              {/* CONTENT */}
              <div className="col-md-6 tour-body">
                <h3 className="tour-title">{item.name}</h3>

                <p className="tour-text">{item.description}</p>

                <p className="tour-text">
                  <strong>Цена:</strong> {item.price} ₽
                </p>

                <Link to={`/eee/${item.id}`}>
                  <Button variant="outline-dark" className="px-4">
                    Подробнее
                  </Button>
                </Link>
              </div>

            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default List;