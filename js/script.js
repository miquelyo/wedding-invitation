let audio = new Audio('assets/musik/sound.mp3');

function toggleSound() {
    let soundIcon = document.getElementById('sound-icon');
    if (audio.paused) {
        audio.play();
        soundIcon.classList.remove('fa-play');
        soundIcon.classList.add('fa-pause', 'rotate');
    } else {
        audio.pause();
        soundIcon.classList.remove('fa-pause');
        soundIcon.classList.add('fa-play', 'rotate');
    }
}

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        section.classList.add('show');
        AOS.refresh(); // Refresh AOS to apply animations to newly displayed sections
    } else {
        section.style.display = 'none';
        section.classList.remove('show');
    }
}

function openInvitation() {
    document.body.classList.add('white-background');
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.home').classList.add('white-background');
    
    document.querySelector('.event-title').textContent = 'Undangan Pernikahan';
    document.querySelector('.couple-names').textContent = 'Yoga & Tila';
    
    // Hide the invitation texts
    const invitationTexts = document.querySelectorAll('.invitation-text');
    invitationTexts.forEach(element => element.style.display = 'none');
    
    // Add the new date and text below the names
    const dateElement = document.createElement('h2');
    dateElement.textContent = 'Minggu, 14 Juli 2024';
    document.querySelector('.home').appendChild(dateElement);
    
    // Change the button text and add a calendar icon
    const button = document.querySelector('.open-invitation');
    button.textContent = 'Save The Date';
    button.classList.add('btn-light');
    button.innerHTML += ' <i class="fas fa-calendar-alt"></i>';
    
    // Display sound control and bottom navigation
    document.getElementById('bottom-navigation').style.display = 'block';
    document.getElementById('sound-control').style.display = 'block';
    
    // Toggle sound and play it
    toggleSound();
    audio.play();
    toggleSection('mempelai');
    toggleSection('tanggal');
    toggleSection('galeri');
    toggleSection('ucapan');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    button.setAttribute('onclick', '');
}

// Mendapatkan elemen countdown
const countdownElement = document.getElementById('countdown');

// Hitung mundur waktu ke tanggal acara
const countdownDate = new Date('July 14, 2024 00:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;

    if (distance < 0) {
        countdownElement.innerHTML = 'Acara Telah Dimulai!';
    }
};

// Memperbarui countdown setiap detik
setInterval(updateCountdown, 1000);

