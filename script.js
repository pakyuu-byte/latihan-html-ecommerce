// Variabel untuk menyimpan jumlah barang di keranjang
let cartCount = 0;

// Mengambil elemen HTML berdasarkan ID
const cartCountElement = document.getElementById('cart-count');
const buyButtons = document.querySelectorAll('button[aria-label^="Beli"]');

// Menambahkan event listener ke setiap tombol "Beli Sekarang"
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Tambahkan jumlah keranjang
        cartCount++;
        
        // Update angka di layar
        cartCountElement.textContent = cartCount;

        // Berikan respon/umpan balik ke pengguna
        alert('Produk berhasil ditambahkan ke keranjang!');
    });
});