class bankAccount {
    constructor(balance, name){
        this.balance = balance;
        this.name = name;
    }

    async deposit(){
        let data;
        let condition = true;
        while (condition){
            const amount = parseInt(window.prompt("Masukan Jumlah Deposit yang Dimasukan"));
            data = await new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    if (amount && amount > 0){
                        this.balance += amount
                        return resolve(this.balance);
                    }else{
                        return reject("Masukan Angka di atas 0");
                    } 
                },3000)
                condition = confirm ("Apakah Anda Akan Melakukan Lagi?")
            });
        }
            return data;
    }

    async withdraw(){
        let data;
        
            const amount = parseInt(window.prompt("Masukan Jumlah Yang Akan Diambil"));
            data = await new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    if (amount && amount > 0 && this.balance >= amount){
                        this.balance -= amount
                        return resolve(this.balance);
                    }else{
                        return reject("Masukan Angka di atas 0 dan Kurang dari Balance");
                    }
            },3000)
            
        });
    return data;
    }
}
//objek
let putri = new bankAccount(1000,"Putri");

//then, catch
putri.deposit().then((balance)=>{
    console.log("Saldo Anda : "+ balance)

    putri.withdraw().then((balance)=>{
        console.log("Saldo Anda : "+ balance)
    }).catch((message) => {
        console.log("Error: " + message);
    })

}).catch((message) => {
    console.log("Error: " + message);
});


