const result = [];

const pickNumbers = function () {
    if (result.length === 6) return;

    const resultOfPicking = Math.floor(Math.random() * 49 + 1);
    for (let i = 0; i < result.length; i++) {
        if (resultOfPicking === result[i]) {
            return pickNumbers()
        }
    }
    const div = document.createElement("div");
    div.textContent = resultOfPicking;
    result.push(resultOfPicking);
    document.body.appendChild(div);

}
const button = document.querySelector("button");
button.addEventListener("click", pickNumbers);