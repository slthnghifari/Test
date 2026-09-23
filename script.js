let jumlahAngka;
let angka;

let jumlahPositif = 0;
let jumlahNegatif = 0;
let jumlahGanjil = 0;
let jumlahGenap = 0;

let total = 0;
let rataRata;


// Tombol "Mulai Analisis"
document.getElementById("mulaiBtn").addEventListener("click", function () {

    // Mengambil jumlah angka dari input
    jumlahAngka = Number(document.getElementById("jumlahAngka").value);

    // Cek apakah jumlah angka valid
    if (
        !Number.isInteger(jumlahAngka) ||
        jumlahAngka <= 0
    ) {
        alert("Masukkan jumlah angka yang valid!");
        return;
    }

    // Mengambil tempat untuk membuat input angka
    let numberInputSection = document.getElementById("numberInputSection");

    // Mengosongkan input sebelumnya
    numberInputSection.innerHTML = "";

    // Mengembalikan hasil ke kondisi awal
    document.getElementById("positif").textContent = "-";
    document.getElementById("negatif").textContent = "-";
    document.getElementById("ganjil").textContent = "-";
    document.getElementById("genap").textContent = "-";
    document.getElementById("total").textContent = "-";
    document.getElementById("rataRata").textContent = "-";

    // Membuat input sebanyak jumlah angka
    for (let i = 1; i <= jumlahAngka; i++) {

        let input = document.createElement("input");

        input.type = "number";
        input.className = "number-input";
        input.placeholder = "Angka ke-" + i;

        numberInputSection.appendChild(input);
    }

    // Menampilkan tombol Analisis
    document.getElementById("analisisBtn").style.display = "block";
});


// Tombol "Analisis Angka"
document.getElementById("analisisBtn").addEventListener("click", function () {

    // Reset semua nilai
    jumlahPositif = 0;
    jumlahNegatif = 0;
    jumlahGanjil = 0;
    jumlahGenap = 0;
    total = 0;

    // Mengambil semua input angka
    let inputs = document.querySelectorAll(".number-input");

    // Mengecek apakah semua input sudah diisi
    for (let i = 0; i < inputs.length; i++) {

        if (inputs[i].value === "") {
            alert("Masukkan semua angka terlebih dahulu!");
            inputs[i].focus();
            return;
        }
    }

    // Memproses setiap angka
    for (let i = 0; i < inputs.length; i++) {

        angka = Number(inputs[i].value);

        // Menghitung total
        total = total + angka;


        // Menghitung positif dan negatif
        if (angka >= 0) {
            jumlahPositif++;
        } else {
            jumlahNegatif++;
        }


        // Menghitung ganjil dan genap
        if (angka % 2 == 0) {
            jumlahGenap++;
        } else {
            jumlahGanjil++;
        }
    }


    // Menghitung rata-rata
    rataRata = total / jumlahAngka;


    // Menampilkan hasil ke website
    document.getElementById("positif").textContent = jumlahPositif;

    document.getElementById("negatif").textContent = jumlahNegatif;

    document.getElementById("ganjil").textContent = jumlahGanjil;

    document.getElementById("genap").textContent = jumlahGenap;

    document.getElementById("total").textContent = total;

    document.getElementById("rataRata").textContent =
        rataRata.toFixed(2);
});
