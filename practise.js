const image_Element = document.getElementById("image"); // surati rasac acher
const points = document.getElementById("points"); // qulebis span
const start = document.getElementById("game"); // dawyebis gilaki
const time = document.getElementById("time"); // taimeris span
let interval = 1000; // defaultad 1 wamshiertxel sheicvleba waldo.
let intervalId;
let gameOn = false;

image_Element.addEventListener("click", () => {
    if (gameOn) {
        points.innerText = Number(points.innerText) + 1;
    }
});

function Start(interval = 1000) {
    gameOn = true;
    window_Height = window.innerHeight;
    window_Width = window.innerWidth;
    image_Height = image_Element.clientHeight;
    image_Width = image_Element.clientWidth;

    availSpace_V = window_Height - image_Height - 50;
    availSpace_H = window_Width - image_Width;

    intervalId = setInterval(() => {
        moveImage();
    }, interval);
    image_Element.addEventListener("click", () => {
        moveImage();
        if (interval >= 800) {
            interval -= 50;
        }
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            moveImage();
        }, interval);
        console.log(interval);
    });
}

function moveImage() {
    var randNum_V = Math.round(Math.random() * availSpace_V);
    var randNum_H = Math.round(Math.random() * availSpace_H);

    image_Element.style.top = randNum_V + "px";
    image_Element.style.left = randNum_H + "px";
}

start.addEventListener("click", () => {
    start.style.display = "none";
    Start();
    let timer = setInterval(() => {
        time.innerText = Number(time.innerText) - 1;
        if (Number(time.innerText) == 0) {
            clearInterval(timer);
            clearInterval(intervalId);
            alert(`Your score: ${points.innerText}, (refresh to restart)`);
        }
    }, 1000);
});
