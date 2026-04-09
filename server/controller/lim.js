const databaseConfig = require('../config/knexfile');
//относительный путь к файлу настроек
var knex = require('knex')(databaseConfig);
exports.lim = (req, res) => {
    const offset = parseInt(req.query.offset); // номер запрашиваемой страницы
    const limit = parseInt(req.query.limit);
    console.log(req.query)
    knex('Products')
        .select()
        .limit(limit)
        .offset(offset)
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