var penumpang = [];//penumpang adalah variable []= dia adalah array kosong
var tambahPenumpang = function(namaPenumpang, penumpang)// (namaPenumpang,penumpang) adalah parameternya function 
 {

  if (penumpang.length == 0) {//untuk meghitung panjang isinya data
    penumpang.push(namaPenumpang); // push adalah untuk menambah data ke dalam array
    return penumpang;// untuk menggulang isi array / keluar dari function
  } else {
    for (i=0; i<penumpang.length; i++) {// untuk mencari ulang isi panjang  data  yang sudah di isi
      if (penumpang[i] == undefined) {//jika isi penumpang kosong
        penumpang[i] = namaPenumpang;//untuk menambahkan isi kursi yang kosong
        return penumpang;// untuk menggulang isi array / keluar dari function
      } else if (namaPenumpang == penumpang[i]) {// untuk mencari data sama yang sudah di input
        console.log('Penumpang tersebut sudah ada di dalam angkot.');// untuk memberikan informasi data yang sama
        return penumpang;// untuk menggulang isi array / keluar dari function
      } else if (i == penumpang.length - 1) {//karena i nilainya 0 dan penumpang.lenght nilainya 1 -1 fungsinya setelah  penumpang.lenght  adalah untuk menyamakan nilai dan penumpang.lenght
        penumpang.push(namaPenumpang);//menambahkan nama penumpang
        return penumpang;// untuk menggulang isi array / keluar dari function
      }
    }
  }
}
