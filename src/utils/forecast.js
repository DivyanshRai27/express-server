const request = require('request')


const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + encodeURIComponent(latitude) + '&lon=' + encodeURIComponent(longitude) + '&units=Metric&appid=11aa386f55367deee36d58e8d2fd7fd8'
   
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('No internet', undefined)
        }else if (body.error){
            callback('Unable to find the location', undefined)
        }else{
            callback(undefined, 
                'temp is ' + body.main.temp
            )
        }   
    })
}

module.exports = forecast