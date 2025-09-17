


const operasi = 2; 
const angka1 = 8;
const angka2 = 5;


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


const hasil = hitung(operasi, angka1, angka2);


let namaOperasi = "";
switch (operasi) {
  case 1: namaOperasi = "Penjumlahan"; break;
  case 2: namaOperasi = "Pengurangan"; break;
  case 3: namaOperasi = "Perkalian"; break;
  case 4: namaOperasi = "Pembagian"; break;
  default: namaOperasi = "Tidak valid"; break;
}

console.log("Operasi: " + namaOperasi);
console.log("Angka 1: " + angka1);
console.log("Angka 2: " + angka2);
console.log("Hasil: " + hasil);
