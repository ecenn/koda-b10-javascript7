// set timeout

function satuDetik(i, cb) {
    setTimeout(function(){
        console.log(i)
        if (i >= 5) {
            cb()
            return
        }
        satuDetik(i+1, cb)
    }, 1000)
}

function selesai(){
    console.log("Program Selesai!")
}

satuDetik(1, selesai)