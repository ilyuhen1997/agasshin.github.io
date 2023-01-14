console.log("Hello");
$(".flip-card").click(function(){

    $(".flip-card").removeClass("flip-card-flipped");

    $.each($(this)[0].classList, function (key, value) {
        if (value.indexOf("group-") === 0) {
            console.log("."+value);
            $("."+value).addClass("flip-card-flipped");
        }
    });

});
 
$('.flip-card').tilt({
    glare: true,
    maxGlare: .5
})