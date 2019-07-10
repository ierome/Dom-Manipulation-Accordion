$(document).ready(() => {
    $(".sectionButton1").on('click', function(e) {
        $(".panel1").toggleClass("show")
        $(".panel2").removeClass("show")
        $(".panel3").removeClass("show")
    })
    $(".sectionButton2").on('click', function(e) {
        $(".panel2").toggleClass("show")
        $(".panel1").removeClass("show")
        $(".panel3").removeClass("show")
    })
    $(".sectionButton3").on('click', function(e) {
        $(".panel3").toggleClass("show")
        $(".panel2").removeClass("show")
        $(".panel1").removeClass("show")
    })
})
//Section One