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
        if (e("#header-search").hasClass("is-visible") || (jQuery(window).scrollTop() >= 300)) {
            jQuery("#go-top").fadeIn(400);
            jQuery(".calendly-badge-content").fadeIn(400);
            jQuery("#hubspot-messages-iframe-container").fadeIn(400);
        } else {
            jQuery("#go-top").fadeOut(400);
            jQuery(".calendly-badge-content").fadeOut(400);
        }
    })
})
