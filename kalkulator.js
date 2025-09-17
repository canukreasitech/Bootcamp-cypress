// Kalkulator Sederhana

// Set operasi dan angka langsung
const operasi = 1; // 1. Penjumlahan, 2. Pengurangan, 3. Perkalian, 4. Pembagian
const angka1 = 10;
const angka2 = 5;

// Function untuk hitung
function hitung(op, a, b) {
  switch (op) {
    case 1:
      return a + b;
    case 2:
      return a - b;
    case 3:
      return a * b;
    case 4:
      return a / b;
    default:
      return "Operasi tidak valid";
  }
}

// Hitung hasil
const hasil = hitung(operasi, angka1, angka2);

// Nama operasi
let namaOperasi = "";
switch (operasi) {
  case 1: namaOperasi = "Penjumlahan"; break;
  case 2: namaOperasi = "Pengurangan"; break;
  case 3: namaOperasi = "Perkalian"; break;
  case 4: namaOperasi = "Pembagian"; break;
  default: namaOperasi = "Tidak valid"; break;
}

// Tampilkan hasil
console.log("Operasi: " + namaOperasi);
console.log("Angka 1: " + angka1);
console.log("Angka 2: " + angka2);
console.log("Hasil: " + hasil);
