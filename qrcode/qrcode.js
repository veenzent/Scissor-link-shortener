// const domain = `http://127.0.0.1:8000/`
const domain = `https://scissor-url.onrender.com/`

// - - - - - - - - - - - CREATING QR CODE - - - - - - - - - - - 
const generateQrBtn = document.getElementById("g-qrcode")
async function generateQrCode() {
    const urlForQRCode = document.getElementById("url-for-qrcode").value;
    const imgBlock = document.getElementById("qrcode-img");
    const qrImage = document.getElementById("qrcode");
    const link = document.getElementById("download")

    const response = await fetch(`${domain}${urlForQRCode}/qrcode`, {
        method: "GET",
        headers: {
            "Content-Type": "images/png",
        }
    })
    
    if (!response.ok) {
        alert(`Error fetching data: ${Error(response.statusText)}`);
        throw Error(response.statusText);
    }
    
    const objectURL = await response.blob().then((myBlob) => URL.createObjectURL(myBlob));
    if (objectURL) {
        imgBlock.style.display = "flex";
        qrImage.src = objectURL;
        link.href = objectURL;
        link.download = "qrcode.png";
        const data = await response.json();
        console.log(data);
    }
}

generateQrBtn.addEventListener("click", generateQrCode)
