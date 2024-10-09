function houdini(name) {

    $('#' + name).fadeOut(); 
    $('.' + name).fadeOut(); 
}
$(document).ready(function() {
    $('#disappear-btn').click(function() {
        houdini('disappear');  
    });
});
