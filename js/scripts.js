document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-text');
    const text = "is arriving shortly";
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
                if (!isDeleting && index < text.length) {
                    textElement.innerHTML += text.charAt(index);
                    index++;
                    setTimeout(typeWriter, 100); // Adjust typing speed here
                } else if (isDeleting && index > 0) {
                    textElement.innerHTML = text.substring(0, index - 1);
                    index--;
                    setTimeout(typeWriter, 50); // Adjust deleting speed here
                } else if (!isDeleting && index === text.length) {
                    setTimeout(() => isDeleting = true, 1000); // Pause before deleting
                    setTimeout(typeWriter, 50);
                } else if (isDeleting && index === 0) {
                    isDeleting = false;
                    setTimeout(typeWriter, 500); // Pause before re-typing
                }
    }

    typeWriter();
});
