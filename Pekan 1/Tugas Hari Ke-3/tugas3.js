// SOAL 1
console.log("__________________SOAL 1_________________")

var kataPertama = "saya";
var kataKedua = "Senang";
var kataKetiga = "belajar";
var kataKeempat = "JAVASCRIPT";

    console.log(kataPertama +" "+ kataKedua +" "+ kataKetiga +" "+ kataKeempat)

// SOAL 2
console.log("__________________SOAL 2_________________")

var kataPertama = 1;
var kataKedua = 2;
var kataKetiga = 4;
var kataKeempat = 5;

    console.log(kataPertama+kataKedua+kataKetiga+kataKeempat) 

// SOAL 3
console.log("__________________SOAL 3_________________")

var kalimat = 'WAH JAVASCRIPT ITU KEREN SEKALI!'; 

var kataPertama = "wah"; 
var kataKedua = "javascript";
var kataKetiga = "itu";  
var kataKeempat = "keren"; 
var kataKelima = "sekali" 

    console.log('Kata Pertama: ' + kataPertama); 
    console.log('Kata Kedua: ' + kataKedua); 
    console.log('Kata Ketiga: ' + kataKetiga); 
    console.log('Kata Keempat: ' + kataKeempat); 
    console.log('Kata Kelima: ' + kataKelima);

// SOAL 4
console.log("__________________SOAL 4_________________")

var nilai;
nilai = 70;

if (nilai >= 80) {
    console.log("Indeksnya A")  
} else if (nilai >= 70 && nilai < 80) {
    console.log("Indeksnya B")  
} else if (nilai >= 60 && nilai < 70) {
        console.log("Indeksnya C")
}else if (nilai >= 50 && nilai < 60) {
            console.log("Indeksnya D")   
}else if (nilai < 50) {
        console.log("Indeksnya E")   
    } 

// SOAL 5
console.log("__________________SOAL 5_________________")

var tanggal = "08 ";
var bulan = "03";
var tahun = " 1998";

switch (bulan) {
    case '06':
       console.log(tanggal + "Juni " + tahun);
      break;
    case '03':
      console.log(tanggal + "Maret " + tahun);
      break;
    case '05':
      console.log(tanggal + "Mei" + tahun);
      break;

      default:
        console.log("Tidak ada yang cocok "+ tanggal + bulan + tahun);
  }
