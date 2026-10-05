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

document.addEventListener('DOMContentLoaded', function() {
    // 1. Ambil data keranjang dari localStorage
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

    // 2. Ambil elemen HTML
    const cartCountElement = document.getElementById('cart-count');
    const buyButtons = document.querySelectorAll('button'); // Mengambil semua tombol
    const resetButton = document.getElementById('reset-cart');

    // 3. Tampilkan angka keranjang saat pertama kali dimuat
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }

    // 4. Tambah produk ke keranjang
    buyButtons.forEach(button => {
        // Abaikan tombol Kosongkan agar tidak ikut menambah keranjang
        if (button.id !== 'reset-cart') {
            button.addEventListener('click', function() {
                cartCount++;
                localStorage.setItem('cartCount', cartCount);
                
                if (cartCountElement) {
                    cartCountElement.textContent = cartCount;
                }
                alert('Produk berhasil ditambahkan ke keranjang!');
            });
        }
    });

    // 5. Kosongkan keranjang
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            cartCount = 0;
            localStorage.removeItem('cartCount');
            
            if (cartCountElement) {
                cartCountElement.textContent = cartCount;
            }
            alert('Keranjang telah dikosongkan!');
        });
    }
});