import React, { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { addItem } from "../actions/listActions"

function AddForm() {
  const dispatch = useDispatch()
  const [preview, setPreview] = useState(null)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const onAdd = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("name", name)
    formData.append("description", description)
    formData.append("price", price)
    formData.append("image", image)

    try {
      await axios.post("http://localhost:8080/list/add", formData)
      dispatch(addItem(formData))
      alert("Товар добавлен!")
      setName("")
      setDescription("")
      setPrice("")
      setImage(null)
      setPreview(null)
    } catch (error) {
      console.error(error)
      alert("Ошибка при добавлении товара!")
    }
  }

  return (
    <form onSubmit={onAdd}>
      <input
        className="form-control mb-2"
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="form-control mb-2"
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        className="form-control mb-2"
        placeholder="Цена"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="file"
        className="form-control mb-2"
        accept="image/*"
        onChange={handleImageChange}
        required
      />

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
  )
}

export default AddForm