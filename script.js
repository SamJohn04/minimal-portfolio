const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const alphabetsLength = alphabets.length;

document.getElementById("main-heading")?.addEventListener("mouseover", (event) => {
    let iterations = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((_, i) => {
            if (i < iterations) {
                return event.target.dataset.value[i];
            } else {
                return alphabets[Math.floor(
                    Math.random() * alphabetsLength
                )];
            }
        }).join("");
        if (iterations > event.target.innerText.length) {
            clearInterval(interval);
        }
        iterations += 1/3;
    }, 30);
})
