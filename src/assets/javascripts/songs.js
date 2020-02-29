require('./application');
var $ = require('jquery');
var Mustache = require('mustache');
require('./display');
require( './key_selector' );

function authError() {
    window.location = '/auth_error';
}

var $flyout = $('.add-to-setlist.flyout');
var display = new WebPro.Widget.Display( $flyout, {
    triggers: $( '.add-to-setlist-link' ),
    displayClass: 'show',
    hideClass: 'hide',
    displayEvent: 'click',
    activeClass: 'active',
    positionAround: {
        position: 'left',
        positionOffset: 10,
        align: 'top',
        alignOffset: -20
    }
});
var flyoutTemplate = $( '#flyout-template' ).text();

$( '.add-to-setlist.flyout' ).on( 'click', 'li:not(.head)', function(evt) {
    var $this = $( evt.target ),
        $flyout = $this.closest( '.flyout' ),
        $spinner = $this.find( '.icon-spin' ),
        $ok = $this.find( '.icon-ok' );

    $.ajax({
        url: '/setlist_songs',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            song_id: $flyout.data( 'song_id' ),
            data_key: $flyout.data( 'key' ),
            setlist_id: $this.data( 'id' )
        }),
        beforeSend: function() {
            $spinner.addClass( 'show' );
        },
        error: authError,
        success: function ( data ) {
            $spinner.removeClass( 'show' );
            $ok.addClass( 'show' );
        }
    });
});

display.on( 'wp-display-before-show', function( evt, trigger ) {
    var $trigger = $( trigger );
    $flyout.find('.icon-spin').removeClass('show');
    $flyout.find('.icon-ok').removeClass('show');
    $flyout.data( 'song_id', $trigger.data( 'id' ) );
    $flyout.data( 'key', $trigger.data( 'key' ) );
});
