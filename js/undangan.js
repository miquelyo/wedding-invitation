window.addEventListener('load', () => {
    confetti({
        particleCount: 500,
        spread: 180,
        origin: { y: 0.6 }
    });
});

/* SCRIPT COUNTDOWN*/
  // Tanggal target (ganti dengan tanggal acara Anda)
  const targetDate = new Date("July 14, 2024 09:00:00").getTime();

  // Perbarui countdown setiap 1 detik
  const countdownInterval = setInterval(function() {
      // Dapatkan tanggal dan waktu saat ini
      const now = new Date().getTime();

      // Hitung selisih waktu antara sekarang dan tanggal target
      const timeDifference = targetDate - now;

      // Hitung hari, jam, menit, dan detik dari selisih waktu
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Perbarui elemen HTML dengan nilai baru
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      // Jika hitungan mundur selesai, hentikan interval
      if (timeDifference < 0) {
          clearInterval(countdownInterval);
          document.getElementById("countdown").innerHTML = "Waktu Acara Telah Berakhir";
      }
  }, 1000); // Setiap 1 detik

/* END SCRIPT COUNTDOWN*/

/*SCRIPT COPY TO CLIPBOARD */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('Nomor rekening berhasil disalin!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
/* END SCRIPT*/


document.addEventListener('DOMContentLoaded', (event) => {
    // Load ucapan from localStorage
    loadUcapan();

    document.getElementById('ucapanForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const nama = document.getElementById('nama').value;
        const ucapan = document.getElementById('ucapan').value;

        const newUcapan = {
            nama: nama,
            ucapan: ucapan
        };

        addUcapan(newUcapan);
        saveUcapan(newUcapan);
        document.getElementById('ucapanForm').reset();
    });
});

function addUcapan(ucapan, index) {
    const ucapanCard = document.createElement('div');
    ucapanCard.className = 'col-md-6 mx-auto card mt-2 p-3';
    ucapanCard.innerHTML = `
        <p class="font-normal" style="color: black;"><strong>${ucapan.nama}</strong></p>
        <p class="font-normal" style="color: black;">${ucapan.ucapan}</p>
        <button class="btn btn-danger btn-sm" onclick="deleteUcapan(${index})">Hapus</button>
    `;
    document.getElementById('ucapanList').appendChild(ucapanCard);
}

function saveUcapan(ucapan) {
    let ucapanList = JSON.parse(localStorage.getItem('ucapanList')) || [];
    ucapanList.push(ucapan);
    localStorage.setItem('ucapanList', JSON.stringify(ucapanList));
    loadUcapan();
}

function loadUcapan() {
    document.getElementById('ucapanList').innerHTML = '';
    let ucapanList = JSON.parse(localStorage.getItem('ucapanList')) || [];
    ucapanList.forEach((ucapan, index) => {
        addUcapan(ucapan, index);
    });
}

function deleteUcapan(index) {
    let ucapanList = JSON.parse(localStorage.getItem('ucapanList')) || [];
    ucapanList.splice(index, 1);
    localStorage.setItem('ucapanList', JSON.stringify(ucapanList));
    loadUcapan();
}