// Fungsi Kalkulator
function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Menghapus karakter terakhir
}

function calculate(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Lakukan kalkulasi
    } catch (e) {
        display.value = 'Error'; // Jika terjadi kesalahan (seperti memasukkan operator yang tidak valid)
    }
}
