filterSeleksi("all")

function filterSeleksi(arg){
    let x,i;
    x = document.getElementsByClassName("flex-container-column card");
    if (arg=="all") {
        arg = "";
    }
    // tambah class "tampil" pada elemen yang terfilter, dan hilangkan class "tampil" dari elemen yang tidak terpilih
    for (i = 0; i < x.length; i++) {
        hapusClass(x[i], "tampil");
        if(x[i].className.indexOf(arg) > -1) {
            tambahClass(x[i],"tampil");
        }
    }
}

function tambahClass(elemen, nama){ //untuk menampilkan
    let i, arr1, arr2;
    arr1 = elemen.className.split(" ");
    arr2 = nama.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if(arr1.indexOf(arr2[i])== -1) {
            elemen.className += " "+arr2[i];
        }
    }
}

function hapusClass(elemen, nama){
    let i, arr1, arr2;
    arr1 = elemen.className.split(" ");
    arr2 = nama.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]),1);
        }
    }
    elemen.className = arr1.join(" ");
}

function turunkanMenu() {
    var x = document.getElementById("listTopNav");
    if (x.className === "topNav") {
      x.className += " responsive";
    } else {
      x.className = "topNav";
    }
  }