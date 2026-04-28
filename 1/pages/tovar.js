import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Tovar() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/list/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p className="text-center mt-5">Загрузка...</p>;
    }

    if (!product) {
        return <p className="text-center mt-5">Товар не найден</p>;
    }

    return (
        <div className="container">
            <Navbar />

            <main className="container mt-4">
                <div className="row align-items-center">

                    {/* Картинка */}
                    <div className="col-md-6 mb-3">
                        <img
                            src={
                                product.image
                                    ? `http://localhost:8080/uploads/${product.image}`
                                    : "/images/default.png"
                            }
                            alt={product.name}
                            className="img-fluid w-100"
                            style={{ maxHeight: "400px", objectFit: "cover" }}
                        />
                    </div>

                    {/* Информация */}
                    <div className="col-md-6">
                        <h1>{product.name}</h1>

                        <p className="mt-3">{product.description}</p>

                        <h4 className="mt-3">
                            Цена: <strong>{product.price} ₽</strong>
                        </h4>

                        <Link to={`/eee/${product.id}/karzina`} className="nav-link me-5"
                            style={{ marginLeft: "5px" }}
                        >
                            <button className="btn btn-dark mt-3 px-4">
                                Заказать
                            </button>
                        </Link>


                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Tovar;