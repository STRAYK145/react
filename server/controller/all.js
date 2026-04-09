const databaseConfig = require('../config/knexfile');
//относительный путь к файлу настроек
var knex = require('knex')(databaseConfig);
exports.all = (req, res) => {
    console.log(req.body)
    knex('Products')
        .select()
        .then(list => {
            if (list.length == 0) {
                res.status(401).json('Нет списка');
            } else {
                res.send({
                    count: list.length
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