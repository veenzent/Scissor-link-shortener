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
const getAnalysisBtn = document.getElementById("get-analysis-btn");

async function getAnalytics() {
    const tableBlock = document.getElementById("div-table");
    const shortUrl = document.getElementById("short-url")
    const shortUrlResult = document.getElementById("short-url-result")
    const state = document.getElementById("state")
    const clicks = document.getElementById("clicks")
    const targetUrl = document.getElementById("target-url")

    key = getKey(shortUrl)
    console.log(key)
    try {
        const response = await fetch(`${domain}${key}/analytics`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!response.ok) {
            alert(`Error fetching data: ${Error(response.statusText)}`);
            throw Error(response.statusText);
        } else {
            const data = await response.json();
            tableBlock.style.display = "block";
            shortUrlResult.innerHTML = shortUrl.value;
            state.innerHTML = data.is_active;
            clicks.innerHTML = data.clicks;
            targetUrl.innerHTML = data.target_url;
        }
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
        alert(`Error fetching data: ${error}`);
    }
}

getAnalysisBtn.addEventListener("click", getAnalytics)