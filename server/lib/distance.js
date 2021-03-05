const { Client } = require("@googlemaps/google-maps-services-js");

function handler(request) {
    const client = new Client();

    client
        .distancematrix({
            origins: 'Radom, Poland',
            destinations: 'Warsaw, Poland'
        })
        .then(r => {
            console.log('OK', r)
        })
        .catch(r => {
            console.log('ERR', r)
        })

    // console.log(request)
    return new Response('Distance requester')
}

module.exports = handler