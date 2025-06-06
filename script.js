function showPopup() {
  document.getElementById('popupConfirm').classList.add('show');
}

function closePopup() {
  document.getElementById('popupConfirm').classList.remove('show');
}

function showSuccess() {
  closePopup();
  setTimeout(() => {
    document.getElementById('popupSuccess').classList.add('show');
    setTimeout(() => {
      document.getElementById('popupSuccess').classList.remove('show');
    }, 2000);
  }, 300);
}

function closeEdit() {
  // Simulasi kembali ke halaman utama, bisa diganti dengan location.href
  alert('Batal mengedit, kembali ke daftar alat');
}
