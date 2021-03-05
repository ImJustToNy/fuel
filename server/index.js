const Router = require('./router')
const Distance = require('./lib/distance')

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const r = new Router()
    // Replace with the appropriate paths and handlers
    // r.get('.*/bar', () => new Response('responding for /bar'))
    // r.get('.*/foo', request => handler(request))
    // r.post('.*/foo.*', request => handler(request))
    // r.get('/demos/router/foo', request => fetch(request)) // return the response from the origin

    r.get('/', () => new Response('Hi worker!'))
    r.get('/distance', () => Distance(request))

    const resp = await r.route(request)
    return resp
}
