const alphabetsAndSpace = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const alphabetSpaceLength = alphabetsAndSpace.length;

document.getElementById("main-heading")?.addEventListener("mouseover", (event) => {
    let iterations = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((c, i) => {
            if (i < iterations) {
                return event.target.dataset.value[i];
            } else {
                return alphabetsAndSpace[Math.floor(
                    Math.random() * alphabetSpaceLength
                )];
            }
        }).join("");
        if (iterations > event.target.innerText.length) {
            clearInterval(interval);
        }
        iterations += 1/3;
    }, 30);
})