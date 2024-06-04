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