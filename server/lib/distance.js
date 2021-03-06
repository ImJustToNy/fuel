async function handler(request) {
    const { searchParams } = new URL(request.url);

    const from_lat = searchParams.get('from_lat');
    const from_lon = searchParams.get('from_lon');
    const to_lat = searchParams.get('to_lat');
    const to_lon = searchParams.get('to_lon');

    if (! isLatitude(from_lat) || ! isLongitude(from_lon) || ! isLatitude(to_lat) || ! isLongitude(to_lon)) {
        return new Response(null, {
            status: 400
        });
    }

    const key = GOOGLE_KEY;
    const origins = `${from_lat},${from_lon}`;
    const destinations = `${to_lat},${to_lon}`;

    const response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origins)}&destinations=${encodeURIComponent(destinations)}&key=${key}`);

    if (! response.ok) {
        return new Response(null, {
            status: 500
        })
    }

    const distance = (await response.json()).rows[0].elements[0].distance.value

    return new Response(JSON.stringify({
        'distance': distance
    }));
}

function isLatitude(lat) {
    return lat && isFinite(lat) && Math.abs(lat) <= 90;
}

function isLongitude(lng) {
    return lng && isFinite(lng) && Math.abs(lng) <= 180;
}

module.exports = handler