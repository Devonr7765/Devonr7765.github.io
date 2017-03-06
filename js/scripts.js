// Empty JS for your own code to be here
$('#DylImg').hover(function () {
    $(this).attr('src', 'Images/Hypno-16-Dylan.gif');
}, function () {
    $(this).attr('src', 'Images/DB.jpg');
});
$('#GlynnImg').hover(function () {
    $(this).attr('src', 'Images/Hypno-5-Glynn.gif');
}, function () {
    $(this).attr('src', 'Images/GR.jpg');
});
$('#GImg').hover(function () {
    $(this).attr('src', 'Images/Hypno-4-G.gif');
}, function () {
    $(this).attr('src', 'Images/GS.jpg');
});
$('#DevImg').hover(function () {
    $(this).attr('src', 'Images/Hypno-6-Dev.gif');
}, function () {
    $(this).attr('src', 'Images/DR.jpg');
});
$('#VinceImg').hover(function () {
    $(this).attr('src', 'Images/Hypno-2-Vince.gif');
}, function () {
    $(this).attr('src', 'Images/VK.jpg');
});
var divPos = {};
var offset = $("#pyramidDiv").offset();
$("#pyramidDiv").mousemove(function (e) {
    divPos = {
        x: e.pageX - offset.left,
        y: e.pageY - offset.top
    };
    var xPercent = divPos.x / $("#pyramidDiv").width() * 100;

    if (xPercent > 0 && xPercent < 25) {

        $('#HoverImg').attr('src', 'Images/Pyramid_sunrise.jpg');
    }
    else if (xPercent > 25 && xPercent < 50) {
        $('#HoverImg').attr('src', 'Images/pyramid.jpg');
    }
    else if (xPercent > 50 && xPercent < 75) {
        $('#HoverImg').attr('src', 'Images/Pyramid_night.jpg');
    }
    else if (xPercent > 75 && xPercent < 100) {
        $('#HoverImg').attr('src', 'Images/Pyramid_sunset.jpg');
        
    }
}).mouseout( function () {
    $('#HoverImg').attr('src', null);
});

