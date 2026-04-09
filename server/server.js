const express = require('express');
const app = express();
const cors = require('cors');
const list = require('./router/list.router');
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: '*'
}));
app.get("/", (req, res) => {
    res.json({
        message: "Домашняя страница. Бэк работает"
    });
});
app.use("/list", list)
app.use('/uploads', express.static('uploads'));
// Запуск сервера
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});