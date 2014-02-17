function disableButton(id, url) {
    $("#" + id).button("disable");
}

function showModal() {
    $("body").append('<div class="modalWindow" id="divModal"/>');
    $('#divModal').css({ 'height': $('#page1').height() })
    $.mobile.showPageLoadingMsg();
}

function hideModal() {
    $(".modalWindow").remove();
    $.mobile.hidePageLoadingMsg();
}

$(document).ready(function () {
    $.ajaxSetup({
        beforeSend: function (req) {
            showModal();
        },
        complete: function (req) {
            hideModal();
        }
    })
});

$(document).on('pagehide', function (e) {
    var page = $(e.target);
    if (!$.mobile.page.prototype.options.domCache
        && (!page.attr('data-dom-cache')
            || page.attr('data-dom-cache') == "false")
        ) {
        page.remove();
    }
});