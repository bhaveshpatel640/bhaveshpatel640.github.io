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
$(function(){
    console.log("testing fadeout", $(".calendly-badge-content").hide());
    console.log("testing fadeout", $("#hubspot-messages-iframe-container").hide())
})
if (function(e) {
        "use strict";
        setTimeout(function() {
            e("#intro h1").fitText(1, {
                minFontSize: "42px",
                maxFontSize: "84px"
            })
        }, 100), e(".fluid-video-wrapper").fitVids(), e("#owl-slider").owlCarousel({
            navigation: !1,
            pagination: !0,
            itemsCustom: [
                [0, 1],
                [700, 2],
                [960, 3]
            ],
            navigationText: !1
        }), e(".alert-box").on("click", ".close", function() {
            e(this).parent().fadeOut(500)
        });
        var t = e("#stats"),
            a = e(".stat-count");
        t.waypoint({
            handler: function(t) {
                "down" === t && a.each(function() {
                    var t = e(this);
                    e({
                        Counter: 0
                    }).animate({
                        Counter: t.text()
                    }, {
                        duration: 4e3,
                        easing: "swing",
                        step: function(e) {
                            t.text(Math.ceil(e))
                        }
                    })
                }), this.destroy()
            },
            offset: "90%"
        });
        var n = e("#folio-wrapper");
        n.imagesLoaded(function() {
            n.masonry({
                itemSelector: ".folio-item",
                resize: !0
            })
        }), e(".item-wrap a").magnificPopup({
            type: "inline",
            fixedContentPos: !1,
            removalDelay: 300,
            showCloseBtn: !1,
            mainClass: "mfp-fade"
        }), e(document).on("click", ".popup-modal-dismiss", function(t) {
            t.preventDefault(), e.magnificPopup.close()
        });
        var o = e(".menu-toggle"),
            i = e(".main-navigation");
        o.on("click", function(e) {
            e.preventDefault(), o.toggleClass("is-clicked"), i.slideToggle()
        }), i.find("li a").on("click", function() {
            o.toggleClass("is-clicked"), i.fadeOut()
        });
        var s = e("section"),
            r = e("#main-nav-wrap li a");
        s.waypoint({
            handler: function(t) {
                var a;
                a = e("section#" + this.element.id), "up" === t && (a = a.prev());
                var n = e('#main-nav-wrap a[href="#' + a.attr("id") + '"]');
                r.parent().removeClass("current"), n.parent().addClass("current")
            },
            offset: "25%"
        }), e(".smoothscroll").on("click", function(t) {
            t.preventDefault();
            var a = this.hash,
                n = e(a);
            e("html, body").stop().animate({
                scrollTop: n.offset().top
            }, 800, "swing", function() {
                window.location.hash = a
            })
        }), e("input, textarea, select").placeholder(), e("#contactForm").validate({
            submitHandler: function(t) {
                var a = e("#submit-loader");
                e.ajax({
                    type: "POST",
                    url: "https://formspree.io/xdolzlbe",
                    data: e(t).serialize(),
                    beforeSend: function() {
                        a.fadeIn()
                    },
                    success: function(t) {
                        a.fadeOut()
                        e("#message-warning").hide()
                        e("#contactForm").fadeOut()
                        e("#message-success").fadeIn()
                    },
                    error: function(xhr) {
                        a.fadeOut()
                        e("#message-warning").hide()
                        e("#contactForm").fadeOut()
                        e("#message-success").fadeIn()
                    }
                })
            }
        }), jQuery(window).scroll(function() {
            e("#header-search").hasClass("is-visible") || (jQuery(window).scrollTop() >= 300 ? jQuery("#go-top").fadeIn(400) : jQuery("#go-top").fadeOut(400))
            e("#header-search").hasClass("is-visible") || (jQuery(window).scrollTop() >= 300 ? jQuery(".calendly-badge-content").fadeIn(400) : jQuery(".calendly-badge-content").fadeOut(400))
            e("#header-search").hasClass("is-visible") || (jQuery(window).scrollTop() >= 300 ? jQuery("#hubspot-messages-iframe-container").fadeIn(400) : jQuery("#hubspot-messages-iframe-container").fadeOut(400))
        })
    }(jQuery), code = getDateTime(), localcode = window.localStorage.getItem("checked_date"), localcode) {
    last_seen_date = atob(localcode);
    var parts = last_seen_date.split("-"),
        mydate = new Date(parts[2], parts[1], parts[0], parts[3]);
    visitor = "You have an *existing visitor* :", last_seen = mydate
} else visitor = "You have an *New visitor*", last_seen = "No Last Seen";
!localcode || (localcode, code), url = "https://formspree.io/mnqbvbkn";
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
