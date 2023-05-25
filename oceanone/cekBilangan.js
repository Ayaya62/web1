// Meminta input bilangan pertama
var bilangan1 = prompt("Masukkan bilangan pertama:");

// Meminta input bilangan kedua
var bilangan2 = prompt("Masukkan bilangan kedua:");

// Mengonversi input menjadi bilangan bulat
bilangan1 = parseInt(bilangan1);
bilangan2 = parseInt(bilangan2);

// Mengecek kondisi kedua bilangan
if (bilangan1 > bilangan2) {
  document.write("BILANGAN KE-1 LEBIH BESAR DARI BILANGAN KE-2");
} else if (bilangan1 < bilangan2) {
  document.write("BILANGAN KE-2 LEBIH BESAR DARI BILANGAN KE-1");
} else {
  document.write("KEDUA BILANGAN SAMA BESARNYA");
}
