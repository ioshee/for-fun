const bird = document.getElementById("bird");
const cloud = document.getElementById("cloud");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
if (bird.classList != "jump") {
    bird.classList.add("jump")
}
setTimeout( function () {
    bird.classList.remove("jump");
}, 300)
}

let IsAlive = setInterval ( function () {
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    let cloudLeft = parseInt(window.getComputedStyle(cloud).getPropertyValue("left"));

    if (cloudLeft < 5 && cloudLeft > 0 && birdTop >= 4) {
        alert("GAME OVER!!")
    }
}, 10)