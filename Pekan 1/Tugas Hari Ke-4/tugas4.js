// SOAL 1
console.log("_______________SOAL 1_____________")
console.log("============LOOPING PERTAMA===========")
var x=2;
var akhir1=20;

    while (x <= akhir1){
        console.log(x + " - I Love Coding")
    x+=2;
}

console.log("============LOOPING KEDUA===========")
var i=20;
var akhir2=0;
    while (i > akhir2){
        console.log(i + " - I will become a frontend developer")
    i-=2;
}

// SOAL 2
console.log("_______________SOAL 2_____________")

var nilai = 1;
var akhir3 = 20;
       while( nilai <= akhir3 ){
   		if(nilai%2==0)
   		{
   			console.log(nilai+" Berkualitas" );
        }else if (nilai%3==0){
            console.log(nilai+ " I love coding")
        }else
   		{
   			console.log(nilai+" Santai" );
   		}
   	    nilai++;
}

// SOAL 3
console.log("_______________SOAL 3_____________")

function makeLine(length) {
var line = "";
    for (var i = 1; i <= length; i++) {
      for(var j=1; j<=i; j++){ 
        line += "#";
      }
        line+="\n";
    }
    return line + "\n";
  }
  console.log(makeLine(7));

  // SOAL 4
  console.log("_______________SOAL 4_____________")

  var kalimat = "'saya', 'sangat', 'senang', 'belajar', 'javascript'" 

  var saya = kalimat.split(":")
  var sangat = kalimat.split(":")
  var senang = kalimat.split(":")
  var belajar = kalimat.split(":")
  var javascript = kalimat.split(":")

  console.log(saya) 

  // SOAL 5
  console.log("_______________SOAL 5_____________")
  var daftarBuah = ["2. Apel\n", "5. Jeruk", "3. Anggur\n", "4. Semangka\n", "1. Mangga\n"];
  daftarBuah.sort()
  console.log(daftarBuah) 

  