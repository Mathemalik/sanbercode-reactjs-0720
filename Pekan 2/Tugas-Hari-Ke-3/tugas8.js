//SOAL 1
console.log("_________SOAL 1_________")

let phi2 = 15/2;
let jari2 = 5;

var luasLingkaran = (phi, radius) => {
  return phi * radius * radius;
}
console.log(luasLingkaran(phi2, jari2));

var kelilingLingkaran = (phi, radius) => {
  return 2 * phi * radius;
}
console.log(kelilingLingkaran(phi2, jari2));

//SOAL 2
console.log("_________SOAL 2_________")

let a = "saya"
let b = "adalah"
let c = "seorang"
let d = "frontend"
let e = "developer"

let kalimat = `${a} ${b} ${c} ${d} ${e}`
console.log(kalimat);

//SOAL 3
console.log("_________SOAL 3_________")

class Book {
  constructor(name, totalPage, price) {
    this.name = name;
    this.totalPage = totalPage;
    this.price = price;
  }
}
class Komik extends Book {
  constructor(name, totalPage, price, isColor) {
    super(name, totalPage, price);
    this.isColor = isColor;
  }
}

komikConan = new Komik('Conan', 300, 5200, true)
console.log(komikConan);
