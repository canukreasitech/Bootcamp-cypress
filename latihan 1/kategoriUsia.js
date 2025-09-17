function kategoriUsia(usia){
    if (usia >= 0 && usia <= 12){
        return "anak";
    } else if (usia >= 13 && usia <= 17) {
        return "remaja"; 
    } else if (usia >= 18 && usia <=59){
         return "dewasa"; 
    }else if (usia >= 60){
         return "lansia";
    } else {
        return "tidak valid"
    }
}


//set variabel usia
const dataUsia = [5, 8, 12, 15, 25, 30, 35, 40, 80, 76];

//set variable kategori usia
let anak = 0;
let remaja = 0;
let dewasa = 0;
let lansia = 0;

for (let i = 0; i < dataUsia.length; i++) {
    const kategori = kategoriUsia(dataUsia[i]);
    if (kategori === "anak") {
        anak++;
    } else if(kategori === "remaja"){
        remaja++;
    } else if(kategori === "dewasa"){
        dewasa++;
    } else if(kategori === "lansia"){
        lansia++;
    } 
}

console.log("Anak-anak: " + anak + " orang");
console.log("Remaja: " + remaja + " orang");
console.log("Dewasa: " + dewasa + " orang");
console.log("Lansia: " + lansia + " orang");