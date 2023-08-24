let updateStatus = (tutor = "", override = true)=>{
    let date = new Date();
    let day = date.getDay();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let time
    if (h > 12){
        time = `${day} ${h-12}:${m}:${s} PM`;
    }
    else{
        time = `${day} ${h}:${m}:${s} AM`;
    }
    console.log(time);
    if (!override){
        switch(tutor) {
            case "Nopal":
                // tuth 8-2 3:45-6
                if (day == 2 || day == 4){ // TuTh
                    if ((h > 8 && h < 14) || ((h > 16 && h < 18) || (h == 15 && m > 45))){ // 8:00 AM - 2:00 PM, 3:45 PM - 6:00 PM
                        return true;
                    }
                    return false;
                }/*
                else if (day == 2 || day == 4){ // TuTh
                    if ((h == 12 && m >= 15) || (h > 12 && h < 15) || (h == 15 && m < 30)){ // 12:15 - 3:30 PM
                        return true;
                    }
                    return false;
                }*/
                return false;
            break;

            case "Enrique": // tuth 8-4:30 we 10-2:30
                if (day == 2 || day == 4){ // TuTh
                    if ((h >= 8 && h < 17) || (h == 16 && m < 30)){ // 8:00 AM - 4:30 PM
                        if (!(h = 12 && m < 30)){ //lunch 12:00 PM - 12:30 PM
                            return true; // in
                        }
                    }
                    return false;
                }
                else if (day == 3){ // We
                    if ((h == 14 && m < 30) || (h > 10 && h < 15)){ // 10:00 AM - 2:30 PM
                        return true;
                    }
                    return false;
                }
                return false;
            break;
        }
    }
    return h;
}

let override1 = override2 = override3 = false;
let status1 = status2 = status3 = false; 

setInterval(() => {
    h = updateStatus();
    if (h == 0){
        override1 = override2 = override3 = false;
    }
}, 1000)

setInterval(() => {
    status1 = updateStatus("Jasmine", override1);
    if (!override1){
        $('.status-1').css("color", "Black");
        if (status1 == true){
            $('.status-1').text("IN");
        }
        else{
            $('.status-1').text("OUT");
        }
    }
}, 1000);
jQuery(() => {
    $('.status-1').click(() => {
        override1 = true;
        console.log("clicked! 1");
        $('.status-1').css("color", "#555");
        if ($('.status-1').text() == "IN"){
            $('.status-1').text("OUT");
        }
        else{
            $('.status-1').text("IN");
        }
        console.log($('.status-1').text());
    });
});

setInterval(() => {
    status2 = updateStatus("Nopal", override2);
    if (!override2){
        $('.status-2').css("color", "Black");
        if (status2 == true){
            $('.status-2').text("IN");
        }
        else{
            $('.status-2').text("OUT");
        }
    }
}, 1000);
jQuery(() => {
    $('.status-2').click(() => {
        override2 = true;
        console.log("clicked! 2");
        $('.status-2').css("color", "#555");
        if ($('.status-2').text() == "IN"){
            $('.status-2').text("OUT");
        }
        else{
            $('.status-2').text("IN");
        }
        console.log($('.status-2').text());
    });
});

setInterval(() => {
    status3 = updateStatus("Enrique", override3);
    if (!override3){
        $('.status-3').css("color", "Black");
        if (status3 == true){
            $('.status-3').text("IN");
        }
        else{
            $('.status-3').text("OUT");
        }
    }
}, 1000);
jQuery(() => {
    $('.status-3').click(() => {
        override3 = true;
        console.log("clicked! 3");
        $('.status-3').css("color", "#555");
        if ($('.status-3').text() == "IN"){
            $('.status-3').text("OUT");
        }
        else{
            $('.status-3').text("IN");
        }
        console.log($('.status-3').text());
    });
    
})