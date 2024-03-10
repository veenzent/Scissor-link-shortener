// - - - - - - - - - - - URL SHORTENING - - - - - - - - - - - 
// link to shorten
const urlToShorten = document.getElementById("shorten-url")
const shortenLnkBtn = document.getElementById("shorten-url-btn");

console.log(urlToShorten.value);
async function shortenUrl() {
    try {
        const response = await fetch("http://127.0.0.1:8000/shorten-url", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ target_url: urlToShorten.value }),
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

shortenLnkBtn.addEventListener("click", shortenUrl());



// - - - - - - - - - - - CREATING QR CODE - - - - - - - - - - - 
// link to generate QR Code for:
const urlForQRCode = "https://get-url-from-document"
async function generateQrCode() {
    const response = await fetch(`http://127.0.0.1:8000/${urlForQRCode}/qrcode`, {
        method: "GET",
        headers: {
            "Content-Type": "images/png",
        }
    });
    if (!response.ok) {
        throw Error(response.statusText);
    } else {
        const data = await response.json();
        console.log(data);
    }
}


// - - - - - - - - - - - CUSTOMIZING URL - - - - - - - - - - - 
// URL to be customized
const urlToCustomize = "https://get-url-from-document" // document.getElementById("shorten-url")
const newName = "https://get-from-user-input"
// link to customize URL
// const customizeLnkBtn = document.getElementById("customize-url-btn");

async function customizeUrl() {
    try {
        const response = await fetch(`http://127.0.0.1:8000/{url}?url=${urlToCustomize}&new_address=${newName}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
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


// - - - - - - - - - - - FORWARDING SHORT URL TO IT'S TARGET - - - - - - - - - - - 
