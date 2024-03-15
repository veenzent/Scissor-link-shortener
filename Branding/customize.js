// const domain = `http://127.0.0.1:8000/`
const domain = `https://scissor-url.onrender.com/`
const domainName = document.getElementById("domain");
domainName.innerHTML = domain

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

// - - - - - - - - - - - CUSTOMIZING URL - - - - - - - - - - - 
const customizeLnkBtn = document.getElementById("customize-url-btn");
async function customizeUrl() {
    // URL to be customized
    const oldAddress = document.getElementById("old-url");
    const newAddress = document.getElementById("new-url");
    const resultDisplay = document.getElementById("result");
    const address = document.getElementById("custom-url");
    
    const key = getKey(oldAddress)
    try {
        const response = await fetch(`${domain}{url}?url=${key}&new_address=${newAddress.value}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            alert(`Error fetching data: ${Error(response.statusText)}`);
            throw Error(response.statusText);
        } else {
            const data = await response.json();
            resultDisplay.style.display = "block";
            // address.innerHTML = data.shortened_url;
            address.innerHTML = `${domain}${newAddress.value}`;
            address.href = data.shortened_url;
            address.target = "_blank";
            console.log(data);
        };
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
        alert(`Error fetching data: ${error}`);
    }
}
customizeLnkBtn.addEventListener("click", customizeUrl);
