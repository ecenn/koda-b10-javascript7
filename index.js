// set timeout

function satuDetik() {
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
                        setTimeout(function(){
                            console.log("Program Berakhir!")
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

satuDetik()