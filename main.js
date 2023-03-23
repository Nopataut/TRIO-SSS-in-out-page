$(document).ready(() => {
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