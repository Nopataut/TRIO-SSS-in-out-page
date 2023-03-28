let updateStatus = (tutor)=>{
    let date = new Date();
    day = date.getDay();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    switch(tutor) {
        case "Nopal":
            if (day == 1 || day == 3){ // MoWe
                if ((h == 16 && m >= 15) || (h > 16 && h < 18)){ // 4:15 - 6:00 PM
                    return true;
                }
                return false;
            }
            else if (day == 2 || day == 4){ // TuTh
                if ((h == 12 && m >= 15) || (12 < h < 15) || (h == 15 && m < 30)){ // 12:15 - 3:30 PM
                    return true;
                }
                return false;
            }
            return false;
            break;

        case "Jasmine":
            if (day == 1 || day == 3){ // MoWe
                if ((h >= 13 && h < 18)){ // 1:00 - 6:00 PM
                    return true;
                }
                return false;
            }
            else if (day == 2 || day == 4){ // TuTh
                if ((h >= 10 && h < 12) || (h == 15 && m > 30) || (h > 15 && h < 18)){ // 10:00 AM - 12:00 PM, 3:30 - 6:00 PM
                    return true;
                }
                return false;
            }
            return false;
            break;

        case "Enrique": // tuth 9-3 we 2:15-5
            if (day == 2 || day == 4){ // TuTh
                if ((h >= 9 && h < 15)){ // 9:00 AM - 3:00 PM
                    return true;
                }
                return false;
            }
            else if (day == 3){ // We
                if ((h == 14 && m >= 15) || (14 < h < 17)){ // 2:15 - 5:00 PM
                    return true;
                }
                return false;
            }
            return false;
            break;
    }
    
    return (day + " " + h + ":" + m + ":" + s);
}

let override1 = override2 = override3 = false;

$(document).ready(() => {

    setInterval(console.log, 1000, updateStatus("Jasmine"))
    if (!override1){
        $('.status-1').css("color", "Black");
    }
    $('.status-1').click(() => {
        override1 = true;
        console.log("clicked! 1")
        //$('.status-1').css("color", "DimGray");
        console.log($('.status-1').text())
        if ($('.status-1').text() == "IN"){
            $('.status-1').text("OUT")
        }
        else{
            $('.status-1').text("IN")
        }
    })

    setInterval(console.log, 1000, updateStatus("Nopal"))
    if (!override2){
        $('.status-2').css("color", "Black");
    }
    $('.status-2').click(() => {
        override2 = true;
        console.log("clicked! 2")
        //$('.status-2').css("color", "DimGray");
        if ($('.status-2').text() == "IN"){
            $('.status-2').text("OUT")
        }
        else{
            $('.status-2').text("IN")
        }
    })
    
    setInterval(console.log, 1000, updateStatus("Enrique"))
    if (!override3){
        $('.status-3').css("color", "Black");
    }
    $('.status-3').click(() => {
        override3 = true;
        console.log("clicked! 3")
        //$('.status-3').css("color", "DimGray");
        if ($('.status-3').text() == "IN"){
            $('.status-3').text("OUT")
        }
        else{
            $('.status-3').text("IN")
        }
    })
    
    setInterval(console.log, 1000, updateStatus())
})