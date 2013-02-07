/* Copyright 2011 Evite LLC */

// We purposely use under_case because camelCaseSucksAss
//
var base_uri = "/console/";

// -------------------------------------------------------------------------- //
// Helper functions
//
function json_get(uri, sfun, efun){
    // I think there are other ajax options we might need to make
    // available
    $.ajax({
        url: base_uri + uri,
        type: "GET",
        cache: false,
        async: true,
        success: sfun,
        error: efun
    });
}
function json_post(uri, data, sfun, efun){
    // I think there are other ajax options we might need to make
    // available
    $.ajax({
        url: base_uri + uri,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: data,
        cache: false,
        async: true,
        success: sfun,
        error: efun
    });
}
var generic_error = function(data){
    var body = JSON.parse(data.responseText);
    alert("An Error Has Occurred:\n" + body.message + '\n\nWith Code: ' + body.code);
};

function set_nav(){
    // This highlights the active item for the left navigation
    var uri = window.location.pathname;
    var groups = uri.match(/\/console\/([^/]+)\/([^/]+)/);
    if(groups && groups.length > 2){
        $('#' + groups[1] + '_' + groups[2]).addClass('active');
    }
}

// -------------------------------------------------------------------------- //
// Body onload
function init(){
    // This highlights the active item for the left navigation
    set_nav();
}
$(document).ready(init);

// -------------------------------------------------------------------------- //
// Our main console object. Each section should implement itself in a new file.
// so like console.events could be in events.js.
//


// Best not call this console or no console.log :P
var econsole = {};
