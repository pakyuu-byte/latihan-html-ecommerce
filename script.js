// 1. Ambil jumlah keranjang dari localStorage jika ada, jika tidak mulai dari 0
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

// 2. Mengambil elemen HTML
const cartCountElement = document.getElementById('cart-count');
const buyButtons = document.querySelectorAll('article button');

// 3. Tampilkan jumlah keranjang yang tersimpan saat halaman pertama kali dibuka
if (cartCountElement) {
    cartCountElement.textContent = cartCount;
}

// 4. Menambahkan aksi klik pada setiap tombol "Beli Sekarang"
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Tambahkan jumlah keranjang
        cartCount++;
        
        // Simpan jumlah terbaru ke localStorage
        localStorage.setItem('cartCount', cartCount);

        // Update angka di layar
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        }

        // Berikan tanggapan ke pengguna
        alert('Produk berhasil ditambahkan ke keranjang!');
    });
});