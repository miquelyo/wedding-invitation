/* SCRIPT LOADING PROGRESS BAR */
let progress = 0;
const progressBar = document.getElementById('progress-bar');
const content = document.getElementById('home');
const loader = document.getElementById('loader');

const interval = setInterval(() => {
    progress += 1;
    progressBar.style.width = progress + '%';
    
    if (progress >= 100) {
        clearInterval(interval);
        loader.style.display = 'none';
        content.style.display = 'block';
    }
}, 25); // Ubah durasi sesuai kebutuhan
/* END SCRIPT LOADING PROGRESS BAR */
