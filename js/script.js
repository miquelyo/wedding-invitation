let audio = new Audio('assets/musik/sound.mp3');

function toggleSound() {
    let soundIcon = document.getElementById('sound-icon');
    if (audio.paused) {
        audio.play();
        soundIcon.classList.remove('fa-volume-off');
        soundIcon.classList.add('fa-volume-up');
    } else {
        audio.pause();
        soundIcon.classList.remove('fa-volume-up');
        soundIcon.classList.add('fa-volume-off');
    }
}

function openInvitation() {
    document.body.classList.add('white-background');
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.home').classList.add('white-background');
    
    document.querySelector('.event-title').textContent = 'Undangan Pernikahan';
    document.querySelector('.couple-names').textContent = 'Yoga & Septi';
    
    // Hide the invitation texts
    const invitationTexts = document.querySelectorAll('.invitation-text');
    invitationTexts.forEach(element => element.style.display = 'none');
    
    // Add the new date and text below the names
    document.querySelector('.home').innerHTML += `
        <h2>Minggu, 14 Juli 2024</h2>
    `;
    
    // Change the button text and add a calendar icon
    const button = document.querySelector('.open-invitation');
    button.textContent = 'Save The Date';
    button.classList.add('btn-light'); // Optional: Ensure button remains styled correctly
    button.innerHTML += ' <i class="fas fa-calendar-alt"></i>'; // FontAwesome calendar icon (make sure FontAwesome is included in your project)
    document.getElementById('bottom-navigation').style.display = 'block';
    
    toggleSound();
    audio.play(); // Memainkan suara secara otomatis saat tombol "Open Invitation" ditekan
}
