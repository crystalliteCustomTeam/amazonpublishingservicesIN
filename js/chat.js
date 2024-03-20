window.$zopim || function (a, d) {
        var b = $zopim = function (a) {
                b._.push(a)
            },
            c = b.s = a.createElement(d);
        a = a.getElementsByTagName(d)[0];
        b.set = function (a) {
            b.set._.push(a)
        };
        b._ = [];
        b.set._ = [];
        c.async = !0;
        c.setAttribute("charset", "utf-8");
        c.src = "";
        b.t = +new Date;
        c.type = "text/javascript";
        a.parentNode.insertBefore(c, a)
    }
    (document, "script");

$zopim(function () {
    function a(a) {
        1 <= a && $zopim.livechat.window.show()
    }
    $zopim.livechat.setOnUnreadMsgs(a)
});

function setButtonURL() {
    $zopim.livechat.window.show()
}

function toggleChat() {
    $zopim.livechat.window.show()
}