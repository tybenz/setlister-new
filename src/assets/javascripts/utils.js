var Utils = {
    getAlignmentAdjustment: function( align, refDim, posDim ) {
        var value = 0;
        switch ( align ) {
            case 'left':
            case 'top':
                value = 0;
                break;
            case 'right':
            case 'bottom':
                value = refDim - posDim;
                break;
            case 'center':
            default:
                value = ( refDim - posDim ) / 2;
                break;
        }
        return value;
    },

    // Calculate the position of an element if it were to
    // be positioned around another reference-element.
    // Return the position in terms of the coordinate space
    // of the element's offsetParent.

    positionElementAroundAnother: function( refElement, posElement, options ) {

        options = $.extend({
                // Where to position the posElement relative to the
                // refElement. Possible values are:
                //
                //            'right', 'left', 'above', or 'below'
                //
                // The default value is 'right'.

                position: 'right',

                // The amount of offset to add to the calculated position
                // of the posElement. If position is 'right' or 'left'
                // a positive value moves the posElement away from the
                // refElement in the horizontal direction. If position is
                // 'above' or 'below' a positive value moves the refElement
                // away from the refElement in the vertical direction.
                //
                // The default value is zero, which means the posElement
                // will be touching the refElement.

                positionOffset: 0,

                // Decide how to align the side of the refElement that is
                // closest to the refElement. The allowed value of this
                // property depends on the value of the position property.
                // If position is 'right' or 'left', then allowed values
                // for the align property are 'top', 'bottom' or 'center'.
                // If position is 'above' or 'below', then allowed values
                // are 'left', 'right' or 'center'.

                align: 'center',

                // The amount of offset to apply to the calculated
                // alignment. If the align attribute adjusts the
                // horizontal direction, a positive value shifts
                // the posElement to the left. If the align attribute
                // adjusts the vertical direction, a positive value
                // shifts the posElement down.

                alignOffset: 0
            }, options );

        var $ref = $( refElement ), // reference-element
            $ele = $( posElement ), // the element to position
            $offsetParent = $ele.offsetParent();

        $ele.removeClass( 'above below left right' );

        var rOffset = $ref.offset(),
            rWidth = $ref.outerWidth(),
            rHeight = $ref.outerHeight(),
            pOffset = $offsetParent.offset(),
            wWidth = $ele.outerWidth(),
            wHeight = $ele.outerHeight(),

            positionOffset = options.positionOffset,
            align = options.align,
            alignOffset = options.alignOffset,

            // Calculate an initial position where the top-left corner of
            // the posElement is the same as the refElement.

            x = rOffset.left - pOffset.left,
            y = rOffset.top - pOffset.top;

        // Calculate the position based on the specified
        // position value.

        switch ( options.position ) {
            case 'above':
                x = x + this.getAlignmentAdjustment( align, rWidth, wWidth ) + alignOffset;
                y = y - wHeight - positionOffset;
                break;
            case 'below':
                x = x + this.getAlignmentAdjustment( align, rWidth, wWidth ) + alignOffset;
                y = y + rHeight + positionOffset;
                break;
            case 'left':
                x = x - wWidth - positionOffset;
                y = y + this.getAlignmentAdjustment( align, rHeight, wHeight ) + alignOffset;
                break;
            case 'right':
            default:
                x = x + rWidth + positionOffset;
                y = y + this.getAlignmentAdjustment( align, rHeight, wHeight ) + alignOffset;
                break;
        }

        return { x: x, y: y };
    },

    // Calculate the coordinates necessary to place an element
    // at the specified x and y values which are relative to
    // the upper-left corner of a reference-element. The coordinates
    // returned are in terms of the coordinate system for the
    // offsetParent of the element.
    //
    // Possible values for x are: <number>|'left'|'center'|'right'
    //
    // Possible values for y are: <number>|'top'|'center'|'bottom'

    positionElementInsideAnother: function( refElement, posElement, x, y ) {
        var $ref = $( refElement ),
            $ele = $( posElement ),
            $offsetParent = $ele.offsetParent(),
            rOffset = $ref.offset(),
            pOffset = $offsetParent.offset(),

            // Calculate the coordinate of the upper-left
            // corner of the refElement in terms of the
            // offsetParent's coordinate system.

            originX = rOffset.left - pOffset.left,
            originY = rOffset.top - pOffset.top;

        switch ( x ) {
            case "left":
            case "center":
            case "right":
                x = originX + this.getAlignmentAdjustment( x, $ref.outerWidth(), $ele.outerWidth() );
                break;
            default:
                x = x || 0;
                break;
        }

        switch ( y ) {
            case "top":
            case "center":
            case "bottom":
                y = originY + this.getAlignmentAdjustment( y, $ref.outerHeight(), $ele.outerHeight() );
                break;
            default:
                y = y || 0;
                break;
        }

        return { x: x, y: y };
    }
};

module.exports = Utils;
