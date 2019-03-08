"use strict";
$(window).on("load", function() {
    let e = $(".preloader"),
        a = $(".lines-grid");
    e.find(".spinner").fadeOut(function() {
        e.fadeOut(), a.addClass("loaded")
    })
}), $(function() {
    $(window).width(), $(window).height();
    $(".header").on("click", ".menu-btn", function() {
        $(".header").hasClass("opened") ? $(".header").removeClass("opened") : $(".header").addClass("opened")
    }), $("#home-area").length && $(".main-nav").on("click", "a", function() {
        var e = $(".lines-grid"),
            a = $(this).attr("href"),
            i = $(".area-inner"),
            n = $(a),
            t = $(".main-nav li"),
            l = $(this).closest("li");
        return !l.hasClass("active") & $("#home-area").length && (t.removeClass("active"), e.removeClass("loaded"), l.addClass("active"), setTimeout(function() {
            e.addClass("loaded"), $(i).removeClass("active"), $(n).addClass("active")
        }, 1e3)), !1
    }), $(".main-nav").on("click", "a", function() {
        return $("#home-area").length || (location.href = "/rafsan/" + $(this).attr("href")), !1
    });
    var e = location.hash,
        a = $(e);
    0 == e.indexOf("#") && -1 != e.indexOf("-area") && a.length && ($(".main-nav li").removeClass("active"), $('.main-nav a[href="' + e + '"]').parent().addClass("active"), $(".lines-grid").removeClass("loaded"), $(".area-inner").removeClass("active"), $(e).addClass("active")), $(".typed-title").typed({
        stringsElement: $(".typing-title"),
        backDelay: 1e3,
        typeSpeed: 0,
        loop: !0
    })
}), $(window).on("load", function() {
    $(".pt-portfolio-items").isotope(), $(".cat-nav li").on("click", function() {
        $(".cat-nav li").removeClass("active"), $(this).addClass("active");
        let e = $(this).attr("data-filter");
        $(".pt-portfolio-items").isotope({
            filter: e,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        })
    })
}), 

// $(document).ready(function(){
//     $("#resume-area").bind("click", function(event) {
//     $("#resume-area:in-viewport").each(function() {
//         $("#bar1").barfiller(), 
//         $("#bar2").barfiller(), 
//         $("#bar3").barfiller(), 
//         $("#bar4").barfiller(), 
//         $("#bar5").barfiller()
//     })
// })
// })
// , 

$(".menu-toggle").on("click", function() {
    $(".header").toggleClass("mobile-menu-hide"), 
    $(".menu-toggle").toggleClass("open"), 
    $(".page-wrapper").toggleClass("bring-image"), 
    $(".content-wrapper").toggleClass("holo")
});
$('.menuBtn').on('click', () =>{
    $(".header").toggleClass("menuOpen");
    $('.menuBtn').toggleClass('menuBtnOpen');
    $('.area-inner').toggleClass('paddingAdjust');
});
$('.closeBtn').on('click', () =>{
    $(".header").toggleClass("menuOpen");
    $('.menuBtn').toggleClass('menuBtnOpen');
    $('.area-inner').toggleClass('paddingAdjust');
});
$(".navToggle").click (function(){
    $(this).toggleClass("open");
    $(".header").toggleClass("menuOpen");
    $('.area-inner').toggleClass('paddingAdjust');
  });

$(".nav-pt-new").click(function(){
    $("header").removeClass("mobile-menu-hide"),
    $(".content-wrapper").removeClass("holo"),
    $(".menu-toggle").removeClass("open")
});




