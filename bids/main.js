! function(e) {
    function t(n) { if (o[n]) return o[n].exports; var c = o[n] = { exports: {}, id: n, loaded: !1 }; return e[n].call(c.exports, c, c.exports, t), c.loaded = !0, c.exports } var o = {};
    t.m = e, t.c = o, t.p = "", t(0) }([function(e, t, o) { e.exports = o(1) }, function(e, t) { var o = document.getElementById("navigation"),
        n = document.getElementById("content"),
        c = n.offsetTop;
    window.addEventListener("resize", function() { c = n.offsetTop }); var i = document.querySelectorAll("#navigation a");
    i.forEach(function(e) { e.addEventListener("click", function(t) { t.preventDefault(); var o = document.querySelector(e.getAttribute("href"));
            window.scrollTo(0, o.offsetTop - 100) }) }), window.addEventListener("scroll", function() { window.scrollY >= c ? o.classList.add("sticky") : o.classList.remove("sticky"), i.forEach(function(e) { var t = document.querySelector(e.getAttribute("href")),
                o = t.offsetTop + t.offsetHeight;
            o -= 200; var n = t.offsetTop - 200,
                c = window.scrollY >= n,
                i = window.scrollY <= o;
            c && i ? e.classList.add("active") : e.classList.remove("active") }) }); var r = document.getElementById("togleMenu");
    r.addEventListener("click", function(e) { e.preventDefault(), o.classList.toggle("show"), r.classList.toggle("is-active") }) }]);