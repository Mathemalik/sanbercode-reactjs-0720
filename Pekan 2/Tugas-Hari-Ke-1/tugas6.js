// SOAL 1
console.log("_________________Nomor 1______________")
// Array
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
// Ubah menjadi Object
var objDaftarPeserta = {
    Nama : "Asep",
    JenisKelamin : "laki-laki",
    Hobi : "baca buku",
    TahunLahir: 1992
}
console.log(objDaftarPeserta)

// SOAL 2
console.log("_________________Nomor 2______________")

var buah = [{nama: "strawberry", warna: "merah", adaBijinya: "tidak", harga: "9000"}, 
            {nama: "jeruk", warna: "oranye", adaBijinya: "ada", harga: "8000"},
            {nama: "semangka", warna: "Hijau & Merah", adaBijinya: "ada", harga: "10000"},
            {nama: "pisang", warna: "Kuning", adaBijinya: "tidak", harga: "5000"}]

             console.log(buah[0])

// SOAL 3
console.log("_________________Nomor 3______________")

var dataFilm = [];

function tambahdatafilm(nama, durasi , genre, tahun){
    dataFilm.push({
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    });
};
tambahdatafilm("Naruto", "30 Menit", "Kartun", "1999");
console.log(dataFilm)

// SOAL 4
console.log("_________________Nomor 4______________")
// Release 0
class Animal {
    constructor(name,legs){
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}
var sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded)

// Release 1
class Ape{
    constructor(name){
        this.name = name;
    }
    yell(){
        return "Auooo";
    }
}
class Frog{ 
    constructor(name){
        this.name = name;
    }
    jump(){
        return "hop hop";
    }
}
var sungokong = new Ape("kera sakti")
sungokong.yell()

var kodok = new Frog("buduk")
kodok.jump()

console.log(sungokong.yell())
console.log(kodok.jump())

// SOAL 5
console.log("_________________Nomor 5______________")

{
    console.log("Soal No 5 \n")
    class Clock {
        constructor({
            template
        }) {
            this.timer;
            this._template = template;
        }

        render(template) {
            let date = new Date();

            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            let output = this._template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        stop() {
            clearInterval(timer);
        }

        start() {
            this.render(this._template);
            this.timer = setInterval(() => this.render(this._template), 1000);
        }

    }
    var clock = new Clock({
        template: 'h:m:s'
    });
    clock.start();
}