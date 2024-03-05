
async function fetchData() {
    try {
        // const response = await fetch("https://scissor-url.onrender.com/k1UAw/qrcode");
        const response = await fetch("https://scissor-url.onrender.com");
        // const response = await fetch("http://127.0.0.1:8000/");
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            const data = await response.json();
            console.log(data);
        }

    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

fetchData();



// link to shorten
const url = document.getElementById("shorten-url")
async function shortenUrl() {
    try {
        const response = await fetch("http://127.0.0.1:8000/shorten-url", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ target_url: url.value }),
        });
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            const data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}