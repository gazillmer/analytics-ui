async function get(url) {
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json();
}

async function post(url, request_data) {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(request_data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json();
}