import React, { Suspense } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Modal1 from "../components/modal1";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Link } from "react-router-dom";

// Code Splitting (оптимизация + улучшение загрузки)
const One_animation = React.lazy(() => import("../components/one_animation"));
const Two_animation = React.lazy(() => import("../components/Two_animation"));
const Three_animation = React.lazy(() => import("../components/Three_animation"));

function Main() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="container">
      <Navbar />

      <Modal1 open={open} onClose={() => setOpen(false)} />

      <main className="container flex-grow-1 mt-4" role="main">
        <div className="container" style={{ position: "relative", padding: 0 }}>
          <div
            className="p-4 mb-4 rounded-3 text-white shadow-sm blok_v_slidere"
            role="banner"
            aria-label="Главный блок онлайн аптеки"
          >
            <h1 className="fw-bold">Онлайн аптека 24-часа</h1>

            <p className="fs-5">
              Аптека — онлайн-сервис для заказа лекарств и товаров для здоровья.
              Быстро подбираем нужные препараты, предлагаем только проверенные
              средства и гарантируем качественное обслуживание. Работаем удобно,
              честно и с заботой о вашем здоровье в любое время.
            </p>

            <Link
              to="/order"
              className="btn btn-light btn-lg mt-2"
              aria-label="Перейти к оформлению заказа"
            >
              Заказать
            </Link>

            <Button
              className="ms-2 mt-2"
              aria-label="Открыть модальное окно"
              onClick={() => setOpen(true)}
            >
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
            aria-label="Слайдер изображений товаров"
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/1.jpg"
                alt="Изображение аптечных товаров"
                style={{ height: "600px", objectFit: "cover" }}
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/2.jpg"
                alt="Изображение лекарственных препаратов"
                style={{ height: "600px", objectFit: "cover" }}
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/1.jpg"
                alt="Изображение витаминов и добавок"
                style={{ height: "600px", objectFit: "cover" }}
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/2.jpg"
                alt="Изображение товаров для здоровья"
                style={{ height: "600px", objectFit: "cover" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <section className="row mt-4" aria-label="Преимущества сервиса">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm rounded-3" role="article">
              <div className="card-body">
                <h2 className="card-title h5">Большой выбор</h2>
                <p className="card-text">
                  В нашем каталоге представлен широкий ассортимент лекарств,
                  витаминов и товаров для здоровья.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm rounded-3" role="article">
              <div className="card-body">
                <h2 className="card-title h5">Гарантия качества</h2>
                <p className="card-text">
                  Мы сотрудничаем только с проверенными поставщиками и
                  гарантируем оригинальность продукции.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm rounded-3" role="article">
              <div className="card-body">
                <h2 className="card-title h5">Быстрая доставка</h2>
                <p className="card-text">
                  Доставляем товары быстро и аккуратно. Можно оформить заказ в
                  любое время суток.
                </p>
              </div>
            </div>
          </div>

          {/* Анимации с lazy loading */}
          <Suspense fallback={<div>Загрузка анимации...</div>}>
            <div className="col-md-4 mb-4">
              <One_animation />
            </div>

            <div className="col-md-4 mb-4">
              <Two_animation />
            </div>

            <div className="col-md-4 mb-4">
              <Three_animation />
            </div>
          </Suspense>

          {/* Поле ввода с label */}
          <div className="col-md-4 mb-4">
            <label htmlFor="comment" className="form-label fw-bold">
              Ваш комментарий
            </label>

            <TextareaAutosize
              id="comment"
              maxRows={4}
              aria-label="Поле для ввода комментария"
              placeholder="Введите ваш комментарий..."
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Main;