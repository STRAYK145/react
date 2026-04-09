const databaseConfig = require('../config/knexfile');
//относительный путь к файлу настроек
var knex = require('knex')(databaseConfig);
exports.add = (req, res) => {
    const { name, description, price } = req.body;
     const image = req.file ? req.file.filename : null;
    console.log(name);
    console.log(image);
    knex('Products')
        .insert({ name,description, price, image })
        .then(list => {
            if (list.length == 0) {
                res.status(401).json('Нет списка');
            } else {
                res.status(200).send({
                    list
                });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
                error: 'Внутренняя ошибка сервера'
            });
        });
};