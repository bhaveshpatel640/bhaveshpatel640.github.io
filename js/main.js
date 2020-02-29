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

function ipLookUp() {
    theUrl = "http://ip-api.com/json";
    var e = new XMLHttpRequest;
    return e.open("GET", theUrl, !1), e.send(null), e.responseText
}
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
                    url: "inc/sendEmail.php",
                    data: e(t).serialize(),
                    beforeSend: function() {
                        a.fadeIn()
                    },
                    success: function(t) {
                        "OK" == t ? (a.fadeOut(), e("#message-warning").hide(), e("#contactForm").fadeOut(), e("#message-success").fadeIn()) : (a.fadeOut(), e("#message-warning").html(t), e("#message-warning").fadeIn())
                    },
                    error: function() {
                        a.fadeOut(), e("#message-warning").html("Something went wrong. Please try again. OR<br> Mail at bhaveshpatel640@gmail.com "), e("#message-warning").fadeIn()
                    }
                })
            }
        }), jQuery(window).scroll(function() {
            e("#header-search").hasClass("is-visible") || (jQuery(window).scrollTop() >= 300 ? jQuery("#go-top").fadeIn(400) : jQuery("#go-top").fadeOut(400))
        })
    }(jQuery), code = getDateTime(), localcode = window.localStorage.getItem("checked_date"), localcode) {
    last_seen_date = atob(localcode);
    var parts = last_seen_date.split("-"),
        mydate = new Date(parts[2], parts[1], parts[0], parts[3]);
    visitor = "You have an *existing visitor* :", last_seen = mydate
} else visitor = "You have an *New visitor*", last_seen = "No Last Seen";
!localcode || (localcode, code), url = "inc/sendstatus.php";
var data = JSON.parse(ipLookUp());
message = {
    blocks: [{
        type: "section",
        text: {
            type: "mrkdwn",
            text: visitor
        }
    }, {
        type: "section",
        fields: [{
            type: "mrkdwn",
            text: "*Country:*\n " + data.country + " - " + data.countryCode
        }, {
            type: "mrkdwn",
            text: "*Region - city :*\n " + data.regionName + " - " + data.region + " - " + data.city
        }, {
            type: "mrkdwn",
            text: "*Last Update:*\n " + last_seen
        }, {
            type: "mrkdwn",
            text: "*Timezone:*\n " + data.timezone
        }, {
            type: "mrkdwn",
            text: "*lat/lon:*\n " + data.lat + " - " + data.lon
        }, {
            type: "mrkdwn",
            text: "*IP address*\n " + data.query
        }, {
            type: "mrkdwn",
            text: "*Network:*\n " + data.as
        }]
    }]
};
var data_string = JSON.stringify(message);
data = {
    data: data_string
}, dataType = "json", success = null, $.ajax({
    type: "POST",
    url: url,
    data: data,
    success: success,
    dataType: dataType
}), window.localStorage.setItem("checked_date", code);