// set timeout

function satuDetik(cb) {
    setTimeout(function(){
        console.log(1)
        setTimeout(function(){
            console.log(2)
            setTimeout(function(){
                console.log(3)
                setTimeout(function(){
                    console.log(4)
                    setTimeout(function(){
                        console.log(5)
                        cb()
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

function selesai(){
    console.log("Program Selesai!")
}

satuDetik(selesai)