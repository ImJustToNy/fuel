const cheerio = require('cheerio');

async function handler(request) {
    let prices = await FUEL.get('prices')

    if (prices === null) {
        const fuel_response = await fetch('https://www.autocentrum.pl/paliwa/ceny-paliw/');

        if (fuel_response.ok) {
            const body = await fuel_response.text();

            const $ = cheerio.load(body);

            let results = {};

            $('.choose-petrol>a').each(function (k, c) {
                results[$(c).children('.fuel-header').text()] = parseFloat($(c).children('.price').clone()
                    .children()
                    .remove()
                    .end()
                    .text()
                    .replace(',', '.'))
            })

            prices = JSON.stringify(results)

            await FUEL.put('prices', prices, {expirationTtl: 86400})
        } else {
            return new Response(null, {
                status: 500
            })
        }
    }

    return new Response(prices)
}

module.exports = handler