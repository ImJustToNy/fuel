const Router = require('./router')
const Distance = require('./lib/distance')
const Prices = require('./lib/prices')

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const r = new Router()

    r.get('/prices', () => Prices(request))
    r.get('/distance', () => Distance(request))

    const resp = await r.route(request)

    resp.headers.set('Access-Control-Allow-Origin', '*');

    return resp
}
