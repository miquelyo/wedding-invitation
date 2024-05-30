// Set the date we're counting down to
const countDownDate = new Date("July 14, 2024 00:00:00").getTime();

// Update the count down every 1 second
const countdownfunction = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the remaining time
    const distance = countDownDate - now;
    
    if (distance > 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the countdown
        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");

        if (daysElement && hoursElement && minutesElement && secondsElement) {
            daysElement.innerText = formatTime(days);
            hoursElement.innerText = formatTime(hours);
            minutesElement.innerText = formatTime(minutes);
            secondsElement.innerText = formatTime(seconds);
        }
    } else {
        clearInterval(countdownfunction);
        const countdownElement = document.getElementById("countdown");
        if (countdownElement) {
            countdownElement.innerHTML = "EXPIRED";
        }
    }
}, 1000);

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function scrollToInvitation() {
    document.getElementById("invitation").scrollIntoView({ behavior: "smooth" });
}

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
});

function showInvitation() {
    document.getElementById("invitation").style.display = "block";
    document.getElementById("wedding-info").style.display = "block";

    // Membuat elemen gambar untuk konfeti
    var confetti = document.createElement('img');
    confetti.src = 'confetti.png';
    confetti.classList.add('confetti');

    // Menambahkan elemen konfeti ke dalam body
    document.body.appendChild(confetti);

    // Menghapus elemen konfeti setelah beberapa detik
    setTimeout(function() {
        document.body.removeChild(confetti);
    }, 3000); // Ubah angka ini untuk menyesuaikan durasi konfeti muncul
}


document.getElementsByClassName("confetti-button")[0].addEventListener("click", () => {
    let canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;
    let container = document.getElementsByClassName("button-wrapper")[0];
    container.appendChild(canvas);

    let confetti_button = confetti.create(canvas);
    confetti_button({
      particleCount: 200,
      spread: 200,
      startVelocity: 15,
      scalar: 0.9,
      ticks: 90
    }).then(() => container.removeChild(canvas));
  });