let updateStatus = (tutor)=>{
    const date = new Date();
    day = date.getDay();
    h = date.getHours();
    m = date.getMinutes();
    switch(tutor) {
        case "Nopal":
            if (day == 1 || day == 3){ // MoWe
                if ((h == 16 && m >= 15) || (h > 16 && h < 18)){ // 4:15 - 6:00 PM
                    return h;
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

        return false;
            break;
        case "Enrique":

        return false;
            break;
    }
}
$(document).ready(() => {
    setInterval(console.log, 1000, updateStatus("Nopal"))
    setInterval(console.log, 1000, updateStatus("Jasmine"))
    setInterval(console.log, 1000, updateStatus("Enrique"))
    $('.status-1').click(() => {
        console.log($('.status-1').text())

        if ($('.status-1').text() == "IN"){
            $('.status-1').text("OUT")
        }
        else{
            $('.status-1').text("IN")
        }
    })
    $('.status-2').click(() => {
        console.log("clicked!")
        if ($('.status-2').text() == "IN"){
            $('.status-2').text("OUT")
        }
        else{
            $('.status-2').text("IN")
        }
    })
    $('.status-3').click(() => {
        console.log("clicked!")
        if ($('.status-3').text() == "IN"){
            $('.status-3').text("OUT")
        }
        else{
            $('.status-3').text("IN")
        }
    })
})