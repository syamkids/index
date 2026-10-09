// Fungsi untuk memunculkan/menyembunyikan menu titik tiga
function toggleDropdown(btn) {
  // Menutup dropdown lain yang sedang terbuka
  document.querySelectorAll('.dropdown-content').forEach(el => {
    if (el !== btn.nextElementSibling) el.classList.remove('show');
  });
  btn.nextElementSibling.classList.toggle('show');
}

// Fungsi Salin Tautan ke Clipboard
function copyLink(url) {
  navigator.clipboard.writeText(url).then(() => {
    alert("Tautan berhasil disalin!");
  });
}

// Fungsi Bagikan menggunakan fitur bawaan browser/HP
function shareLink(url, title) {
  if (navigator.share) {
    navigator.share({
      title: title,
      url: url
    }).catch(console.error);
  } else {
    // Alternatif jika browser tidak mendukung fitur share bawaan
    navigator.clipboard.writeText(url);
    alert("Fitur share tidak didukung di browser ini. Tautan otomatis disalin ke clipboard!");
  }
}

// Menutup dropdown jika pengguna mengklik di luar area menu
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    document.querySelectorAll('.dropdown-content').forEach(el => {
      el.classList.remove('show');
    });
  }
}