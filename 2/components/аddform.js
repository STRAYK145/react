import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function AddForm({ onAdded }) {
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
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
    <Box
      component="form"
      onSubmit={handleSubmit(onAdd)}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      {/* NAME */}
      <TextField
        label="Название"
        size="small"
        {...register("name", { required: "Введите название" })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      {/* DESCRIPTION */}
      <TextField
        label="Описание"
        size="small"
        {...register("description", { required: "Введите описание" })}
        error={!!errors.description}
        helperText={errors.description?.message}
      />

      {/* PRICE */}
      <TextField
        label="Цена"
        size="small"
        type="number"
        {...register("price", { required: "Введите цену" })}
        error={!!errors.price}
        helperText={errors.price?.message}
      />

      {/* IMAGE */}
      <Box>
        <Button
          variant="outlined"
          component="label"
          size="small"
          color={errors.image ? "error" : "primary"}
        >
          Выбрать изображение
          <input
            type="file"
            accept="image/*"
            hidden
            {...register("image", { required: "Выберите картинку" })}
            onChange={(e) => {
              register("image").onChange(e);
              handleImageChange(e);
            }}
          />
        </Button>
        {errors.image && (
          <Typography variant="caption" color="error" sx={{ display: "block", mt: 0.5, ml: 1 }}>
            {errors.image.message}
          </Typography>
        )}
      </Box>

      {/* PREVIEW */}
      {preview && (
        <Box>
          <Typography variant="body2" sx={{ mb: 1 }}>Превью:</Typography>
          <Box
            component="img"
            src={preview}
            alt="preview"
            sx={{
              width: 200,
              borderRadius: 2,
              border: "1px solid #ccc",
              display: "block",
            }}
          />
        </Box>
      )}

      {/* SUBMIT */}
      <Button type="submit" variant="contained" sx={{ alignSelf: "flex-start" }}>
        Добавить
      </Button>
    </Box>
  );
}

export default AddForm;