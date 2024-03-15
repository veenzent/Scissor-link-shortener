// const domain = `http://127.0.0.1:8000/`
const domain = `https://scissor-url.onrender.com/`

// - - - - - - - - - - - URL SHORTENING - - - - - - - - - - - 
// link to shorten

const shortenLnkBtn = document.getElementById("shorten-url-btn");
async function shortenUrl() {
    const urlToShorten = document.getElementById("shorten-url");        // input element
    const responseEl = document.getElementById("result");
    const domainName = document.getElementById("domain");       // p tag
    const shortUrlEl = document.getElementById("trimmed-url");  // a tag

    try {
        const response = await fetch(`${domain}shorten-url`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ target_url: urlToShorten.value }),
        });
        if (!response.ok) {
            alert(`Error fetching data: ${Error(response.statusText)}`);
            throw Error(response.statusText);
        } else {
            const data = await response.json();
            responseEl.style.display = "flex";

            domainName.textContent = domain;
            urlObject = new URL(data.shortened_url);
            address = urlObject.pathname.slice(1);
            shortUrlEl.textContent = address;
            shortUrlEl.href = data.shortened_url;
            // console.log(address);
            // console.log(data);
        }
    } catch (error) {
            console.error("Error fetching data: ", error);
            alert(`Error fetching data: ${error}`);
        }
}

shortenLnkBtn.addEventListener("click", shortenUrl);

