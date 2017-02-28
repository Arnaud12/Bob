$(document).ready(function() {
    button = $('.ui.right.fixed.menu');
    sidebar = $('.ui.sidebar').sidebar({
        onShow: function() {
            button.hide();
        },
        onHide: function() {
            button.show();
        }
    });

    // sidebar
    button.click(function() {
        sidebar.sidebar('show');
    });
    button.click(function() {
        $('.ui.sidebar').sidebar('hide');
    });
    // bouton sidebar
    $('.sticky.button').sticky();

    // navbar
    $('.item').click(function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    // flip card
    // deces
    $('.ui.card.deces').click(function() {
        $('.deces')
            .shape('set next side', '.second.side')
            .shape('flip back');
    });
    // planning
    $('.ui.card.planning').click(function() {
        $('.planning')
            .shape('set next side', '.second.side')
            .shape('flip back');
    });
    // stats
    $('.ui.card.stats').click(function() {
        $('.stats')
            .shape('set next side', '.second.side')
            .shape('flip back');
    });
    // convois
    $('.ui.card.convois').click(function() {
        $('.convois')
            .shape('set next side', '.second.side')
            .shape('flip back');
    });

    // page deces
    $('.ui.accordion').accordion('refresh');

    // page planning
    $('#mycalendar').monthly();

    //fin de code
});
