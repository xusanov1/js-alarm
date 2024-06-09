const result = document.querySelector("h1");
const input = document.querySelector("input");

let future = new Date(input.value).getTime();

const formatTime = (time) => {
    return time.toString().padStart(2, "0")
}

let countDown = setInterval(() => {
    let now = new Date().getTime();
    let difference = future - now;
    
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ));
    let minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(difference % (1000 * 60) / 1000);
    
    result.innerText = `${formatTime(days)}:${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`

    if(difference <= 1000){
        clearInterval(countDown);
        result.innerText = '00:00:00:00'
    }

    if(difference < 10000 && difference > 0){
        document.body.classList.add("alert")
    }
}, 1000)

// 27 May 2024 11:01:57