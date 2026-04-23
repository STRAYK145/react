import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onAdd)}>
      <input
        className="form-control mb-2"
        placeholder="Название"
        {...register("name", { required: "Введите название" })}
      />
      {errors.name && <p className="text-danger">{errors.name.message}</p>}

      <input
        className="form-control mb-2"
        placeholder="Описание"
        {...register("description", { required: "Введите описание" })}
      />
      {errors.description && (
        <p className="text-danger">{errors.description.message}</p>
      )}

      <input
        className="form-control mb-2"
        placeholder="Цена"
        type="number"
        {...register("price", { required: "Введите цену" })}
      />
      {errors.price && <p className="text-danger">{errors.price.message}</p>}

      <input
        type="file"
        className="form-control mb-2"
        accept="image/*"
        {...register("image", { required: "Выберите картинку" })}
        onChange={handleImageChange}
      />
      {errors.image && <p className="text-danger">{errors.image.message}</p>}

      {preview && (
        <div className="mb-3">
          <p>Превью:</p>
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

      <button className="btn btn-primary mb-3" type="submit">
        Добавить
      </button>
    </form>
  );
}

export default AddForm;