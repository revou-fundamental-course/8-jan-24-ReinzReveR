// Fungsi untuk menghitung luas
function hitungLuas() {
    // Mengambil nilai panjang dan lebar dari input
    var panjang = document.getElementById('length').value;
    var lebar = document.getElementById('width').value;

    // Memeriksa apakah panjang atau lebar kosong
    if (panjang === '' || lebar === '') {
        // Jika salah satu atau keduanya kosong, tampilkan pesan dan hentikan fungsi
        alert('Masukkan panjang dan lebar terlebih dahulu');
        return;
    }

    // Menghitung luas berdasarkan panjang dan lebar
    var luas = panjang * lebar;

    // Menampilkan hasil luas di elemen dengan id 'result'
    document.getElementById('result').innerHTML = `Hasil Luas: ${luas} cm2`;
}

// Fungsi untuk menghitung keliling
function hitungKeliling() {
    // Mengambil nilai panjang dan lebar dari input
    var panjang = document.getElementById('length').value;
    var lebar = document.getElementById('width').value;

    // Memeriksa apakah panjang atau lebar kosong
    if (panjang === '' || lebar === '') {
        // Jika salah satu atau keduanya kosong, tampilkan pesan dan hentikan fungsi
        alert('Masukkan panjang dan lebar terlebih dahulu');
        return;
    }

    // Menghitung keliling berdasarkan panjang dan lebar
    var keliling = 2 * (parseInt(panjang) + parseInt(lebar));

    // Menampilkan hasil keliling di elemen dengan id 'result'
    document.getElementById('result').innerHTML = `Hasil Keliling: ${keliling} cm`;
}

// Variabel untuk menyimpan mode saat ini (default: luas)
var mode = 'luas';

// Fungsi untuk mengubah mode antara luas dan keliling
function switchMode() {
    var switchButton = document.getElementById('tombolSwitch');
    var titleElement = document.getElementById('NamaJudulKalkulator');

    // Mengubah mode dan teks tombol
    if (mode === 'luas') {
        mode = 'keliling';
        switchButton.innerHTML = 'Switch Ke Luas';
        titleElement.innerHTML = 'Hitung Keliling';
    } else {
        mode = 'luas';
        switchButton.innerHTML = 'Switch Ke Keliling';
        titleElement.innerHTML = 'Hitung Luas';
    }
}

// Fungsi untuk melakukan perhitungan sesuai dengan mode
function hitung() {
    if (mode === 'luas') {
        hitungLuas();
    } else {
        hitungKeliling();
    }
}

// Fungsi untuk mereset nilai panjang dan lebar
function reset() {
    document.getElementById('length').value = '';
    document.getElementById('width').value = '';
    hideResult();
}

// Fungsi untuk menyembunyikan hasil
function hideResult() {
    document.getElementById('result').innerHTML = 'Hasil: ';
}
