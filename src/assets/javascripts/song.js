var initKeySelector = require( './key_selector' );
var $ = require( 'jquery' );
initKeySelector( $( '.key-selector' ) );
initKeySelector( $( '.capo-selector' ), true );

$( '.print-button' ).on( 'click', function( evt ) {
    evt.preventDefault();
    window.print();
});
