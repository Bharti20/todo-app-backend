const knex = require('../dbConnection/connection')

module.exports.postCityData = (req, res)=> {
    let cityData = {cityName: req.body.cityName}
    knex('cities').insert(cityData)
    .then(() => {
        res.send(cityData)
    }).catch((err) => {
        res.send(err)
    });
};

