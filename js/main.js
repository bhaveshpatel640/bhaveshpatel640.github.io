function addsubject(e) {
    "static" == e ? $("#contactSubject").val("Enquiry for the Static website development.") : "dynamic" == e ? $("#contactSubject").val("Enquiry for the Dynamic website development.") : "corporate" == e ? $("#contactSubject").val("Enquiry for the Corporate website development.") : "ecommerce" == e ? $("#contactSubject").val("Enquiry for the E commerce website development.") : $("#contactSubject").val("Enquiry for the website development.")
}

function getDateTime() {
    let e = new Date;
    var t = e.getDate(),
        a = e.getMonth(),
        n = e.getFullYear(),
        o = e.getHours();
    return btoa(t + "-" + a + "-" + n + "-" + o)
}

// function ipLookUp() {
//     theUrl = "https://ip-api.com/json";
//     var e = new XMLHttpRequest;
//     return e.open("GET", theUrl, !1), e.send(null), e.responseText
// }
$(function () {
    console.log("testing fadeout", $(".calendly-badge-content").hide());
    console.log("testing fadeout", $("#hubspot-messages-iframe-container").hide())
})
$(function (e) {
    "use strict";
    var o = e(".menu-toggle"), i = e(".main-navigation");
    o.on("click", function (ee) {
        ee.preventDefault()
        o.toggleClass("is-clicked")
        i.slideToggle()
    })
    i.find("li a").on("click", function () {
        o.toggleClass("is-clicked")
        i.fadeOut()
    });
    var s = e("section"),
        r = e("#main-nav-wrap li a");
    s.waypoint({
        handler: function (t) {
            var a;
            a = e("section#" + this.element.id)
            "up" === t && (a = a.prev());
            var n = e('#main-nav-wrap a[href="#' + a.attr("id") + '"]');
            r.parent().removeClass("current")
            n.parent().addClass("current")
        },
        offset: "25%"
    })
    e(".smoothscroll").on("click", function (t) {
        t.preventDefault();
        var a = this.hash,
            n = e(a);
        e("html, body").stop().animate({
            scrollTop: n.offset().top
        }, 800, "swing", function () {
            window.location.hash = a
        })
    })
    e("input, textarea, select").placeholder()
    e("#contactForm").validate({
        submitHandler: function (t) {
            var a = e("#submit-loader");
            e.ajax({
                type: "POST",
                url: "https://formspree.io/xdolzlbe",
                data: e(t).serialize(),
                beforeSend: function () {
                    a.fadeIn()
                },
                success: function () {
                    a.fadeOut()
                    e("#message-warning").hide()
                    e("#contactForm").fadeOut()
                    e("#message-success").fadeIn()
                },
                error: function () {
                    a.fadeOut()
                    e("#message-warning").hide()
                    e("#contactForm").fadeOut()
                    e("#message-success").fadeIn()
                }
            })
        }
    })
    jQuery(window).scroll(function () {
        e("#header-search").hasClass("is-visible") || (jQuery(window).scrollTop() >= 300 ? jQuery("#go-top").fadeIn(400) : jQuery("#go-top").fadeOut(400))
        e("#header-search").hasClass("is-visible") || (jQuery(window).scrollTop() >= 300 ? jQuery(".calendly-badge-content").fadeIn(400) : jQuery(".calendly-badge-content").fadeOut(400))
        e("#header-search").hasClass("is-visible") || (jQuery(window).scrollTop() >= 300 ? jQuery("#hubspot-messages-iframe-container").fadeIn(400) : jQuery("#hubspot-messages-iframe-container").fadeOut(400))
    })
})

// last_seen = "No Last Seen";
// !localcode || (localcode, code)
// url = "https://formspree.io/mnqbvbkn";
// var data = JSON.parse(ipLookUp());

// data = {
//     "Country": data.country + " - " + data.countryCode,
//     "Region": data.regionName + " - " + data.region + " - " + data.city,
//     "Last Update": last_seen,
//     "Timezone": data.timezone,
//     "lat/lon": data.lat + " - " + data.lon,
//     "IP address": data.query,
//     "Network": data.as
// },
// dataType = "json",
// success = null, $.ajax({
//     type: "POST",
//     url: url,
//     data: data,
//     success: success,
//     dataType: dataType
// }), window.localStorage.setItem("checked_date", code);
