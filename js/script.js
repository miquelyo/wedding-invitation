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
    } else {
        section.style.display = 'none';
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

