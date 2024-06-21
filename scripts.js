const binaryText = "01";
const body = document.body;

function createBinary() {
    const binary = document.createElement("div");
    binary.className = "binary";
    binary.innerText = binaryText[Math.floor(Math.random() * binaryText.length)];
    binary.style.left = `${Math.random() * 100}vw`;
    binary.style.animationDuration = `${Math.random() * 2 + 3}s`;
    body.appendChild(binary);

    setTimeout(() => {
        binary.remove();
    }, 5000);
}

setInterval(createBinary, 50);
