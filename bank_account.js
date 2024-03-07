// Tambah Saldo
let saldo = 0;
document.getElementById("text").innerHTML = "Saldo : " + saldo;
function tambahSaldo(){
    
    const tambah = parseInt(window.prompt("Masukan Jumlah Saldo yang ditambahkan"));
        if(tambah && tambah >0){
            saldo += tambah;
            document.getElementById("text").innerHTML = "Saldo : " + saldo;
            alert("Saldo Anda Sekarang: " + saldo);

        }else{
            alert("Masukan Angka di atas 0");

        }
    }


// Kurangi Saldo
function kurangiSaldo(){
    
        const kurang = parseInt(window.prompt("Masukan Jumlah Saldo yang Diambil"));
        if (kurang && kurang > 0 && saldo >= kurang){
            saldo -= kurang;
            document.getElementById("text").innerHTML = "Saldo : " + saldo;
            alert("saldo anda sekarang: " + saldo);
            
        }else{
            alert("masukan angka diatas 0 dan lebih kecil dari total saldo!");
           
        }
    }


//onclick button
document.getElementById("isi").onclick = tambahSaldo;
document.getElementById("tarik").onclick = kurangiSaldo;