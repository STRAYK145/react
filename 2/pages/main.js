import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal1 from "../components/modal1"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import TextareaAutosize from '@mui/material/TextareaAutosize';

function Main() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="container">
      <Navbar />
      <Modal1
        open={open}
        onClose={() => setOpen(false)}
      />

      <main className="container flex-grow-1 mt-4">
        <div
          className="container"
          style={{ position: "relative", padding: 0 }}
        >
          <div class="p-4 mb-4 rounded-3 text-white shadow-sm blok_v_slidere">
            <h1 class="fw-bold">Онлайн аптека 24-часа</h1>
            <p class="fs-5">
              Аптека — онлайн-сервис для заказа лекарств и товаров для здоровья. Быстро подбираем нужные препараты, предлагаем только проверенные средства и гарантируем качественное обслуживание. Работаем удобно, честно и с заботой о вашем здоровье в любое время.
            </p>
            <a href="./all_about_tourism.html" class="btn btn-light btn-lg mt-2">Заказать</a>
            <Button onClick={() => setOpen(true)}>
              Модальное окно
            </Button>
          </div>


          <Carousel
            className="my-3 slider shadow-sm"
            style={{
              borderRadius: "12px",
              overflow: "hidden"
            }}
            interval={5000}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/1.jpg"
                alt="Слайд 1"
                style={{ height: "600px", objectFit: "cover" }}
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/2.jpg"
                alt="Слайд 2"
                style={{ height: "600px", objectFit: "cover" }}
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/1.jpg"
                alt="Слайд 3"
                style={{ height: "600px", objectFit: "cover" }}
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/2.jpg"
                alt="Слайд 4"
                style={{ height: "600px", objectFit: "cover" }}
              />
            </Carousel.Item>
          </Carousel>

        </div>



        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm rounded-3">
              <div className="card-body">
                <h5 className="card-title">Большой выбор</h5>
                <p className="card-text">
                  Ввввввввввввввввв.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm rounded-3">
              <div className="card-body">
                <h5 className="card-title">Гарантия качества</h5>
                <p className="card-text">
                  Ввввввввввввввввв.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm rounded-3">
              <div className="card-body">
                <h5 className="card-title">Быстрая доставка</h5>
                <p className="card-text">
                  Ввввввввввввввввв.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 mb-4" >

          </div>
          <div className="col-md-4 mb-4">
            <TextareaAutosize
              maxRows={4}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
              style={{ width: 200 }}
            />
          </div>

        </div>


      </main>

      <Footer />
    </div>
  );
}

export default Main;