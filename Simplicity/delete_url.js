// const domain = `http://127.0.0.1:8000/`
const domain = `https://scissor-url.onrender.com/`


function getKey(url) {
    // Regex to match a valid URL
    const urlRegex = /^(http|https):\/\/[^\s]+/;
    if (!urlRegex.test(url.value)) {
        const key = url.value
        return key
    } else {
        const key = url.value.split("/").pop();
        return key
    }
}

// - - - - - - - - - - - SHORT URL's ANALYSIS - - - - - - - - - - - 
const delete_btn = document.getElementById("del_btn");

async function delShortUrl() {
    const shortUrl = document.getElementById("url_to_delete");
    const del_message = document.getElementById("del_message");
    key = getKey(shortUrl);

    try {
        const response = await fetch(`${domain}${key}/delete`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!response.ok) {
            data = await response.json();
            alert(`Error: ${data.detail}`);
        } else {
            const data = await response.json();
            del_message.innerHTML = data.detail
            del_message.style.display = "flex"
        }
    } catch (error) {
        // console.error(`Error fetching data: ${error}`);
        alert(`Error fetching data: ${error}`);
    }
}

delete_btn.addEventListener("click", delShortUrl)