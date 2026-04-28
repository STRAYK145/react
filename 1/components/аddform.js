import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddForm({ onAdded }) {
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const onAdd = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("image", data.image[0]);

    try {
      await axios.post("http://localhost:8080/list/add", formData);

      alert("Товар добавлен!");

      reset();
      setPreview(null);

      if (onAdded) onAdded();
    } catch (error) {
      console.error(error);
      alert("Ошибка при добавлении товара!");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onAdd)}>
      {/* NAME */}
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Название"
          {...register("name", { required: "Введите название" })}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* DESCRIPTION */}
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Описание"
          {...register("description", { required: "Введите описание" })}
          isInvalid={!!errors.description}
        />
        <Form.Control.Feedback type="invalid">
          {errors.description?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* PRICE */}
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Цена"
          type="number"
          {...register("price", { required: "Введите цену" })}
          isInvalid={!!errors.price}
        />
        <Form.Control.Feedback type="invalid">
          {errors.price?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* IMAGE */}
      <Form.Group className="mb-3">
        <Form.Control
          type="file"
          accept="image/*"
          {...register("image", { required: "Выберите картинку" })}
          onChange={handleImageChange}
          isInvalid={!!errors.image}
        />
        <Form.Control.Feedback type="invalid">
          {errors.image?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* PREVIEW */}
      {preview && (
        <div className="mb-3">
          <p className="mb-2">Превью:</p>
          <img
            src={preview}
            alt="preview"
            style={{
              width: "200px",
              borderRadius: "10px",
              border: "1px solid #ccc"
            }}
          />
        </div>
      )}

      <Button variant="primary" type="submit" className="mb-3">
        Добавить
      </Button>
    </Form>
  );
}

export default AddForm;