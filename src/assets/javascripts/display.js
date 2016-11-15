/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(4),
	__webpack_require__(36),
	__webpack_require__(5),
	__webpack_require__(8),
	__webpack_require__(9),
	__webpack_require__(14),
	__webpack_require__(17),
	__webpack_require__(18),
	__webpack_require__(19),
	__webpack_require__(7),
	__webpack_require__(20),
	__webpack_require__(21),
	__webpack_require__(22),
	__webpack_require__(25),
	__webpack_require__(26),
	__webpack_require__(27),
	__webpack_require__(28),
	__webpack_require__(29),
	__webpack_require__(31),
	__webpack_require__(32),
	__webpack_require__(33),
	__webpack_require__(34),
	__webpack_require__(3),
	__webpack_require__(15),
	__webpack_require__(37),
	__webpack_require__(38),
	__webpack_require__(1),
	__webpack_require__(39),
	__webpack_require__(41),
	__webpack_require__(10),
	__webpack_require__(43),
	__webpack_require__(44),
	__webpack_require__(45),
	__webpack_require__(46),
	__webpack_require__(50),
	__webpack_require__(40),
	__webpack_require__(23),
	__webpack_require__(51),
	__webpack_require__(11),
	__webpack_require__(52),
	__webpack_require__(13),
	__webpack_require__(30),
	__webpack_require__(53),
	__webpack_require__(24),
	__webpack_require__(54),
	__webpack_require__(42),
	__webpack_require__(35),
	__webpack_require__(12),
	__webpack_require__(55),
	__webpack_require__(6),
	__webpack_require__(56)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( WebPro ) {
	    return WebPro;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(3), __webpack_require__(6) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Utils, Widget ) {
	    var Button = Widget.build( 'Widget.Button', Widget, {
	        defaultOptions: {
	            hoverClass: 'wp-button-hover',
	            activeClass: 'wp-button-down',
	            disabledClass: 'wp-button-disabled',
	            disabled: false,
	            callback: null,
	            overEvent: 'mouseover',
	            downEvent: 'mousedown',
	            upEvent: 'mouseup',
	            outEvent: 'mouseout',
	            clickEvent: 'click'
	        },

	        _attachBehavior: function() {
	            var self = this,
	                options = this.options,
	                muFunc = function( e ) {
	                    self.mouseDown = false;
	                    self.$element.removeClass( self.options.activeClass );
	                    $( document ).off( options.upEvent, muFunc );
	                };

	            this.mouseDown = false;

	            this.$element
	                .on( options.overEvent, function( e ) {
	                        if ( !self.options.disabled ) {
	                            self.$element.addClass( self.options.hoverClass + ( self.mouseDown ? ' ' + self.options.activeClass : '' ) );
	                        }
	                    })
	                .on( options.outEvent, function( e ) {
	                        self.$element.removeClass( self.options.hoverClass + ' ' + self.options.activeClass );
	                    })
	                .on( options.downEvent, function( e ) {
	                        if ( !self.options.disabled ) {
	                            self.mouseDown = true;
	                            self.$element.addClass( self.options.activeClass );
	                            $( document ).on( options.upEvent, muFunc );
	                        }
	                    })
	                .on( options.clickEvent, function( e ) {
	                        if ( !self.options.disabled && self.options.callback ) {
	                            self.options.callback.call( this, e );
	                        }

	                        e.preventDefault();
	                    });

	                this.disabled( this.options.disabled );
	        },

	        disabled: function( val ) {
	            if ( typeof val === 'boolean' ) {
	                this.options.disabled = val;
	                this.$element[ val ? 'addClass' : 'removeClass' ]( this.options.disabledClass );
	            }

	            return this.options.disabled;
	        }
	    });

	    // Add a convenience method to the jQuery Collection prototype,
	    // that applies our Button behavior to all the elements in the collection.

	    $.fn.wpButton = function( options ) {
	        this.each( function() {
	            var b = new Button( this, options );
	            // XXX: We need to associate the Button instance object with
	            //                  the element.
	        });

	        return this;
	    };

	    return Button;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v1.12.0
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-08T19:56Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var deletedIds = [];

	var document = window.document;

	var slice = deletedIds.slice;

	var concat = deletedIds.concat;

	var push = deletedIds.push;

	var indexOf = deletedIds.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "1.12.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1, IE<9
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: deletedIds.sort,
		splice: deletedIds.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray || function( obj ) {
			return jQuery.type( obj ) === "array";
		},

		isWindow: function( obj ) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		isPlainObject: function( obj ) {
			var key;

			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			try {

				// Not own constructor property must be Object
				if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
					return false;
				}
			} catch ( e ) {

				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}

			// Support: IE<9
			// Handle iteration over inherited properties before own properties.
			if ( !support.ownFirst ) {
				for ( key in obj ) {
					return hasOwn.call( obj, key );
				}
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function( data ) {
			if ( data && jQuery.trim( data ) ) {

				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				( window.execScript || function( data ) {
					window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
				} )( data );
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1, IE<9
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			var len;

			if ( arr ) {
				if ( indexOf ) {
					return indexOf.call( arr, elem, i );
				}

				len = arr.length;
				i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

				for ( ; i < len; i++ ) {

					// Skip accessing in sparse arrays
					if ( i in arr && arr[ i ] === elem ) {
						return i;
					}
				}
			}

			return -1;
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			while ( j < len ) {
				first[ i++ ] = second[ j++ ];
			}

			// Support: IE<9
			// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
			if ( len !== len ) {
				while ( second[ j ] !== undefined ) {
					first[ i++ ] = second[ j++ ];
				}
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var args, proxy, tmp;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: function() {
			return +( new Date() );
		},

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				ret = [],
				self = this,
				len = self.length;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// init accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector.charAt( 0 ) === "<" &&
					selector.charAt( selector.length - 1 ) === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {

							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id !== match[ 2 ] ) {
								return rootjQuery.find( selector );
							}

							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof root.ready !== "undefined" ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var i,
				targets = jQuery( target, this ),
				len = targets.length;

			return this.filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within
		// the matched set of elements
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// index in selector
			if ( typeof elem === "string" ) {
				return jQuery.inArray( this[ 0 ], jQuery( elem ) );
			}

			// Locate the position of the desired element
			return jQuery.inArray(

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem, this );
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		do {
			cur = cur[ dir ];
		} while ( cur && cur.nodeType !== 1 );

		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return jQuery.nodeName( elem, "iframe" ) ?
				elem.contentDocument || elem.contentWindow.document :
				jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var ret = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				ret = jQuery.filter( selector, ret );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					ret = jQuery.uniqueSort( ret );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					ret = ret.reverse();
				}
			}

			return this.pushStack( ret );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = true;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );

						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// if we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * Clean-up method for dom ready events
	 */
	function detach() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed );
			window.removeEventListener( "load", completed );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	}

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {

		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener ||
			window.event.type === "load" ||
			document.readyState === "complete" ) {

			detach();
			jQuery.ready();
		}
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// we once tried to use readyState "interactive" here,
			// but it caused issues like the one
			// discovered by ChrisS here:
			// http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			// Standards-based browsers support DOMContentLoaded
			} else if ( document.addEventListener ) {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );

			// If IE event model is used
			} else {

				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent( "onreadystatechange", completed );

				// A fallback to window.onload, that will always work
				window.attachEvent( "onload", completed );

				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;

				try {
					top = window.frameElement == null && document.documentElement;
				} catch ( e ) {}

				if ( top && top.doScroll ) {
					( function doScrollCheck() {
						if ( !jQuery.isReady ) {

							try {

								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll( "left" );
							} catch ( e ) {
								return window.setTimeout( doScrollCheck, 50 );
							}

							// detach all dom ready events
							detach();

							// and execute any waiting functions
							jQuery.ready();
						}
					} )();
				}
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Support: IE<9
	// Iteration over object's inherited properties before its own
	var i;
	for ( i in jQuery( support ) ) {
		break;
	}
	support.ownFirst = i === "0";

	// Note: most support tests are defined in their respective modules.
	// false until the test is run
	support.inlineBlockNeedsLayout = false;

	// Execute ASAP in case we need to set body.style.zoom
	jQuery( function() {

		// Minified: var a,b,c,d
		var val, div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Return for frameset docs that don't have a body
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		if ( typeof div.style.zoom !== "undefined" ) {

			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

			support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
			if ( val ) {

				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild( container );
	} );


	( function() {
		var div = document.createElement( "div" );

		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch ( e ) {
			support.deleteExpando = false;
		}

		// Null elements to avoid leaks in IE.
		div = null;
	} )();
	var acceptData = function( elem ) {
		var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
			nodeType = +elem.nodeType || 1;

		// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
		return nodeType !== 1 && nodeType !== 9 ?
			false :

			// Nodes accept data unless otherwise specified; rejection can be conditional
			!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
	};




	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;

	function dataAttr( elem, key, data ) {

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {

			var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				jQuery.data( elem, key, data );

			} else {
				data = undefined;
			}
		}

		return data;
	}

	// checks a cache object for emptiness
	function isEmptyDataObject( obj ) {
		var name;
		for ( name in obj ) {

			// if the public data object is empty, the private is still empty
			if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
				continue;
			}
			if ( name !== "toJSON" ) {
				return false;
			}
		}

		return true;
	}

	function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !acceptData( elem ) ) {
			return;
		}

		var ret, thisCache,
			internalKey = jQuery.expando,

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
			data === undefined && typeof name === "string" ) {
			return;
		}

		if ( !id ) {

			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}

		if ( !cache[ id ] ) {

			// Avoid exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}

		thisCache = cache[ id ];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( typeof name === "string" ) {

			// First Try to find as-is property data
			ret = thisCache[ name ];

			// Test for null|undefined property data
			if ( ret == null ) {

				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	}

	function internalRemoveData( elem, name, pvt ) {
		if ( !acceptData( elem ) ) {
			return;
		}

		var thisCache, i,
			isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}

		if ( name ) {

			thisCache = pvt ? cache[ id ] : cache[ id ].data;

			if ( thisCache ) {

				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {

					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split( " " );
						}
					}
				} else {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat( jQuery.map( name, jQuery.camelCase ) );
				}

				i = name.length;
				while ( i-- ) {
					delete thisCache[ name[ i ] ];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject( cache[ id ] ) ) {
				return;
			}
		}

		// Destroy the cache
		if ( isNode ) {
			jQuery.cleanData( [ elem ], true );

		// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
		/* jshint eqeqeq: false */
		} else if ( support.deleteExpando || cache != cache.window ) {
			/* jshint eqeqeq: true */
			delete cache[ id ];

		// When all else fails, undefined
		} else {
			cache[ id ] = undefined;
		}
	}

	jQuery.extend( {
		cache: {},

		// The following elements (space-suffixed to avoid Object.prototype collisions)
		// throw uncatchable exceptions if you attempt to set expando properties
		noData: {
			"applet ": true,
			"embed ": true,

			// ...but Flash objects (which have this classid) *can* handle expandos
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},

		hasData: function( elem ) {
			elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
			return !!elem && !isEmptyDataObject( elem );
		},

		data: function( elem, name, data ) {
			return internalData( elem, name, data );
		},

		removeData: function( elem, name ) {
			return internalRemoveData( elem, name );
		},

		// For internal use only.
		_data: function( elem, name, data ) {
			return internalData( elem, name, data, true );
		},

		_removeData: function( elem, name ) {
			return internalRemoveData( elem, name, true );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Special expections of .data basically thwart jQuery.access,
			// so implement the relevant behavior ourselves

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = jQuery.data( elem );

					if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						jQuery._data( elem, "parsedAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					jQuery.data( this, key );
				} );
			}

			return arguments.length > 1 ?

				// Sets one value
				this.each( function() {
					jQuery.data( this, key, value );
				} ) :

				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
		},

		removeData: function( key ) {
			return this.each( function() {
				jQuery.removeData( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = jQuery._data( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// not intended for public consumption - generates a queueHooks object,
		// or returns the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return jQuery._data( elem, key ) || jQuery._data( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					jQuery._removeData( elem, type + "queue" );
					jQuery._removeData( elem, key );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = jQuery._data( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );


	( function() {
		var shrinkWrapBlocksVal;

		support.shrinkWrapBlocks = function() {
			if ( shrinkWrapBlocksVal != null ) {
				return shrinkWrapBlocksVal;
			}

			// Will be changed later if needed.
			shrinkWrapBlocksVal = false;

			// Minified: var b,c,d
			var div, body, container;

			body = document.getElementsByTagName( "body" )[ 0 ];
			if ( !body || !body.style ) {

				// Test fired too early or in an unsupported environment, exit.
				return;
			}

			// Setup
			div = document.createElement( "div" );
			container = document.createElement( "div" );
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild( container ).appendChild( div );

			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			if ( typeof div.style.zoom !== "undefined" ) {

				// Reset CSS: box-sizing; display; margin; border
				div.style.cssText =

					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;" +
					"padding:1px;width:1px;zoom:1";
				div.appendChild( document.createElement( "div" ) ).style.width = "5px";
				shrinkWrapBlocksVal = div.offsetWidth !== 3;
			}

			body.removeChild( container );

			return shrinkWrapBlocksVal;
		};

	} )();
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn(
						elems[ i ],
						key,
						raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );

	var rleadingWhitespace = ( /^\s+/ );

	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
			"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
			"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



	function createSafeFragment( document ) {
		var list = nodeNames.split( "|" ),
			safeFrag = document.createDocumentFragment();

		if ( safeFrag.createElement ) {
			while ( list.length ) {
				safeFrag.createElement(
					list.pop()
				);
			}
		}
		return safeFrag;
	}


	( function() {
		var div = document.createElement( "div" ),
			fragment = document.createDocumentFragment(),
			input = document.createElement( "input" );

		// Setup
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

		// IE strips leading whitespace when .innerHTML is used
		support.leadingWhitespace = div.firstChild.nodeType === 3;

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		support.tbody = !div.getElementsByTagName( "tbody" ).length;

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		support.html5Clone =
			document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		input.type = "checkbox";
		input.checked = true;
		fragment.appendChild( input );
		support.appendChecked = input.checked;

		// Make sure textarea (and checkbox) defaultValue is properly cloned
		// Support: IE6-IE11+
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

		// #11217 - WebKit loses check when the name is after the checked attribute
		fragment.appendChild( div );

		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input = document.createElement( "input" );
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
		// old WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<9
		// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
		support.noCloneEvent = !!div.addEventListener;

		// Support: IE<9
		// Since attributes and properties are the same in IE,
		// cleanData must set properties to undefined rather than use removeAttribute
		div[ jQuery.expando ] = 1;
		support.attributes = !div.getAttribute( jQuery.expando );
	} )();


	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],

		// Support: IE8
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
	};

	// Support: IE8-IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {
		var elems, elem,
			i = 0,
			found = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
					undefined;

		if ( !found ) {
			for ( found = [], elems = context.childNodes || context;
				( elem = elems[ i ] ) != null;
				i++
			) {
				if ( !tag || jQuery.nodeName( elem, tag ) ) {
					found.push( elem );
				} else {
					jQuery.merge( found, getAll( elem, tag ) );
				}
			}
		}

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], found ) :
			found;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var elem,
			i = 0;
		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			jQuery._data(
				elem,
				"globalEval",
				!refElements || jQuery._data( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/,
		rtbody = /<tbody/i;

	function fixDefaultChecked( elem ) {
		if ( rcheckableType.test( elem.type ) ) {
			elem.defaultChecked = elem.checked;
		}
	}

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
								!tbody.childNodes.length ) {

								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}

				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	}


	( function() {
		var i, eventName,
			div = document.createElement( "div" );

		// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
		for ( i in { submit: true, change: true, focusin: true } ) {
			eventName = "on" + i;

			if ( !( support[ i ] = eventName in window ) ) {

				// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
				div.setAttribute( eventName, "t" );
				support[ i ] = div.attributes[ eventName ].expando === false;
			}
		}

		// Null elements to avoid leaks in IE.
		div = null;
	} )();


	var rformElems = /^(?:input|select|textarea)$/i,
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {
			var tmp, events, t, handleObjIn,
				special, eventHandle, handleObj,
				handlers, type, namespaces, origType,
				elemData = jQuery._data( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" &&
						( !e || jQuery.event.triggered !== e.type ) ?
						jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
						undefined;
				};

				// Add elem as a property of the handle fn to prevent a memory leak
				// with IE non-native events
				eventHandle.elem = elem;
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener/attachEvent if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						// Bind the global event handler to the element
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );

						} else if ( elem.attachEvent ) {
							elem.attachEvent( "on" + type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
			var j, handleObj, tmp,
				origCount, t, events,
				special, handlers, type,
				namespaces, origType,
				elemData = jQuery.hasData( elem ) && jQuery._data( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;

				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData( elem, "events" );
			}
		},

		trigger: function( event, data, elem, onlyHandlers ) {
			var handle, ontype, cur,
				bubbleType, special, tmp, i,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
					jQuery._data( cur, "handle" );

				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if (
					( !special._default ||
					 special._default.apply( eventPath.pop(), data ) === false
					) && acceptData( elem )
				) {

					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[ type ]();
						} catch ( e ) {

							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				/* jshint eqeqeq: false */
				for ( ; cur != this; cur = cur.parentNode || this ) {
					/* jshint eqeqeq: true */

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: IE<9
			// Fix target property (#1925)
			if ( !event.target ) {
				event.target = originalEvent.srcElement || document;
			}

			// Support: Safari 6-8+
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
				"pageX pageY screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var body, eventDoc, doc,
					button = original.button,
					fromElement = original.fromElement;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add relatedTarget, if necessary
				if ( !event.relatedTarget && fromElement ) {
					event.relatedTarget = fromElement === event.target ?
						original.toElement :
						fromElement;
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						try {
							this.focus();
							return false;
						} catch ( e ) {

							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// Guard for simulated events was moved to jQuery.event.stopPropagation function
					// since `originalEvent` should point to the original event for the
					// constancy with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = document.removeEventListener ?
		function( elem, type, handle ) {

			// This "if" is needed for plain objects
			if ( elem.removeEventListener ) {
				elem.removeEventListener( type, handle );
			}
		} :
		function( elem, type, handle ) {
			var name = "on" + type;

			if ( elem.detachEvent ) {

				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event,
				// to properly expose it to GC
				if ( typeof elem[ name ] === "undefined" ) {
					elem[ name ] = null;
				}

				elem.detachEvent( name, handle );
			}
		};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: IE < 9, Android < 4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;
			if ( !e ) {
				return;
			}

			// If preventDefault exists, run it on the original event
			if ( e.preventDefault ) {
				e.preventDefault();

			// Support: IE
			// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( !e || this.isSimulated ) {
				return;
			}

			// If stopPropagation exists, run it on the original event
			if ( e.stopPropagation ) {
				e.stopPropagation();
			}

			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	// IE submit delegation
	if ( !support.submit ) {

		jQuery.event.special.submit = {
			setup: function() {

				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}

				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
						form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

							// Support: IE <=8
							// We use jQuery.prop instead of elem.form
							// to allow fixing the IE8 delegated submit issue (gh-2332)
							// by 3rd party polyfills/workarounds.
							jQuery.prop( elem, "form" ) :
							undefined;

					if ( form && !jQuery._data( form, "submit" ) ) {
						jQuery.event.add( form, "submit._submit", function( event ) {
							event._submitBubble = true;
						} );
						jQuery._data( form, "submit", true );
					}
				} );

				// return undefined since we don't need an event listener
			},

			postDispatch: function( event ) {

				// If form was submitted by the user, bubble the event up the tree
				if ( event._submitBubble ) {
					delete event._submitBubble;
					if ( this.parentNode && !event.isTrigger ) {
						jQuery.event.simulate( "submit", this.parentNode, event );
					}
				}
			},

			teardown: function() {

				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}

				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove( this, "._submit" );
			}
		};
	}

	// IE change delegation and checkbox/radio fix
	if ( !support.change ) {

		jQuery.event.special.change = {

			setup: function() {

				if ( rformElems.test( this.nodeName ) ) {

					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if ( this.type === "checkbox" || this.type === "radio" ) {
						jQuery.event.add( this, "propertychange._change", function( event ) {
							if ( event.originalEvent.propertyName === "checked" ) {
								this._justChanged = true;
							}
						} );
						jQuery.event.add( this, "click._change", function( event ) {
							if ( this._justChanged && !event.isTrigger ) {
								this._justChanged = false;
							}

							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate( "change", this, event );
						} );
					}
					return false;
				}

				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add( this, "beforeactivate._change", function( e ) {
					var elem = e.target;

					if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
						jQuery.event.add( elem, "change._change", function( event ) {
							if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
								jQuery.event.simulate( "change", this.parentNode, event );
							}
						} );
						jQuery._data( elem, "change", true );
					}
				} );
			},

			handle: function( event ) {
				var elem = event.target;

				// Swallow native change events from checkbox/radio, we already triggered them above
				if ( this !== elem || event.isSimulated || event.isTrigger ||
					( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

					return event.handleObj.handler.apply( this, arguments );
				}
			},

			teardown: function() {
				jQuery.event.remove( this, "._change" );

				return !rformElems.test( this.nodeName );
			}
		};
	}

	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						jQuery._removeData( doc, fix );
					} else {
						jQuery._data( doc, fix, attaches );
					}
				}
			};
		} );
	}

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		},

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		safeFragment = createSafeFragment( document ),
		fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

	// Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
			return;
		}

		var type, i, l,
			oldData = jQuery._data( src ),
			curData = jQuery._data( dest, oldData ),
			events = oldData.events;

		if ( events ) {
			delete curData.handle;
			curData.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}

		// make the cloned public data object a copy from the original
		if ( curData.data ) {
			curData.data = jQuery.extend( {}, curData.data );
		}
	}

	function fixCloneNodeIssues( src, dest ) {
		var nodeName, e, data;

		// We do not need to do anything for non-Elements
		if ( dest.nodeType !== 1 ) {
			return;
		}

		nodeName = dest.nodeName.toLowerCase();

		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
			data = jQuery._data( dest );

			for ( e in data.events ) {
				jQuery.removeEvent( dest, e, data.handle );
			}

			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute( jQuery.expando );
		}

		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if ( nodeName === "script" && dest.text !== src.text ) {
			disableScript( dest ).text = src.text;
			restoreScript( dest );

		// IE6-10 improperly clones children of object elements using classid.
		// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if ( nodeName === "object" ) {
			if ( dest.parentNode ) {
				dest.outerHTML = src.outerHTML;
			}

			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
				dest.innerHTML = src.innerHTML;
			}

		} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set

			dest.defaultChecked = dest.checked = src.checked;

			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if ( dest.value !== src.value ) {
				dest.value = src.value;
			}

		// IE6-8 fails to return the selected option to the default selected
		// state when cloning options
		} else if ( nodeName === "option" ) {
			dest.defaultSelected = dest.selected = src.defaultSelected;

		// IE6-8 fails to set the defaultValue to the correct value when
		// cloning other types of input fields
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval(
									( node.text || node.textContent || node.innerHTML || "" )
										.replace( rcleanScript, "" )
								);
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			elems = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = elems[ i ] ) != null; i++ ) {

			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var destElements, node, clone, i, srcElements,
				inPage = jQuery.contains( elem.ownerDocument, elem );

			if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
				!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

				clone = elem.cloneNode( true );

			// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
			}

			if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
					( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				// Fix all IE cloning issues
				for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

					// Ensure that the destination node is not null; Fixes #9587
					if ( destElements[ i ] ) {
						fixCloneNodeIssues( node, destElements[ i ] );
					}
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
						cloneCopyEvent( node, destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			destElements = srcElements = node = null;

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems, /* internal */ forceAcceptData ) {
			var elem, type, id, data,
				i = 0,
				internalKey = jQuery.expando,
				cache = jQuery.cache,
				attributes = support.attributes,
				special = jQuery.event.special;

			for ( ; ( elem = elems[ i ] ) != null; i++ ) {
				if ( forceAcceptData || acceptData( elem ) ) {

					id = elem[ internalKey ];
					data = id && cache[ id ];

					if ( data ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Remove cache only if it was not already removed by jQuery.event.remove
						if ( cache[ id ] ) {

							delete cache[ id ];

							// Support: IE<9
							// IE does not allow us to delete expando properties from nodes
							// IE creates expando attributes along with the property
							// IE does not have a removeAttribute function on Document nodes
							if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
								elem.removeAttribute( internalKey );

							// Webkit & Blink performance suffers when deleting properties
							// from DOM nodes, so set to undefined instead
							// https://code.google.com/p/chromium/issues/detail?id=378607
							} else {
								elem[ internalKey ] = undefined;
							}

							deletedIds.push( id );
						}
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().append(
						( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
					);
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {

				// Remove element nodes and prevent memory leaks
				if ( elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem, false ) );
				}

				// Remove any remaining nodes
				while ( elem.firstChild ) {
					elem.removeChild( elem.firstChild );
				}

				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
					elem.options.length = 0;
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined ) {
					return elem.nodeType === 1 ?
						elem.innerHTML.replace( rinlinejQuery, "" ) :
						undefined;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
					( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {

							// Remove element nodes and prevent memory leaks
							elem = this[ i ] || {};
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				i = 0,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
			reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		div.style.cssText = "float:left;opacity:.5";

		// Support: IE<9
		// Make sure that element opacity exists (as opposed to filter)
		support.opacity = div.style.opacity === "0.5";

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!div.style.cssFloat;

		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container = document.createElement( "div" );
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		div.innerHTML = "";
		container.appendChild( div );

		// Support: Firefox<29, Android 2.3
		// Vendor-prefix box-sizing
		support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
			div.style.WebkitBoxSizing === "";

		jQuery.extend( support, {
			reliableHiddenOffsets: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableHiddenOffsetsVal;
			},

			boxSizingReliable: function() {

				// We're checking for pixelPositionVal here instead of boxSizingReliableVal
				// since that compresses better and they're computed together anyway.
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},

			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},

			pixelPosition: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelPositionVal;
			},

			reliableMarginRight: function() {

				// Support: Android 2.3
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableMarginRightVal;
			},

			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			}
		} );

		function computeStyleTests() {
			var contents, divStyle,
				documentElement = document.documentElement;

			// Setup
			documentElement.appendChild( container );

			div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";

			// Support: IE<9
			// Assume reasonable values in the absence of getComputedStyle
			pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
			pixelMarginRightVal = reliableMarginRightVal = true;

			// Check for getComputedStyle so that this code is not run in IE<9.
			if ( window.getComputedStyle ) {
				divStyle = window.getComputedStyle( div );
				pixelPositionVal = ( divStyle || {} ).top !== "1%";
				reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
				boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

				// Support: Android 4.0 - 4.3 only
				// Some styles come back with percentage values, even though they shouldn't
				div.style.marginRight = "50%";
				pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

				// Support: Android 2.3 only
				// Div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				contents = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				contents.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				contents.style.marginRight = contents.style.width = "0";
				div.style.width = "1px";

				reliableMarginRightVal =
					!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

				div.removeChild( contents );
			}

			// Support: IE6-8
			// First check that getClientRects works as expected
			// Check if table cells still have offsetWidth/Height when they are set
			// to display:none and there are still other visible table cells in a
			// table row; if so, offsetWidth/Height are not reliable for use when
			// determining if an element has been hidden directly using
			// display:none (it is still safe to use offsets if a parent element is
			// hidden; don safety goggles and see bug #4512 for more information).
			div.style.display = "none";
			reliableHiddenOffsetsVal = div.getClientRects().length === 0;
			if ( reliableHiddenOffsetsVal ) {
				div.style.display = "";
				div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				contents = div.getElementsByTagName( "td" );
				contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
				if ( reliableHiddenOffsetsVal ) {
					contents[ 0 ].style.display = "";
					contents[ 1 ].style.display = "none";
					reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
				}
			}

			// Teardown
			documentElement.removeChild( container );
		}

	} )();


	var getStyles, curCSS,
		rposition = /^(top|right|bottom|left)$/;

	if ( window.getComputedStyle ) {
		getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

		curCSS = function( elem, name, computed ) {
			var width, minWidth, maxWidth, ret,
				style = elem.style;

			computed = computed || getStyles( elem );

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

			if ( computed ) {

				if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
					ret = jQuery.style( elem, name );
				}

				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value"
				// instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values,
				// but width seems to be reliably pixels
				// this is against the CSSOM draft spec:
				// http://dev.w3.org/csswg/cssom/#resolved-values
				if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "";
		};
	} else if ( documentElement.currentStyle ) {
		getStyles = function( elem ) {
			return elem.currentStyle;
		};

		curCSS = function( elem, name, computed ) {
			var left, rs, rsLeft, ret,
				style = elem.style;

			computed = computed || getStyles( elem );
			ret = computed ? computed[ name ] : undefined;

			// Avoid setting ret to empty string here
			// so we don't default to auto
			if ( ret == null && style && style[ name ] ) {
				ret = style[ name ];
			}

			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are
			// proportional to the parent element instead
			// and we can't measure the parent instead because it
			// might trigger a "stacking dolls" problem
			if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;

				// Put in the new values to get a computed value out
				if ( rsLeft ) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";

				// Revert the changed values
				style.left = left;
				if ( rsLeft ) {
					rs.left = rsLeft;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "" || "auto";
		};
	}




	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

			ralpha = /alpha\([^)]*\)/i,
		ropacity = /opacity\s*=\s*([^)]*)/i,

		// swappable if display is none or starts with table except
		// "table", "table-cell", or "table-caption"
		// see here for display values:
		// https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;


	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// check for vendor prefixed names
		var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = jQuery._data( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] =
						jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
				}
			} else {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					jQuery._data(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// at this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// at this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// at this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = support.boxSizing &&
				jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {

			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}

		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {

			// normalize float css property
			"float": support.cssFloat ? "cssFloat" : "styleFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set. See: #7116
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight
				// (for every problematic property) identical functions
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					// Support: IE
					// Swallow errors from 'invalid' CSS values (#5509)
					try {
						style[ name ] = value;
					} catch ( e ) {}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var num, val, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			//convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						support.boxSizing &&
							jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	} );

	if ( !support.opacity ) {
		jQuery.cssHooks.opacity = {
			get: function( elem, computed ) {

				// IE uses filters for opacity
				return ropacity.test( ( computed && elem.currentStyle ?
					elem.currentStyle.filter :
					elem.style.filter ) || "" ) ?
						( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
						computed ? "1" : "";
			},

			set: function( elem, value ) {
				var style = elem.style,
					currentStyle = elem.currentStyle,
					opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
					filter = currentStyle && currentStyle.filter || style.filter || "";

				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;

				// if setting opacity to 1, and no other filters exist -
				// attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ( ( value >= 1 || value === "" ) &&
						jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
						style.removeAttribute ) {

					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute( "filter" );

					// if there is no filter style applied in a css rule
					// or unset inline opacity, we are done
					if ( value === "" || currentStyle && !currentStyle.filter ) {
						return;
					}
				}

				// otherwise, set new filter values
				style.filter = ralpha.test( filter ) ?
					filter.replace( ralpha, opacity ) :
					filter + " " + opacity;
			}
		};
	}

	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return (
					parseFloat( curCSS( elem, "marginLeft" ) ) ||

					// Support: IE<=11+
					// Running getBoundingClientRect on a disconnected node in IE throws an error
					// Support: IE8 only
					// getClientRects() errors on disconnected elems
					( jQuery.contains( elem.ownerDocument, elem ) ?
						elem.getBoundingClientRect().left -
							swap( elem, { marginLeft: 0 }, function() {
								return elem.getBoundingClientRect().left;
							} ) :
						0
					)
				) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9
	// Panic based approach to setting things on disconnected nodes

	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			attrs = { height: type },
			i = 0;

		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// we're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = jQuery._data( elem, "fxshow" );

		// handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			if ( !support.shrinkWrapBlocks() ) {
				anim.always( function() {
					style.overflow = opts.overflow[ 0 ];
					style.overflowX = opts.overflow[ 1 ];
					style.overflowY = opts.overflow[ 2 ];
				} );
			}
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data( elem, "fxshow", {} );
			}

			// store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;
				jQuery._removeData( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// resolve when we played the last frame
					// otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || jQuery._data( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = jQuery._data( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = jQuery._data( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// enable finishing flag on private data
				data.finish = true;

				// empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			timers = jQuery.timers,
			i = 0;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var a,
			input = document.createElement( "input" ),
			div = document.createElement( "div" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		// Setup
		div = document.createElement( "div" );
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName( "a" )[ 0 ];

		// Support: Windows Web Apps (WWA)
		// `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "checkbox" );
		div.appendChild( input );

		a = div.getElementsByTagName( "a" )[ 0 ];

		// First batch of tests.
		a.style.cssText = "top:1px";

		// Test setAttribute on camelCase class.
		// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		support.getSetAttribute = div.className !== "t";

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		support.style = /top/.test( a.getAttribute( "style" ) );

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		support.hrefNormalized = a.getAttribute( "href" ) === "/a";

		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		support.checkOn = !!input.value;

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		support.optSelected = opt.selected;

		// Tests for enctype support on a form (#6743)
		support.enctype = !!document.createElement( "form" ).enctype;

		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE8 only
		// Check if we can trust getAttribute("value")
		input = document.createElement( "input" );
		input.setAttribute( "value", "" );
		support.input = input.getAttribute( "value" ) === "";

		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute( "type", "radio" );
		support.radioValue = input.value === "t";
	} )();


	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if (
						hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// handle most common string cases
						ret.replace( rreturn, "" ) :

						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
				} else if ( typeof val === "number" ) {
					val += "";
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// oldIE doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled :
									option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {

							// Support: IE6
							// When new option element is added to select box we need to
							// force reflow of newly added node in order to workaround delay
							// of initialization properties
							try {
								option.selected = optionSet = true;

							} catch ( _ ) {

								// Will be executed only in IE6
								option.scrollHeight;
							}

						} else {
							option.selected = false;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}

					return options;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle,
		ruseDefault = /^(?:checked|selected)$/i,
		getSetAttribute = support.getSetAttribute,
		getSetInput = support.input;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {

						// Setting the type on a radio button after the value resets the value in IE8-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
							elem[ propName ] = false;

						// Support: IE<9
						// Also clear defaultChecked/defaultSelected (if appropriate)
						} else {
							elem[ jQuery.camelCase( "default-" + name ) ] =
								elem[ propName ] = false;
						}

					// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr( elem, name, "" );
					}

					elem.removeAttribute( getSetAttribute ? name : propName );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

				// IE<8 needs the *property* name
				elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

			} else {

				// Support: IE<9
				// Use defaultChecked and defaultSelected for oldIE
				elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			attrHandle[ name ] = function( elem, name, isXML ) {
				var ret, handle;
				if ( !isXML ) {

					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[ name ];
					attrHandle[ name ] = ret;
					ret = getter( elem, name, isXML ) != null ?
						name.toLowerCase() :
						null;
					attrHandle[ name ] = handle;
				}
				return ret;
			};
		} else {
			attrHandle[ name ] = function( elem, name, isXML ) {
				if ( !isXML ) {
					return elem[ jQuery.camelCase( "default-" + name ) ] ?
						name.toLowerCase() :
						null;
				}
			};
		}
	} );

	// fix oldIE attroperties
	if ( !getSetInput || !getSetAttribute ) {
		jQuery.attrHooks.value = {
			set: function( elem, value, name ) {
				if ( jQuery.nodeName( elem, "input" ) ) {

					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {

					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set( elem, value, name );
				}
			}
		};
	}

	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if ( !getSetAttribute ) {

		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = {
			set: function( elem, value, name ) {

				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode( name );
				if ( !ret ) {
					elem.setAttributeNode(
						( ret = elem.ownerDocument.createAttribute( name ) )
					);
				}

				ret.value = value += "";

				// Break association with cloned elements by also using setAttribute (#9646)
				if ( name === "value" || value === elem.getAttribute( name ) ) {
					return value;
				}
			}
		};

		// Some attributes are constructed with empty-string values when not defined
		attrHandle.id = attrHandle.name = attrHandle.coords =
			function( elem, name, isXML ) {
				var ret;
				if ( !isXML ) {
					return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
						ret.value :
						null;
				}
			};

		// Fixing value retrieval on a button requires this module
		jQuery.valHooks.button = {
			get: function( elem, name ) {
				var ret = elem.getAttributeNode( name );
				if ( ret && ret.specified ) {
					return ret.value;
				}
			},
			set: nodeHook.set
		};

		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			set: function( elem, value, name ) {
				nodeHook.set( elem, value === "" ? false : value, name );
			}
		};

		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each( [ "width", "height" ], function( i, name ) {
			jQuery.attrHooks[ name ] = {
				set: function( elem, value ) {
					if ( value === "" ) {
						elem.setAttribute( name, "auto" );
						return value;
					}
				}
			};
		} );
	}

	if ( !support.style ) {
		jQuery.attrHooks.style = {
			get: function( elem ) {

				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case sensitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function( elem, value ) {
				return ( elem.style.cssText = value + "" );
			}
		};
	}




	var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			name = jQuery.propFix[ name ] || name;
			return this.each( function() {

				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[ name ] = undefined;
					delete this[ name ];
				} catch ( e ) {}
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !support.hrefNormalized ) {

		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each( [ "href", "src" ], function( i, name ) {
			jQuery.propHooks[ name ] = {
				get: function( elem ) {
					return elem.getAttribute( name, 4 );
				}
			};
		} );
	}

	// Support: Safari, IE9+
	// mis-reports the default selected property of an option
	// Accessing the parent's selectedIndex property fixes it
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;

				if ( parent ) {
					parent.selectedIndex;

					// Make sure that it also works with optgroups, see #5701
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );

	// IE6/7 call enctype encoding
	if ( !support.enctype ) {
		jQuery.propFix.enctype = "encoding";
	}




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return jQuery.attr( elem, "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							jQuery.attr( elem, "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							jQuery.attr( elem, "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// store className if set
						jQuery._data( this, "__className__", className );
					}

					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					jQuery.attr( this, "class",
						className || value === false ?
						"" :
						jQuery._data( this, "__className__" ) || ""
					);
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	// Return jQuery for attributes-only inclusion


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );


	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

	jQuery.parseJSON = function( data ) {

		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {

			// Support: Android 2.3
			// Workaround failure to string-cast null input
			return window.JSON.parse( data + "" );
		}

		var requireNonComma,
			depth = null,
			str = jQuery.trim( data + "" );

		// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
		// after removing valid tokens
		return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

			// Force termination if we see a misplaced comma
			if ( requireNonComma && comma ) {
				depth = 0;
			}

			// Perform no more replacements after returning to outermost depth
			if ( depth === 0 ) {
				return token;
			}

			// Commas must not follow "[", "{", or ","
			requireNonComma = open || comma;

			// Determine new depth
			// array/object open ("[" or "{"): depth += true - false (increment)
			// array/object close ("]" or "}"): depth += false - true (decrement)
			// other cases ("," or primitive): depth += true - true (numeric cast)
			depth += !close - !open;

			// Remove this token
			return "";
		} ) ) ?
			( Function( "return " + str ) )() :
			jQuery.error( "Invalid JSON: " + data );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new window.DOMParser();
				xml = tmp.parseFromString( data, "text/xml" );
			} else { // IE
				xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch ( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,

		// IE leaves an \r character at EOL
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Document location
		ajaxLocation = location.href,

		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType.charAt( 0 ) === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var deep, key,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
		var firstDataType, ct, finalDataType, type,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var

				// Cross-domain detection vars
				parts,

				// Loop variable
				i,

				// URL without anti-cache param
				cacheURL,

				// Response headers as string
				responseHeadersString,

				// timeout handle
				timeoutTimer,

				// To know if global events are to be dispatched
				fireGlobals,

				transport,

				// Response headers
				responseHeaders,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" )
				.replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
						elem = elem.firstChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	function getDisplay( elem ) {
		return elem.style && elem.style.display || jQuery.css( elem, "display" );
	}

	function filterHidden( elem ) {
		while ( elem && elem.nodeType === 1 ) {
			if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
				return true;
			}
			elem = elem.parentNode;
		}
		return false;
	}

	jQuery.expr.filters.hidden = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return support.reliableHiddenOffsets() ?
			( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
				!elem.getClientRects().length ) :
				filterHidden( elem );
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

		// Support: IE6-IE8
		function() {

			// XHR cannot access local files, always use ActiveX for that case
			if ( this.isLocal ) {
				return createActiveXHR();
			}

			// Support: IE 9-11
			// IE seems to error on cross-domain PATCH requests when ActiveX XHR
			// is used. In IE 9+ always use the native XHR.
			// Note: this condition won't catch Edge as it doesn't define
			// document.documentMode but it also doesn't support ActiveX so it won't
			// reach this code.
			if ( document.documentMode > 8 ) {
				return createStandardXHR();
			}

			// Support: IE<9
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
				createStandardXHR() || createActiveXHR();
		} :

		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;

	var xhrId = 0,
		xhrCallbacks = {},
		xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE<10
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]( undefined, true );
			}
		} );
	}

	// Determine support properties
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	xhrSupported = support.ajax = !!xhrSupported;

	// Create transport if the browser can provide an xhr
	if ( xhrSupported ) {

		jQuery.ajaxTransport( function( options ) {

			// Cross domain only allowed if supported through XMLHttpRequest
			if ( !options.crossDomain || support.cors ) {

				var callback;

				return {
					send: function( headers, complete ) {
						var i,
							xhr = options.xhr(),
							id = ++xhrId;

						// Open the socket
						xhr.open(
							options.type,
							options.url,
							options.async,
							options.username,
							options.password
						);

						// Apply custom fields if provided
						if ( options.xhrFields ) {
							for ( i in options.xhrFields ) {
								xhr[ i ] = options.xhrFields[ i ];
							}
						}

						// Override mime type if needed
						if ( options.mimeType && xhr.overrideMimeType ) {
							xhr.overrideMimeType( options.mimeType );
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
							headers[ "X-Requested-With" ] = "XMLHttpRequest";
						}

						// Set headers
						for ( i in headers ) {

							// Support: IE<9
							// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
							// request header to a null-value.
							//
							// To keep consistent with other XHR implementations, cast the value
							// to string and ignore `undefined`.
							if ( headers[ i ] !== undefined ) {
								xhr.setRequestHeader( i, headers[ i ] + "" );
							}
						}

						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send( ( options.hasContent && options.data ) || null );

						// Listener
						callback = function( _, isAbort ) {
							var status, statusText, responses;

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Clean up
								delete xhrCallbacks[ id ];
								callback = undefined;
								xhr.onreadystatechange = jQuery.noop;

								// Abort manually if needed
								if ( isAbort ) {
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;

									// Support: IE<10
									// Accessing binary-data responseText throws an exception
									// (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch ( e ) {

										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && options.isLocal && !options.crossDomain ) {
										status = responses.text ? 200 : 404;

									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}

							// Call complete if needed
							if ( responses ) {
								complete( status, statusText, responses, xhr.getAllResponseHeaders() );
							}
						};

						// Do send the request
						// `xhr.send` may raise an exception, but it will be
						// handled in jQuery.ajax (so no try/catch here)
						if ( !options.async ) {

							// If we're in sync mode we fire the callback
							callback();
						} else if ( xhr.readyState === 4 ) {

							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							window.setTimeout( callback );
						} else {

							// Register the callback, but delay it in case `xhr.send` throws
							// Add to the list of active xhr callbacks
							xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
						}
					},

					abort: function() {
						if ( callback ) {
							callback( undefined, true );
						}
					}
				};
			}
		} );
	}

	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	}

	function createActiveXHR() {
		try {
			return new window.ActiveXObject( "Microsoft.XMLHTTP" );
		} catch ( e ) {}
	}




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and global
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
			s.global = false;
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {

			var script,
				head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

			return {

				send: function( _, callback ) {

					script = document.createElement( "script" );

					script.async = true;

					if ( s.scriptCharset ) {
						script.charset = s.scriptCharset;
					}

					script.src = s.url;

					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function( _, isAbort ) {

						if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;

							// Remove the script
							if ( script.parentNode ) {
								script.parentNode.removeChild( script );
							}

							// Dereference the script
							script = null;

							// Callback if not abort
							if ( !isAbort ) {
								callback( 200, "success" );
							}
						}
					};

					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore( script, head.firstChild );
				},

				abort: function() {
					if ( script ) {
						script.onload( undefined, true );
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8+
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		if ( !document.implementation.createHTMLDocument ) {
			return false;
		}
		var doc = document.implementation.createHTMLDocument( "" );
		doc.body.innerHTML = "<form></form><form></form>";
		return doc.body.childNodes.length === 2;
	} )();


	// data: string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		// document.implementation stops scripts or inline event handlers from
		// being executed immediately
		context = context || ( support.createHTMLDocument ?
			document.implementation.createHTMLDocument( "" ) :
			document );

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off, url.length ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( self, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};





	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ?
			elem :
			elem.nodeType === 9 ?
				elem.defaultView || elem.parentWindow :
				false;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

			// need to be able to calculate position if either top or left
			// is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );
			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				box = { top: 0, left: 0 },
				elem = this[ 0 ],
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			// If we don't have gBCR, just use 0,0 rather than error
			// BlackBerry 5, iOS 3 (original iPhone)
			if ( typeof elem.getBoundingClientRect !== "undefined" ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
				left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				parentOffset = { top: 0, left: 0 },
				elem = this[ 0 ];

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// we assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				// Subtract offsetParent scroll positions
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ) -
					offsetParent.scrollTop();
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true ) -
					offsetParent.scrollLeft();
			}

			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = /Y/.test( prop );

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? ( prop in win ) ? win[ prop ] :
						win.document.documentElement[ method ] :
						elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : jQuery( win ).scrollLeft(),
						top ? val : jQuery( win ).scrollTop()
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// if curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

			// margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only,
						// but there is currently no good, small way to fix it.
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(4), __webpack_require__(5) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, WebPro, Browser ) {
	    var Utils = {
	        // Utility method for wiring up derived class prototypes.

	        inherit: function( derived, base, methods ) {
	            var anon = function() {};
	            anon.prototype = base.prototype;
	            derived.prototype = new anon();
	            derived.prototype.constructor = derived;
	            derived.prototype._super = base;

	            if ( methods ) {
	                $.extend( derived.prototype, methods );
	            }
	        },

	        ensureArray: function() {
	            var results = [],
	                len = arguments.length;
	            if ( len > 0 ) {
	                if ( len > 1 || !$.isArray( arguments[ 0 ] ) ) {
	                    results = $.map( arguments, function( arg ) {
	                        return arg;
	                    });
	                } else {
	                    results = arguments[ 0 ];
	                }
	            }
	            return results;
	        },

	        // When similar markup structures, that use the same class names,
	        // are nested, it becomes very difficult to find the right set of
	        // elements for the outer structures. scopedFind() allows you to search
	        // for elements via a selector, within a context element, it then filters
	        // the elements in the resulting collection, down to those that have the
	        // specified parent, with the specified class name, as their closest ancestor.

	        scopedFind: function( contextEle, selector, parentClassName, parent ) {
	            // Muse used to provide this same functionality with:
	            //
	            //             var scopedFind = function($start, selector, scopeSelector, $scope) {
	            //                         return $start.find(selector).filter(function() { return $(this).closest(scopeSelector).get(0) == $scope.get(0); })
	            //             }
	            //
	            // It is very compact and easy to read, but unfortunately it is extremely slow. The code
	            // below ends up being about 7 times faster by avoiding the use of selectors and minimizing
	            // the number of function calls that could occur when trying to scope a selector that
	            // ends up matching lots of elements.

	            // Use spaces before and after the parentClassName so that we
	            // don't accidentally match any other classes that start with the
	            // same name.

	            var className = ' ' + parentClassName + ' ',

	                // results will hold the resulting elements after they've been filtered.

	                results = [],

	                // Find all the elements within the specified context element that
	                // match the selector. Note that this collection may also contain
	                // elements for nested structures.

	                $matches = $( contextEle ).find( selector ),

	                // Cache the length of the collection so we can reduce the number
	                // of symbol/js-interpreter lookups during each iteration of the
	                // loop below.

	                numMatches = $matches.length;

	            // Make sure our parent is an element and not a selector or collection.

	            parent = $( parent )[ 0 ];

	            // Run through all elements in the collection and find those that
	            // have the specified parent as their closest ancestor.

	            for ( var i = 0; i < numMatches; i++ ) {
	                // Cache the current element we're going to work with.

	                var m = $matches[ i ],
	                    p = m;

	                // Loop through the parent hierarchy of the current element
	                // until we find an element with the classname we were given.

	                while ( p ) {
	                    // Does the element have the specified classname? Note
	                    // that we are purposely not using $.fn.hasClass() because
	                    // we want this function to be fast.

	                    if ( p.className && ( ' ' + p.className + ' ' ).indexOf( className ) !== -1 ) {
	                        // Do we have an ancestor that matches the parent we
	                        // are interested in?

	                        if ( p === parent ) {
	                            results.push( m );
	                        }
	                        // We found an ancestor that has the specified class
	                        // so we are done traversing up the ancestor hierarchy.

	                        break;
	                    }

	                    // We haven't found a matching ancestor, so go up
	                    // another level.

	                    p = p.parentNode;
	                }
	            }

	            // Return a jQuery collection that contains our results.

	            return $( results );
	        },

	        // The old-school method for calculating an
	        // element's current offset from the upper-left
	        // corner of the document. The reason you would
	        // use this method over jQuery.offset() is when
	        // you don't want to factor in any CSS3 transforms
	        // that may scale an element or its ancestors.

	        getDocumentOffset: function( ele ) {
	          // Allow this method to take elements
	          // or selector strings.

	          ele = $( ele )[ 0 ];

	          var left = 0,
	              top = 0;

	          if ( ele ) {
	            var offsetParent = ele.offsetParent;

	            left = ele.offsetLeft,
	            top = ele.offsetTop;

	            while ( ele ) {
	                if ( ele === offsetParent ) {
	                    left += ele.offsetLeft;
	                    top += ele.offsetTop;
	                    offsetParent = ele.offsetParent;
	                }

	                left -= ele.scrollLeft || 0;
	                top -= ele.scrollTop || 0;

	                ele = ele.parentNode;
	            }
	          }

	          return { left: left, top: top };
	        },

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
	        },

	        calcTotalWidthOfObjects: function( list ) {
	            var total = 0, $item;
	            for ( var i in list ) {
	                $item = $( list[ i ] );
	                total += $item.outerWidth();
	            }
	            return total;
	        },

	        setElementTransform: function( ele, val ) {
	            // XXX: Ideally we would check what browser we're
	            //            running in and just set the appropriate transform prop.

	            $( ele ).css( Browser.vendorPrefix + 'transform', val );
	        },

	        instantTransform: function( ele, transform, disabledClass ) {
	            var $ele = $( ele );

	            $ele.addClass( disabledClass );

	            this.setElementTransform( ele, transform );

	            setTimeout( function() {
	                $ele.removeClass( disabledClass );
	            }, 0 );
	        },

	        // Parse out the query params of an URL string
	        // into an object.

	        parseQueryParams: function( url ) {
	            var matches = /([^\?#]+)?(\?([^#]*))?(#.*)?/.exec( url || '' );
	            var params = {};

	            if ( matches && matches[ 3 ] ) {
	                var pairs = matches[ 3 ].split( '&' );
	                for ( var i = 0; i < pairs.length; i++ ) {
	                    var nv = ( pairs[ i ] || '' ).split( '=' );
	                    params[ nv[ 0 ] || '' ] = nv[ 1 ] || '';
	                }
	            }

	            return params;
	        },

	        serializeQueryParams: function( params ) {
	            var paramsStr = '';

	            if ( params ) {
	                for ( var key in params ) {
	                    if ( paramsStr ) {
	                        paramsStr += '&';
	                    }
	                    paramsStr += encodeURIComponent( key ) + '=' + encodeURIComponent( params[ key ] );
	                }
	            }

	            return paramsStr;
	        },

	        // Replace/Set the query params component of the specified
	        // URL with the params.

	        setQueryParams: function( url, params ) {
	            var paramsStr = this.serializeQueryParams( params );

	            paramsStr = ( paramsStr ? '?' : '' ) + paramsStr;

	            return url.replace( /([^\?#]+)?(\?[^#]*)?(#.*)?/, '$1' + paramsStr + '$3' );
	        },

	        // Set/replace the value of a single query param value in a URL.
	        setQueryParam: function( url, name, value ) {
	            if ( name ) {
	                var params = this.parseQueryParams( url );
	                params[ name ] = value;
	                return this.setQueryParams( url, params );
	            }

	            return url;
	        }
	    };

	    WebPro.Utils = Utils;

	    $.extend( WebPro, Utils );

	    return Utils;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return {};
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(4) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( WebPro ) {
	    var uaString = window.navigator.userAgent;
	    //
	    // Browser detection with minimal UA sniffing,
	    // based on answer from here:
	    //
	    //     http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
	    //     http://jsfiddle.net/9zxvE/383/
	    //

	    WebPro.isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	        // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
	    WebPro.isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
	    WebPro.isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	        // At least Safari 3+: "[object HTMLElementConstructor]"
	    WebPro.isMSEdge = window.navigator.userAgent.indexOf( ' Edge/' ) >= 0; // Microsoft Edge
	    WebPro.isChrome = !!window.chrome && !WebPro.isOpera && !WebPro.isMSEdge; // Chrome 1+
	    WebPro.isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6

	    // Does this browser support WebKit based touch events?

	    WebPro.touchEventsEnabled = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);

	    // Does this browser support standards-based pointer events?

	    WebPro.pointerEventsEnabled = window.PointerEvent || window.navigator.pointerEnabled;

	    // Does this browser support IE MSPointer events?

	    WebPro.msPointerEventsEnabled = window.navigator.msPointerEnabled;

	    // If touch events aren't supported, does this browser support
	    // the mozInputSource property on MouseEvents?

	    WebPro.supportsMozInputSource = WebPro.isFirefox && !WebPro.touchEventsEnabled && window.MouseEvent && window.MouseEvent.MOZ_SOURCE_MOUSE;

	    // Set a property that indicates whether touch input is available.
	    // Note that if a browser supports MSPointer or Pointer events, it
	    // doesn't necessarily mean that it supports touch, so for now we
	    // rely on the presence of "touch" or "mobile" in the UA string to
	    // clue us in to whether or not it is available. For now, this is
	    // really only an issue for IE.

	    WebPro.touchEnabled = WebPro.touchEventsEnabled || ( ( WebPro.msPointerEventsEnabled || WebPro.pointerEventsEnabled ) && WebPro.isIE && uaString.search( /touch|mobile/i ) >= 0 ) || WebPro.supportsMozInputSource;


	    var vendorPrefix = '';

	    if ( window.getComputedStyle ) {
	        var styles = window.getComputedStyle(document.documentElement, '');

	        vendorPrefix = (Array.prototype.slice
	          .call(styles)
	          .join('')
	          .match(/(-moz-|-webkit-|-ms-)/) || (styles.OLink === '' && [ '', 'o' ])
	        )[1];

	        // XXX: Total hack due to the fact that mozilla dropped -moz- prefix for transforms.

	        if ( vendorPrefix === '-moz-' ) {
	          vendorPrefix = '';
	        }
	    }

	    WebPro.vendorPrefix = vendorPrefix || '';

	    return WebPro;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(4), __webpack_require__(3), __webpack_require__(7) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, WebPro, Utils, EventDispatcher ) {
	    function Widget() {
	        EventDispatcher.call( this );

	        this._initialize.apply( this, arguments );
	    }

	    Utils.inherit( Widget, EventDispatcher );

	    $.extend( Widget.prototype, {
	        defaultOptions: { },

	        _widgetName: "Widget",

	        _initialize: function() {
	            var options;

	            this.plugins = [];

	            // PHASE 1 - Setup
	            //
	            // Execute any widget code that must run prior to plugins
	            // initializing. Note that widget constructors are allowed
	            // to take any number of arguments. The setUp() method is
	            // the only means that any derived class has of accessing
	            // the arguments passed into the constructor. Also note that
	            // there is no required argument ordering enforced so it is
	            // up to the _setUp() method to return any options object that
	            // may have been passed into the constructor. This is an important
	            // detail that derived classes with a _setUp() override
	            // must implement. Failing to return an options object specified
	            // at construction time will result in the defaultOptions
	            // being used.

	            var e = this.trigger( "before-setup" );
	            if ( ! e.isDefaultPrevented() ) {
	                options = this._setUp.apply( this, arguments );
	                this.trigger( "setup" )
	            }

	            // PHASE 2 - Plugin Initialization
	            //
	            // First thing we do is call initializePlugins. We pass it
	            // the options object we were given so that it can add or
	            // remove options prior to the widget initializing itself.

	            var e = this.trigger( "before-init-plugins" );
	            if ( ! e.isDefaultPrevented() ) {
	                this._initializePlugins( options );
	                this.trigger( "init-plugins" )
	            }

	            // Save a copy of the options we were given. We start
	            // with the default set of options specified within
	            // the prototype, and then add in the options passed in
	            // by the caller.

	            this.options = $.extend( {}, this.defaultOptions, options );

	            // PHASE 3 - Data Extraction
	            //
	            // Allow the widget to extract data from it's sources. This
	            // includes any markup the widget might be attached to.

	            e = this.trigger( "before-extract-data" );
	            if ( ! e.isDefaultPrevented() ) {
	                this._extractData();
	                this.trigger( "extract-data" )
	            }

	            // PHASE 4 - Transform Markup
	            //
	            // Allow the widget to modify any associated markup.

	            e = this.trigger( "before-transform-markup" );
	            if ( ! e.isDefaultPrevented() ) {
	                this._transformMarkup();
	                this.trigger( "transform-markup" )
	            }

	            // PHASE 5 - Attach Behavior
	            //
	            // Attach any event handlers, etc on the newly transformed
	            // widget markup.

	            e = this.trigger( "before-attach-behavior" );
	            if ( ! e.isDefaultPrevented() ) {
	                this._attachBehavior();
	                this.trigger( "attach-behavior" )
	            }

	            // PHASE 6 - Ready
	            //
	            // Allow the widget to execute any other initialization code
	            // after the markup is transformed and behavior is attached.

	            e = this.trigger( "before-ready" );
	            if ( ! e.isDefaultPrevented() ) {
	                this._ready();
	                this.trigger( "ready" )
	            }
	        },

	        _setUp: function( element, options ) {
	            this.$element = $( element );
	            return options;
	        },

	        _initializePlugins: function( opts ) {
	            opts = opts || {};

	            // Widgets can have a defaultPlugins property specified on their
	            // prototypes. The user can prevent these plugins from running
	            // for a specific widget instance, by passing a useDefaultPlugins:false
	            // option property into the widget constructor.

	            var useDefaults = typeof opts.useDefaultPlugins === "undefined" ? true : opts.useDefaultPlugins,
	                defaultPlugins = ( useDefaults && this.defaultPlugins ) ? this.defaultPlugins : [],
	                plugins = defaultPlugins.concat( opts.plugins || [] );

	            // We sort the merged list of default and option specified plugins
	            // based on priority (ascending order). Plugins with a lower-number
	            // for priority execute first. If no priority is specified they are
	            // given a default of 50.

	            plugins = plugins.sort( function( a, b ) {
	                a = typeof a.priority === "number" ? a.priority : 50;
	                b = typeof b.priority === "number" ? b.priority : 50;
	                return a - b;
	            });

	            // Now that we have a list of plugins sorted by priority,
	            // execute them in the order they appear in the plugins array.

	            for ( var i = 0; i < plugins.length; i++ ) {
	                var p = plugins[ i ];
	                if ( p && p.initialize ) {
	                    p.initialize( this, opts );
	                }
	            }

	            this.plugins = plugins;
	        },

	        _extractData: function() {
	            // Base class no-op.
	        },

	        _transformMarkup: function() {
	            // Base class no-op.
	        },

	        _attachBehavior: function() {
	            // Base class no-op.
	        },

	        _ready: function() {
	            // Base class no-op.
	        }
	    });

	    //////////////////// Widget Constructor Factory ////////////////////

	    // Expose our Widget constructor factory. We want all WebPro widgets to
	    // declare themselves using this factory so that they all follow the same
	    // Widget construction phases. This gives plugin authors a predictable
	    // initialization sequence they can hook into to extend functionality.

	    Widget.registry = {};

	    Widget.build = function( name, base, prototype ) {
	        // The base and prototype args are optional, so make sure
	        // we use default values when appropriate.

	        var baseClass = ( prototype && base ) || Widget,
	            methods = prototype || base || {},

	            // Declare the constructor for the widget. All widgets invoke the
	            // base class constructor. Widgets muse make use of the Widget's
	            // phase methods for initializing themselves.

	            constructor = function() {
	                baseClass.apply( this, arguments );

	                this._widgetName = name;
	            };

	        // Simulate inheritance by setting up the class prototype chain.

	        Utils.inherit( constructor, baseClass );

	        // Copy all of the methods for this widget on to its prototype object.

	        $.extend( constructor.prototype, methods );

	        // At this point the options object in the constructor's prototype
	        // is either undefined, or pointing to one that is specified in the
	        // methods dictionary. We need to create a new options object that is
	        // a merged version of the options from the base class, and the one
	        // that was specified in the methods dictionary.

	        constructor.prototype.defaultOptions = $.extend( {}, baseClass.prototype.defaultOptions, methods.defaultOptions );

	        // Now add it to our WebPro namespace.

	        // Temporarily removing this - should be put into build mode only
	        // Trying to keep modular

	        var nsArray = name.split( "." ),
	            len = nsArray.length,
	            namespace = ( len > 1 && nsArray[ 0 ] ) || "Widget",
	            name = nsArray[ len - 1 ];

	        Widget[ name ] = constructor;

	        return constructor;
	    };

	    Widget.addWidgetConstructorAsjQueryPlugin = function( pluginName, constructorFn ) {
	        $.fn[ pluginName ] = function( options ) {
	              var isAPICall = typeof arguments[ 0 ] === 'string',
	                          fname = isAPICall ? arguments[ 0 ] : '',
	                          args = isAPICall ? Array.prototype.slice.call( arguments, 1 ) : null;

	              this.each( function() {
	                          if ( isAPICall ) {
	                                var widget = $( this ).data( pluginName );
	                                if ( widget && widget[ fname ] ) {
	                                      widget[ fname ].apply( widget, args );
	                                }
	                          } else {
	                                $( this ).data( pluginName, new constructorFn( this, options ) );
	                          }
	                    });

	              return this;
	        };
	    };

	    Widget.addMultiElementWidgetConstructorAsjQueryPlugin = function( pluginName, constructorFn ) {
	        $.fn[ pluginName ] = function( options ) {
	            var isAPICall = typeof arguments[ 0 ] === 'string',
	                      fname = isAPICall ? arguments[ 0 ] : '',
	                      args = isAPICall ? Array.prototype.slice.call( arguments, 1 ) : null;

	            if ( this.length ) {
	                if ( isAPICall ) {
	                    var widget = this.eq( 0 ).data( pluginName );
	                    if ( widget && widget[ fname ] ) {
	                          widget[ fname ].apply( widget, args );
	                    }
	                } else {
	                    var widget = new constructorFn( this, options );
	                    this.each(function() {
	                            $( this ).data( pluginName, widget );
	                        });
	                }
	            }

	            return this;
	        };
	    };

	    WebPro.Widget = Widget;
	    WebPro.widget = Widget.build;
	    WebPro.addWidgetConstructorAsjQueryPlugin = Widget.addWidgetConstructorAsjQueryPlugin;
	    WebPro.addMultiElementWidgetConstructorAsjQueryPlugin = Widget.addMultiElementWidgetConstructorAsjQueryPlugin;

	    return Widget;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(4) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, WebPro ) {
	    // EventDispatcher is a utility class that other classes
	    // that wish to dispatch events can derive from. We use
	    // it to hide the actual underlying mechanism used so
	    // we can swap it out at any time. This version simply uses
	    // jQuery's event mechanism.

	    var EventDispatcher = function() {};

	    $.extend( EventDispatcher.prototype, {
	        bind: function( name, callback, data ) {
	            return $( this ).on( name, callback, data );
	        },

	        unbind: function( name, callback ) {
	            return $( this ).off( name, callback );
	        },

	        on: function( name, callback, data ) {
	            return $( this ).on( name, callback, data );
	        },

	        off: function( name, callback ) {
	            return $( this ).off( name, callback );
	        },

	        trigger: function( name, data ) {
	            // We want to give the caller access to the preventDefault and/or
	            // stopPropagation status of the event they just triggered, so we
	            // create a custom event, use it to dispatch the notification, then
	            // return the event object itself from this method.

	            var e = $.Event( name );
	            $( this ).trigger( e, data );
	            return e;
	        }
	    });

	    WebPro.EventDispatcher = EventDispatcher;

	    return EventDispatcher;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(4), __webpack_require__(3), __webpack_require__(7) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, WebPro, Utils, EventDispatcher ) {
	    var Color = function( value ) {
	        this._r = 0;
	        this._g = 0;
	        this._b = 0;
	        this._a = 1;

	        if ( value ) {
	            this.setValue( value );
	        }
	    };

	    Utils.inherit( Color, EventDispatcher );

	    $.extend( Color.prototype, {

	        setValue: function( value )  {
	            if ( typeof value === 'string' ) {
	                value = Color.parseColorString( value );
	            }

	            if ( 'h' in value && 's' in value ) {
	                if ( 'l' in value ) {
	                    // HSL
	                    value = Color.convertHSLToRGB( value );
	                } else {
	                    // HSB/HSV
	                    value = Color.convertHSBToRGB( value );
	                }
	            }

	            // At this point, we're assuming value is in RGB.

	            this._r = value.r;
	            this._g = value.g;
	            this._b = value.b;
	            this._a = ( 'a' in value ) ? value.a : 1;

	            this.trigger( 'color-change',  {
	                rgb: this.getRGB(),
	                hsb: this.getHSB(),
	                hsl: this.getHSL()
	            });
	        },

	        getRGB: function() {
	            return {
	                r: this._r,
	                g: this._g,
	                b: this._b,
	                a: this._a
	            };
	        },

	        getRGBString: function() {
	            var rgb = this.getRGB(),
	            hasAlpha = 'a' in rgb && rgb.a != 1;
	            return ( hasAlpha ? 'rgba(' : 'rgb(' ) + rgb.r + ',' + rgb.g + ',' + rgb.b + ( hasAlpha ? ',' + rgb.a : '' ) + ')';
	        },

	        getRGBHexString: function() {
	            var rgb = this.getRGB(),
	            r = rgb.r.toString( 16 ),
	            g = rgb.g.toString( 16 ),
	            b = rgb.b.toString( 16 ),
	            canShorten = ( r.length === 1 && g.length === 1 && b.length === 1 );

	            if ( !canShorten ) {
	                r = r.length < 2 ? '0' + r : r;
	                g = g.length < 2 ? '0' + g : g;
	                b = b.length < 2 ? '0' + b : b;
	            }

	            return '#' + r + g + b;
	        },

	        getHSB: function() {
	            return Color.convertRGBToHSB( this.getRGB() );
	        },

	        getHSBString: function() {
	            var hsb = this.getHSB(),
	            hasAlpha = 'a' in hsb && hsb.a != 1;
	            return ( hasAlpha ? 'hsba(' : 'hsb(' ) + hsb.h + ',' + hsb.s + ',' + hsb.b + ( hasAlpha ? ',' + hsb.a : '' ) + ')';
	        },

	        getHSL: function() {
	            return Color.convertRGBToHSL( this.getRGB() );
	        },

	        getHSLString: function() {
	            var hsl = this.getHSL(),
	            hasAlpha = 'a' in hsl && hsl.a != 1;
	            return ( hasAlpha ? 'hsla(' : 'hsl(' ) + hsl.h + ',' + hsl.s + '%,' + hsl.l + '%' + ( hasAlpha ? ',' + hsl.a : '' ) + ')';
	        },

	        toString: function( format ) {
	            if ( format === 'hsl' ) {
	                return this.getHSLString();
	            } else if ( format === 'hsb' ) {
	                return this.getHSBString();
	            }
	            return this.getRGBString();
	        }
	    });

	    // XXX: These are the primary CSS colors keywords. We need
	    //      to have another file we can include that extends
	    //      this with the complete set if necessary.
	    //
	    //        http://www.w3.org/wiki/CSS3/Color/Extended_color_keywords

	    Color.cssKeywords = {
	        black:       { r:   0, g:   0, b:   0, a: 1 },
	        cyan:        { r:   0, g: 255, b: 255, a: 1 },
	        green:       { r:   0, g: 255, b:   0, a: 1 },
	        magenta:     { r: 255, g:   0, b: 255, a: 1 },
	        red:         { r: 255, g:   0, b:   0, a: 1 },
	        transparent: { r:   0, g:   0, b:   0, a: 0 },
	        white:       { r: 255, g: 255, b: 255, a: 1 },
	        yellow:      { r: 255, g: 255, b:   0, a: 1 }
	    };

	    Color.parseColorString = function( value ) {
	        var result = { r: 0, g: 0, b: 0, a: 0 }; // transparent

	        value = (value || 'transparent').replace( /\s/g, '' );

	        if ( value.charAt( 0 ) === '#' ) {
	            // RGB Hex String
	            if ( value.length === 4 ) {
	                // Shortened hex format #rgb. Convert to long form #rrggbb.
	                value = '#'
	                + value.charAt( 1 ) + value.charAt( 1 )
	                + value.charAt( 2 ) + value.charAt( 2 )
	                + value.charAt( 3 ) + value.charAt( 3 );
	            }

	            result = {
	                r: parseInt( value.substr( 1, 2), 16),
	                g: parseInt( value.substr( 3, 2), 16),
	                b: parseInt( value.substr( 5, 2), 16),
	                a: 1
	            };
	        } else if ( value.search( /^[^(]+\(/ ) != -1 ) {
	            // rgb/rgba/hsl/hsla Color Space
	            var matches = /^([^\(]+)\(([^,]+),([^,]+),([^,\)]+)(?:,([^\)]+))*\)/.exec( value );
	            if ( matches ) {
	                var colorSpace = matches[ 1 ];

	                if ( colorSpace === 'rgb' || colorSpace === 'rgba' ) {
	                    result = {
	                        r: parseInt( matches[ 2 ], 10 ),
	                        g: parseInt( matches[ 3 ], 10 ),
	                        b: parseInt( matches[ 4 ], 10 )
	                    };
	                } else if ( colorSpace === 'hsl' || colorSpace === 'hsla' ) {
	                    result = {
	                        h: parseInt( matches[ 2 ], 10 ),
	                        s: parseInt( matches[ 3 ], 10 ),
	                        l: parseInt( matches[ 4 ], 10 )
	                    };
	                }

	                result.a = ( colorSpace === 'rgba' || colorSpace === 'hsla' ) ? parseFloat( matches[ 5 ], 10 ) : 1;
	            }

	        } else {
	            // CSS Keyword
	            result = Color.cssKeywords[ value ] || result;
	        }

	        return result;
	    };

	    Color.__convertHSBToHSL = function( hsb ) {
	        var hsl = {
	            h: 0,
	            s: 0,
	            l: 0,
	            a: ( 'a' in hsb ? hsb.a : 1 )
	        };

	        hsl.h = hsb.h;
	        hsl.l = ( 2 - hsb.s ) * hsb.b;
	        hsl.s = hsb.s * hsb.b;
	        hsl.s /= ( hsl.l <= 1 ) ? ( hsl.l ) : 2 - ( hsl.l );
	        hsl.l /= 2;

	        hsl.h = Math.round( hsl.h );
	        hsl.s = Math.round( hsl.s );
	        hsl.l = Math.round( hsl.l );

	        return hsl;
	    };

	    Color.convertHSBToHSL = function( hsb ) {
	        var h = hsb.h,
	        s = hsb.s / 100,
	        b = hsb.b / 100,
	        hsl = {
	            h: 0,
	            s: 0,
	            l: 0,
	            a: ( 'a' in hsb ? hsb.a : 1 )
	        };

	        hsl.h = h;
	        hsl.l = ( 2 - s ) * b;
	        hsl.s = s * b;
	        hsl.s /= ( hsl.l <= 1 ) ? ( hsl.l ) : 2 - ( hsl.l );
	        hsl.l /= 2;

	        hsl.h = Math.round( hsl.h );
	        hsl.s = Math.round( hsl.s * 100 );
	        hsl.l = Math.round( hsl.l * 100 );

	        return hsl;
	    };

	    Color.convertRGBToHSB = function( rgb ) {
	        var min = Math.min( rgb.r, rgb.g, rgb.b ),
	        max = Math.max( rgb.r, rgb.g, rgb.b ),
	        delta = max - min,
	        hsb = {
	            h: 0,
	            s: 0,
	            b: 0,
	            a: ( 'a' in rgb ? rgb.a : 1 )
	        };

	        hsb.b = 100 * max / 255;
	        hsb.s = max != 0 ? 100 * delta / max : 0;

	        if ( hsb.s != 0 ) {
	            if ( rgb.r == max ) {
	                hsb.h = ( rgb.g - rgb.b ) / delta;
	            } else if (rgb.g == max) {
	                hsb.h = 2 + ( rgb.b - rgb.r ) / delta;
	            } else {
	                hsb.h = 4 + ( rgb.r - rgb.g ) / delta;
	            }
	        } else {
	            hsb.h = -1;
	        }

	        hsb.h *= 60;

	        if ( hsb.h < 0 ) {
	            hsb.h += 360;
	        }

	        hsb.h = Math.round( hsb.h );
	        hsb.s = Math.round( hsb.s );
	        hsb.b = Math.round( hsb.b );

	        return hsb;
	    };

	    Color.convertHSLToHSB = function( hsl ) {
	        var h = hsl.h,
	        s = hsl.s / 100,
	        l = hsl.l / 100,
	        hsb = {
	            h: 0,
	            s: 0,
	            b: 0,
	            a: ( 'a' in hsl ? hsl.a : 1 )
	        };

	        hsb.h = h;
	        l *= 2;
	        s *= (l <= 1) ? l : 2 - l;
	        hsb.b = (l + s) / 2;
	        hsb.s = (2 * s) / (l + s);

	        hsb.h = Math.round( hsb.h );
	        hsb.s = Math.round( hsb.s * 100 );
	        hsb.b = Math.round( hsb.b * 100 );

	        return hsb;
	    };

	    Color.convertRGBToHSL = function( rgb ) {
	        return Color.convertHSBToHSL( Color.convertRGBToHSB( rgb ) );
	    };

	    Color.convertHSBToRGB = function( hsb ) {
	        var h = Math.round( hsb.h ),
	        s = Math.round( hsb.s * 255 / 100),
	        v = Math.round(hsb.b * 255 / 100),
	        rgb = {
	            r: 0,
	            g: 0,
	            b: 0,
	            a: ( 'a' in hsb ? hsb.a : 1 )
	        };

	        if (s == 0) {
	            rgb.r = rgb.g = rgb.b = v;
	        } else {
	            var t1 = v,
	            t2 = ( 255 - s ) * v / 255,
	            t3 = ( t1 - t2 ) * ( h % 60 ) / 60;

	            if ( h == 360 ) {
	                h = 0;
	            }

	            if ( h < 60 ) {
	                rgb.r = t1;
	                rgb.b = t2;
	                rgb.g = t2 + t3;
	            } else if ( h < 120 ) {
	                rgb.r = t1 - t3;
	                rgb.g = t1;
	                rgb.b = t2;
	            } else if ( h < 180 ) {
	                rgb.r = t2;
	                rgb.g = t1;
	                rgb.b = t2 + t3;
	            } else if ( h < 240 ) {
	                rgb.r = t2;
	                rgb.g = t1 - t3;
	                rgb.b = t1;
	            } else if ( h < 300 ) {
	                rgb.r = t2 + t3;
	                rgb.g = t2;
	                rgb.b = t1;
	            } else if ( h < 360 ) {
	                rgb.r = t1;
	                rgb.g = t2;
	                rgb.b = t1 - t3;
	            } else {
	                rgb.r = 0;
	                rgb.g = 0;
	                rgb.b = 0;
	            }
	        }

	        rgb.r = Math.round( rgb.r );
	        rgb.g = Math.round( rgb.g );
	        rgb.b = Math.round( rgb.b );

	        return rgb;
	    };

	    Color.convertHSLToRGB = function( hsl ) {
	        return Color.convertHSBToRGB( Color.convertHSLToHSB( hsl ) );
	    };

	    WebPro.Color = Color;

	    return Color;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(10) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Disclosure ) {
	    Disclosure.DisplayPropertyTransitionPlugin = {
	        defaultOptions: {},

	        initialize: function( widget, options ) {
	            var plugin = this;

	            // The idea here is that we only want to override props that aren't already
	            // specified in the options we were      given. We then write back the merged
	            // results into the original options object so the caller gets our changes.

	            $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

	            // Attach our behavior after the widget attaches its behaviors.

	            widget.bind( 'attach-behavior', function() {
	                plugin._attachBehavior( widget );
	            });
	        },

	        _attachBehavior: function( widget ) {
	            var plugin = this,
	                panels = widget.panels,
	                $panels = panels.$element,
	                activeIndex = panels.activeIndex;

	            // Set the display property of any panel to
	            // be shown to block.

	            panels.bind( 'wp-panel-show', function( e, data ) {
	                data.panel.style.display = 'block';
	            });

	            // Set the display property of any panel to
	            // be hidden to none.

	            panels.bind( 'wp-panel-hide', function( e, data ) {
	                data.panel.style.display = 'none';
	            });

	            // Set the initial display of each panel.

	            $panels.each( function( index, ele ) {
	                this.style.display = ( index !== activeIndex ) ? 'none' : 'block';
	            });
	        }
	    };

	    // This is a disclosure widget plugin that uses javascript to animate the
	    // open and closing of the widget panels. Ideally CSS3 transitions/animations
	    // would be used, but if content is supposed to animate in older browsers that
	    // don't support CSS3, this plugin can be used.

	    Disclosure.AccordionTransitionPlugin = {
	        defaultOptions: {
	            transitionDirection: 'vertical', // 'vertical' | 'horizontal' | 'both'
	            transitionDuration:      500                         // msecs
	        },

	        initialize: function( widget, options ) {
	            var plugin = this;

	            // The idea here is that we only want to override props that aren't already
	            // specified in the options we were      given. We then write back the merged
	            // results into the original options object so the caller gets our changes.

	            $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

	            // Attach our behavior after the widget attaches its behaviors.

	            widget.bind( 'attach-behavior', function() {
	                plugin._attachBehavior( widget );
	            });
	        },

	        _attachBehavior: function( widget ) {
	            var plugin = this,
	                panels = widget.panels,
	                $panels = panels.$element,
	                activeIndex = panels.activeIndex,
	                direction = widget.options.transitionDirection;

	            // Make sure the panel elements are all set to overflow:hidden.

	            $panels.css( 'overflow', 'hidden' );

	            // Fire-off a transition that opens a panel whenever
	            // a panel-show event is recieved.

	            panels.bind( 'wp-panel-show', function( e, data ) {
	                plugin._showPanel( widget, data );
	            });

	            // Fire-off a transition that closes a panel whenever
	            // a panel-hide event is recieved.

	            panels.bind( 'wp-panel-hide', function( e, data ) {
	                plugin._hidePanel( widget, data );
	            });

	            $panels.each( function( index, ele ) {
	                if ( index !== activeIndex ) {
	                    if ( direction === 'vertical' || direction === 'both' ) {
	                        this.style.height = '0';
	                    }

	                    if ( direction === 'horizontal' || direction === 'both' ) {
	                        this.style.width = '0';
	                    }
	                }
	            });
	        },

	        _showPanel: function( widget, data ) {
	            var opts = widget.options,
	                direction = opts.transitionDirection,
	                $panel = $( data.panel ),
	                props = {};

	            if ( direction === 'vertical' || direction === 'both' ) {
	                props.height = $panel[ 0 ].scrollHeight + 'px';
	            }

	            if ( direction === 'horizontal' || direction === 'both' ) {
	                props.width = $panel[ 0 ].scrollWidth + 'px';
	            }

	            $panel
	                    // Force any previous animations to jump to their end.

	                    .stop( true, true )

	                    // Fire off a new open animation.

	                    .animate( props, {
	                            duration: opts.transitionDuration,
	                            complete: function() {
	                                    var props = {};

	                                    if ( direction === 'vertical' || direction === 'both' ) {
	                                        props.height = 'auto';
	                                    }

	                                    if ( direction === 'horizontal' || direction === 'both' ) {
	                                        props.width = 'auto';
	                                    }

	                                    $panel.css( props );
	                                }
	                        });
	        },

	        _hidePanel: function( widget, data ) {
	            var opts = widget.options,
	                direction = opts.transitionDirection,
	                $panel = $( data.panel ),
	                props = {};

	            if ( direction === 'vertical' || direction === 'both' ) {
	                props.height = '0';
	            }

	            if ( direction === 'horizontal' || direction === 'both' ) {
	                props.width = '0';
	            }

	            $panel
	                    // Force any previous animations to jump to their end.

	                    .stop( true, true )

	                    // Fire off a new close animation.

	                    .animate( props, { duration: opts.transitionDuration } );
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(3), __webpack_require__(6), __webpack_require__(11), __webpack_require__(12) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Utils, Widget, PanelGroup, TabGroup ) {
	    // A Disclosure widget is a composite widget that connects
	    // a set of tabs with a set of panels.

	    var Disclosure = Widget.build( 'Widget.Disclosure', Widget, {
	        defaultOptions: {
	            widgetClassName: 'wp-disclosure-panels',
	            tabClassName: 'wp-disclosure-panels-tab',
	            tabHoverClassName: 'wp-disclosure-panels-tab-hover',
	            tabDownClassName: 'wp-disclosure-panels-tab-down',
	            panelClassName: 'wp-disclosure-panels-panel',
	            tabActiveClassName: 'wp-disclosure-panels-tab-active',
	            panelActiveClassName: 'wp-disclosure-panels-panel-active',
	            defaultIndex: 0,
	            toggleStateEnabled: false
	        },

	        _attachBehavior: function() {
	            var root = this.$element[ 0 ],
	                rclass = this.options.widgetClassName,
	                $tabs = Utils.scopedFind( root, '.' + this.options.tabClassName, rclass, root ),
	                $panels = Utils.scopedFind( root, '.' + this.options.panelClassName, rclass, root );

	            this.tabs = new TabGroup( $tabs, {
	                hoverClass: this.options.tabHoverClassName,
	                downClass: this.options.tabDownClassName,
	                checkedClass: this.options.tabActiveClassName
	            });

	            this.panels = new PanelGroup( $panels, {
	                panelClass: this.options.panelClassName,
	                activeClass: this.options.panelActiveClassName,
	                defaultIndex: this.options.defaultIndex,
	                toggleStateEnabled: this.options.toggleStateEnabled
	            });

	            this.panels.addTabGroup( this.tabs );
	        }
	    });

	    // A TabbedPanels widget is basically a disclosure widget, but we declare a formal
	    // widget so that it uses a different set of class names, and allows users to set
	    // default plugins that are specific to just accordions.

	    var TabbedPanels = Widget.build( 'Widget.TabbedPanels', Disclosure, {
	        defaultOptions: {
	            widgetClassName: 'wp-tabbed-panels-panels',
	            tabClassName: 'wp-tabbed-panels-panels-tab',
	            tabHoverClassName: 'wp-tabbed-panels-panels-tab-hover',
	            tabDownClassName: 'wp-tabbed-panels-panels-tab-down',
	            tabActiveClassName: 'wp-tabbed-panels-panels-tab-active',
	            panelClassName: 'wp-tabbed-panels-panels-panel',
	            panelActiveClassName: 'wp-tabbed-panels-panels-panel-active',
	            toggleStateEnabled: false
	        }
	    });

	    // An Accordion is basically a disclosure widget, but we declare a formal
	    // widget so that it uses a different set of class names, and allows
	    // users to set default plugins that are specific to just accordions.

	    var Accordion = Widget.build( 'Widget.Accordion', Disclosure, {
	        defaultOptions: {
	            widgetClassName: 'wp-accordion',
	            tabClassName: 'wp-accordion-tab',
	            tabHoverClassName: 'wp-accordion-tab-hover',
	            tabDownClassName: 'wp-accordion-tab-down',
	            tabActiveClassName: 'wp-accordion-tab-active',
	            panelClassName: 'wp-accordion-panel',
	            panelActiveClassName: 'wp-accordion-panel-active',
	            toggleStateEnabled: false
	        }
	    });

	    return Disclosure;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(3), __webpack_require__(6) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Utils, Widget ) {
	    var PanelGroup = Widget.build( 'Widget.PanelGroup', Widget, {
	        _widgetName: 'panel-group',

	        defaultOptions: {
	            defaultIndex: 0,
	            panelClass: 'wp-panel',
	            activeClass: 'wp-panel-active',
	            toggleStateEnabled: false,
	            tabGroups: null
	        },

	        _setUp: function() {
	            var self = this;

	            this.tabGroups = [];
	            this._tabCallback = function( e, data) {
	                self._handleTabSelect( e, data );
	            };

	            this.showLock = 0;
	            this.tabDriver = null;

	            return PanelGroup.prototype._super.prototype._setUp.apply( this, arguments );
	        },

	        _attachBehavior: function() {
	            var self = this;

	            this.activeElement = null;
	            this.activeIndex = -1;

	            this.$element.addClass( this.options.panelClass );

	            // If a defaultIndex is specified, check the
	            // corresponding button.

	            var defaultIndex = this.options.defaultIndex;
	            if ( typeof defaultIndex === 'number' && defaultIndex >= 0 ) {
	                this.showPanel( defaultIndex );
	            }

	            this.addTabGroup( this.options.tabGroups );
	        },

	        _getElementIndex: function( ele ) {
	            return ele ? $.inArray( ele, this.$element.get() ) : -1;
	        },

	        _getElementByIndex: function( index ) {
	            return this.$element.eq( index )[ 0 ];
	        },

	        _getElement: function( indexOrEle ) {
	            return ( typeof indexOrEle === 'number' ) ? this._getElementByIndex( indexOrEle ) : indexOrEle;
	        },

	        _syncTabGroups: function() {
	            var groups = this.tabGroups,
	                activeIndex = this.activeIndex;

	            for ( var i = 0; i < groups.length; i++ ) {
	                var tg = groups[ i ];
	                if ( tg !== this.tabDriver ) {
	                    tg.selectTab( activeIndex );
	                }
	            }
	        },

	        showPanel: function( indexOrEle ) {
	            if ( !this.showLock ) {
	                ++this.showLock;

	                var ele = this._getElement( indexOrEle ),
	                    activeEle = this.activeElement,
	                    activeClass = this.options.activeClass;
	                if ( ele ) {
	                    if ( ele !== activeEle ) {
	                        var data = { panel: ele, panelIndex: this._getElementIndex( ele ) };

	                        this.trigger( 'wp-panel-before-show', data );

	                        if ( activeEle ) {
	                            this.hidePanel( activeEle );
	                        }
	                        $( ele ).addClass( activeClass );
	                        this.activeElement = ele;
	                        this.activeIndex = this._getElementIndex( ele );

	                        this._syncTabGroups();

	                        this.trigger( 'wp-panel-show', data );
	                    } else if ( this.options.toggleStateEnabled ) {
	                        this.hidePanel( ele );
	                    }
	                }

	                --this.showLock;
	            }
	        },

	        hidePanel: function( indexOrEle ) {
	            var ele = ( typeof indexOrEle === 'number' ) ? this.$element.eq( indexOrEle )[ 0 ] : indexOrEle;
	            if ( ele ) {
	                var data = { panel: ele, panelIndex: this._getElementIndex( ele ) };

	                this.trigger( 'wp-panel-before-hide', data );

	                $( ele ).removeClass( this.options.activeClass );
	                if ( ele === this.activeElement ) {
	                    this.activeElement = null;
	                    this.activeIndex = -1;
	                }

	                this.trigger( 'wp-panel-hide', data );
	            }
	        },

	        _handleTabSelect: function( e, data ) {
	            if ( !this.showLock ) {
	                this.tabDriver = e.target;
	                this.showPanel( data.tabIndex );
	                this.tabDriver = null;
	            }
	        },

	        addTabGroup: function( tabGroup ) {
	            if ( tabGroup ) {
	                tabGroup = Utils.ensureArray( tabGroup );
	                var len = tabGroup.length;
	                for ( var i = 0; i < len; i++ ) {
	                    var tg = tabGroup[ i ];
	                    if ( $.inArray( tg, this.tabGroups ) === -1 ) {
	                        this.tabGroups.push( tg );
	                        tg.bind( 'wp-tab-select', this._tabCallback );
	                    }
	                }

	                ++this.showLock;
	                this._syncTabGroups();
	                --this.showLock;
	            }
	        },

	        removeTabGroup: function( tabGroup ) {
	            tabGroup = Utils.ensureArray( tabGroup );

	            var len = tabGroup.length;

	            for ( var i = 0; i < len; i++ ) {
	                var tg = tabGroup[ i ]
	                    sets = this.tabGroups,
	                    loc = $.inArray( tg, sets );
	                if ( loc !== -1 ) {
	                    sets.splice( loc, 1 );
	                }
	            }
	        }
	    });

	    // Add a convenience method to the jQuery Collection prototype,
	    // that applies our RadioGroup behavior to all the elements in the collection.

	    Widget.addMultiElementWidgetConstructorAsjQueryPlugin( 'wpPanelGroup', PanelGroup );

	    // syncTabsByPanelIdPlugin
	    //
	    // A plugin that allows tag groups to pick the right panel
	    // based on the id used in the href of the tab link.
	    //
	    // XXX: Note the main reason this isn't a formal class yet
	    //      is because it will require some API changes to both
	    //      the PanelGroup and the TabGroup. We'll need to revisit
	    //      this.

	    PanelGroup.syncTabsByPanelIdPlugin = {
	        initialize: function( widget, options ) {
	            var plugin = this;

	            widget._handleTabSelect = function( e, data ) {
	                    if ( !this.showLock ) {
	                        this.tabDriver = e.target;

	                        var linkEle = plugin._findTabLink( data.tab );

	                        if ( linkEle ) {
	                            var selector = '#' + linkEle.href.replace( /.*#/, '' ),
	                                panel = widget.$element.filter( selector )[ 0 ];

	                            if ( panel ) {
	                                this.showPanel( panel );
	                            }
	                        }

	                        this.tabDriver = null;
	                    }
	                };

	            widget._syncTabGroups = function() {
	                    var groups = this.tabGroups,
	                        activeEle = this.activeElement;

	                    if ( activeEle && activeEle.id ) {
	                        var selector = '[href$=#' + activeEle.id + ']';

	                        for ( var i = 0; i < groups.length; i++ ) {
	                            var tg = groups[ i ];
	                            if ( tg !== this.tabDriver ) {
	                                var result = tg.$element.filter( selector )[ 0 ];
	                                if ( !result ) {
	                                    result = tg.$element.children( selector )[ 0 ];
	                                }

	                                if ( result ) {
	                                    tg.selectTab( result );
	                                }
	                            }
	                        }
	                    }
	                };
	        },

	        _findTabLink: function( tabEle ) {
	            var $tabEle = $( tabEle ),
	                link = $tabEle.closest( '[href]' )[ 0 ];

	            if ( !link ) {
	                link = $tabEle.children( '[href]' )[ 0 ];
	            }

	            return link;
	        }
	    };

	    return PanelGroup;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(6), __webpack_require__(13) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Widget, RadioGroup ) {
	    var TabGroup = Widget.build( 'Widget.TabGroup', RadioGroup, {
	        defaultOptions: {
	            defaultIndex: 0,
	            hoverClass: 'wp-tab-hover',
	            downClass: 'wp-tab-down',
	            disabledClass: 'wp-tab-disabled',
	            checkedClass: 'wp-tab-active',
	            disabled: false,
	            toggleStateEnabled: false
	        },

	        selectTab: function( indexOrElement ) {
	            this.checkButton( indexOrElement );
	        },

	        checkButton: function( indexOrElement ) {
	            var ele = this._getElement( indexOrElement ),
	                eleIndex = this._getElementIndex( ele ),
	                data = { tab: ele, tabIndex: eleIndex };

	            this.trigger( 'wp-tab-before-select', data );

	            TabGroup.prototype._super.prototype.checkButton.apply( this, arguments );

	            this.trigger( 'wp-tab-select', data );
	        }
	    });

	    // Add a convenience method to the jQuery Collection prototype,
	    // that applies our RadioGroup behavior to all the elements in the collection.

	    Widget.addMultiElementWidgetConstructorAsjQueryPlugin( 'wpTabGroup', TabGroup );

	    return TabGroup;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(6), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Widget, Button ) {
	    // The RadioGroup widget is a class that manages the "checked" state for
	    // a group of buttons. The intent is to encapsulate this behavior in
	    // a re-useable class so that it can be used as the basis for other
	    // UI patterns, for example a Tab Group for tabbed panels or accordions.

	    var RadioGroup = Widget.build( "Widget.RadioGroup", Widget, {
	        _widgetName: "radio-group",

	        defaultOptions: {
	            defaultIndex: 0,
	            hoverClass: "wp-radio-hover",
	            downClass: "wp-radio-down",
	            disabledClass: "wp-radio-disabled",
	            checkedClass: "wp-radio-checked",
	            disabled: false,
	            toggleStateEnabled: false,
	            overEvent: 'mouseover',
	            downEvent: 'mousedown',
	            upEvent: 'mouseup',
	            outEvent: 'mouseout',
	            clickEvent: 'click'
	        },

	        _attachBehavior: function() {
	            var self = this;

	            this.buttons = [];
	            this.activeElement = null;
	            this.activeIndex = -1;

	            // The $element property for our radio-group is actually a collection of all the
	            // elements that are part of the radio-group.

	            this.$element.each(function() {
	                self.buttons.push( self._addButtonBehavior( this ) );
	            });

	            // Set up the disabled state across all buttons that are part of
	            // the radio-group.

	            this.disabled( this.options.disabled );

	            // If a defaultIndex is specified, check the
	            // corresponding button.

	            var defaultIndex = this.options.defaultIndex;
	            if ( typeof defaultIndex === "number" && defaultIndex >= 0 ) {
	                this.checkButton( defaultIndex );
	            }
	        },

	        _addButtonBehavior: function( ele ) {
	            var self = this,
	                options = this.options,
	                btn = new Button( ele, {
	                    hoverClass: options.hoverClass,
	                    downClass: options.downClass,
	                    disabledClass: options.disabledClass,
	                    callback: function( e ) {
	                        return self._handleClick( e, btn, ele );
	                    },
	                    overEvent: options.overEvent,
	                    downEvent: options.downEvent,
	                    upEvent: options.upEvent,
	                    outEvent: options.outEvent,
	                    clickEvent: options.clickEvent
	                });

	            return btn;
	        },

	        _handleClick: function( e, btn, ele ) {
	            if ( !this.options.disabled ) {
	                this.checkButton( ele );
	            }
	        },

	        _getElementIndex: function( ele ) {
	            return ele ? $.inArray( ele, this.$element.get() ) : -1;
	        },

	        _getElementByIndex: function( index ) {
	            return this.$element.eq( index )[ 0 ];
	        },

	        _getElement: function( indexOrEle ) {
	            return ( typeof indexOrEle === "number" ) ? this._getElementByIndex( indexOrEle ) : indexOrEle;
	        },

	        checkButton: function( indexOrEle ) {
	            var ele = this._getElement( indexOrEle ),
	                activeEle = this.activeElement,
	                checkedClass = this.options.checkedClass;
	            if ( ele ) {
	                if ( ele !== activeEle ) {
	                    if ( activeEle ) {
	                        $( activeEle ).removeClass( checkedClass );
	                    }
	                    $( ele ).addClass( checkedClass );
	                } else if ( this.options.toggleStateEnabled ) {
	                    $( ele ).removeClass( checkedClass );
	                    ele = null;
	                }

	                this.activeElement = ele;
	                this.activeIndex = this._getElementIndex( ele );
	            }
	        },

	        disabled: function( val ) {
	            if ( typeof val === "boolean" ) {
	                this.options.disabled = val;
	                $.each( this.buttons, function( i, button ) {
	                    button.disabled( val );
	                });
	            }

	            return this.options.disabled;
	        }
	    });

	    // Add a convenience method to the jQuery Collection prototype,
	    // that applies our RadioGroup behavior to all the elements in the collection.

	    Widget.addMultiElementWidgetConstructorAsjQueryPlugin( 'wpRadioGroup', RadioGroup );

	    return RadioGroup;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(6), __webpack_require__(15), __webpack_require__(16) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Widget, Vmouse, copyCSS ) {
	    var ContentEdit = Widget.build( 'Widget.ContentEdit', Widget, {
	        _widgetName: 'content-edit',

	        defaultOptions: {
	            startEvent: 'vclick',
	            editingClass: 'editing',
	            enabled: true,
	            clearOnEdit: false,
	            stopKeyCode: 27
	        },

	        _extractData: function() {
	        },

	        _attachBehavior: function() {
	            var self = this;
	            this.originalValue = this.$element.html();
	            this.$editField = $( '<textarea></textarea>' );
	            this.enabled = true;
	            if ( !this.options.enabled ) {
	                this.disable();
	            }
	            this.$element.on( this.options.startEvent, function() {
	                if ( self.enabled ) {
	                    self._edit();
	                }
	            });
	        },

	        disable: function() {
	            if ( this.$element.hasClass( this.options.editingClass ) ) {
	                this._stopEdit();
	            }
	            this.enabled = false;
	        },

	        enable: function() {
	            this.enabled = true;
	        },

	        _edit: function() {
	            var self = this,
	                $content = this.$element,
	                $edit = this.$editField,
	                self = this;

	            $edit.copyCSS( $content, null, [ 'display', 'cursor', 'position', 'top', 'left', 'bottom', 'right' ] );
	            $edit.css( 'position', 'absolute' );
	            $edit.css( 'left', $content.position().left + 'px' )
	            $edit.css( 'top', $content.position().top + 'px' )
	            $edit.height( $content.height() );
	            $edit.width( $content.width() );

	            $content.addClass( this.options.editingClass );
	            $content.after( $edit );
	            if ( !this.options.clearOnEdit ) {
	                $edit.val( $content.text() );
	            }
	            $edit.focus().on( 'blur', function() {
	                self._stopEdit();
	            }).on( 'input', function( evt ) {
	                self._update( evt );
	            });

	            this.trigger( 'wp-content-edit-start' );
	            $content.trigger( 'wp-content-edit-start' );
	        },

	        _stopEdit: function() {
	            var $content = this.$element,
	                $edit = this.$editField;

	            if ( $edit.val() === '' ) {
	                $content.html( this.originalValue );
	            } else {
	                $content.text( $edit.val() );
	            }
	            $content.removeClass( this.options.editingClass );
	            $edit.remove();

	            this.trigger( 'wp-content-edit-stop' );
	            $content.trigger( 'wp-content-edit-stop' );
	        },

	        _update: function( evt ) {
	            var $content = this.$element,
	                $edit = this.$editField;

	            if ( evt.keyCode == this.options.stopKeyCode ) {
	                evt.preventDefault();
	                $edit.trigger( 'blur' );
	            } else {
	                this.trigger( 'wp-content-edit-update' );
	                $content.trigger( 'wp-content-edit-update' );
	            }
	        }
	    });

	    $.fn.wpContentEdit = function( options ) {
	        this.each( function() {
	            var contentEdit = new ContentEdit( this, options );
	            $( this ).data( 'wp-content-edit', contentEdit );
	        });
	        return this;
	    };

	    return ContentEdit;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	* jQuery Mobile Framework v1.2.0
	* http://jquerymobile.com
	*
	* Copyright 2012 jQuery Foundation and other contributors
	* Released under the MIT license.
	* http://jquery.org/license
	*
	*/

	// This plugin is an experiment for abstracting away the touch and mouse
	// events so that developers don't have to worry about which method of input
	// the device their document is loaded on supports.
	//
	// The idea here is to allow the developer to register listeners for the
	// basic mouse events, such as mousedown, mousemove, mouseup, and click,
	// and the plugin will take care of registering the correct listeners
	// behind the scenes to invoke the listener at the fastest possible time
	// for that device, while still retaining the order of event firing in
	// the traditional mouse environment, should multiple handlers be registered
	// on the same element for different events.
	//
	// The current version exposes the following virtual events to jQuery bind methods:
	// "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel"

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $ ) {

	    var dataPropertyName = "virtualMouseBindings",
	        touchTargetPropertyName = "virtualTouchID",
	        virtualEventNames = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split( " " ),
	        touchEventProps = "clientX clientY pageX pageY screenX screenY".split( " " ),
	        mouseHookProps = $.event.mouseHooks ? $.event.mouseHooks.props : [],
	        mouseEventProps = $.event.props.concat( mouseHookProps ),
	        activeDocHandlers = {},
	        resetTimerID = 0,
	        startX = 0,
	        startY = 0,
	        didScroll = false,
	        clickBlockList = [],
	        blockMouseTriggers = false,
	        blockTouchTriggers = false,
	        eventCaptureSupported = "addEventListener" in document,
	        $document = $( document ),
	        nextTouchID = 1,
	        lastTouchID = 0, threshold;

	    $.vmouse = {
	        moveDistanceThreshold: 10,
	        clickDistanceThreshold: 10,
	        resetTimerDuration: 1500
	    };

	    function getNativeEvent( event ) {

	        while ( event && typeof event.originalEvent !== "undefined" ) {
	            event = event.originalEvent;
	        }
	        return event;
	    }

	    function createVirtualEvent( event, eventType ) {

	        var t = event.type,
	            oe, props, ne, prop, ct, touch, i, j, len;

	        event = $.Event( event );
	        event.type = eventType;

	        oe = event.originalEvent;
	        props = $.event.props;

	        // addresses separation of $.event.props in to $.event.mouseHook.props and Issue 3280
	        // https://github.com/jquery/jquery-mobile/issues/3280
	        if ( t.search( /^(mouse|click)/ ) > -1 ) {
	            props = mouseEventProps;
	        }

	        // copy original event properties over to the new event
	        // this would happen if we could call $.event.fix instead of $.Event
	        // but we don't have a way to force an event to be fixed multiple times
	        if ( oe ) {
	            for ( i = props.length, prop; i; ) {
	                prop = props[ --i ];
	                event[ prop ] = oe[ prop ];
	            }
	        }

	        // make sure that if the mouse and click virtual events are generated
	        // without a .which one is defined
	        if ( t.search(/mouse(down|up)|click/) > -1 && !event.which ) {
	            event.which = 1;
	        }

	        if ( t.search(/^touch/) !== -1 ) {
	            ne = getNativeEvent( oe );
	            t = ne.touches;
	            ct = ne.changedTouches;
	            touch = ( t && t.length ) ? t[0] : ( ( ct && ct.length ) ? ct[ 0 ] : undefined );

	            if ( touch ) {
	                for ( j = 0, len = touchEventProps.length; j < len; j++) {
	                    prop = touchEventProps[ j ];
	                    event[ prop ] = touch[ prop ];
	                }
	            }
	        }

	        return event;
	    }

	    function getVirtualBindingFlags( element ) {

	        var flags = {},
	            b, k;

	        while ( element ) {

	            b = $.data( element, dataPropertyName );

	            for (      k in b ) {
	                if ( b[ k ] ) {
	                    flags[ k ] = flags.hasVirtualBinding = true;
	                }
	            }
	            element = element.parentNode;
	        }
	        return flags;
	    }

	    function getClosestElementWithVirtualBinding( element, eventType ) {
	        var b;
	        while ( element ) {

	            b = $.data( element, dataPropertyName );

	            if ( b && ( !eventType || b[ eventType ] ) ) {
	                return element;
	            }
	            element = element.parentNode;
	        }
	        return null;
	    }

	    function enableTouchBindings() {
	        blockTouchTriggers = false;
	    }

	    function disableTouchBindings() {
	        blockTouchTriggers = true;
	    }

	    function enableMouseBindings() {
	        lastTouchID = 0;
	        clickBlockList.length = 0;
	        blockMouseTriggers = false;

	        // When mouse bindings are enabled, our
	        // touch bindings are disabled.
	        disableTouchBindings();
	    }

	    function disableMouseBindings() {
	        // When mouse bindings are disabled, our
	        // touch bindings are enabled.
	        enableTouchBindings();
	    }

	    function startResetTimer() {
	        clearResetTimer();
	        resetTimerID = setTimeout( function() {
	            resetTimerID = 0;
	            enableMouseBindings();
	        }, $.vmouse.resetTimerDuration );
	    }

	    function clearResetTimer() {
	        if ( resetTimerID ) {
	            clearTimeout( resetTimerID );
	            resetTimerID = 0;
	        }
	    }

	    function triggerVirtualEvent( eventType, event, flags ) {
	        var ve;

	        if ( ( flags && flags[ eventType ] ) ||
	                    ( !flags && getClosestElementWithVirtualBinding( event.target, eventType ) ) ) {

	            ve = createVirtualEvent( event, eventType );

	            $( event.target).trigger( ve );
	        }

	        return ve;
	    }

	    function mouseEventCallback( event ) {
	        var touchID = $.data( event.target, touchTargetPropertyName );

	        if ( !blockMouseTriggers && ( !lastTouchID || lastTouchID !== touchID ) ) {
	            var ve = triggerVirtualEvent( "v" + event.type, event );
	            if ( ve ) {
	                if ( ve.isDefaultPrevented() ) {
	                    event.preventDefault();
	                }
	                if ( ve.isPropagationStopped() ) {
	                    event.stopPropagation();
	                }
	                if ( ve.isImmediatePropagationStopped() ) {
	                    event.stopImmediatePropagation();
	                }
	            }
	        }
	    }

	    function handleTouchStart( event ) {

	        var touches = getNativeEvent( event ).touches,
	            target, flags;

	        if ( touches && touches.length === 1 ) {

	            target = event.target;
	            flags = getVirtualBindingFlags( target );

	            if ( flags.hasVirtualBinding ) {

	                lastTouchID = nextTouchID++;
	                $.data( target, touchTargetPropertyName, lastTouchID );

	                clearResetTimer();

	                disableMouseBindings();
	                didScroll = false;

	                var t = getNativeEvent( event ).touches[ 0 ];
	                startX = t.pageX;
	                startY = t.pageY;

	                triggerVirtualEvent( "vmouseover", event, flags );
	                triggerVirtualEvent( "vmousedown", event, flags );
	            }
	        }
	    }

	    function handleScroll( event ) {
	        if ( blockTouchTriggers ) {
	            return;
	        }

	        if ( !didScroll ) {
	            triggerVirtualEvent( "vmousecancel", event, getVirtualBindingFlags( event.target ) );
	        }

	        didScroll = true;
	        startResetTimer();
	    }

	    function handleTouchMove( event ) {
	        if ( blockTouchTriggers ) {
	            return;
	        }

	        var t = getNativeEvent( event ).touches[ 0 ],
	            didCancel = didScroll,
	            moveThreshold = $.vmouse.moveDistanceThreshold,
	            flags = getVirtualBindingFlags( event.target );

	            didScroll = didScroll ||
	                ( Math.abs( t.pageX - startX ) > moveThreshold ||
	                    Math.abs( t.pageY - startY ) > moveThreshold );

	        if ( didScroll && !didCancel ) {
	            triggerVirtualEvent( "vmousecancel", event, flags );
	        }

	        triggerVirtualEvent( "vmousemove", event, flags );
	        startResetTimer();
	    }

	    function handleTouchEnd( event ) {
	        if ( blockTouchTriggers ) {
	            return;
	        }

	        disableTouchBindings();

	        var flags = getVirtualBindingFlags( event.target ),
	            t;
	        triggerVirtualEvent( "vmouseup", event, flags );

	        if ( !didScroll ) {
	            var ve = triggerVirtualEvent( "vclick", event, flags );
	            if ( ve && ve.isDefaultPrevented() ) {
	                // The target of the mouse events that follow the touchend
	                // event don't necessarily match the target used during the
	                // touch. This means we need to rely on coordinates for blocking
	                // any click that is generated.
	                t = getNativeEvent( event ).changedTouches[ 0 ];
	                clickBlockList.push({
	                    touchID: lastTouchID,
	                    x: t.clientX,
	                    y: t.clientY
	                });

	                // Prevent any mouse events that follow from triggering
	                // virtual event notifications.
	                blockMouseTriggers = true;
	            }
	        }
	        triggerVirtualEvent( "vmouseout", event, flags);
	        didScroll = false;

	        startResetTimer();
	    }

	    function hasVirtualBindings( ele ) {
	        var bindings = $.data( ele, dataPropertyName ),
	            k;

	        if ( bindings ) {
	            for ( k in bindings ) {
	                if ( bindings[ k ] ) {
	                    return true;
	                }
	            }
	        }
	        return false;
	    }

	    function dummyMouseHandler() {}

	    function getSpecialEventObject( eventType ) {
	        var realType = eventType.substr( 1 );

	        return {
	            setup: function( data, namespace ) {
	                // If this is the first virtual mouse binding for this element,
	                // add a bindings object to its data.

	                if ( !hasVirtualBindings( this ) ) {
	                    $.data( this, dataPropertyName, {} );
	                }

	                // If setup is called, we know it is the first binding for this
	                // eventType, so initialize the count for the eventType to zero.
	                var bindings = $.data( this, dataPropertyName );
	                bindings[ eventType ] = true;

	                // If this is the first virtual mouse event for this type,
	                // register a global handler on the document.

	                activeDocHandlers[ eventType ] = ( activeDocHandlers[ eventType ] || 0 ) + 1;

	                if ( activeDocHandlers[ eventType ] === 1 ) {
	                    $document.bind( realType, mouseEventCallback );
	                }

	                // Some browsers, like Opera Mini, won't dispatch mouse/click events
	                // for elements unless they actually have handlers registered on them.
	                // To get around this, we register dummy handlers on the elements.

	                $( this ).bind( realType, dummyMouseHandler );

	                // For now, if event capture is not supported, we rely on mouse handlers.
	                if ( eventCaptureSupported ) {
	                    // If this is the first virtual mouse binding for the document,
	                    // register our touchstart handler on the document.

	                    activeDocHandlers[ "touchstart" ] = ( activeDocHandlers[ "touchstart" ] || 0) + 1;

	                    if ( activeDocHandlers[ "touchstart" ] === 1 ) {
	                        $document.bind( "touchstart", handleTouchStart )
	                            .bind( "touchend", handleTouchEnd )

	                            // On touch platforms, touching the screen and then dragging your finger
	                            // causes the window content to scroll after some distance threshold is
	                            // exceeded. On these platforms, a scroll prevents a click event from being
	                            // dispatched, and on some platforms, even the touchend is suppressed. To
	                            // mimic the suppression of the click event, we need to watch for a scroll
	                            // event. Unfortunately, some platforms like iOS don't dispatch scroll
	                            // events until *AFTER* the user lifts their finger (touchend). This means
	                            // we need to watch both scroll and touchmove events to figure out whether
	                            // or not a scroll happenens before the touchend event is fired.

	                            .bind( "touchmove", handleTouchMove )
	                            .bind( "scroll", handleScroll );
	                    }
	                }
	            },

	            teardown: function( data, namespace ) {
	                // If this is the last virtual binding for this eventType,
	                // remove its global handler from the document.

	                --activeDocHandlers[ eventType ];

	                if ( !activeDocHandlers[ eventType ] ) {
	                    $document.unbind( realType, mouseEventCallback );
	                }

	                if ( eventCaptureSupported ) {
	                    // If this is the last virtual mouse binding in existence,
	                    // remove our document touchstart listener.

	                    --activeDocHandlers[ "touchstart" ];

	                    if ( !activeDocHandlers[ "touchstart" ] ) {
	                        $document.unbind( "touchstart", handleTouchStart )
	                            .unbind( "touchmove", handleTouchMove )
	                            .unbind( "touchend", handleTouchEnd )
	                            .unbind( "scroll", handleScroll );
	                    }
	                }

	                var $this = $( this ),
	                    bindings = $.data( this, dataPropertyName );

	                // teardown may be called when an element was
	                // removed from the DOM. If this is the case,
	                // jQuery core may have already stripped the element
	                // of any data bindings so we need to check it before
	                // using it.
	                if ( bindings ) {
	                    bindings[ eventType ] = false;
	                }

	                // Unregister the dummy event handler.

	                $this.unbind( realType, dummyMouseHandler );

	                // If this is the last virtual mouse binding on the
	                // element, remove the binding data from the element.

	                if ( !hasVirtualBindings( this ) ) {
	                    $this.removeData( dataPropertyName );
	                }
	            }
	        };
	    }

	    // Expose our custom events to the jQuery bind/unbind mechanism.

	    for ( var i = 0; i < virtualEventNames.length; i++ ) {
	        $.event.special[ virtualEventNames[ i ] ] = getSpecialEventObject( virtualEventNames[ i ] );
	    }

	    // Add a capture click handler to block clicks.
	    // Note that we require event capture support for this so if the device
	    // doesn't support it, we punt for now and rely solely on mouse events.
	    if ( eventCaptureSupported ) {
	        document.addEventListener( "click", function( e ) {
	            var cnt = clickBlockList.length,
	                target = e.target,
	                x, y, ele, i, o, touchID;

	            if ( cnt ) {
	                x = e.clientX;
	                y = e.clientY;
	                threshold = $.vmouse.clickDistanceThreshold;

	                // The idea here is to run through the clickBlockList to see if
	                // the current click event is in the proximity of one of our
	                // vclick events that had preventDefault() called on it. If we find
	                // one, then we block the click.
	                //
	                // Why do we have to rely on proximity?
	                //
	                // Because the target of the touch event that triggered the vclick
	                // can be different from the target of the click event synthesized
	                // by the browser. The target of a mouse/click event that is syntehsized
	                // from a touch event seems to be implementation specific. For example,
	                // some browsers will fire mouse/click events for a link that is near
	                // a touch event, even though the target of the touchstart/touchend event
	                // says the user touched outside the link. Also, it seems that with most
	                // browsers, the target of the mouse/click event is not calculated until the
	                // time it is dispatched, so if you replace an element that you touched
	                // with another element, the target of the mouse/click will be the new
	                // element underneath that point.
	                //
	                // Aside from proximity, we also check to see if the target and any
	                // of its ancestors were the ones that blocked a click. This is necessary
	                // because of the strange mouse/click target calculation done in the
	                // Android 2.1 browser, where if you click on an element, and there is a
	                // mouse/click handler on one of its ancestors, the target will be the
	                // innermost child of the touched element, even if that child is no where
	                // near the point of touch.

	                ele = target;

	                while ( ele ) {
	                    for ( i = 0; i < cnt; i++ ) {
	                        o = clickBlockList[ i ];
	                        touchID = 0;

	                        if ( ( ele === target && Math.abs( o.x - x ) < threshold && Math.abs( o.y - y ) < threshold ) ||
	                                    $.data( ele, touchTargetPropertyName ) === o.touchID ) {
	                            // XXX: We may want to consider removing matches from the block list
	                            //                  instead of waiting for the reset timer to fire.
	                            e.preventDefault();
	                            e.stopPropagation();
	                            return;
	                        }
	                    }
	                    ele = ele.parentNode;
	                }
	            }
	        }, true);
	    }

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	Copyright 2013 Mike Dunn
	http://upshots.org/
	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $ ) {
	    var jQuery = $;

	    $.fn.getStyles = function( only, except ) {
	        // the map to return with requested styles and values as KVP
	        var product = {};

	        // the style object from the DOM element we need to iterate through
	        var style;

	        // recycle the name of the style attribute
	        var name;

	        // if it's a limited list, no need to run through the entire style object
	        if ( only && only instanceof Array ) {
	            for ( var i = 0, l = only.length; i < l; i++ ) {
	                // since we have the name already, just return via built-in .css method
	                name = only[ i ];
	                product[ name ] = this.css( name );
	            }
	        } else {
	            // otherwise, we need to get everything
	            var dom = this.get( 0 );

	            // standards
	            if ( window.getComputedStyle ) {

	                // convenience methods to turn css case ('background-image') to camel ('backgroundImage')
	                var pattern = /\-([a-z])/g;
	                var uc = function( a, b ) {
	                    return b.toUpperCase();
	                };
	                var camelize = function( string ) {
	                    return string.replace( pattern, uc );
	                };

	                // make sure we're getting a good reference
	                if ( style = window.getComputedStyle( dom, null ) ) {
	                    var camel, value;
	                    // opera doesn't give back style.length - use truthy since a 0 length may as well be skipped anyways
	                    if ( style.length ) {
	                        for ( var i = 0, l = style.length; i < l; i++ ) {
	                            name = style[ i ];
	                            camel = camelize( name );
	                            value = style.getPropertyValue( name );
	                            product[ camel ] = value;
	                        }
	                    } else {
	                        // opera
	                        for ( name in style ) {
	                            camel = camelize( name );
	                            value = style.getPropertyValue( name ) || style[ name ];
	                            product[ camel ] = value;
	                        }
	                    }
	                }
	            } else if ( style = dom.currentStyle ) {
	                // IE - first try currentStyle, then normal style object - don't bother with runtimeStyle
	                for ( name in style ) {
	                    product[ name ] = style[ name ];
	                }
	            } else if ( style = dom.style ) {
	                for ( name in style ) {
	                    if ( typeof style[name] != 'function' ) {
	                        product[ name ] = style[ name ];
	                    }
	                }
	            }

	        }

	        // remove any styles specified...
	        // be careful on blacklist - sometimes vendor-specific values aren't obvious but will be visible...  e.g., excepting 'color' will still let '-webkit-text-fill-color' through, which will in fact color the text
	        if ( except && except instanceof Array ) {
	            for ( var i = 0, l = except.length; i < l; i++ ) {
	                name = except[ i ];
	                delete product[ name ];
	            }
	        }

	        // one way out so we can process blacklist in one spot
	        return product;

	    };

	    // sugar - source is the selector, dom element or jQuery instance to copy from - only and except are optional
	    $.fn.copyCSS = function( source, only, except ) {
	        var styles = $( source ).getStyles( only, except );
	        this.css( styles );
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(4), __webpack_require__(3), __webpack_require__(5), __webpack_require__(18) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, WebPro, Utils, Browser, DragTracker ) {
	    // DragTrackerDelegate derives from the base DragTracker class and adds the ability
	    // to allow users to call a method delegateDrag() which crawls the element ancestor
	    // hierarchy looking for another tracker delegate that can take over dragging. The
	    // main use for this would be for implementing things like nested scrollviews that
	    // cause their parents to scroll when they hit their extremes.

	    var DragTrackerDelegate = function( element, options ) {
	        options = $.extend( {}, DragTrackerDelegate.prototype.defaultOptions, options );

	        DragTracker.call( this, element, options );

	        // We track the event and position we handled within _startDrag() and _handleDrag() so
	        // we can pass them to any delegate that will take over a drag. Note that we don't allow
	        // any calls to delegateDrag() once _stopDrag() is called.

	        this._lastDragEvent = null;
	        this._lastDragPosition = null;

	        // When a drag is delegated to another tracker, the original event handler remains in
	        // place. We need to track the handler used during the delegation so we can pass it
	        // to the next delegate if necessary.

	        this._delegateEventHandler = null;

	        // Store this tracker object on the drag element so other tracker
	        // delegates can find it.

	        $( this.element ).data( this.options.delegatePropertyName, this );

	        // Callers are allowed to pass a selector or element
	        // for the delegateElement. Make sure we normalize the
	        // option value to an element.

	        var delegateEle = this.options.delegateElement;
	        if ( delegateEle ) {
	            this.options.delegateElement = $( delegateEle )[ 0 ];
	        }
	    };

	    Utils.inherit( DragTrackerDelegate, DragTracker );

	    $.extend( DragTrackerDelegate.prototype, {
	        defaultOptions: $.extend( {}, DragTracker.prototype.defaultOptions, {
	            // The name of the data property we use to store the tracker
	            // on the drag element.

	            delegatePropertyName: 'wpDragTrackerDelegate',

	            // By default the drag tracker delegates up the ancestor
	            // hierarchy for the element it tracks. You can specify
	            // different element hierarchy to use by specifying an
	            // element or selector via the delegateElement option.

	            delegateElement: null,

	            // The getDirection() method returns the direction
	            // tracked by this drag-tracker. Possible values returned
	            // are 'horizontal', 'vertical', and 'both'. Some use cases
	            // require tracking in 'both' directions, but for the sake
	            // of delegation, the caller may want to control what direction
	            // actually gets calculated when getDirection() is called,
	            // especially when it comes time to delegate responsibilities.
	            // The getDirectionFunc constructor options gives the caller a
	            // hook to return the direction on behalf of the tracker.

	            getDirectionFunc: null,

	            // Before attempting to delegate responsibility to
	            // to one of its ancestors, _trackerIsCompatible()
	            // gets called to see if it can actually take on
	            // the responsibility. In the default implementation,
	            // _trackerIsCompatible() compares the directions
	            // of both the tracker and the delegate to see if they
	            // are compatible. If someone wanted to override this
	            // behavior, they can either derive from this class
	            // and override _trackerIsCompatible(), or, they could
	            // simply instantiate the constructor for this class
	            // and pass an alternate compare function to call via
	            // the delegateIsCompatibleFunc constructor option.

	            delegateIsCompatibleFunc: null
	        }),

	        // Override the base class version of _startDrag so we can
	        // save the last event we processed.

	        _startDrag: function( e, position ) {
	            this._lastDragEvent = e;
	            this._lastDragPosition = position;

	            return DragTrackerDelegate.prototype._super.prototype._startDrag.call( this, e, position );
	        },

	        // Override the base class version of _handleDrag so we can
	        // save the last event we processed.

	        _handleDrag: function( e, position ) {
	            this._lastDragEvent = e;
	            this._lastDragPosition = position;

	            return DragTrackerDelegate.prototype._super.prototype._handleDrag.call( this, e, position );
	        },

	        // Override the base class version of _stopDrag so we can
	        // clear our _lastDragEvent property before any stop callbacks
	        // are triggered.

	        _stopDrag: function( e, position ) {
	            this._lastDragEvent = null;
	            this._lastDragPosition = null;
	            this._delegateEventHandler = null;

	            // IE 11 will always fire a click event if the pointer event starts and
	            // ends in the same element, even if you stop propagation on the
	            // pointerdown, pointermove and pointerup events. If we started a drag,
	            // we need to make sure we kill off this click so that click handlers on
	            // the target and its ancestors don't fire.

	            if ( this.dragStarted && captureClickQueue ) {
	                var eventHandler = this._delegateEventHandler || this.dragEventHandler,
	                    n = eventHandler && eventHandler._getNativeEvent( e );
	                if ( n && n.pointerType === 'touch' && n.pointerId != undefined ) {
	                    captureClickQueue.push( { pointerId: n.pointerId } );
	                }
	            }

	            return DragTrackerDelegate.prototype._super.prototype._stopDrag.call( this, e, position );
	        },

	        // Derived classes should implement this function if they
	        // want to be selective of what kind of tracker they hand
	        // a drag off to.

	        _trackerIsCompatible: function( dt, direction ) {
	            var checkFunc = this.options.delegateIsCompatibleFunc;

	            if ( checkFunc ) {
	                return checkFunc( this, dt, direction );
	            }

	            // The trackers are compatible if they have the
	            // same direction, or the delegate can handle
	            // both directions.

	            var d1 = direction || this.getDirection(),
	                d2 = dt.getDirection();

	            return d1 === d2 || d2 === 'both';
	        },

	        // Walk the parent hierarchy of this tracker's element
	        // looking for any ancestor that has a delegate tracker
	        // stored on it.

	        _findClosestDelegate: function( element, direction ) {
	            while ( element ) {
	                var pDT = $( element ).data( this.options.delegatePropertyName );
	                if ( pDT && this._trackerIsCompatible( pDT, direction ) ) {
	                    return pDT;
	                }
	                element = element.parentNode;
	            }

	            return null;
	        },

	        // Derived classes will want to extend this method so they can
	        // cleanup before or after the drag is stopped.

	        _handleDelegateHandOff: function( event, position ) {
	            this._stopDrag( event, position );
	            this._lastDragEvent = null;
	            this._lastDragPosition = null;
	            this._delegateEventHandler = null;
	        },

	        // Attempt to delegate the drag up the ancestor hierarchy.
	        // Return true if we would a delegate that can handle the
	        // rest of the drag, return false otherwise and let the
	        // caller decide what to do next.

	        delegateDrag: function( direction ) {
	            var dtDelegate = null;

	            if ( this.dragStarted && this._lastDragEvent ) {
	                dtDelegate = this._findClosestDelegate( this.options.delegateElement || this.element.parentNode, direction );

	                if ( dtDelegate ) {
	                    var event = this._lastDragEvent,
	                        position = this._lastDragPosition,
	                        eventHandler = this._delegateEventHandler || this.dragEventHandler;
	;

	                    // We're about to pass our event handler off to a delegate
	                    // tracker so make sure every delegate above us in the hierarchy
	                    // turns off their event handlers.

	                    this.blockDelegates();

	                    // Make it seem as if the drag for this tracker
	                    // tracker ended because the user lifted their
	                    // finger.

	                    this._handleDelegateHandOff( event, position );

	                    // Trigger the event callback on the delegate that
	                    // causes the delegate to wake up and listen for
	                    // drag updates.

	                    dtDelegate._startDrag( event, position );

	                    // We are delegating because the user is already
	                    // dragging, so make sure the dragStarted flag
	                    // is already set on the delegate.

	                    dtDelegate.dragStarted = true;

	                    // The startX/startY for the delegate is currently
	                    // set to the x/y value contained within the event
	                    // we just handed to _startDrag(). Reset their values
	                    // so that they match the original drag starting point.

	                    //dtDelegate.startX = this.startX;
	                    //dtDelegate.startY = this.startY;

	                    // Trigger any drag start callbacks on the delegate.

	                    dtDelegate.dragStart( 0, 0 );

	                    // Now make it seem like the user just dragged to the
	                    // current point.

	                    dtDelegate._handleDrag( event, position );

	                    // Now set up the event handler so that it calls the delegate
	                    // directly when further events are generated.

	                    eventHandler.setDelegateTracker( dtDelegate );

	                    // Save a reference to this handler on the delegate so it
	                    // can pass it on if necessary.

	                    dtDelegate._delegateEventHandler = eventHandler;
	                }
	            }

	            return dtDelegate;
	        },

	        _getAncestorDelegates: function() {
	            var element = this.options.delegateElement || this.element.parentNode,
	                delegateName = this.options.delegatePropertyName,
	                delegates = [];

	            while ( element ) {
	                var pDT = $( element ).data( delegateName );
	                if ( pDT ) {
	                    delegates.push( pDT );
	                }
	                element = element.parentNode;
	            }

	            return delegates;
	        },

	        // blockDelegates() should be called when we want to signal
	        // any other delegate handlers above this handler, that we are
	        // going to handle the drag. This prevents any of the delegates
	        // above this one, in the element hierarchy, from continuing to
	        // track mouse/touch events.

	        blockDelegates: function( delegates ) {
	            delegates = delegates || this._getAncestorDelegates();

	            var numDelegates = delegates.length;

	            for ( var i = 0; i < numDelegates; i++ ) {
	                var delegate = delegates[ i ];
	                if ( delegate._stopTracking ) {
	                    delegate._stopTracking();
	                }
	            }
	        },

	        // Derived classes will want to override this method
	        // if they need to do any sort of book-keeping clean-up,
	        // when their drag tracking is interrupted. This default
	        // implementation simply removes the drag handlers so no
	        // further events are intercepted by this tracker  during
	        // the current drag.

	        _stopTracking: function() {
	            var eventHandler = this._delegateEventHandler || this.dragEventHandler;
	            eventHandler._removeDragHandlers();
	        },

	        // Get the direction handled by this drag tracker.

	        getDirection: function() {
	            var options = this.options,
	                func = options.getDirectionFunc;
	                ignoreX = options.ignoreX,
	                ignoreY = options.ignoreY;

	            // If we were given a function to call, use it instead
	            // of manually calculating the direction ourselves.

	            if ( func ) {
	                return func( this );
	            }

	            // Manually calculate the direction based on our ignoreX/Y flags.

	            return ( !ignoreX && !ignoreY ) ? 'both' : ( ignoreX ? 'vertical' : 'horizontal' );
	        }
	    });

	    // This is our workaround for an IE 11 problem where calling preventDefault() on
	    // the pointerdown, pointermove, and/or pointerup still result in a click event
	    // being generated if the pointerup target matches the pointerdown target. The idea
	    // here is to notate the pointerId of the IE mouse event and push it into a queue
	    // that gets checked during the capture phase of a click. Should the click have the same
	    // pointerId, we go ahead and stopPropagation() so the click doesn't get seen by the
	    // elements in the document.

	    var captureClickQueue = null;

	    if ( WebPro.pointerEventsEnabled ) {
	        captureClickQueue = [];
	        document.addEventListener( 'click', function( e ) {
	                var pointerId = e.pointerId;
	                if ( pointerId != undefined && e.pointerType === 'touch' ) {
	                var len = captureClickQueue.length;
	                    for ( var i = 0; i < len; i++ ) {
	                        var item = captureClickQueue[ i ];
	                        if ( item && item.pointerId === pointerId ) {
	                            e.preventDefault();
	                            e.stopPropagation();
	                        }
	                    }

	                    // Clear the queue.

	                    captureClickQueue.length = 0;
	                }
	            }, true );
	    }

	    WebPro.DragTrackerDelegate = DragTrackerDelegate;

	    return DragTrackerDelegate;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(4), __webpack_require__(3), __webpack_require__(15) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, WebPro, Utils, VMouse ) {

	    function DragTrackerEventHandler( dragTracker, options ) {
	        options = options || {};

	        this._enabled = true;
	        //this._startDrag = $.proxy( this._startDrag, this );
	        //this._handleDrag = $.proxy( this._handleDrag, this );
	        //this._stopDrag = $.proxy( this._stopDrag, this );

	        var self = this;
	        this.mdFunc = function( e, data ) { return self._startDrag( e, data); };
	        this.mmFunc = function( e, data ) { return self._handleDrag( e, data); };
	        this.muFunc = function( e, data ) { return self._stopDrag( e, data); };

	        this._delegateDragTracker = null;

	        this.startEvent = options.startEvent || this.startEvent;
	        this.updateEvent = options.updateEvent || this.updateEvent;
	        this.stopEvent = options.stopEvent || this.stopEvent;

	        // When jQuery dispatches an event on a given element, it first gathers
	        // all of the handlers and then invokes them sequentially. Should one
	        // handler trigger the unbinding of another handler later in this gathered
	        // list, that latter handler will still be called, unless stopPropagationImmediate()
	        // is called on the event that triggered the handlers. Because we can't rely
	        // on all code triggered by these handlers to call stopPropagationImmediately,
	        // we will use an internal flag that will tell us whether or not it is ok to
	        // execute our handlers in this situation.

	        this._dragHandlersInstalled = false;

	        this.attach( dragTracker );
	    }

	    $.extend( DragTrackerEventHandler.prototype, {
	        startEvent: 'mousedown',
	        updateEvent: 'mousemove',
	        stopEvent: 'mouseup',

	        attach: function( dragTracker ) {
	            this._dragTracker = dragTracker;

	            if ( dragTracker ) {
	                this._element = dragTracker.element;
	                //$( this._element ).on( this.startEvent, this._startDrag );
	                $( this._element ).on( this.startEvent, this.mdFunc );
	            }
	        },

	        detach: function() {
	            if ( this._dragTracker ) {
	                this._removeDragHandlers();
	                //$( this._element ).off( this.startEvent, this._startDrag );
	                $( this._element ).off( this.startEvent, this.mdFunc );
	                this._element = null;
	                this._dragTracker = null;
	            }
	        },

	        enable: function() {
	            this._enabled = true;
	        },

	        disable: function() {
	            this._enabled = false;
	            this._removeDragHandlers();
	        },

	        destroy: function() {
	            this.detach();
	        },

	        _getCurrentTracker: function() {
	            return this._delegateDragTracker || this._dragTracker;
	        },

	        setDelegateTracker: function( delegateDragTracker ) {
	            this._delegateDragTracker = delegateDragTracker;
	        },

	        _clearDelegateTracker: function() {
	            this._delegateDragTracker = null;
	        },

	        _getNativeEvent: function( e ) {
	            while( e && e.originalEvent ) {
	                e = e.originalEvent;
	            }
	            return e;
	        },

	        _startDrag: function( e ) {
	            var tracker = this._getCurrentTracker(),
	                result = false;

	            if ( this._enabled && tracker ) {
	                this._clearDelegateTracker();

	                result = tracker._startDrag( e, this.getPosition( e ) );

	                this._installDragHandlers();
	            }

	            return result;
	        },

	        _handleDrag: function( e ) {
	            var result = false;

	            if ( this._dragHandlersInstalled ) {
	              var tracker = this._getCurrentTracker();

	              if ( this._enabled && tracker ) {
	                  result = tracker._handleDrag( e, this.getPosition( e ) );
	              }
	            }

	            return result;
	        },

	        _stopDrag: function( e ) {
	            var result = false;

	            if ( this._dragHandlersInstalled ) {
	              var tracker = this._getCurrentTracker();

	              if ( this._enabled && tracker ) {
	                  result = tracker._stopDrag( e, this.getPosition( e ) );
	                  this._removeDragHandlers();
	              }
	            }

	            return result;
	        },

	        _installDragHandlers: function() {
	            $( document )
	                //.on( this.updateEvent, this._handleDrag )
	                //.on( this.stopEvent, this._stopDrag );
	                .on( this.updateEvent, this.mmFunc )
	                .on( this.stopEvent, this.muFunc );

	            this._dragHandlersInstalled = true;
	        },

	        _removeDragHandlers: function() {
	            if ( this._dragHandlersInstalled ) {
	                $( document )
	                    //.off( this.updateEvent, this._handleDrag )
	                    //.off( this.stopEvent, this._stopDrag );
	                    .off( this.updateEvent, this.mmFunc )
	                    .off( this.stopEvent, this.muFunc );

	                this._dragHandlersInstalled = false;
	            }

	            this._clearDelegateTracker();
	        },

	        getPosition: function( e ) {
	            return {
	                    x: e[ 'pageX' ],
	                    y: e[ 'pageY' ]
	                };
	        }
	    });

	    function DragTrackerTouchHandler( dragTracker, options ) {
	        DragTrackerEventHandler.call( this, dragTracker, options );

	        this._touchId = -1;
	        this._eventTarget = null;
	    }

	    Utils.inherit( DragTrackerTouchHandler, DragTrackerEventHandler, {
	        startEvent: 'touchstart',
	        updateEvent: 'touchmove',
	        stopEvent: 'touchend',

	        _getTouchById: function( e, id ) {
	            var nativeEvent = this._getNativeEvent( e );

	            var touches = nativeEvent.changedTouches;
	            if ( touches ) {
	                for ( var i = 0; i < touches.length; i++ ) {
	                    if ( touches[ i ].identifier === id ) {
	                        return touches[ i ];
	                    }
	                }
	            }

	            return null;
	        },

	        _startDrag: function( e ) {
	            var result = undefined;

	            if ( this._touchId === -1 ) {
	                var touchEvent = this._getNativeEvent( e ),
	                    touch = touchEvent && touchEvent.changedTouches && touchEvent.changedTouches[ 0 ];

	                if ( touch ) {
	                    this._touchId = touch.identifier;

	                    // Save the event target so we can filter out
	                    // bogus mousemove events on iOS.

	                    this._eventTarget = e.target;

	                    result = DragTrackerEventHandler.prototype._startDrag.call( this, e );
	                }
	            }

	            return result;
	        },

	        _handleDrag: function( e ) {
	            var touch = this._getTouchById( e, this._touchId ),
	                result = undefined;

	            // XXX: When using -webkit-overflow-scrolling:touch on iOS devices, the browser
	            //      fires random touchmove events targeted at random elements, and each event
	            //      has pageX/pageY/clientX/clientY values that are usually zero. Note these
	            //      values can be non-zero if the element being tracked or any of its parents
	            //      have been previously transformed via the transform CSS3 property. This causes
	            //      problems because usually touchevents are targeted at the same element until the
	            //      user's finger goes up. Filter out the bogus events for now.

	            if ( touch && this._eventTarget === e.target ) {
	                result = DragTrackerEventHandler.prototype._handleDrag.call( this, e );
	            }

	            return result;
	        },

	        _stopDrag: function( e ) {
	            var touch = this._getTouchById( e, this._touchId ),
	                result = undefined;

	            if ( touch ) {
	                result = DragTrackerEventHandler.prototype._stopDrag.call( this, e );
	                this._touchId = -1;
	            }

	            return result;
	        },

	        _installDragHandlers: function() {
	            DragTrackerEventHandler.prototype._installDragHandlers.call( this );

	            $( document ).on( 'touchcancel', this.muFunc );
	        },

	        _removeDragHandlers: function() {
	            this._touchId = -1;

	            $( document ).off( 'touchcancel', this.muFunc );

	            DragTrackerEventHandler.prototype._removeDragHandlers.call( this );
	        },

	        getPosition: function( e ) {
	            var touch = this._getTouchById( e, this._touchId );

	            return {
	                    x: ( touch && touch.pageX ) || 0,
	                    y: ( touch && touch.pageY ) || 0
	                };
	        }
	    });

	    // Note: that when using pointer events, touch pointer events will not be
	    // dispatched unless the element being dragged, or one of its ancestors has
	    // the following CSS properties defined on them:
	    //
	    //   -ms-touch-action: none;
	    //  touch-action: none;
	    //
	    // The touch-action property tells the browser to dispatch touch pointer
	    // events via JS instead of performing the default browser action like
	    // scrolling, etc.

	    function DragTrackerPointerHandler( dragTracker, options ) {
	        DragTrackerEventHandler.call( this, dragTracker, options );

	        options = options || {};

	        this._pointerId = -1;
	        this._lastPosition = null;
	        this._lastTime = 0;

	        var trackEvents = options.trackEvents || this.trackEvents;

	        this._allowed = {};
	        for ( var i = 0; i < trackEvents.length; i++ ) {
	            this._allowed[ trackEvents[ i ] || '' ] = true;
	        }
	    }

	    Utils.inherit( DragTrackerPointerHandler, DragTrackerEventHandler, {
	        startEvent: 'pointerdown',
	        updateEvent: 'pointermove',
	        stopEvent: 'pointerup',
	        trackEvents: [ 'mouse', 'touch', 'pen' ],

	        _getPointerId: function( e ) {
	            return this._getNativeEvent( e ).pointerId;
	        },

	        _canStartDrag: function( e ) {
	            return this._pointerId === -1 && this._allowed[ this._getNativeEvent( e ).pointerType ];
	        },

	        _startDrag: function( e ) {
	            var result = undefined;
	            if ( this._canStartDrag( e ) ) {
	                this._pointerId = this._getPointerId( e );

	                // We need to track the last event x/y coordinates
	                // to workaround an MS Surface Pro 3 problem.

	                this._lastPosition = this.getPosition( e );
	                this._lastTime = Date.now();

	                result = DragTrackerEventHandler.prototype._startDrag.call( this, e );
	            }

	            return result;
	        },

	        _handleDrag: function( e ) {
	           var result = undefined;

	            if ( this._dragHandlersInstalled && this._pointerId === this._getPointerId( e ) ) {

	                var lastPos = this._lastPosition,
	                    lastTime = this._lastTime,
	                    pos = this.getPosition( e ),
	                    now = Date.now();

	                // We always want to update the last-time,
	                // even if we don't handle the drag below.

	                this._lastTime = now;

	                // Skip handling the drag If we're getting the same
	                // coordinate within our time window of 60fps.

	                if ( lastPos.x != pos.x || lastPos.y != pos.y && ( now - lastTime ) >= 16 ) {
	                    this._lastPosition = pos;
	                    result = DragTrackerEventHandler.prototype._handleDrag.call( this, e );
	                }
	            }

	            return result;
	        },

	        _stopDrag: function( e ) {
	            var result = undefined;

	            if ( this._dragHandlersInstalled && this._pointerId === this._getPointerId( e ) ) {
	                this._pointerId = -1;
	                result = DragTrackerEventHandler.prototype._stopDrag.call( this, e );
	            }

	            return result;
	        },

	        _installDragHandlers: function() {
	            DragTrackerEventHandler.prototype._installDragHandlers.call( this );

	            $( document )
	                //.on( 'pointercancel', this._stopDrag )
	                .on( 'pointercancel', this.muFunc );
	        },

	        _removeDragHandlers: function() {
	            this._pointerId = -1;
	            $( document )
	                //.off( 'pointercancel', this._stopDrag )
	                .off( 'pointercancel', this.muFunc );

	            DragTrackerEventHandler.prototype._removeDragHandlers.call( this );
	        },

	        getPosition: function( e ) {
	            e = this._getNativeEvent( e );

	            return {
	                    x: e[ 'pageX' ],
	                    y: e[ 'pageY' ]
	                };
	        }
	    });

	    function DragTrackerMozMouseHandler( dragTracker, options ) {
	        DragTrackerEventHandler.call( this, dragTracker, options );

	        options = options || {};

	        var trackEvents = options.trackEvents || this.trackEvents;

	        this._allowed = {};
	        for ( var i = 0; i < trackEvents.length; i++ ) {
	            this._allowed[ trackEvents[ i ] || '' ] = true;
	        }

	        this._map = { '': 'mouse' };

	        if ( MouseEvent && MouseEvent.MOZ_SOURCE_MOUSE ) {
	            this._map[ MouseEvent.MOZ_SOURCE_MOUSE ] = 'mouse';
	            this._map[ MouseEvent.MOZ_SOURCE_TOUCH ] = 'touch';
	            this._map[ MouseEvent.MOZ_SOURCE_PEN ] = 'pen';
	        }
	    }

	    Utils.inherit( DragTrackerMozMouseHandler, DragTrackerEventHandler, {
	        trackEvents: [ 'mouse', 'touch', 'pen' ],

	        _canStartDrag: function( e ) {
	            e = this._getNativeEvent( e );
	            return this._allowed[ this._map[ this._getNativeEvent( e ).mozInputSource ] || '' ];
	        },

	        _startDrag: function( e ) {
	            var result = undefined;
	            if ( this._canStartDrag( e ) ) {
	                result = DragTrackerEventHandler.prototype._startDrag.call( this, e );
	            }

	            return result;
	        }
	    });

	    // A component class that handles the DOM events necessary to simulate someone dragging
	    // an element on screen. Developers can either derive from this class and define the following
	    // methods:
	    //
	    //            DerivedClass.prototype.dragStart      = function( dx, dy ) { ... };
	    //            DerivedClass.prototype.dragUpdate = function( dx, dy ) { ... };
	    //            DerivedClass.prototype.dragStop       = function( dx, dy ) { ... };
	    //
	    // Or, they can simply create an instance of this class and pass in some callback handlers:
	    //
	    //        var dt = new DragTracker( someElement, {
	    //                dragStart:      function( tracker, dx, dy ) { ... },
	    //                dragUpdate: function( tracker, dx, dy ) { ... },
	    //                dragStop:       function( tracker, dx, dy ) { ... },
	    //            });
	    //
	    // It should be noted that this class does *NOT* move anything on screen. It merely tracks
	    // when the mouse goes down on a specific element, and then it dispatches the x/y position
	    // of the mouse, as it moves, relative to the point at which the mouse was clicked. This
	    // class was meant to encapsulate the event code that every developer writes/re-writes
	    // whenever they implement drag & drop, or selection marquee/outline/movement.

	    var DragTracker = function( element, options ) {
	        var self = this;

	        this.id = DragTracker.nextId++;
	        this.element = element;

	        this.options = $.extend( {}, DragTracker.prototype.defaultOptions, options );
	        this.dragStarted = false;
	        this.enabled = true;

	        this.mdFunc = function( e, data ) { return self._startDrag( e, data); };
	        this.mmFunc = function( e, data ) { return self._handleDrag( e, data); };
	        this.muFunc = function( e, data ) { return self._stopDrag( e, data); };

	        this.startX = 0;
	        this.startY = 0;

	        if ( this.options.dragEventHandler ) {
	            this.dragEventHandler = this.options.dragEventHandler;
	            this.dragEventHandler.attach( this );
	        } else {
	            this.dragEventHandler = this.createEventHandler();
	        }
	    };

	    DragTracker.nextId = 1;

	    $.extend( DragTracker.prototype, {
	        defaultOptions: {
	            dragThreshold: 5,         // Must exceed this many pixels in any direction to start drag.
	            ignoreX: false,           // If true don't report any changes in the x-direction.
	            ignoreY: false,           // If true don't report any changes in the y-direction.
	            dragStart: null,          // callback
	            dragUpdate: null,         // callback
	            dragStop: null,            // callback
	            trackEvents: [ 'mouse', 'touch', 'pen' ]
	        },

	        createEventHandler: function() {
	            var trackEvents = this.options.trackEvents;

	            if ( WebPro.pointerEventsEnabled ) {
	                // Our preferred method of tracking events is via pointer events,
	                // which uses a single set of events per-input and allows us to
	                // filter based on pointer-type.

	                return new DragTrackerPointerHandler( this, { trackEvents: trackEvents } );
	            } else if ( WebPro.supportsMozInputSource ) {
	                return new DragTrackerMozMouseHandler( this, { trackEvents: trackEvents } );
	            } else {
	                // If pointer events aren't supported then we fallback to
	                // tracking mouse or webkit-based touch events. Iterate,
	                // through the trackEvents array to set some flags so we
	                // can easily tell what events we need to listen to.

	                var eventsToTrack = {};

	                for ( var i = 0; i < trackEvents.length; i++ ) {
	                    eventsToTrack[ trackEvents[ i ] || '' ] = true;
	                }

	                if ( eventsToTrack[ 'mouse' ] || eventsToTrack[ 'touch' ] ) {
	                    if ( !eventsToTrack[ 'mouse' ] ) {
	                        // Caller only wants to listen for webkit-based touch events.

	                        return new DragTrackerTouchHandler( this );
	                    } else if ( !eventsToTrack[ 'touch' ] ) {
	                        // Caller only wants to listen for mouse events.

	                        return new DragTrackerEventHandler( this );
	                    }

	                    // Caller wants to listen to both touch and mouse
	                    // events so make use of the virtual-mouse events.

	                    return new DragTrackerEventHandler( this, {
	                                        startEvent:  'vmousedown',
	                                        updateEvent: 'vmousemove',
	                                        stopEvent:   'vmouseup'
	                                    } );
	                }
	            }

	            return null;
	        },

	        enable: function() {
	            if ( this.dragEventHandler ) {
	                this.dragEventHandler.enable();
	            }
	        },

	        disable: function() {
	            if ( this.dragEventHandler ) {
	                this.dragEventHandler.disable();
	            }
	        },

	        destroy: function() {
	            if ( this.dragEventHandler ) {
	                this.dragEventHandler.destroy();
	                this.dragEventHandler = null;
	            }

	            this.element = null;
	        },

	        dragStart: function( dx, dy ) {
	            // Base class implementation simply calls
	            // any callback defined.

	            var o = this.options;
	            if ( o.dragStart ) {
	                o.dragStart( this, dx, dy );
	            }
	        },

	        dragUpdate: function( dx, dy ) {
	            // Base class implementation simply calls
	            // any callback defined.

	            var o = this.options;
	            if ( o.dragUpdate ) {
	                o.dragUpdate( this, dx, dy );
	            }
	        },

	        dragStop: function( dx, dy ) {
	            // Base class implementation simply calls
	            // any callback defined.

	            var o = this.options;
	            if ( o.dragStop ) {
	                o.dragStop( this, dx, dy );
	            }
	        },

	        _startDrag: function( e, position ) {
	            this.dragStarted = false;
	            this.startX = position.x;
	            this.startY = position.y;

	            return false;
	        },

	        _handleDrag: function( e, position ) {
	            var dx = position.x - this.startX,
	                dy = position.y - this.startY,
	                o = this.options;

	            if ( !this.dragStarted ) {
	                if ( ( !o.ignoreX && Math.abs( dx ) < o.dragThreshold ) && ( !o.ignoreY && Math.abs( dy ) < o.dragThreshold ) ) {
	                    return false;
	                }

	                this.dragStarted = true;

	                this.dragStart( 0, 0 );
	            }

	            this.dragUpdate( o.ignoreX ? 0 : dx, o.ignoreY ? 0 : dy );

	            return false;
	        },

	        _stopDrag: function( e, position ) {
	            if ( this.dragStarted ) {
	                var dx = position.x - this.startX,
	                    dy = position.y - this.startY,
	                    o = this.options;

	                this.dragStop( o.ignoreX ? 0 : dx, o.ignoreY ? 0 : dy );
	            }

	            this.dragStarted = false;

	            return false;
	        }
	    });

	    WebPro.DragTrackerEventHandler = DragTrackerEventHandler;
	    WebPro.DragTrackerTouchHandler = DragTrackerTouchHandler;
	    WebPro.DragTrackerPointerHandler = DragTrackerPointerHandler;
	    WebPro.DragTracker = DragTracker;

	    return DragTracker;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(4) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, WebPro ) {
	    // Most of this code was written by jobrandt@adobe.com for
	    // Edge Code. It has been slightly modified so that it can
	    // be a bit more generic for integration into WebPro.

	    var apiUrlPrefix      = 'https://api.typekit.com/edge_internal_v1/',
	        appNameInclude    = '', // filled in on init()
	        fontUrlPrefix = '//use.edgefonts.net/', // protocol relative
	        fontUrlSuffix = '.js',
	        fontIncludePrefix = '<script src="',
	        fontIncludeSuffix = '"></script>';

	    var fontsByClass = {},
	        fontsByName  = {},
	        fontsBySlug  = {},
	        allFonts     = [],
	        allSlugs     = [];

	    var $picker  = null,
	        $results = null;

	    var fontClassifications = [ 'serif', 'sans-serif', 'slab-serif', 'script', 'blackletter', 'monospaced', 'handmade', 'decorative' ],
	        fontRecommendations = [ 'headings', 'paragraphs' ];

	    var websafeFonts = [ 'andale mono', 'arial', 'arial black', 'comic sans ms', 'courier new', 'georgia', 'impact', 'times new roman', 'trebuchet ms', 'verdana', 'sans-serif', 'serif' ];

	    var SEARCH_HYSTERESIS = 500; // milliseconds
	    var lastSearchTimer = null;

	    function getWebsafeFonts() {
	        return websafeFonts.concat([]); // make a copy
	    }

	    function getAllFonts() {
	        return allFonts.concat([]); // make a copy
	    }

	    function getAllSlugs() {
	        return allSlugs.concat([]); // make a copy
	    }

	    /**
	     * Returns font object matching specified slug or 'undefined' if not found
	     *
	     * @param {!string} slug - the slug of the desired font
	     * @return {object} font object, or undefined if not found
	     */
	    function getFontBySlug( slug ) {
	        return fontsBySlug[slug.toLowerCase()];
	    }

	    /**
	     * Returns font object matching specified slug or 'undefined' if not found
	     *
	     * @param {!string} class - the class of the desired fonts
	     * @return {Array} of matching font objects.
	     */
	    function getFontsByClassification( classification ) {
	        return fontsByClass[ classification.toLowerCase() ];
	    }

	    /**
	     * Returns a copy of arr that is a.) all lowercase, b.) sorted lexigraphically,
	     * and c.) has all duplicates removed.
	     *
	     * @param {!Array.<string>}
	     * @return {Array.<string>}
	     */
	    function lowerSortUniqStringArray( arr ) {
	        var i, last = null, lowerArr = [], result = [];
	        // fill up the lowerArr array with lowercase versions of the source array
	        for ( i = 0; i < arr.length; i++ ) {
	            if ( typeof arr[ i ] === 'string' ) {
	                lowerArr.push( arr[ i ].toLowerCase() );
	            }
	        }

	        // sort lowerArr alphabetically
	        lowerArr.sort();

	        // copy unique elements to result array
	        for ( i = 0; i < lowerArr.length; i++ ) {
	            if ( lowerArr[ i ] !== last ) {
	                result.push( lowerArr[ i ] );
	                last = lowerArr[ i ];
	            }
	        }

	        return result;
	    }

	    /**
	     * Returns a sorted array of all the elements in arr that contain a case-insensitive
	     * version of the needle. The array returned is a new array. The original arry is not
	     * modified.
	     *
	     * The results are sorted as follows:
	     *   1. All elements with a name that starts with the needle
	     *   2. All elements with a word that starts with the needle
	     *   3. All elements that contain the needle
	     * Within each category, elements are sorted alphabetically
	     *
	     * TODO: We should eventually move this search algorithm (and probably the lowerSortUniqStringArray)
	     * to core brackets code. It would likely be useful for things like Quick Open.
	     *
	     * @param {!string} needle - the search term
	     * @param {Array} arr - the array to filter and sort
	     * @param {function} stringGetterFunction - optional function to extract the sort
	     *                   term from each element in the array
	     * @return {Array.<Object>} Array of font objects that contain the search term.
	     */
	    function filterAndSortArray( needle, arr, stringGetterFunction ) {
	        var beginning = [], beginningOfWord = [], contains = [];
	        var i, index, currentString;

	        var lowerCaseNeedle = needle.toLocaleLowerCase();

	        if ( !stringGetterFunction ) {
	            // If a function for getting the string out of each array object
	            // isn't provided, just use whatever value is in the array as the string
	            stringGetterFunction = function( s ) { return String( s ); };
	        }

	        for ( i = 0; i < arr.length; i++ ) {
	            currentString = stringGetterFunction( arr[ i ] ).toLocaleLowerCase();
	            index = currentString.indexOf( lowerCaseNeedle );
	            if ( index === 0 ) {
	                beginning.push( arr[ i ] );
	            } else if ( index > 0 ) {
	                var previousChar = currentString[ index - 1 ];
	                if ( !previousChar.isAlpha() && !previousChar.isDigit() ) {
	                    beginningOfWord.push( arr[ i ] );
	                } else {
	                    contains.push( arr[ i ] );
	                }
	            }
	        }

	        return beginning.concat( beginningOfWord ).concat( contains );
	    }

	    function searchByName( needle ) {
	        if ( needle === '' ) {
	            return [];
	        } else {
	            return filterAndSortArray( needle, allFonts, function( f ) { return f.lowerCaseName; } );
	        }
	    }

	    function searchBySlug( needle ) {
	        if ( needle === '' ) {
	            return [];
	        } else {
	            return filterAndSortArray( needle, getAllSlugs() );
	        }
	    }

	    /**
	     * Generates the script URL for including the specified fonts.
	     *
	     * @param {!Array} fonts - should be an array of objects, and each object
	     *      should have the following properties:
	     *        slug - string specifying the unique slug of the font (e.g. 'droid-sans')
	     *        fvds - array of variant strings (e.g. ['n4', 'n7'])
	     *        subset - string specifying the subset desired (e.g. 'default')
	     *
	     */
	    function createUrl( fonts ) {
	        var i, j, fontStrings = [], fontString, variations;
	        for ( i = 0; i < fonts.length; i++ ) {
	            fontString = fonts[ i ].slug;
	            variations = fonts[ i ].variations;

	            if ( variations && variations.length ) {
	                for ( j = 0; j < variations.length; j++ ) {
	                  fontString += ( j > 0 ? ',' : ':' ) + variations[ j ].fvd;
	                }
	            }

	            fontStrings.push( fontString );
	        }

	        return fontUrlPrefix + fontStrings.join( ';' ) + fontUrlSuffix;
	    }

	    /**
	     * Generates the script tag for including the specified fonts.
	     *
	     * @param {!Array} fonts - should be an array of objects, and each object
	     *      should have the following properties:
	     *        slug - string specifying the unique slug of the font (e.g. 'droid-sans')
	     *        fvds - array of variant strings (e.g. ['n4', 'n7'])
	     *        subset - string specifying the subset desired (e.g. 'default')
	     *
	     */
	    function createInclude( fonts ) {
	        return appNameInclude + fontIncludePrefix + createUrl( fonts ) + fontIncludeSuffix;
	    }

	    function init( opts ) {
	        var d = $.Deferred();

	        opts = opts || {};

	        if ( opts.newApiUrlPrefix ) {
	            apiUrlPrefix = opts.newApiUrlPrefix;
	        }

	        // setup callback function for metadata request
	        function organizeFamilies( families ) {
	            allFonts = families.families;
	            var i, j;

	            // Clean up the fonts in two ways:
	            //   1. give all fonts a locale lowercase name (for searching by name)
	            //   2. make sure all slugs are lowercase (should be the case already)
	            for ( i = 0; i < allFonts.length; i++ ) {
	                allFonts[ i ].lowerCaseName = allFonts[ i ].name.toLocaleLowerCase();
	                allFonts[ i ].slug = allFonts[ i ].slug.toLowerCase();
	            }

	            // We keep allFonts in alphabetical order by name, so that all other
	            // lists will also be in order.
	            allFonts.sort( function( a, b ) {
	                if ( a.lowerCaseName < b.lowerCaseName ) {
	                    return -1;
	                } else if ( a.lowerCaseName > b.lowerCaseName ) {
	                    return 1;
	                } else { // they're equal
	                    return 0;
	                }
	            });

	            // setup the allSlugs array;
	            for ( i = 0; i < allFonts.length; i++ ) {
	                allSlugs.push( allFonts[ i ].slug );
	            }

	            fontsByClass = {};
	            fontsByName = {};
	            fontsBySlug = {};

	            for ( i = 0; i < allFonts.length; i++ ) {
	                for ( j = 0; j < allFonts[ i ].classifications.length; j++ ) {
	                    if ( !fontsByClass.hasOwnProperty( allFonts[ i ].classifications[ j ] ) ) {
	                        fontsByClass[ allFonts[ i ].classifications[ j ] ] = [];
	                    }
	                    fontsByClass[ allFonts[ i ].classifications[ j ] ].push( allFonts[ i ] );
	                }
	                for ( j = 0; j < allFonts[ i ].recommended_for.length; j++ ) {
	                    if ( !fontsByClass.hasOwnProperty( allFonts[ i ].recommended_for[ j ] ) ) {
	                        fontsByClass[ allFonts[ i ].recommended_for[ j ] ] = [];
	                    }
	                    fontsByClass[ allFonts[ i ].recommended_for[ j ] ].push( allFonts[ i ] );
	                }

	                fontsByName[ allFonts[ i ].name ] = allFonts[ i ];
	                fontsBySlug[ allFonts[ i ].slug ] = allFonts[ i ];
	            }
	        }

	        if ( opts.data ) {
	            organizeFamilies( opts.data );
	            d.resolve();
	        } else {
	            // request font metadata
	            $.ajax({
	                url: opts.fontsUrl,
	                dataType: 'json',
	                success: function( data ) {
	                    organizeFamilies( data );
	                    d.resolve();
	                },
	                error: function() {
	                    d.reject( 'XHR request to "families" API failed' );
	                }
	            });
	        }

	        return d.promise();
	    }

	    var EdgeWebFonts = {
	        lowerSortUniqStringArray: lowerSortUniqStringArray,
	        filterAndSortArray: filterAndSortArray,
	        getWebsafeFonts: getWebsafeFonts,
	        getAllFonts: getAllFonts,
	        getAllSlugs: getAllSlugs,
	        getFontBySlug: getFontBySlug,
	        getFontsByClassification: getFontsByClassification,
	        searchByName: searchByName,
	        searchBySlug: searchBySlug,
	        createInclude: createInclude,
	        createUrl: createUrl,
	        init: init
	    };

	    WebPro.EdgeWebFonts = EdgeWebFonts;

	    return EdgeWebFonts;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(4), __webpack_require__(3), __webpack_require__(7) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, WebPro, Utils, EventDispatcher ) {
	    // Each request is assigned a request id to provide a stable sort.
	    var ImageLoader = function( options ) {
	        EventDispatcher.call();

	        var self = this;

	        this.options = options = $.extend( {}, this.defaultOptions, options );
	        this._queue = [];
	        this._needsSort = false;
	        this._isRunning = false;

	        this._loaderContexts = [];

	        for ( var i = 0; i < options.numAsyncRequestsAllowed; i++ ) {
	            this._loaderContexts[ i ] = this._createLoaderContext();
	        }
	    };

	    ImageLoader.nextRequestId = 1;

	    Utils.inherit( ImageLoader, EventDispatcher );

	    $.extend( ImageLoader.prototype, {
	        defaultOptions: {
	                createNewImageOnReset: true,
	                timeoutInterval: 0,
	                numAsyncRequestsAllowed: 1,
	                crossOrigin: false // DOM property value, can be "anonymous" or "use-credentials"
	            },

	        _createLoaderContext: function() {
	            var self = this;

	            var context = {
	                    entry: null,
	                    loader: new Image(),
	                    loadFunc: function() { self._handleLoad( context ); },
	                    loadErrorFunc: function() { self._handleError( context ); },
	                    timeoutFunc: function() { self._handleTimeout( context ); },
	                    timeoutTimerId: 0
	                };

	            if ( this.options.crossOrigin ) {
	                context.loader.crossOrigin = this.options.crossOrigin;
	            }
	            return context;
	        },

	        add: function( url, options ) {
	            if ( url ) {
	                // The add() method can actually be called with a single URL or an
	                // array of URLs. Normalize things so that we are always dealing with
	                // an array.

	                var urls = Utils.ensureArray( url );

	                for ( var i = 0; i < urls.length; i++ ) {
	                    // Push the request into the queue.

	                    var entry = $.extend( { reqId: ImageLoader.nextRequestId++, src: urls[ i ], width: 0, height: 0, priority: 50, callback: null, data: null }, options );
	                    this._queue.push( entry );

	                    // We've added a new request to the queue. We'll need to resort
	                    // the queue by priority when the next request is fired-off.

	                    this._needsSort = true;

	                    // Tell our listeners that a new entry has been added to the queue.

	                    this.trigger( "wp-image-loader-add", entry );
	                }

	                // If the loader is running try to load the next thing
	                // in the queue.

	                if ( this._isRunning ) {
	                    this._loadNext();
	                }
	            }
	        },

	        start: function() {
	            if ( !this._isRunning ) {
	                // Set _isRunning to true so that subsequent calls to start() will
	                // be ignored.

	                this._isRunning = true;

	                // Tell our listeners that the loader was started.

	                this.trigger( "wp-image-loader-start" );

	                // Kick-off a request for the first item in our queue.

	                this._loadNext();
	            }
	        },

	        stop: function() {
	            if ( this._isRunning ) {
	                // If we're in the midst of attempting to load something,
	                // place it back into the queue.

	                var contexts = this._loaderContexts;
	                var numContexts = contexts.length;

	                for ( var i = 0; i < numContexts; i++ ) {
	                    var context = contexts[ i ];

	                    if ( context.entry ) {
	                        this._queue.unshift( context.entry );
	                        this._needsSort = true;
	                    }

	                    // Reset our loader so that any pending requests are killed.

	                    this._resetLoaderContext( context );
	                }

	                // Set _isRunning to false so that a call to start() will
	                // actually allow it to kick-start loading.

	                this._isRunning = false;

	                // Tell our listeners that the loader was stopped.

	                this.trigger( "wp-image-loader-stop" );
	            }
	        },

	        // The total number of images to be loaded, including
	        // images currently being loaded and images still in
	        // the queue.

	        getQueueCount: function() {
	            return this._queue.length + this._getPendingRequestCount();
	        },

	        clearQueue: function() {
	            // If we're running note it so we can restart
	            // loader when we're done.

	            var isRunning = this._isRunning;

	            // Stop any pending requests.

	            this.stop();

	            // Clear the queue by truncating it with a zero length.

	            this._queue.length = 0;

	            // If the loader was running, restart it so that it
	            // is ready to service any new requests immediately.

	            if ( isRunning ) {
	                this.start();
	            }
	        },

	        _loadNext: function() {
	            // We only want to load the next request if we're running.

	            if ( !this._isRunning ) {
	                return;
	            }

	            // Get the next available loader context so we can attempt
	            // to load the next request in our queue.

	            var context = this._getAvailableLoaderContext();
	            if ( !context ) {
	                return;
	            }

	            var q = this._queue;

	            if ( q.length ) {
	                // If the queue needs sorting, sort it now.

	                if ( this._needsSort ) {
	                    q = this._queue = q.sort(function( a, b ) {
	                        // Sort by priority. If the priorities
	                        // are the same, sort by the request-id.

	                        var result = a.priority - b.priority;
	                        return result ? result : a.reqId - b.reqId;
	                    });

	                    this._needsSort = false;
	                }

	                // Grab the next request from the queue.

	                var entry = q.shift();
	                context.entry = entry;

	                // Fire-off the load timeout timer.

	                if ( this.options.timeoutInterval > 0 ) {
	                    context.timeoutTimerId = setTimeout( context.timeoutFunc, this.options.timeoutInterval );
	                }

	                // Fire-off the request.

	                var loader = context.loader;
	                loader.onload = context.loadFunc;
	                loader.onerror = context.loadErrorFunc;
	                loader.src = entry.src;

	                // Try to load another entry. This call should just
	                // bail if there isn't a loader context available.

	                if ( q.length ) {
	                    this._loadNext();
	                }
	            } else if ( this.getQueueCount() === 0 ) {
	                this.trigger( "wp-image-loader-empty" );
	            }
	        },

	        // The number of images that are currently being
	        // processed and have outstanding requests.

	        _getPendingRequestCount: function() {
	            var contexts = this._loaderContexts;
	            var numContexts = contexts.length;
	            var count = 0;

	            for ( var i = 0; i < numContexts; i++ ) {
	                var context = contexts[ i ];
	                if ( context.entry ) {
	                    ++count;
	                }
	            }

	            return count;
	        },

	        _getAvailableLoaderContext: function() {
	            var contexts = this._loaderContexts;
	            var numContexts = contexts.length;

	            for ( var i = 0; i < numContexts; i++ ) {
	                var context = contexts[ i ];
	                if ( !context.entry ) {
	                    return context;
	                }
	            }

	            return null;
	        },

	        _resetLoaderContext: function( context ) {
	            // We re-use the same image object to load all images.
	            // Some image implementations will only trigger a load
	            // if you set the src property to something that is
	            // different than what its current value is. For this
	            // reason, we need to clear the src attribute between
	            // requests, just in case the user attempts to reload
	            // the same URL in the case of a "retry" when the initial
	            // request failed. Before clearing the src property,
	            // we set the load and error properties to NULL because
	            // some implementations, like Safari, will attempt to load
	            // the current document if you set the src to null or an
	            // empty string. Un-hooking the load and error handlers
	            // prevents us from entering a circular pattern of continuous
	            // attempts to load the document, triggering the error handler,
	            // which then in turn clears the src, triggering the cycle to
	            // start over.

	            var loader = context.loader;
	            loader.onload = null;
	            loader.onerror = null;
	            loader.src = loader.src == "" ? " " : "";

	            // If the same image object is used to load different URLs,
	            // IE9 eventually starts reporting bogus image width/height
	            // dimensions. For this reason, we provide an option where
	            // the caller can specify that they want a new image object
	            // to be used for each request.

	            if ( this.options.createNewImageOnReset ) {
	                context.loader = new Image();
	                if ( this.options.crossOrigin ) {
	                    context.loader.crossOrigin = this.options.crossOrigin;
	                }
	            }

	            // Clear the current entry.

	            context.entry = null;

	            // Kill any load timeout timer that may be pending.

	            if ( context.timeoutTimerId ) {
	                clearTimeout( context.timeoutTimerId );
	                context.timeoutTimerId = 0;
	            }
	        },

	        _handleLoad: function( context ) {
	            var loader = context.loader;
	                entry = context.entry;

	            // Set the width and height properties for the entry so that
	            // listeners can access them when we fire off the success notification.

	            entry.width = loader.width;
	            entry.height = loader.height;

	            // Reset this context so it is available for use.

	            this._resetLoaderContext( context );

	            // Fire-off any callback associated with this entry.

	            if ( entry.callback ) {
	                entry.callback( entry.src, entry.width, entry.height, entry.data );
	            }

	            // Tell listeners that this entry has loaded successfully.

	            this.trigger( "wp-image-loader-load-success", entry );

	            // Attempt to load the next request in the queue.

	            this._loadNext();
	        },

	        _handleError: function( context ) {
	            var entry = context.entry;

	            // Reset the loader context so it's available for use.

	            this._resetLoaderContext( context );

	            // Tell listeners the current entry failed to load.

	            this.trigger( "wp-image-loader-load-error", entry );

	            // Attempt to load the next request in the queue.

	            this._loadNext();
	        },

	        _handleTimeout: function( context ) {
	            var entry = context.entry;

	            // Reset the loader context so it's available for use.

	            this._resetLoaderContext( context );

	            // Tell listeners the current entry failed to load.

	            this.trigger( "wp-image-loader-timeout", entry );

	            // Attempt to load the next request in the queue.

	            this._loadNext();
	        },
	    });

	    WebPro.ImageLoader = ImageLoader;

	    return ImageLoader;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(4), __webpack_require__(3), __webpack_require__(17) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, WebPro, Utils, DragTrackerDelegate ) {
	    // Extend the base DragTrackerDelegate class so that we can simulate drag momentum.
	    // The idea here is that when the user's mouse or finger goes up, we don't
	    // dispatch the dragStop call until after any momentum animation finishes.

	    var MomentumDragTracker = function( element, options ) {
	        options = $.extend( {}, MomentumDragTracker.prototype.defaultOptions, options );

	        DragTrackerDelegate.call( this, element, options );

	        var tracker = this;

	        // The last set of deltas we dispatched during a drag.

	        this._lastDX = 0;
	        this._lastDY = 0;

	        // The x and y velocities we will use during the
	        // momentum animations.

	        this._velocityX = 0;
	        this._velocityY = 0;

	        // The id of the timer or animation-frame-request.

	        this._velocityTimer = 0;

	        // The function that gets called for each step of the
	        // momentum animation.

	        this._vtCallback = function() {
	                tracker._handleMomentumUpdate();
	            };

	    };

	    Utils.inherit( MomentumDragTracker, DragTrackerDelegate );

	    $.extend( MomentumDragTracker.prototype, {
	        defaultOptions: $.extend({}, DragTrackerDelegate.prototype.defaultOptions, {
	            momentumStart: null,
	            momentumStop: null,
	            useRequestAnimationFrame: true,
	            animationInterval: Math.round( 1000 / 60 ),
	            velocityDamper: 0.95,
	            minVelocityThreshold: 0.25,
	            maxVelocity: 1000
	        }),

	        // Start the momentum animation.

	        _startVelocityTimer: function() {
	            this._stopVelocityTimer();

	            if ( this.options.useRequestAnimationFrame ) {
	                this._velocityTimer = requestAnimationFrame( this._vtCallback );
	            } else {
	                this._velocityTimer = setTimeout( this._vtCallback, this.options.animationInterval );
	            }
	        },

	        // Stop the momentum animation.

	        _stopVelocityTimer: function() {
	            if ( this._velocityTimer ) {
	                if ( this.options.useRequestAnimationFrame ) {
	                    cancelAnimationFrame( this._velocityTimer );
	                } else {
	                    clearTimeout( this._velocityTimer );
	                }
	                this._velocityTimer = 0;
	            }
	        },

	        // Call the base class version of dragUpdate().

	        _dispatchDragUpdate: function( dx, dy ) {
	            MomentumDragTracker.prototype._super.prototype.dragUpdate.call( this, dx, dy );
	        },

	        // Call the base class version of dragStop().

	        _dispatchDragStop: function( dx, dy ) {
	            var velocityTimerWasActive = this._velocityTimer != 0;

	            this._stopVelocityTimer();

	            this._velocityX = 0;
	            this._velocityY = 0;

	            MomentumDragTracker.prototype._super.prototype.dragStop.call( this, dx, dy );

	            // If the velocity timer was active we've already
	            // dispatched a momentumStart(), so we need to
	            // dispatch a matching momentumStop().

	            if ( velocityTimerWasActive ) {
	                this.momentumStop( dx, dy );
	            }
	        },

	        // Called at each step of the momentum animation.

	        _handleMomentumUpdate: function() {
	            // Dampen the velocity, then add it to
	            // the last set of offsets we stored.

	            var damper = this.options.velocityDamper,
	                min = this.options.minVelocityThreshold,
	                vx = this._velocityX * damper,
	                vy = this._velocityY * damper;

	            // Make sure we round small values to zero or we can
	            // get into situations where dampened velocity values
	            // approach zero, but never quite get there.

	            this._velocityX = Math.abs( vx ) < min ? 0 : vx;
	            this._velocityY = Math.abs( vy ) < min ? 0 : vy;

	            if ( this._velocityX || this._velocityY ) {
	                // We stil have some velocity after dampening.
	                // trigger a dragUpdate.

	                this._lastDX += this._velocityX;
	                this._lastDY += this._velocityY;

	                this._dispatchDragUpdate( this._lastDX, this._lastDY );

	                this._startVelocityTimer();
	            } else {
	                // There's no more velocity so trigger a dragStop().

	                this._dispatchDragStop( this._lastDX, this._lastDY );
	            }
	        },

	        // Override the base _startDrag() method so we can make sure
	        // to kill of any momentum animation if the user's mouse or finger
	        // touches our drag element.

	        _startDrag: function( e, position ) {
	            if ( this._velocityTimer ) {
	                this._dispatchDragStop( this._lastDX, this._lastDY );
	            }

	            // We want to allow taps/clicks to be generated
	            // within an element this drag tracker is attached
	            // to, but the base class implementation of this method
	            // returns a false. We don't return a value here,
	            // we'll do this preventDefault/stopPropagation after
	            // we've determined that an actual drag has started.

	            MomentumDragTracker.prototype._super.prototype._startDrag.apply( this, arguments );
	        },

	        _handleDrag: function( e, data ) {
	            // Call the base class implementation of this method.

	            var result = MomentumDragTracker.prototype._super.prototype._handleDrag.apply( this, arguments );

	            // Don't return the result of the base class implementation
	            // unless a drag was started.

	            return this.dragStarted ? result : true;
	        },

	        _stopDrag: function( e, data ) {
	            var dragStarted = this.dragStarted,
	                result = MomentumDragTracker.prototype._super.prototype._stopDrag.apply( this, arguments );

	            // Don't return the result of the base class implementation
	            // unless a drag was started.

	            return dragStarted ? result : true;
	        },

	        momentumStart: function( dx, dy ) {
	            // Base class implementation simply calls
	            // any callback defined.

	            var o = this.options;
	            if ( o.momentumStart ) {
	                o.momentumStart( this, dx, dy );
	            }
	        },

	        momentumStop: function( dx, dy ) {
	            // Base class implementation simply calls
	            // any callback defined.

	            var o = this.options;
	            if ( o.momentumStop ) {
	                o.momentumStop( this, dx, dy );
	            }
	        },

	        // Override the base dragStart() method so we can track the last
	        // offset values and reset our velocity properties.

	        dragStart: function( dx, dy ) {
	            MomentumDragTracker.prototype._super.prototype.dragStart.call( this, dx, dy );

	            this._velocityX = 0;
	            this._velocityY = 0;

	            this._lastDX = dx;
	            this._lastDY = dy;
	        },

	        // Override the base dragUpdate() method so we can calculate
	        // our x and y velocities between drags.

	        dragUpdate: function( dx, dy ) {
	            var maxVelocity = this.options.maxVelocity;

	            this._dispatchDragUpdate( dx, dy );

	            var vx = dx - this._lastDX,
	                vy = dy - this._lastDY;

	            if ( vx < 0 ) {
	                vx = Math.max( vx, -maxVelocity );
	            } else {
	                vx = Math.min( vx, maxVelocity );
	            }

	            if ( vy < 0 ) {
	                vy = Math.max( vy, -maxVelocity );
	            } else {
	                vy = Math.min( vy, maxVelocity );
	            }

	            this._velocityX = vx;
	            this._velocityY = vy;

	            this._lastDX = dx;
	            this._lastDY = dy;
	        },

	        // Override the base dragStop() method so we can kick-off
	        // a momentum animation if we have non-zero x/y velocities.
	        // If there aren't any velocities, immediately dispatch
	        // a real dragStop().

	        dragStop: function( dx, dy ) {
	            if ( this._velocityX || this._velocityY ) {
	                this.momentumStart( dx, dy );
	                this._startVelocityTimer();
	            } else {
	                this._dispatchDragStop( dx, dy );
	            }
	        },

	        // Extend the base class version of _handleDelegateHandOff() so
	        // we can prevent any momentum animations when our dragStop() method
	        // is called.

	        _handleDelegateHandOff: function( evt ) {
	            // Zero out our velocity properties so we
	            // don't trigger any momentum.

	            this._velocityX = 0;
	            this._velocityY = 0;

	            // Call the base class version so we stop tracking this drag.

	            MomentumDragTracker.prototype._super.prototype._handleDelegateHandOff.apply( this, arguments );
	        },

	    });

	    WebPro.MomentumDragTracker = MomentumDragTracker;

	    return MomentumDragTracker;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(5), __webpack_require__(23), __webpack_require__(24) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Browser, MomentumScrollView, Slider2d ) {
	    MomentumScrollView.desktopScrollbarPlugin = {
	        defaultOptions: {
	            scrollbarMarkupCallback: null,
	            scrollbarsUseTransforms: false,
	            scrollbarPlugins: undefined
	        },

	        initialize: function( widget, options ) {
	            var plugin = this,
	                enablePlugin = !WebPro.touchEnabled &&  !widget.$element.hasClass( 'no-scrollbars' );

	            options = $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

	            if ( plugin._isEnabled( widget, options ) ) {
	                // Setup some listeners so we can inject our scrollbar
	                // markup and then attach behavior to it.

	                widget
	                    .bind( 'transform-markup', function( e ) {
	                            plugin._transformMarkup( widget );
	                        })
	                    .bind( 'attach-behavior', function( e ) {
	                            plugin._attachBehavior( widget );
	                        });
	            }
	        },

	        _isEnabled: function( widget, options ) {
	          return !WebPro.touchEnabled &&  !widget.$element.hasClass( 'no-scrollbars' );
	        },

	        _transformMarkup: function( widget ) {
	            var plugin = this,
	                direction = widget.options.direction,
	                $scrollbar;

	            widget._dsbp$root = widget.$element.parent();

	            widget._dsbp$vSB = $();
	            widget._dsbpVSBSize = 100;

	            widget._dsbp$hSB = $();
	            widget._dsbpHSBSize = 100;

	            widget._dsbpIsScrolling = false;
	            widget._dsbpMouseInView = false;

	            if ( !direction || direction === 'vertical' ) {
	                $scrollbar = plugin._getScrollbarMarkup( widget, 'vertical' );
	                $scrollbar.appendTo( widget._dsbp$root );
	                widget._dsbp$vSB = $scrollbar;
	            }

	            if ( !direction || direction === 'horizontal' ) {
	                $scrollbar = plugin._getScrollbarMarkup( widget, 'horizontal' );
	                $scrollbar.appendTo( widget._dsbp$root );
	                widget._dsbp$hSB = $scrollbar;
	            }
	        },

	        _syncScrollbars: function( widget, update ) {
	            var direction = widget.options.direction;

	            if ( !direction || direction === 'vertical' ) {
	                var ch = widget.height(),
	                    vh = widget.scrollHeight(),
	                    h = Math.round( ( ch > vh ? 1 : ch / vh ) * 100 );

	                if ( widget._dsbpVSBSize != h ) {
	                    widget._dsbpVSB.$thumb.css( 'height', h + '%');
	                }
	                widget._dsbpVSB._resetConstraints(update);
	                widget._dsbpVSBSize = h;
	            }

	            if ( !direction || direction === 'horizontal' ) {
	                var cw = widget.width(),
	                    vw = widget.scrollWidth(),
	                    w = Math.round( ( cw > vw ? 1 : cw / vw ) * 100 );

	                if ( widget._dsbpHSBSize != w ) {
	                    widget._dsbpHSB.$thumb.css( 'width', w + '%');
	                }
	                widget._dsbpHSB._resetConstraints(update);
	                widget._dsbpHSBSize = w;
	            }
	        },

	        _showScrollbars: function( widget ) {
	            var plugin = this;

	            plugin._syncScrollbars( widget, false );

	            if ( widget._dsbpVSBSize < 100 ) {
	                widget._dsbp$vSB.addClass( 'visible' );
	            }
	            if ( widget._dsbpHSBSize < 100 ) {
	                widget._dsbp$hSB.addClass( 'visible' );
	            }
	        },

	        _hideScrollbars: function( widget ) {
	            if ( !widget._dsbpMouseInView && !widget._dsbpIsScrolling ) {
	                widget._dsbp$vSB.removeClass( 'visible' );
	                widget._dsbp$hSB.removeClass( 'visible' );
	            }
	        },

	        _attachBehavior: function( widget ) {
	            var plugin = this;

	            if ( !WebPro.touchEnabled ) {
	                // Disable the momentum drag tracker for the
	                // scrollview. We only want the user to scroll via
	                // our injected scrollbars.

	                widget.tracker.disable();
	            }

	            // We listen for both programatic scroll updates from the
	            // scrollview widget as well as updates from scrollbar widgets.
	            // Both handlers update the other widget, which in turn
	            // causes the other widget to fire an update. To prevent an
	            // infinite update cycle, we need to make use of a lock property.
	            // Each handler checks if the lock property's value is zero,
	            // if so, it is allowed to execute, if not, it does nothing.

	            widget._dsbpLock = 0;

	            // handlers for some of the behaviors

	            widget._dsbpScrollStart = function( e ) {
	                    plugin._handleScrollStart( widget );
	                };

	            widget._dsbpScrollStop = function( e ) {
	                    plugin._handleScrollStop( widget );
	                };

	            widget._dsbpScrollWheel = function(e, delta, deltaX, deltaY) {
	                    return plugin._handleMouseWheel(widget, delta, deltaX, deltaY);
	                };

	            // attaching behaviors

	            widget.$element.bind( 'mousewheel', widget._dsbpScrollWheel );

	            widget._dsbp$root.bind( 'mouseenter', function( e ) {
	                    widget._dsbpMouseInView = true;
	                    plugin._showScrollbars( widget );
	                });

	            widget._dsbp$root.bind( 'mouseleave', function( e ) {
	                    widget._dsbpMouseInView = false;
	                    plugin._hideScrollbars( widget );
	                });

	            if ( widget._dsbp$vSB.length > 0 ) {
	                widget._dsbpVSB = new Slider2d( widget._dsbp$vSB, {
	                            ignoreX: true,
	                            ignoreY: false,
	                            trackClassName: 'wp-scrollbar-track',
	                            thumbClassName: 'wp-scrollbar-thumb',
	                            useTransforms: widget.options.scrollbarsUseTransforms,
	                            plugins: widget.options.scrollbarPlugins
	                        });

	                widget._dsbpVSB
	                    .bind( 'wp-slider-drag-start', widget._dsbpScrollStart )
	                    .bind( 'wp-slider-drag-stop', widget._dsbpScrollStop )
	                    .bind( 'wp-slider-update', function( e, data ) {
	                            plugin._handleVerticalScroll( widget, data );
	                        });

	                widget._dsbp$vSB
	                    // Eat any clicks that occur inside our scrollbar.
	                    .bind( 'click', function() { return false; })

	                    // consume mousewheel events on scrollbar
	                    .bind( 'mousewheel', widget._dsbpScrollWheel );

	                widget.bind( 'scroll', function( e, data ) {
	                            plugin._handleScroll( widget, data );
	                        });

	            }

	            if ( widget._dsbp$hSB.length > 0 ) {
	                widget._dsbpHSB = new Slider2d( widget._dsbp$hSB, {
	                            ignoreX: false,
	                            ignoreY: true,
	                            trackClassName: 'wp-scrollbar-track',
	                            thumbClassName: 'wp-scrollbar-thumb',
	                            useTransforms: widget.options.scrollbarsUseTransforms,
	                            plugins: widget.options.scrollbarPlugins
	                        });

	                widget._dsbpHSB
	                    .bind( 'wp-slider-drag-start', widget._dsbpScrollStart )
	                    .bind( 'wp-slider-drag-stop', widget._dsbpScrollStop )
	                    .bind( 'wp-slider-update', function( e, data ) {
	                            plugin._handleHorizontalScroll( widget, data );
	                        });

	                widget._dsbp$hSB
	                    // Eat any clicks that occur inside our scrollbar.
	                    .bind( 'click', function() { return false; })

	                    // consume mousewheel events on scrollbar
	                    .bind( 'mousewheel', widget._dsbpScrollWheel );
	            }
	        },

	        _getScrollbarMarkup: function( widget, direction ) {
	            var callback = widget.options.scrollbarMarkupCallback;
	            if ( callback ) {
	               return callback( widget, direction );
	            }

	            return $( '<div class="wp-scrollbar ' + direction + '"><div class="wp-scrollbar-track"><div class="wp-scrollbar-thumb"></div></div></div>' );
	        },

	        _syncWithWidget: function( widget ) {
	            var x = widget.scrollLeft(),
	                y = widget.scrollTop();

	            this._syncScrollbars( widget );

	            if ( widget._dsbpHSB ) {
	                var percentage = x / ( widget.scrollWidth() - widget.width() );
	                widget._dsbpHSB.setPositionByPercentage( percentage, 0 );
	            }

	            if ( widget._dsbpVSB ) {
	                var percentage = y / ( widget.scrollHeight() - widget.height() );
	                widget._dsbpVSB.setPositionByPercentage( 0, percentage );
	            }
	        },

	        _handleScroll: function( widget, data ) {
	            if ( !widget._dsbpLock ) {
	                ++widget._dsbpLock;

	                this._syncWithWidget( widget );

	                --widget._dsbpLock;
	            }
	        },

	        _handleMouseWheel: function( widget, delta, deltaX, deltaY ) {
	            ++widget._dsbpLock;

	            var x = widget.scrollLeft(),
	                y = widget.scrollTop();

	            widget.scrollTo( x + deltaX, y - deltaY );

	            var nx = widget.scrollLeft(),
	                ny = widget.scrollTop(),
	                didScroll = ( x != nx || y != ny );

	            if ( didScroll ) {
	                this._syncWithWidget( widget );
	            }

	            --widget._dsbpLock;

	            return !didScroll;
	        },

	        _handleScrollStart: function( widget ) {
	            widget._dsbpIsScrolling = true;
	        },

	        _handleScrollStop: function( widget ) {
	            var plugin = this;

	            widget._dsbpIsScrolling = false;
	            plugin._hideScrollbars( widget );
	        },

	        _handleVerticalScroll: function( widget, data ) {
	            if ( !widget._dsbpLock ) {
	                ++widget._dsbpLock;

	                var plugin = this,
	                    value = plugin._percentageToPixelValue( widget.height(), widget.scrollHeight(), data.percentage );

	                widget.scrollTo( widget.scrollLeft(), value );

	                --widget._dsbpLock;
	            }
	        },

	        _handleHorizontalScroll: function( widget, data ) {
	            if ( !widget._dsbpLock ) {
	                ++widget._dsbpLock;

	                var plugin = this,
	                    value = plugin._percentageToPixelValue( widget.width(), widget.scrollWidth(), data.percentage );

	                widget.scrollTo( value, widget.scrollTop() );

	                --widget._dsbpLock;
	            }
	        },

	        _percentageToPixelValue: function( clipDimension, viewDimension, percentage ) {
	            var val = clipDimension < viewDimension ? viewDimension - clipDimension : 0;
	            return percentage * val;
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(5), __webpack_require__(6), __webpack_require__(15), __webpack_require__(21) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Browser, Widget, Vmouse, MomentumDragTracker ) {

	    var MomentumScrollView = Widget.build( 'Widget.MomentumScrollView', Widget, {
	        _widgetName: 'scrollview',

	        defaultOptions: {
	            useTransform: false,
	            maxVelocity: 100,
	            velocityDamper: 0.95,
	            direction: undefined, // 'vertical', 'horizontal', undefined
	            delegateThreshold: 1,
	            delegateElement: null,
	            trackEvents: [ 'mouse', 'touch', 'pen' ]
	        },

	        _attachBehavior: function() {
	            var widget = this,
	                options = this.options;

	            this.$element.css( 'overflow', 'hidden' );

	            this._scrollLeft = 0;
	            this._scrollTop = 0;

	            this._direction = options.direction || undefined;
	            this._directionLock = undefined;
	            this.momentumStarted = false;

	            this.tracker = new MomentumDragTracker( this.$element[ 0 ], {
	                trackEvents: options.trackEvents,
	                delegateElement: options.delegateElement,
	                maxVelocity: options.maxVelocity,
	                velocityDamper: options.velocityDamper,

	                getDirectionFunc: function() {
	                    return widget._direction || 'both';
	                },

	                dragStart: function( dt, dx, dy ) {
	                        return widget._handleDragStart( dx, dy );
	                    },
	                dragUpdate: function( dt, dx, dy ) {
	                        return widget._handleDragUpdate( dx, dy );
	                    },
	                dragStop: function( dt, dx, dy ) {
	                        return widget._handleDragStop( dx, dy );
	                    },
	                momentumStart: function( dt, dx, dy ) {
	                        return widget._handleMomentumStart( dx, dy );
	                    },
	                momentumStop: function( dt, dx, dy ) {
	                        return widget._handleMomentumStop( dx, dy );
	                    }
	            });
	        },

	        scrollLeft: function() {
	            return this.options.useTransform ? this._scrollLeft : this.$element[ 0 ].scrollLeft;
	        },

	        scrollTop: function() {
	            return this.options.useTransform ? this._scrollTop : this.$element[ 0 ].scrollTop;
	        },

	        scrollWidth: function() {
	            var width = this.$element[ 0 ].scrollWidth;

	    /*
	            if ( this.options.useTransform ) {
	                var w = 0;
	                this.$element.children().each(function() {
	                        w += this.offsetWidth;
	                    });
	                width = Math.max( w, width );
	            }
	    */

	            return width;
	        },

	        scrollHeight: function() {
	            var height = this.$element[ 0 ].scrollHeight;

	    /*
	            if ( this.options.useTransform ) {
	                var h = 0;
	                this.$element.children().each(function() {
	                        h += this.offsetHeight;
	                    });
	                height = Math.max( h, height );
	            }
	    */

	            return height;
	        },

	        width: function() {
	            return this.$element[ 0 ].offsetWidth;
	        },

	        height: function() {
	            return this.$element[ 0 ].offsetHeight;
	        },

	        scrollTo: function( x, y ) {
	           var scrollElement = this.$element[ 0 ],
	               useTransform = this.options.useTransform;

	           if ( scrollElement ) {
	               var scrollWidth = this.scrollWidth(),
	                   scrollHeight = this.scrollHeight(),
	                   innerWidth = this.width(),
	                   innerHeight = this.height(),
	                   maxLeft = scrollWidth - innerWidth,
	                   maxTop = scrollHeight - innerHeight;

	               x = ( maxLeft <= 0 || x < 0 ) ? 0 : ( x > maxLeft ? maxLeft : x );
	               y = ( maxTop <= 0 || y < 0 ) ? 0 : ( y > maxTop ? maxTop : y );

	               this._scrollLeft = x;
	               this._scrollTop = y;

	               if ( useTransform ) {
	                   var val = 'translate3d(' + ( 0 - x ) + 'px,' + ( 0 - y ) + 'px,0)';
	                   this._getElementsToScroll().css( Browser.vendorPrefix + 'transform', val );
	                   this.$element.trigger( 'scroll' );
	               } else {
	                   scrollElement.scrollLeft = x;
	                   scrollElement.scrollTop = y;
	               }
	           }
	        },

	        _getElementsToScroll: function() {
	            return this.$element.children();
	        },

	        _handleDragStart: function( dx, dy ) {
	            var ele = this.$element[ 0 ];
	            this._scrollStartX = this.scrollLeft();
	            this._scrollStartY = this.scrollTop();

	            this._directionLock = undefined;
	            this.momentumStarted = false;

	            this.scrollTo( this._scrollStartX - dx, this._scrollStartY - dy );
	            this.$element.trigger( 'scroll-start', { dx: dx, dy: dy } );
	        },

	        _isWithinAngleThreshold: function( run, rise ) {
	            return run && ( Math.abs( Math.atan( rise / run ) ) * ( 180 / Math.PI ) < 30 );
	        },

	        _handleDragUpdate: function( dx, dy ) {
	            var ele = this.$element[ 0 ],
	                opts = this.options,
	                dir = this._direction,
	                dirLock = this._directionLock;

	            if ( !dirLock ) {
	                var aDX = Math.abs( dx ),
	                    aDY = Math.abs( dy );
	                if ( aDX < 10 && aDY < 10 ) {
	                    return;
	                }

	                if ( this._isWithinAngleThreshold( aDX, aDY ) ) {
	                    dirLock = 'horizontal'; // The user swiped horizontally.
	                } else if ( this._isWithinAngleThreshold( aDY, aDX ) ) {
	                    dirLock = 'vertical'; // The user swiped vertically.
	                }

	                // If we only scroll in one direction, and the user swiped in the
	                // opposite direction, delegate the drag.

	                if ( dir && dirLock && dir != dirLock ) {
	                    if ( this.tracker.delegateDrag( dirLock ) ) {
	                        // Some other tracker took over the drag so
	                        // make sure we dispatch a stop.

	                        this._handleDragStop( dx, dy );
	                        return;
	                    }
	                }

	                this._directionLock = dirLock = dir ? dir : ( dirLock ? dirLock : 'n' );

	                // We're going to attempt to scroll so block any delegates from
	                // processing this event.

	                this.tracker.blockDelegates();
	            }

	            var x = this._scrollStartX - ( dirLock != 'vertical' ? dx : 0 ),
	                y = this._scrollStartY - ( dirLock != 'horizontal' ? dy : 0 );

	            this.scrollTo( x, y );

	            // We use a delta calculation and delegateThreshold value to tell if we should
	            // delegate to an ancestor because some browsers generate floating point x/y values
	            // in their events, but then round their scroll left/top values to whole numbers.
	            // Using a threshold allows us to ensure that we don't pre-maturely delegate due
	            // to rounding.

	            var deltaX = Math.abs( x - this.scrollLeft() ),
	                deltaY = Math.abs( y - this.scrollTop() ),
	                maxDelta = this.options.delegateThreshold;

	            if ( !this.momentumStarted && ( deltaX > maxDelta || deltaY > maxDelta ) ) {
	                // Our attempt to scroll made us hit one of the extremes.
	                // Attempt to delegate this drag scroll. If we are locked into
	                // a specific direction, specify that direction during the
	                // delegation, otherwise, use the default direction.

	                if ( this.tracker.delegateDrag( ( dirLock != 'n' && dirLock ) || dir || 'both' ) ) {
	                    // Some other tracker took over the drag so
	                    // make sure we dispatch a stop.

	                    this._handleDragStop( dx, dy );
	                    return;
	                }
	            }
	        },

	        _handleDragStop: function( dx, dy ) {
	            this.momentumStarted = false;

	            dx =  this._directionLock != 'vertical' ? dx : 0;
	            dy =  this._directionLock != 'horizontal' ? dy : 0;

	            this.scrollTo( this._scrollStartX - dx, this._scrollStartY - dy );
	            this.$element.trigger( 'scroll-stop', { dx: dx, dy: dy } );
	        },

	        _handleMomentumStart: function( dx, dy ) {
	            this.momentumStarted = true;
	            this.$element.trigger( 'momentum-start', { dx: dx, dy: dy } );
	        },

	        _handleMomentumStop: function( dx, dy ) {
	            this.momentumStarted = false;
	            this.$element.trigger( 'momentum-stop', { dx: dx, dy: dy } );
	        }
	    });

	    Widget.addWidgetConstructorAsjQueryPlugin( 'wpMomentumScrollView', MomentumScrollView );

	    // Support old name SimpleMomentumScrollView
	    Widget.SimpleMomentumScrollView = MomentumScrollView;
	    Widget.addWidgetConstructorAsjQueryPlugin( 'wpSimpleMomentumScrollView', MomentumScrollView );

	    return MomentumScrollView;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(6), __webpack_require__(18) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Widget, DragTracker ) {
	    var Slider2d = Widget.build( 'Widget.Slider2d', Widget, {
	        _widgetName: 'slider2d',

	        defaultOptions: {
	            trackClassName: 'wp-slider-track',
	            thumbClassName: 'wp-slider-thumb',
	            ignoreY: true,
	            ignoreX: false,
	            useTransforms: false
	        },

	        _attachBehavior: function() {
	            var self = this,
	                opts = this.options;

	            this.$track = this.$element.find( '.' + opts.trackClassName );
	            this.$thumb = this.$element.find( '.' + opts.thumbClassName );

	            var trackWidth = Math.round( this.$track.width() ),
	                trackHeight = Math.round( this.$track.height() ),
	                thumbWidth = Math.round( this.$thumb.width() ),
	                thumbX = parseInt( this.$thumb.css( 'left' ) ) || 0,
	                thumbY = parseInt( this.$thumb.css( 'top' ) ) || 0,
	                thumbPercentX = thumbX / trackWidth,
	                thumbPercentY = thumbY / trackHeight;

	            this.percentage = { x: thumbPercentX, y: thumbPercentY };
	            this.position = { x: thumbX, y: thumbY };

	            this._resetConstraints();

	            this.tracker = new DragTracker( this.$thumb[ 0 ], {
	                dragStart: function( dt, dx, dy ) { self._handleDragStart( dx, dy ); },
	                dragUpdate: function( dt, dx, dy ) { self._handleDragUpdate( dx, dy ); },
	                dragStop: function( dt, dx, dy ) { self._handleDragStop( dx, dy ); }
	            });
	        },

	        _handleDragStart: function( dx, dy ) {
	            this._resetConstraints();
	            this._startPos = {
	                x: this.position.x,
	                y: this.position.y
	            };
	            this.trigger( 'wp-slider-drag-start', { position: this.position, percentage: this.percentage } );
	        },

	        _handleDragUpdate: function( dx, dy ) {
	            if ( this.options.ignoreY ) {
	                this.setPositionByPixel( this._startPos.x + dx, this._startPos.y );
	            } else if ( this.options.ignoreX ) {
	                this.setPositionByPixel( this._startPos.x, this._startPos.y + dy );
	            } else {
	                this.setPositionByPixel( this._startPos.x + dx, this._startPos.y + dy );
	            }
	        },

	        _handleDragStop: function( dx, dy ) {
	            this._startPos = { x: 0, y: 0 };
	            this.trigger( 'wp-slider-drag-stop', { position: this.position, percentage: this.percentage } );
	        },

	        _resetConstraints: function( update ) {
	            var trackWidth = this.$track.width(),
	                trackHeight = this.$track.height(),
	                thumbWidth = this.$thumb.outerWidth(),
	                thumbHeight = this.$thumb.outerHeight();

	            this.maxPos = {
	                x: trackWidth - thumbWidth,
	                y: trackHeight - thumbHeight
	            };

	            // Clip values.

	            this.maxPos.x = this.maxPos.x < 0 ? 0 : this.maxPos.x;
	            this.maxPos.y = this.maxPos.y < 0 ? 0 : this.maxPos.y;

	            // Reset the thumb based on our new width.

	            this.setPositionByPixel( this.percentage.x * this.maxPos.x, this.percentage.y * this.maxPos.y, update );
	        },

	        setPositionByPixel: function( posX, posY, update )
	        {
	            // Clip the value we were given to our pixel range.

	            posX = Math.round( posX || 0 );
	            posX = posX < 0 ? 0 : ( posX > this.maxPos.x ? this.maxPos.x : posX );

	            posY = Math.round( posY || 0 );
	            posY = posY < 0 ? 0 : ( posY > this.maxPos.y ? this.maxPos.y : posY );

	            this._setThumbPosition( posX, posY, update );
	        },

	        setPositionByPercentage: function( percentX, percentY, update ) {
	            this.percentage.x = percentX < 0 ? 0 : ( percentX < 1 ? percentX : 1 );
	            this.percentage.y = percentY < 0 ? 0 : ( percentY < 1 ? percentY : 1 );
	            this._setThumbPosition( Math.round( this.percentage.x * this.maxPos.x ), Math.round( this.percentage.y * this.maxPos.y ), update );
	        },

	        getPosition: function() {
	            return this.position;
	        },

	        getPositionAsPercentage: function() {
	            return this.percentage;
	        },

	        _setThumbPosition: function( posX, posY, update ) {
	            var maxX = this.maxPos.x,
	                maxY = this.maxPos.y;

	            // Clip the position values.

	            posX = posX < 0 ? 0 : ( posX > maxX ? maxX : posX );
	            posY = posY < 0 ? 0 : ( posY > maxY ? maxY : posY );

	            this.position = {
	                x: posX,
	                y: posY
	            };

	            this.percentage = {
	                x: maxX ? posX / maxX : 0,
	                y: maxY ? posY / maxY : 0,
	            };

	            if ( this.options.useTransforms ) {
	                WebPro.Utils.setElementTransform( this.$thumb, 'translate3d(' + posX + 'px,' + posY + 'px,0)');
	            } else {
	                this.$thumb.css({
	                    left: posX + 'px',
	                    top: posY + 'px'
	                });
	            }

	            // standard updates can be blocked by passing
	            // false through update parameter. This would
	            // be done to update the thumb view without
	            // affecting the scroll model

	            if ( update === undefined || update ) {
	                this.update();
	            }
	        },

	        update: function() {
	            this._update();
	            if ( this.options.ignoreY ) {
	                this.trigger( 'wp-slider-update', { position: this.position.x, percentage: this.percentage.x } );
	            } else if ( this.options.ignoreX ) {
	                this.trigger( 'wp-slider-update', { position: this.position.y, percentage: this.percentage.y } );
	            } else {
	                this.trigger( 'wp-slider-update', {
	                        positionX: this.position.x,
	                        positionY: this.position.y,
	                        percentageX: this.percentage.x,
	                        percentageY: this.percentage.y
	                    });
	            }
	        },

	        _update: function() {
	            // Stub function to be used by derived class.
	        }
	    });

	    // Add a convenience method to the jQuery Collection prototype,
	    // that applies our Slider2d behavior to all the elements in the collection.

	    Widget.addWidgetConstructorAsjQueryPlugin( 'wpSlider2d', Slider2d );

	    return Slider2d;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
	 * Licensed under the MIT License (LICENSE.txt).
	 *
	 * Version: 3.1.11
	 *
	 * Requires: jQuery 1.2.2+
	 */
	 !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $ ) {
	    // WEBPRO MODIFICATIONS
	    //
	    // Browser detection with minimal UA sniffing,
	    // based on answer from here:
	    //
	    //     http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
	    //     http://jsfiddle.net/9zxvE/383/
	    //
	    // WEBPRO MODIFICATIONS

	    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	        // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
	    var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
	    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	        // At least Safari 3+: "[object HTMLElementConstructor]"
	    var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
	    var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6

	    var toFix  = [ 'wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll' ],
	        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
	                    [ 'wheel' ] : [ 'mousewheel', 'DomMouseScroll', 'MozMousePixelScroll' ],
	        slice  = Array.prototype.slice,
	        nullLowestDeltaTimeout, lowestDelta;

	    if ( $.event.fixHooks ) {
	        for ( var i = toFix.length; i; ) {
	            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
	        }
	    }

	    var special = $.event.special.mousewheel = {
	        version: '3.1.11',

	        setup: function() {
	            if ( this.addEventListener ) {
	                for ( var i = toBind.length; i; ) {
	                    this.addEventListener( toBind[--i], handler, false );
	                }
	            } else {
	                this.onmousewheel = handler;
	            }
	            // Store the line height and page height for this particular element
	            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
	            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
	        },

	        teardown: function() {
	            if ( this.removeEventListener ) {
	                for ( var i = toBind.length; i; ) {
	                    this.removeEventListener( toBind[--i], handler, false );
	                }
	            } else {
	                this.onmousewheel = null;
	            }
	            // Clean up the data we added to the element
	            $.removeData(this, 'mousewheel-line-height');
	            $.removeData(this, 'mousewheel-page-height');
	        },

	        getLineHeight: function(elem) {
	            var $parent = $(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
	            if (!$parent.length) {
	                $parent = $('body');
	            }
	            return parseInt($parent.css('fontSize'), 10);
	        },

	        getPageHeight: function(elem) {
	            return $(elem).height();
	        },

	        settings: {
	            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
	            normalizeOffset: true  // calls getBoundingClientRect for each event
	        }
	    };

	    $.fn.extend({
	        mousewheel: function(fn) {
	            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
	        },

	        unmousewheel: function(fn) {
	            return this.unbind('mousewheel', fn);
	        }
	    });

	    function handler(event) {
	        var orgEvent   = event || window.event,
	            args       = slice.call(arguments, 1),
	            delta      = 0,
	            deltaX     = 0,
	            deltaY     = 0,
	            absDelta   = 0,
	            offsetX    = 0,
	            offsetY    = 0;
	        event = $.event.fix(orgEvent);
	        event.type = 'mousewheel';

	        // Old school scrollwheel delta
	        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
	        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
	        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
	        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

	        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
	        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
	            deltaX = deltaY * -1;
	            deltaY = 0;
	        }

	        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
	        delta = deltaY === 0 ? deltaX : deltaY;

	        // New school wheel delta (wheel event)
	        if ( 'deltaY' in orgEvent ) {
	            deltaY = orgEvent.deltaY * -1;
	            delta  = deltaY;
	        }
	        if ( 'deltaX' in orgEvent ) {
	            deltaX = orgEvent.deltaX;
	            if ( deltaY === 0 ) { delta  = deltaX * -1; }
	        }

	        // No change actually happened, no reason to go any further
	        if ( deltaY === 0 && deltaX === 0 ) { return; }

	        // Need to convert lines and pages to pixels if we aren't already in pixels
	        // There are three delta modes:
	        //   * deltaMode 0 is by pixels, nothing to do
	        //   * deltaMode 1 is by lines
	        //   * deltaMode 2 is by pages
	        if ( orgEvent.deltaMode === 1 ) {
	            var lineHeight = $.data(this, 'mousewheel-line-height');
	            delta  *= lineHeight;
	            deltaY *= lineHeight;
	            deltaX *= lineHeight;
	        } else if ( orgEvent.deltaMode === 2 ) {
	            var pageHeight = $.data(this, 'mousewheel-page-height');
	            delta  *= pageHeight;
	            deltaY *= pageHeight;
	            deltaX *= pageHeight;
	        }

	        // WEBPRO MODIFICATIONS
	        //
	        // The browser specific checks here were added by jblas@adobe.com for
	        // the webpro components library. The goal here was to generate deltas
	        // that could be used to match the offsets for native scrolling in each
	        // browser. The original normalization of delta/deltaX/deltaY that is
	        // provided by the jquery.mousewheel plugin is treated as a fallback.
	        //
	        // WEBPRO MODIFICATIONS

	        if ( isSafari ) { // WEBPRO CODE
	            // DeltaY isn't defined in the original event, then the
	            // delta values were retrieved from wheelDeltaX/wheelDeltaY
	            // properties. The value of these properties are multiples of
	            // 3 so we need to divide by 3 to get the true delta values we
	            // want to pass on to listeners.

	            if ( !( 'deltaY' in orgEvent ) ) {
	                delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / 3);
	                deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / 3);
	                deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / 3);
	            }
	        } else if ( isFirefox ) { // WEBPRO CODE
	            if ( orgEvent.deltaMode === 0 ) {
	                delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / 2);
	                deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / 2);
	                deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / 2);
	            }
	        } else if ( isChrome || isIE ) { // WEBPRO CODE
	            // No modifications.
	        } else { // ORIGINAL CODE
	            // Store lowest absolute delta to normalize the delta values
	            absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

	            if ( !lowestDelta || absDelta < lowestDelta ) {
	                lowestDelta = absDelta;

	                // Adjust older deltas if necessary
	                if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
	                    lowestDelta /= 40;
	                }
	            }

	            // Adjust older deltas if necessary
	            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
	                // Divide all the things by 40!
	                delta  /= 40;
	                deltaX /= 40;
	                deltaY /= 40;
	            }

	            // Get a whole, normalized value for the deltas
	            delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
	            deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
	            deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);
	        }

	        // Normalise offsetX and offsetY properties
	        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
	            var boundingRect = this.getBoundingClientRect();
	            offsetX = event.clientX - boundingRect.left;
	            offsetY = event.clientY - boundingRect.top;
	        }

	        // Add information to the event object
	        event.deltaX = deltaX;
	        event.deltaY = deltaY;
	        event.deltaFactor = lowestDelta;
	        event.offsetX = offsetX;
	        event.offsetY = offsetY;
	        // Go ahead and set deltaMode to 0 since we converted to pixels
	        // Although this is a little odd since we overwrite the deltaX/Y
	        // properties with normalized deltas.
	        event.deltaMode = 0;

	        // Add event and delta to the front of the arguments
	        args.unshift(event, delta, deltaX, deltaY);

	        // Clearout lowestDelta after sometime to better
	        // handle multiple device types that give different
	        // a different lowestDelta
	        // Ex: trackpad = 3 and mouse wheel = 120
	        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
	        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

	        return ($.event.dispatch || $.event.handle).apply(this, args);
	    }

	    function nullLowestDelta() {
	        lowestDelta = null;
	    }

	    function shouldAdjustOldDeltas(orgEvent, absDelta) {
	        // If this is an older event and the delta is divisable by 120,
	        // then we are assuming that the browser is treating this as an
	        // older mouse wheel event and that we should divide the deltas
	        // by 40 to try and get a more usable deltaFactor.
	        // Side note, this actually impacts the reported scroll distance
	        // in older browsers and can cause scrolling to be slower than native.
	        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
	        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
	    }

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(4) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( WebPro ) {
	    // A component class that mimics the DOM Node API for the purposes of
	    // maintaining object relationships as a tree.

	    var Node = function() {
	        this.parentNode = null;
	        this.firstChild = null;
	        this.lastChild = null;
	        this.previousSibling = null;
	        this.nextSibling = null;
	    };

	    var proto = Node.prototype;

	    proto.removeChild = function( child ) {
	        if ( child.parentNode === this ) {
	            var p = child.previousSibling,
	                n = child.nextSibling;

	            if ( this.firstChild === child ) {
	                this.firstChild = n;
	            }

	            if ( this.lastChild === child ) {
	                this.lastChild = p;
	            }

	            if ( p ) {
	                p.nextSibling = n;
	            }

	            if ( n ) {
	                n.previousSibling = p;
	            }

	            child.parentNode = child.previousSibling = child.nextSibling = null;
	        }

	        return child;
	    };

	    proto.appendChild = function( child ) {
	        if ( child && ( child.parentNode !== this || child !== this.lastChild ) ) {
	            var lc = this.lastChild;
	            if ( child.parentNode ) {
	                child.parentNode.removeChild( child );
	            }

	            if ( !lc ) {
	                this.firstChild = child;
	            } else {
	                lc.nextSibling = child;
	                child.previousSibling = lc;
	            }

	            this.lastChild = child;
	            child.parentNode = this;
	        }

	        return child;
	    };

	    proto.insertBefore = function( child, ref ) {
	        if ( child && child !== ref ) {
	            if ( child.parentNode ) {
	                child.parentNode.removeChild( child );
	            }

	            if ( !ref ) {
	                this.appendChild( child );
	            } else {
	                if ( this.firstChild === ref ) {
	                    this.firstChild = child;
	                }

	                var p = ref.previousSibling;
	                child.previousSibling = p;
	                child.nextSibling = ref;
	                ref.previousSibling = child;
	                if ( p ) {
	                    p.nextSibling = child;
	                }
	                child.parentNode = this;
	            }
	        }

	        return child;
	    };

	    proto.insertAfter = function( child, ref ) {
	        return this.insertBefore( child, ( ref && ref.nextSibling ) || null );
	    };

	    proto.childNodes = function() {
	        var nodes = [], c = this.firstChild;
	        while ( c ) {
	            nodes.push( c );
	            c = c.nextSibling;
	        }
	        return nodes;
	    };

	    WebPro.Node = Node;

	    return Node;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(13) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, RadioGroup ) {
	    // dynamicButtonsPlugin
	    //
	    // A plugin for extending radio groups with functionality
	    // that allows for buttons to be dynamically inserted,
	    // moved, or removed.

	    RadioGroup.dynamicButtonsPlugin = {
	        defaultOptions: {},

	        initialize: function( widget, options ) {
	            var plugin = this;

	            $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

	            widget.insertButtonAfter = function( button, reference ) {
	                return plugin._insertButtonAfter( widget, button, reference );
	            };

	            widget.moveButtonAfter = function( button, reference ) {
	                return plugin._moveButtonAfter( widget, panel, reference );
	            };

	            widget.removeButton = function( button ) {
	                return plugin._removeButton( widget, button );
	            };
	        },

	        _insertButtonAfter: function( widget, button, reference ) {
	            var plugin = this,
	                $button = $( button );

	            widget.trigger( 'wp-after-insert-button', { button: button, reference: reference } );

	            // If a reference button was given, insert
	            // the new button after it. Otherwise, insert
	            // the button at the very end.

	            var refIndex = widget.$element.index( reference );
	            if ( reference ) {
	                $( reference ).after( $button );
	                widget.$element.splice( refIndex + 1, 0, button );
	                widget.buttons.splice( refIndex + 1, 0, widget._addButtonBehavior( button ) );
	            } else {
	                widget.$element.last().after( $button );
	                widget.$element.push( button );
	                widget.buttons.push( widget._addButtonBehavior( button ) );
	            }

	            widget.trigger( 'wp-insert-button', { button: button, reference: reference } );
	        },

	        _moveButtonAfter: function( widget, panel, reference ) {
	            // XXX: TBD
	        },

	        _removeButton: function( widget, button ) {
	            var plugin = this,
	                activeIndex = widget.activeIndex;

	            button = $( button )[ 0 ];

	            widget.trigger( 'wp-before-remove-button', { button: button } );

	            widget._dppButtonToDelete = button;

	            var activeElement = widget.$element.parent().find( '.' + widget.options.checkedClass )[0];

	            if ( button === widget.activeElement ) {
	                // The button we are about to remove is the
	                // currently visible button. Add a removed class
	                // to the button element to initiate any removal
	                // animation it may have.

	                $( button ).addClass( 'removed' );

	                // Transition to another button. The
	                // actual removal will happen when the
	                // transition is complete.

	                widget.showButton( activeIndex + ( activeIndex != ( widget.$element.length - 1 )  ? 1 : -1 ) );
	            } else {
	                // The button is not the currently active one,
	                // so go ahead and delete it now.

	                plugin._deleteButton( widget );
	            }
	        },

	        _deleteButton: function( widget ) {
	            var plugin = this,
	                button = widget._dppButtonToDelete;

	            if ( button ) {
	                $( button ).remove();

	                var $el = widget.$element;
	                $el.each(function( i ) {
	                    if ( this == button ) {
	                        $el.splice( i, 1 );
	                    }
	                });

	                buttons = widget.buttons;
	                for ( var i = 0; i < buttons.length; i++ ) {
	                    if ( buttons[i].$element[0] == button ) {
	                        buttons.splice( i, 1 );
	                    }
	                }

	                widget._dppButtonToDelete = null;
	                widget.trigger( 'wp-remove-button', { button: button } );
	            }
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    // This is a polyfill that provides support for requestAnimationFrame() and cancelAnimationFrame() on
	    // platforms where it is not already supported.

	    (function( window ) {

	    if ( !window.requestAnimationFrame ) {
	      window.requestAnimationFrame = window.webkitRequestAnimationFrame
	                                      || window.mozRequestAnimationFrame
	                                      || window.oRequestAnimationFrame
	                                      || window.msRequestAnimationFrame
	                                      || function( callback ) { return window.setTimeout( callback, window.requestAnimationFrame._wpRequestAnimationFrameInterval ); };
	    }

	    if ( !window.cancelAnimationFrame ) {
	      window.cancelAnimationFrame = window.webkitCancelAnimationFrame
	                                      || window.mozCancelAnimationFrame
	                                      || window.oCancelAnimationFrame
	                                      || window.msCancelAnimationFrame
	                                      || function( id ) { return window.clearTimeout( id ); };
	    }

	    // Give users a way to adjust the animation interval when setTimeout is used.

	    window.requestAnimationFrame._wpRequestAnimationFrameInterval = 1000 / 60;

	    })( window );
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(30) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, ScrollTriggers ) {
	    ScrollTriggers.targetClassPlugin = {
	        defaultOptions: {
	            targetDataAttribute: 'triggerTarget', // @data-trigger-target attribute
	            targetClass: 'triggered',
	            filter: undefined
	        },

	        initialize: function( widget, options ) {
	            var plugin = this;

	            options = $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );
	            widget.bind( 'attach-behavior', function() {
	                    plugin._attachBehavior( widget );
	                });
	        },

	        _attachBehavior: function( widget ) {
	            var plugin = this,
	                options = widget.options;

	            widget._$triggers.each(function() {
	                    var $this = $( this ),
	                        selector = $this.data( widget.options.targetDataAttribute );

	                    if ( selector ) {
	                        var $target = $( selector );
	                        if ( $target.length ) {
	                            $this.data( 'tcpTarget', $target );
	                        }
	                    }
	                });

	            widget.$element.bind( 'scroll-trigger', function( e, data ) {
	                    return plugin._handleScrollTrigger( widget, e, data );
	                });
	        },

	        _handleScrollTrigger: function( widget, e, data ) {
	            var options = widget.options,
	                above = data.above,
	                below = data.below,
	                className = options.targetClass;

	            if ( options.filter ) {
	                options.filter.call( this, widget, data );
	            }

	            $( above ).each(function() {
	                    var $displayTarget = $( this ).data( 'tcpTarget' );
	                    if ( $displayTarget ) {
	                        $displayTarget.addClass( className );
	                    }
	                });

	            $( below ).each(function() {
	                    var $displayTarget = $( this ).data( 'tcpTarget' );
	                    if ( $displayTarget ) {
	                        $displayTarget.removeClass( className );
	                    }
	                });
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(6) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Widget ) {
	    var ScrollTriggers = Widget.build( 'Widget.ScrollTriggers', Widget, {
	        defaultOptions: {
	            triggerSelector: '.scroll-trigger',
	            triggerScrollDirection: 'vertical', // 'vertical' || 'horizontal'
	            triggerThreshold: .75 // Percentage of the view dimension that the element must exceed.
	        },

	        _attachBehavior: function() {
	            var widget = this;

	            // Find any trigger elements inside the container..

	            this._$triggers = this._findTriggers();
	            this._isVertical = this.options.triggerDirection != 'horizontal';

	            // Listen for scroll events on the container.

	            this.$element.on( 'scroll', function( e, data ) {
	                    widget._handleScroll();
	                });
	        },

	        // When the widget is ready, attempt to sync the triggers
	        // against the current scroll position of the container.

	        _ready: function() {
	            this.sync();
	        },

	        // Find all triggers within
	        _findTriggers: function() {
	            return this.$element.find( this.options.triggerSelector );
	        },

	        update: function() {
	            this._$triggers = this._findTriggers();
	            this.sync();
	        },

	        sync: function() {
	            this._handleScroll();
	        },

	        _handleScroll: function() {
	            var widget = this,
	                options = widget.options,
	                numTriggers = widget._$triggers.length,
	                clipBounds = widget.$element[ 0 ].getBoundingClientRect(),
	                tx = clipBounds.left,
	                isVertical = widget._isVertical,
	                dimensionStart = isVertical ? 'top' : 'left',
	                dimensionEnd = isVertical ? 'bottom' : 'right',
	                dimension = isVertical ? 'height' : 'width',
	                clipPos = clipBounds[ dimensionStart ],
	                threshold = options.triggerThreshold * clipBounds[ dimension ];

	            // Divide the set of triggers into those that are below the
	            // threshold, and those that are above.

	            var above = [],
	                below = [],
	                intersect = [];

	            for ( var i = 0; i < numTriggers; i++ ) {
	                var trigger = widget._$triggers[ i ],
	                    bounds = trigger.getBoundingClientRect(),
	                    posStart = bounds[ dimensionStart ] - clipPos,
	                    posEnd = bounds[ dimensionEnd ] - clipPos;

	                // Is the current trigger above or below
	                // our threshold?

	                if ( posStart <= threshold ) {
	                    above.push( trigger );
	                } else {
	                    below.push( trigger );
	                }

	                // Does the current trigger intersect
	                // the viewport of the scrollview?

	                if ( posStart < clipBounds[ dimension ] && posEnd > 0 ) {
	                    intersect.push( trigger );
	                }
	            }

	            widget.$element.trigger( 'scroll-trigger', {
	                    above: above,
	                    below: below,
	                    intersect: intersect
	                });
	        }
	    });

	    Widget.addWidgetConstructorAsjQueryPlugin( 'wpScrollTriggers', ScrollTriggers );

	    return ScrollTriggers;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(4) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, WebPro ) {
	    var SelectionManager = function( options ) {
	        this.selectedItems = [];
	        this.options = $.extend( {}, SelectionManager.options, options );
	    }

	    SelectionManager.options = {
	        multiSelect: false,
	        selectTogglesState: false
	    };

	    $.extend( SelectionManager.prototype, {
	        clear: function() {
	            var prev = this.selectedItems;
	            $( this ).trigger( "selectionbeforeclear", { current: prev, delta: prev } );
	            this.selectedItems = [];
	            $( this ).trigger( "selectionclear", { prev: prev, current: [], delta: prev } );
	        },

	        select: function( items ) {
	            items = this._ensureArray( items );
	            var prev = this.selectedItems,
	                data = { current: prev, delta: items };

	            $( this ).trigger( "selectionbeforeset", data );

	            this.selectedItems = data.delta.slice(0);

	            $( this ).trigger( "selectionset", { prev: prev, current: data.delta, delta: data.delta } );
	    },

	        add: function( items ) {
	            items = this._ensureArray( items );
	            var len = items.length,
	                prev = this.selectedItems.slice( 0 ),
	                data = { current: prev, delta: items },
	                index, i;

	            $( this ).trigger( "selectionbeforeadd", data );

	            items = data.delta || [];

	            for ( i = 0; i < len; i++ ) {
	                index = this.getItemIndex( items[ i ] );
	                if ( index < 0 ) {
	                    this.selectedItems.push( items[ i ] );
	                }
	            }

	            $( this ).trigger( "selectionadd", { prev: prev, current: this.selectedItems.slice( 0 ), delta: items } );
	        },

	        remove: function( items ) {
	            items = this._ensureArray( items );

	            var len = items.length,
	                prev = this.selectedItems.slice( 0 ),
	                data = { current: prev, delta: items },
	                index, i;

	            $( this ).trigger( "selectionbeforeremove", data );

	            items = data.delta;

	            for ( i = 0; i < len; i++ ) {
	                index = this.getItemIndex( items[ i ] );
	                if ( index >= 0 ) {
	                    this.selectedItems.splice(index, 1);
	                }
	            }
	            $( this ).trigger( "selectionremove", { prev: prev, current: this.selectedItems.slice( 0 ), delta: items } );
	        },

	        getSelection: function() {
	            return this.selectedItems.slice(0);
	        },

	        getItemIndex: function( item ) {
	            var items = this.selectedItems,
	                len = items.length,
	                i;

	            for ( i = 0; i < len; i++ ) {
	                if ( item === items[ i ] ) {
	                    return i;
	                }
	            }

	            return -1;
	        },

	        itemIsSelected: function( item ) {
	            return this.getItemIndex( item ) !== -1;
	        },

	        selectionExists: function() {
	            return this.selectedItems.length > 0;
	        },

	        _ensureArray: function( item ) {
	            // Normalize item so that it is an array. Note that this
	            // method also takes into account the multiSelect option.
	            // If multiSelect is true, this method only returns an
	            // array with a single item in it.

	            return $.isArray( item ) ? ( this.options.multiSelect ? item : [ item[ 0 ] ] ) : [ item ];
	        }
	    });

	    WebPro.SelectionManager = SelectionManager;

	    return SelectionManager;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(4), __webpack_require__(3) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, WebPro, Utils ) {
	    var SelectionOutline = function( element, options ) {
	        this.options = $.extend( {}, this.defaultOptions, options );
	        this.$element = $( element );
	        this.$container = $( this.options.container || document.body );
	        this.top = 0;
	        this.left = 0;
	        this.width = 0;
	        this.height = 0;
	        this.borderWidth = 1;
	        this.handleWidth = 5 + ( 2 * this.options.borderWidth );

	        this._dirty = true;

	        this.outline = document.createElement( "div" );
	        this.outline.className = "selection-outline";
	        //this.outline.innerHTML = '<div class="selection-top"><div class="selection-handle-top-left"></div><div class="selection-handle-top"></div><div class="selection-handle-top-right"></div></div><div class="selection-right"><div class="selection-handle-right"></div></div><div class="selection-bottom"><div class="selection-handle-bottom-left"></div><div class="selection-handle-bottom"></div><div class="selection-handle-bottom-right"></div></div><div class="selection-left"><div class="selection-handle-left"></div></div>';

	        // Create the borders.

	        this.topBorder = createBorder( "top" );
	        this.rightBorder = createBorder( "right" );
	        this.bottomBorder = createBorder( "bottom" );
	        this.leftBorder = createBorder( "left" );

	        // Create the handles.

	        this.topLeftHandle = createHandle( "top-left" );
	        this.topHandle = createHandle( "top" );
	        this.topRightHandle = createHandle( "top-right" );
	        this.rightHandle = createHandle( "right" );
	        this.bottomLeftHandle = createHandle( "bottom-left" );
	        this.bottomHandle = createHandle( "bottom" );
	        this.bottomRightHandle = createHandle( "bottom-right" );
	        this.leftHandle = createHandle( "left" );

	        // Add the handles to the top border.

	        var ele = this.topBorder;
	        ele.appendChild( this.topLeftHandle );
	        ele.appendChild( this.topHandle );
	        ele.appendChild( this.topRightHandle );

	        // Add the handles to the bottom border.

	        var ele = this.bottomBorder;
	        ele.appendChild( this.bottomLeftHandle );
	        ele.appendChild( this.bottomHandle );
	        ele.appendChild( this.bottomRightHandle );

	        // Add handles to the side borders.

	        this.leftBorder.appendChild( this.leftHandle );
	        this.rightBorder.appendChild( this.rightHandle );

	        // Add all the borders to the outline outline.

	        this.outline.appendChild( this.topBorder );
	        this.outline.appendChild( this.rightBorder );
	        this.outline.appendChild( this.bottomBorder );
	        this.outline.appendChild( this.leftBorder );

	        if ( this.$element.length ) {
	            this.update();
	        }
	    };

	    var proto = SelectionOutline.prototype;

	    proto.defaultOptions = {
	        container: null,
	        borderWidth: 1
	    };

	    proto.show = function() {
	        this.$container.append( this.outline );

	        if ( this._dirty ) {
	            this.update();
	        }
	    };

	    proto.hide = function() {
	        $( this.outline ).detach();
	    };

	    proto.attach = function( ele ) {
	        this.$element = $( ele );
	        this.update();
	    };

	    proto.detach = function() {
	        this.$element = $();
	        this.hide();
	    };

	    proto.update = function() {
	        var parent = this.outline.offsetParent;

	        this._dirty = true;

	        if ( parent ) {
	            var $ele = this.$element,
	                eOffset = Utils.getDocumentOffset( $ele ),
	                oOffset = Utils.getDocumentOffset( parent ),
	                x = eOffset.left - oOffset.left,
	                y = eOffset.top - oOffset.top;

	            this.setPosition( x, y, $ele.outerWidth(), $ele.outerHeight() );
	            this._dirty = false;
	        }
	    };

	    proto.setPosition = function( x, y, w, h ) {
	        var bw = this.options.borderWidth,
	            wx = bw * 2,
	            hndlw = this.handleWidth / 2 ,
	            hw = ( ( w + wx ) / 2 ) - hndlw,
	            hh = ( ( h + wx ) / 2 ) - hndlw;

	        this.left = x;
	        this.top = y;
	        this.width = w;
	        this.height = h;

	        // Set the dimensions of the outline.

	        this.topBorder.style.width = this.bottomBorder.style.width = w + wx + "px";
	        this.leftBorder.style.height = this.rightBorder.style.height = h + wx + "px";

	        // Set the position of the outline.

	        this.outline.style.top = y + "px";
	        this.outline.style.left = x + "px";
	        this.topBorder.style.top = -bw + "px";
	        this.leftBorder.style.left = -bw + "px";
	        this.bottomBorder.style.top = h + bw + "px";
	        this.rightBorder.style.left = w + bw + "px";

	        // Fix up the midpoint handles.

	        this.topHandle.style.left = this.bottomHandle.style.left = hw + "px";
	        this.leftHandle.style.top = this.rightHandle.style.top = hh + "px";

	    }

	    function createBorder( borderName ) {
	        var div = document.createElement( "div" );
	        div.className = "selection-" + borderName;
	        return div;
	    }

	    function createHandle( handleName ) {
	        var div = document.createElement( "div" );
	        div.className = "selection-handle-" + handleName;
	        return div;
	    }

	    WebPro.SelectionOutline = SelectionOutline;

	    return SelectionOutline;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(4), __webpack_require__(3), __webpack_require__(18), __webpack_require__(15) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, WebPro, Utils, DragTracker, Vmouse ) {
	    SwipeTracker = function( element, options ) {
	        options = $.extend( {}, DragTracker.prototype.defaultOptions, SwipeTracker.prototype.defaultOptions, options );
	        DragTracker.call( this, $( element ), options );
	        this.$element = $( element );
	        this.events = options.swipeEvents;
	        this.globalSwipeEvent = this.options.globalSwipeEvent;
	    };

	    Utils.inherit( SwipeTracker, DragTracker );

	    $.extend( SwipeTracker.prototype, {
	        defaultOptions: {
	            swipeEvents: null,
	            angleThreshold: 10,
	            displayTracker: false,
	            globalSwipeEvent: 'wp-swipe'
	        },
	        dragStart: function( dx, dy ) {
	            if ( this.options.displayTracker ) {
	                this.$tracker = $( '<div style="background-color: cyan;border-radius: 20px; width: 40px; height: 40px; position: absolute;box-shadow: 0 0 5px 5px cyan"></div>' );
	                $( 'body' ).append( this.$tracker );
	                this.$tracker.css({
	                    left: this.startX - 20,
	                    top: this.startY - 20
	                });
	            }
	        },
	        dragUpdate: function( dx, dy ) {
	            if ( this.options.displayTracker ) {
	                this.$tracker.css({
	                    left: this.startX + dx - 20,
	                    top: this.startY + dy - 20
	                });
	            }
	        },
	        dragStop: function( dx, dy ) {
	            if ( this.options.displayTracker ) {
	                this.$tracker.remove();
	            }
	            this.$element.trigger( this.globalSwipeEvent );
	            var startX = this.startX,
	                startY = this.startY,
	                totalWidth = this.$element.width(),
	                totalHeight = this.$element.height(),
	                angle = Math.abs( Math.atan2( -dy, dx ) * ( 180 / Math.PI ) ),
	                angleThreshold = this.options.angleThreshold,
	                yThreshold, xThreshold, top, left, bottom, right,
	                event, x, y, width, height;

	            for ( event in this.events ) {
	                params = this.events[ event ];
	                x = params.halign;
	                y = params.valign;
	                width = params.width || totalWidth;
	                height = params.height || totalHeight;
	                xThreshold = params.xThreshold;
	                yThreshold = params.yThreshold;

	                switch ( x ) {
	                    case "left":
	                    case "center":
	                    case "right":
	                        x = Utils.getAlignmentAdjustment( x, totalWidth, width );
	                        break;
	                    default:
	                        x = x || 0;
	                        break;
	                }

	                switch ( y ) {
	                    case "top":
	                    case "center":
	                    case "bottom":
	                        y = Utils.getAlignmentAdjustment( y, totalHeight, height );
	                        break;
	                    default:
	                        y = y || 0;
	                        break;
	                }
	                left = x;
	                top = y;
	                right = left + ( width || totalWidth );
	                bottom = top + ( height || totalHeight );
	                correctDirection = xThreshold && ( xThreshold < 0 && dx < xThreshold && angle > ( 180 - angleThreshold ) || xThreshold > 0 && dx > xThreshold && angle < angleThreshold ) ||
	                    yThreshold && angle < ( 90 + angleThreshold ) && angle > ( 80 - angleThreshold ) && ( yThreshold < 0 && dy < yThreshold || yThreshold > 0 && dy > yThreshold );
	                insideRegion = startX < right && startX > left && startY > top && startY < bottom;
	                if ( insideRegion && correctDirection ) {
	                    this.$element.trigger( event );
	                }
	            }
	        }
	    });

	    WebPro.SwipeTracker = SwipeTracker;

	    return SwipeTracker;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(3), __webpack_require__(35) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Utils, SwipePanelGroup ) {
	    SwipePanelGroup.nextPreviousPlugin = {
	        defaultOptions: {
	            previousLinkClass: 'wp-swipe-panel-group-previous-link',
	            nextLinkClass: 'wp-swipe-panel-group-next-link',
	            firstPanelClass: 'wp-first-panel-displayed',
	            lastPanelClass: 'wp-last-panel-displayed',
	            noPanelClass: 'wp-no-panel-displayed',
	            injectNextPreviousLinks: true,
	            nextPreviousLinkTriggerEvent: 'click'
	        },

	        initialize: function( widget, options ) {
	            var plugin = this;

	            // Extend the options with our defaults.

	            $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

	            if ( ! widget.nextPanel ) {
	                widget.nextPanel = function() {
	                      var numPanels = widget.$element.length,
	                          index = widget.activeIndex;
	                      if ( index < ( numPanels - 1 ) ) {
	                          widget.showPanel( index + 1 );
	                       }
	                    };
	            }

	            if ( ! widget.previousPanel ) {
	                widget.previousPanel = function() {
	                        var index = widget.activeIndex;
	                        if ( index > 0 ) {
	                            widget.showPanel( index - 1 );
	                        }
	                    };
	            }

	            if ( options.injectNextPreviousLinks ) {
	                widget.bind( 'transform-markup', function() {
	                        plugin._transformMarkup( widget );
	                    });

	                widget.bind( 'attach-behavior', function() {
	                        plugin._attachBehavior( widget );
	                    });

	                widget.bind( 'ready', function() {
	                        plugin._ready( widget );
	                    });

	                widget.bind( 'wp-panel-show wp-insert-panel wp-remove-panel', function( e, data ) {
	                        plugin._syncNavLinks( widget, data );
	                    });
	            }
	        },

	        _transformMarkup: function( widget ) {
	                var options = widget.options;

	                widget._npp$nextLink = $( '<a href="#" class="' + options.nextLinkClass + '">Next</a>' );
	                widget._npp$previousLink = $( '<a href="#" class="' + options.previousLinkClass + '">Previous</a>' );
	                widget.$clip

	                widget._npp$nextLink.appendTo( widget.$clip );
	                widget._npp$previousLink.appendTo( widget.$clip );
	        },

	        _syncNavLinks: function( widget ) {
	            var index = widget.activeIndex,
	                first = widget.options.firstPanelClass,
	                last = widget.options.lastPanelClass,
	                none = widget.options.noPanelClass;

	            widget.$clip.removeClass( first + ' ' + last + ' ' + none );

	            if ( widget.$element.length === 0 ) {
	                    widget.$clip.addClass( none );
	            } else {
	                if ( index === 0 ) {
	                    widget.$clip.addClass( first );
	                }

	                if ( index === widget.$element.length - 1 ) {
	                    widget.$clip.addClass( last );
	                }
	            }
	        },

	        _next: function( widget ) {
	            var index = widget.activeIndex;
	            if ( index < widget.$element.length - 1 ) {
	                widget.showPanel( index + 1 );
	            }
	        },

	        _previous: function( widget ) {
	            var index = widget.activeIndex;
	            if ( index > 0 ) {
	                widget.showPanel( index - 1 );
	            }
	        },

	        _attachBehavior: function( widget ) {
	            var plugin = this,
	                eventName = widget.options.nextPreviousLinkTriggerEvent || 'click';

	            widget._npp$previousLink.on( eventName, function( e ) {
	                    plugin._previous( widget );
	                    return false;
	                });

	            widget._npp$nextLink.on( eventName, function( e ) {
	                    plugin._next( widget );
	                    return false;
	                });
	        },

	        _ready: function( widget ) {
	            this._syncNavLinks( widget );
	        }
	    };

	    // dynamicPanelsPlugin
	    //
	    // A plugin for extending a panel group with functionality
	    // that allows for new panels to be dynamically inserted,
	    // moved, or removed.
	    //

	    SwipePanelGroup.dynamicPanelsPlugin = {
	        defaultOptions: {
	        },

	        initialize: function( widget, options ) {
	            var plugin = this;

	            // Extend the options with our defaults.

	            $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

	            // Add some utility methods to this widget that
	            // allows us to insert, re-order, or remove panels.

	            widget.insertPanelBefore = function( panel, reference ) {
	                    return plugin._insertPanelBefore( widget, panel, reference );
	                };

	            widget.movePanelBefore = function( panel, reference ) {
	                    return plugin._movePanelBefore( widget, panel, reference );
	                };

	            widget.removePanel = function( panel ) {
	                    return plugin._removePanel( widget, panel );
	                };

	            widget.bind( 'attach-behavior', function() {
	                    return plugin._attachBehavior( widget );
	                });
	        },

	        _attachBehavior: function( widget ) {
	            var plugin = this;

	            widget.bind( 'wp-panel-show', function( e, data ) {
	                    return plugin._deletePanel( widget );
	                });
	        },

	        _resetActiveTracking: function( widget, panel, reference ) {
	            // After we've inserted/removed a new panel, we
	            // need to reset the $element collection so
	            // that it contains our new panel.

	            var clip = widget.$clip[ 0 ],
	                opts = widget.options;

	            widget.$element = WebPro.scopedFind( clip, '.' + opts.panelClass, opts.widgetClass, clip );

	            // The index of the active element may have changed
	            // so update activeIndex.

	            widget.activeIndex = widget._getElementIndex( widget.activeElement );

	            // Set up the before and after panels just in case
	            // the panel we just inserted precedes or follows
	            // the active element.

	            widget._setUpBeforeAndAfterPanels();
	        },

	        _insertPanelBefore: function( widget, panel, reference ) {
	            var plugin = this,
	                $panel = $( panel );

	            widget.trigger( 'wp-before-insert-panel', { panel: panel, reference: reference } );

	            // If a reference panel was given, insert
	            // the new panel before it. Otherwise, insert
	            // the panel at the very end.

	            if ( reference ) {
	                $panel.insertBefore( $( reference ) );
	            } else {
	                $panel.appendTo( widget.$view );
	            }

	            // Once we've inserted our new panel, make sure we
	            // reset the widget's internal bookkeeping.

	            plugin._resetActiveTracking( widget );

	            widget.trigger( 'wp-insert-panel', { panel: panel, reference: reference } );
	        },

	        _movePanelBefore: function( widget, panel, reference ) {
	            // XXX: TBD
	        },

	        _removePanel: function( widget, panel ) {
	            var plugin = this;

	            // If there is a pending delete, remove it now before
	            // we attempt to delete another panel.

	            if ( widget._dppPanelToDelete ) {
	                // If there is an animation in progress and a pending
	                // panel to delete, it means we are transitioning from
	                // the pending panel to a different panel. We need to
	                // force any pending transition to complete so the
	                // activeElement/activeIndex for the widget is up-to-date
	                // and pointing to a panel other than the pending one.

	                if ( widget._animationInProgress ) {
	                    widget._handleTransitionEnd();
	                }

	                // Delete the pending panel.

	                plugin._deletePanel( widget );
	            }

	            panel = $( panel )[ 0 ];

	            var activeIndex = widget.activeIndex,
	                isActivePanel = ( panel && panel === widget.activeElement );
	                numPanels = widget.$element.length;

	            widget.trigger( 'wp-before-remove-panel', { panel: panel } );

	            widget._dppPanelToDelete = panel;

	            if ( isActivePanel && numPanels > 1 ) {
	                // The panel we are about to remove is the
	                // currently visible panel. Add a removed class
	                // to the panel element to initiate any removal
	                // animation it may have.

	                $( panel ).addClass( 'removed' );

	                // Transition to another panel. The
	                // actual removal will happen when the
	                // transition is complete.

	                widget.showPanel( activeIndex + ( activeIndex != ( widget.$element.length - 1 )  ? 1 : -1 ) );
	            } else {
	                // At this point, the panel is either not
	                // the active one, or it is active and it is
	                // also the last one in the group.

	                if ( isActivePanel ) {
	                    // The panel is the last one in the group and
	                    // it is active. Reset the activeIndex and
	                    // activeElement before calling _deletePanel()
	                    // so that we don't attempt to show it after
	                    // it is removed.

	                    widget.activeIndex = -1;
	                    widget.activeElement = null;
	                }

	                // The panel is not the currently active one,
	                // so go ahead and delete it now.

	                plugin._deletePanel( widget );
	            }
	        },

	        _deletePanel: function( widget ) {
	            var plugin = this,
	                panel = widget._dppPanelToDelete;

	            if ( panel ) {
	                $( panel ).remove();
	                plugin._resetActiveTracking( widget );
	                widget._dppPanelToDelete = null;
	                widget.trigger( 'wp-remove-panel', { panel: panel } );
	            }
	        }
	    };

	    // positionChangePlugin
	    //
	    // A plugin that adds drag start/stop and panel position
	    // change notifications to a SwipePanelGroup widget. Each
	    // position change notification contains a percentage that
	    // indicates how much of the previous/next panel is visible
	    // which is handy for implementing morphing color or image
	    // backgrounds.

	    SwipePanelGroup.positionChangePlugin = {
	        initialize: function( widget, options ) {
	            var plugin = this;

	            // We only initialize the plugin once for
	            // a given widget.

	            if ( widget._pcpInitialized ) {
	                return;
	            }

	            widget._pcpInitialized = true;
	            widget._pcpDragging = false;

	            // Listen for the attach-behavior notification
	            // from the widget so we know when to attach our
	            // plugin behaviors.

	            widget.bind( 'attach-behavior', function() {
	                    plugin._attachBehavior( widget );
	                });
	        },

	        _attachBehavior: function( widget ) {
	            // The 'this' variable in this method is the actual
	            // plugin. Use a variable called plugin throughout
	            // this method to avoid confusion with the 'this'
	            // variable in callback functions defined in this
	            // method, which in most cases will be a reference
	            // to some DOM node.

	            var plugin = this,
	                options = widget.options;

	            // Override the widget's _handleDragStart() method
	            // so we can tell when a drag has started.

	            var _handleDragStart = widget._handleDragStart;

	            widget._handleDragStart = function( dx, dy ) {
	                    widget.trigger( 'wp-panel-drag-start' );
	                    widget._pcpDragging = true;
	                    return _handleDragStart.apply( widget, arguments );
	                };

	            // Override the widget's _handleDragStop() method
	            // so we can tell when a drag has ended.

	            var _handleDragStop = widget._handleDragStop;

	            widget._handleDragStop = function( dx, dy ) {
	                    var result = _handleDragStop.apply( widget, arguments );
	                    widget._pcpDragging = false;
	                    widget.trigger( 'wp-panel-drag-stop' );
	                    return result;
	                };

	            // Override the widget's showPanel() method so
	            // we can tell when the current panel is changed
	            // programatically.

	            var _showPanel = widget.showPanel;

	            widget.showPanel = function( indexOrEle ) {
	                  var result = _showPanel.apply( widget, arguments );
	                  plugin._triggerPositionChange( widget, widget.activeIndex, widget._snapIndex, 1 );
	                  return result;
	                };

	            // Override the widget's _setViewPosition() method
	            // so we can update any background properties this
	            // plugin manages as the user drags their finger
	            // onscreen during the swipe.

	            var _setViewPosition = widget._setViewPosition;

	            widget._setViewPosition = function( position ) {
	                    // Call the original version of this method so that
	                    // it can do the actual view positioning.

	                    var result = _setViewPosition.apply( widget, arguments ),

	                        // Cache some values in a local variable
	                        // since we'll be referring to them several
	                        // times below.

	                        numPanels = widget.$element.length,
	                        lastIndex = numPanels - 1,

	                        // Cache the index of the active panel. The destIndex
	                        // will be the index of the panel the user is swiping
	                        // into view. Initially they are the same index to
	                        // indicate no swipe has happened yet.

	                        activeIndex = widget.activeIndex,
	                        destIndex = activeIndex,

	                        // The percentage variable represents the percentage
	                        // of the destination panel that is visible. Initially
	                        // the value is zero, which basically means the destination
	                        // panel is not visible at all, since the active panel
	                        // is fully visible.

	                        percentage = 0;

	                    // If position is non-zero, it means the user has initiated a swipe.
	                    // If we're not trying to swipe past the first/last panel, calculate
	                    // what the destination panel is and its percentage of visibility.

	                    if ( position && ( activeIndex || position < 0 ) && ( activeIndex != lastIndex || position > 0 ) ) {
	                        var length = widget._isHorizontal ? widget.$clip.width() : widget.$clip.height();

	                        // During a drag the _snapIndex is typically set to the
	                        // activeIndex. If they differ, this method may be getting
	                        // called after the user released their finger. Make sure
	                        // we set the destIndex to whatever we are going to snap to.
	                        // If activeIndex and _snapIndex are the same, calculate the
	                        // destIndex manually based on the direction of the specified
	                        // position.

	                        if ( activeIndex != widget._snapIndex ) {
	                            destIndex = widget._snapIndex;
	                        } else {
	                            destIndex = position < 0  ? activeIndex + 1 : activeIndex - 1;
	                        }

	                        // The percentage is calculated by simply getting the absolute
	                        // value of the active panels' position over the length of the
	                        // clip view, in the dimension the SwipePanelGroup travels.

	                        percentage = Math.abs( position ) / length;
	                    }

	                    // Now that we've calculated the destination panel and its
	                    // percentage, trigger a position-change notification so that
	                    // observers can apply any transitional behaviors.

	                    plugin._triggerPositionChange( widget, widget.activeIndex, destIndex, percentage );

	                    return result;
	                };
	        },

	        _triggerPositionChange: function( widget, activeIndex, destIndex, percentage ) {
	            widget.trigger( 'wp-panel-position-change', {
	                    widget: widget,
	                    activeIndex: activeIndex,
	                    destIndex: destIndex,
	                    percentage: percentage
	                });
	        }
	    };

	    // backgroundChangePlugin
	    //
	    // A plugin for animating color and image/element backgrounds behind
	    // a set of swipe panels. This plugin has a direct depenendency
	    // on the positionChangePlugin. This plugin will automatically
	    // invoke the positionChangePlugin directly so there is no
	    // need for including the positionChangePlugin directly in
	    // the widget's plugins list.
	    //
	    // COLOR CHANGES
	    //
	    // To animate background color changes, leave the background
	    // of the panels transparent. The plugin will by default search
	    // for a common parent for the panels, which by default is
	    // chosen by the constructor option parentSelector, which has
	    // a initialn value of '.wp-swipe-panel-group'. Users can override
	    // this value with their own filter selector, or can pass an
	    // element directly via the parentElement constructor option.
	    // This parent element will provide the color background for
	    // the panels.
	    //
	    // Next, place a @data-background-color attribute on each panel
	    // element to indicate what color to use for that panel. The format
	    // of the attribute can be either of the following:
	    //
	    //     <div data-background-color="rgba(255,0,255,1)">
	    //
	    //       - or -
	    //
	    //     <div data-background-color="255,0,255,1">
	    //
	    // If only a few of the panels in the group will have a unique
	    // color, you can specify a default color to use for all others
	    // on the common parent. When transitioning to a panel with no
	    // data-background-color attribute specified, the plugin will
	    // use any color value specified on the common parent as the
	    // value to transition to.
	    //
	    //
	    // IMAGE/ELEMENT CHANGES
	    //
	    // The plugin can be used to animate a fade in/out of an image
	    // or element as the panel transitions in and out of view. To
	    // specify what element to fade, specify an @data-background
	    // attribute on the panel element. The value of the attribute
	    // should be a CSS selector that uniquely identifies an element
	    // in the document.
	    //
	    //     <div data-background="#photo-background-1">
	    //
	    // Note that this means that the plugin can control the fade of
	    // an element that is completely outside of the panel. Most folks
	    // will use it to transition between image backgrounds of panels,
	    // hence the name of the attribute, but you can also use it to
	    // show/hide elements within a slideshow panel that may be beside
	    // the set of swipe panels.
	    //
	    //
	    // BACKGROUND IMAGE PANNING
	    //
	    // The plugin is capable of adjusting the position of a background
	    // image on the common parent. This is commonly used to provide a
	    // pan/parallax effect as the user swipes through the panels. To
	    // use this, simply make the background of all of the panels transparent
	    // and then place a background image on the common parent specified
	    // by the parentSelector or parentElement constructor options.
	    //
	    // Specify the position the background image should be in when
	    // each panel is shown by placing an @data-image-position attribute
	    // on each panel element. The value should be two comma separated
	    // numbers that represent the x and y value of the position.
	    //
	    //    <div data-image-position="50,100">
	    //
	    // Note that the number values values indicate pixels.
	    //

	    SwipePanelGroup.backgroundChangePlugin = {
	        defaultOptions: {
	            parentSelector: '.wp-swipe-panel-group',
	            parentElement: null
	        },

	        initialize: function( widget, options ) {
	            var plugin = this;

	            // Add our default options to the options
	            // object that was passed to us.

	            $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

	            // This plugin relies on the positionChangePlugin,
	            // so call its initialize method just in case it
	            // isn't in the widget's plugin list.

	            WebPro.Widget.SwipePanelGroup.positionChangePlugin.initialize( widget, options );

	            // Listen for the attach-behavior notification
	            // from the widget so we know when to attach our
	            // plugin behaviors.

	            widget.bind( 'attach-behavior', function() {
	                    plugin._attachBehavior( widget );
	                });
	        },

	        _attachBehavior: function( widget ) {
	            // The 'this' variable in this method is the actual
	            // plugin. Use a variable called plugin throughout
	            // this method to avoid confusion with the 'this'
	            // variable in callback functions defined in this
	            // method, which in most cases will be a reference
	            // to some DOM node.

	            var plugin = this,
	                options = widget.options;

	            // Find the ancestor element whose background
	            // color will be changed.

	            if ( options.parentElement ) {
	                widget._$bccpParent = $( options.parentElement );
	            } else {
	                widget._$bccpParent = widget.$element.closest( options.parentSelector );
	            }

	            // Now iterate over the panels of the widget, as well as the
	            // parent calculated above, and extract any background plugin
	            // specific attributes on the elements theselves.

	            widget.$element.add( widget._$bccpParent ).each( function() {
	                    var $this = $( this );

	                    // Look for background color morphing attributes.

	                    var rgba = $this.data( 'backgroundColor' );
	                    if ( rgba ) {
	                        $this.data( 'color-array', plugin._colorStringToRGBA( rgba ) );
	                    }

	                    // Look for background image/element position shifting attributes.

	                    var selector = $this.data( 'background' );
	                    if ( selector ) {
	                        $this.data( 'background', $( selector ) );
	                    }

	                    // Look for background image morphing attributes.

	                    var pos = $this.data( 'imagePosition' );
	                    if ( pos ) {
	                        $this.data( 'position-array', plugin._integerListToArray( pos ) );
	                    }
	                });

	            // Listen for the start of a drag so we can tell
	            // when a drag has started.

	            widget.bind( 'wp-panel-drag-start', function( e ) {
	                    widget._bccpLastDestIndex = widget.activeIndex;
	                });

	            // Listen for changes in the panel position.

	            widget.bind( 'wp-panel-position-change', function( e, data ) {
	                    plugin._handlePositionChange( data.widget, data.activeIndex, data.destIndex, data.percentage);
	                });
	        },

	        _handlePositionChange: function( widget, activeIndex, destIndex, percentage ) {
	            var numPanels = widget.$element.length,
	                lastIndex = numPanels - 1,
	                $active = widget.$element.eq( activeIndex ),
	                aColor = $active.data( 'color-array' ) || widget._$bccpParent.data( 'color-array' ),
	                aPosition = $active.data( 'position-array' );

	            // If activeIndex != destIndex, we are transitioning
	            // towards a different panel.

	            if ( activeIndex != destIndex ) {
	                var $dest = widget.$element.eq( destIndex ),
	                    dColor = $dest.data( 'color-array' ) || widget._$bccpParent.data( 'color-array' ),
	                    dPosition = $dest.data( 'position-array' );

	                // Morph between the active and dest panel background colors.

	                dColor = dColor || aColor || [ 0, 0, 0, 0 ];

	                if ( dColor ) {
	                    aColor = aColor || dColor || [ 0, 0, 0, 0 ];

	                    widget._$bccpParent.css( 'backgroundColor', 'rgba('
	                        + Math.round( aColor[ 0 ] + ( ( dColor[ 0 ] - aColor[ 0 ] ) * percentage ) ) + ','
	                        + Math.round( aColor[ 1 ] + ( ( dColor[ 1 ] - aColor[ 1 ] ) * percentage ) ) + ','
	                        + Math.round( aColor[ 2 ] + ( ( dColor[ 2 ] - aColor[ 2 ] ) * percentage ) ) + ','
	                        + Math.round( aColor[ 3 ] + ( ( dColor[ 3 ] - aColor[ 3 ] ) * percentage ) ) + ')');
	                }

	                // If the active and dest panels share an image background,
	                // apply any position shift that is specified.

	                if ( dPosition ) {
	                    widget._$bccpParent.css( 'backgroundPosition',
	                        Math.round( aPosition[ 0 ] + ( ( dPosition[ 0 ] - aPosition[ 0 ] ) * percentage ) ) + 'px '
	                        + Math.round( aPosition[ 1 ] + ( ( dPosition[ 1 ] - aPosition[ 1 ] ) * percentage ) ) + 'px' );
	                }

	                // If the active and/or destination panels have specified
	                // background elements, fade them in/out now.

	                this._setBackgroundOpacity( widget, destIndex, percentage );
	                this._setBackgroundOpacity( widget, activeIndex, 1 - percentage );

	                // If the user is dragging and has switched drag direction
	                // the destination panel we are manipulating may have changed.
	                // If this is the case, make sure the previous destination panel
	                // we were manipulating gets its background image hidden.

	                if ( widget._bccpDragging
	                        && activeIndex != widget._bccpLastDestIndex
	                        && destIndex != widget._bccpLastDestIndex ) {
	                    this._setBackgroundOpacity( widget, widget._bccpLastDestIndex, 0 );
	                }

	                widget._bccpLastDestIndex = destIndex;
	            } else {
	                // We're snapping back to the original active panel.
	                // If specified, morph the backgorund-color back to the active panels
	                // background color.

	                if ( aColor ) {
	                    widget._$bccpParent.css( 'backgroundColor', 'rgba('
	                        + aColor[ 0 ] + ','
	                        + aColor[ 1 ] + ','
	                        + aColor[ 2 ] + ','
	                        + aColor[ 3 ] + ')');
	                }

	                // If specified, reset the position of the shared background image
	                // to where the active panel thinks it should be.

	                if ( aPosition ) {
	                    widget._$bccpParent.css( 'backgroundPosition', aPosition[ 0 ] + 'px ' + aPosition[ 1 ] + 'px' );
	                }

	                // If we're snapping back to the active panel, make sure
	                // its background image/element is fully visible.

	                this._setBackgroundOpacity( widget, activeIndex, 1 );

	                // Make sure any destination panel we were previously
	                // managing gets hidden.

	                if ( widget._bccpDragging && activeIndex != widget._bccpLastDestIndex ) {
	                    this._setBackgroundOpacity( widget, widget._bccpLastDestIndex, 0 );
	                }

	                widget._bccpLastDestIndex = activeIndex;
	            }
	        },

	        // Check if the panel at the given index has an associated
	        // background image/element. If so, set its opacity to the
	        // value specified.

	        _setBackgroundOpacity: function( widget, index, opacity ) {
	            var $ele = widget.$element.eq( index ),
	                $bgEle = $ele.data( 'background' );

	            if ( $bgEle ) {
	                $bgEle.css( 'opacity', opacity );
	            }
	        },

	        // Turn a string of comma separated integers
	        // into an array of numbers.

	        _integerListToArray: function( str ) {
	            var arr = [];
	            if ( str ) {
	                arr = str.split( /\s*,\s*/g );
	                for ( var i = 0; i < arr.length; i++ ) {
	                    arr[ i ] = parseInt( arr[ i ], 10 );
	                }
	            }
	            return arr;
	        },

	        // Turn a string of RGBA values into an array
	        // of color components.

	        _colorStringToRGBA: function( str ) {
	            // XXX: Note this isn't a very robust color string
	            //      conversion. It currently only supports
	            //      'rgba(r,g,b,a)' and 'r,g,b,a' formatted strings.

	            return this._integerListToArray( ( str || '0,0,0,0' ).replace(/rgba?\(|\s+|\)/g, '') );
	        }
	    };

	    // parallaxBackgroundPlugin
	    //
	    // A plugin that loads a background image, and resizes it so
	    // that each panel within the swipe panel group causes the
	    // background image to shift horizontally by an even amount.

	    SwipePanelGroup.parallaxBackgroundPlugin = {
	        defaultOptions: {
	            backgroundClass: 'parallax-background',
	            backgroundElement: null,
	            minParallaxShift: 50 // pixels
	        },

	        initialize: function( widget, options ) {
	            var plugin = this;

	            // Add our default options to the options
	            // object that was passed to us.

	            $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

	            // This plugin relies on the positionChangePlugin,
	            // so call its initialize method just in case it
	            // isn't in the widget's plugin list.

	            WebPro.Widget.SwipePanelGroup.positionChangePlugin.initialize( widget, options );

	            // Listen for the attach-behavior notification
	            // from the widget so we know when to attach our
	            // plugin behaviors.

	            widget.bind( 'attach-behavior', function() {
	                    plugin._attachBehavior( widget );
	                });
	        },

	        _attachBehavior: function( widget ) {
	            var plugin = this,
	                options = widget.options,
	                data = {
	                        $background: null,
	                        $image: null,
	                        imageWidth: 0,
	                        imageHeight: 0,
	                        scale: 1,
	                        x: 0,
	                        y: 0
	                    };

	            widget._pbpData = data;

	            // Find the container for the parallax background image.

	            if ( options.backgroundElement ) {
	                widget._pbp$bkgEle = $( options.backgroundElement );
	            } else {
	                widget._pbp$bkgEle = widget.$element.find( '.' + options.backgroundClass );
	            }

	            var $bg = widget._pbp$bkgEle,
	                url = $bg.data( 'src' ),
	                loader = new Image();

	            data.$background = $bg;

	            loader.onload = function() {
	                    data.$image = $( '<img src="' + url + '">' );
	                    data.imageWidth = loader.width;
	                    data.imageHeight = loader.height;

	                    $bg.append( data.$image );

	                    plugin._syncBackground( widget );
	                };

	            loader.src = url;

	            widget.bind( 'wp-panel-position-change', function( e, data ) {
	                    plugin._handlePositionChange( data.widget, data.activeIndex, data.destIndex, data.percentage);
	                });

	                widget.syncParallaxBackground = function() {
	                        plugin._syncBackground( widget );
	                    };
	        },

	        _handlePositionChange: function( widget, activeIndex, destIndex, percentage ) {
	            var data = widget._pbpData,
	                numPanels = widget.$element.length,
	                lastIndex = numPanels - 1;

	            // If activeIndex != destIndex, we are transitioning
	            // towards a different panel.

	            var w = data.width - data.viewWidth,
	                incr = w / ( numPanels - 1 );

	            if ( activeIndex != destIndex ) {

	                if ( activeIndex < destIndex ) {
	                    data.x = -( ( incr * activeIndex ) + ( incr * percentage ) );
	                } else {
	                    data.x = -( ( incr * destIndex ) + ( incr * ( 1 - percentage ) ) );
	                }
	            } else {
	                data.x = -( incr * activeIndex );
	            }

	            WebPro.setElementTransform( data.$image, 'translate3d(' + Math.round( data.x ) + 'px,' + Math.round( data.y ) + 'px,0) scale(' + data.scale + ')' );
	        },

	        _syncBackground: function( widget ) {
	            var plugin = this,
	                data = widget._pbpData,
	                w = data.imageWidth,
	                h = data.imageHeight,
	                $bg = data.$background,
	                vw = $bg[ 0 ].offsetWidth,
	                vh = $bg[ 0 ].offsetHeight,
	                ratio = Math.max( vw / w, vh / h ),
	                sw = Math.round( w * ratio ),
	                sh = Math.round( h * ratio ),
	                panelCount = widget.$element.length,
	                minDelta = widget.options.minParallaxShift * ( panelCount || 1 ) - 1,
	                delta = sw - vw;

	            if ( delta < minDelta ) {
	                ratio *= ( vw + minDelta ) / sw;
	            }

	            sw = Math.round( w * ratio );
	            sh = Math.round( h * ratio );

	            data.x = 0;
	            data.y = Math.round( -( sh - vh ) / 2 );
	            data.width = sw;
	            data.height = sh;
	            data.viewWidth = vw;
	            data.viewHeight = vh;
	            data.scale = ratio;

	            plugin._handlePositionChange( widget, widget.activeIndex, widget.activeIndex, 1 );
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(3), __webpack_require__(6), __webpack_require__(17), __webpack_require__(11), __webpack_require__(36), __webpack_require__(15) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Utils, Widget, DragTrackerDelegate, PanelGroup, Animator, Vmouse ) {
	    var SwipePanelGroupDragTracker = function( element, options ) {
	        options = $.extend( {}, SwipePanelGroupDragTracker.prototype.defaultOptions, options );

	        DragTrackerDelegate.call( this, element, options );
	    };

	    Utils.inherit( SwipePanelGroupDragTracker, DragTrackerDelegate );

	    $.extend( SwipePanelGroupDragTracker.prototype, {
	        defaultOptions: $.extend( {}, DragTrackerDelegate.prototype.defaultOptions, {
	            angleThreshold: 30,     // angle less than or equal to 90 degrees
	            direction: 'horizontal' // horizontal || vertical
	        }),

	        _startDrag: function( e, position ) {
	            this._isNativeScroller = $( e.target ).closest( '.scrollable' ).length != 0;

	            // The default implementation of _startDrag() always
	            // returns false to the caller which results in the
	            // event getting preventDefault() and stopPropagation()
	            // getting called on it. We don't want to do this all
	            // the time because it breaks native scroll regions.

	            SwipePanelGroupDragTracker.prototype._super.prototype._startDrag.call( this, e, position );

	            // XXX: Note that returning false here has some implications!
	            //      Specifically, it prevents click events from being dispatched
	            //      on WebKit based platforms. This breaks link clicking and
	            //      form input behaviors. To avoid this, we have to allow the
	            //      default behavior and propagation to occur and conditionally
	            //      do a preventDefault() in the _stopDrag() method based on value
	            //      of this.dragStarted.
	            //
	            // return this._isNativeScroller;
	        },

	        _handleDrag: function( e, position ) {
	            // The default implementation of _handleDrag() always returns
	            // false to the caller which breaks native scroll regions. What
	            // we really want to do, is prevent scrolling until we can figure
	            // out if this is a drag we want to actually deal with.

	            var dx = position.x - this.startX,
	                dy = position.y - this.startY,
	                o = this.options;

	            if ( !this.dragStarted ) {
	                // If a drag hasn't been started yet, check to see if we've
	                // exceeded the drag threshold. If so, then check to see if
	                // the angle of the drag is within the angle of tolerance from
	                // the axis (horizontal or vertical) we are dragging along.

	                var aDX = Math.abs( dx ),
	                    aDY = Math.abs( dy );

	                if ( aDX >= o.dragThreshold || aDY >= o.dragThreshold ) {
	                    var angle = 360,
	                        isHorizontal = o.direction === 'horizontal',
	                        rise = isHorizontal ? aDY : aDX,
	                        run =  isHorizontal ? aDX : aDY;

	                    if ( run > 0 ) {
	                        angle =  Math.abs( Math.atan( rise / run ) ) * ( 180 / Math.PI );
	                    }

	                    if ( angle > o.angleThreshold ) {
	                        // The drag exceeds our angle threshold. If the
	                        // drag started in a native scrolling view, un-register
	                        // our handlers so the scrolling view can take over handling
	                        // of the drag events.

	                        if ( this._isNativeScroller ) {
	                            this._stopTracking();
	                        }

	                        // If the drag wasn't started in a native scrolling view,
	                        // we need to return false so that the current panel
	                        // eats this event to prevent the browser from natively
	                        // scrolling the browser viewport.

	                        return this._isNativeScroller;
	                    }
	                }
	            }

	            var result = SwipePanelGroupDragTracker.prototype._super.prototype._handleDrag.call( this, e, position );

	            // If a drag was not started, we want to make
	            // sure we return a non-false value so that
	            // mouse events will be triggered properly
	            // should the user lift his/her finger without
	            // actually dragging.

	            return !this.dragStarted ? true : result;
	        },

	        _stopDrag: function( e, position ) {
	            var result = SwipePanelGroupDragTracker.prototype._super.prototype._stopDrag.call( this, e, position );

	            // If a drag was not started, we want to make
	            // sure we return a non-false value so that
	            // we allow the event to bubble up and trigger
	            // any default behaviors such as generating mouse
	            // events.

	            return !this.dragStarted ? true : result;
	        },

	        getDirection: function() {
	            return this.options.direction;
	        }
	    });

	    var SwipePanelGroup = Widget.build( 'Widget.SwipePanelGroup', PanelGroup, {
	        _widgetName: 'swipe-panel-group',

	        defaultOptions: {
	                defaultIndex:  0,
	                direction:     'horizontal', // 'horizontal' || 'vertical'
	                snapThreshold: 0,
	                duration:      200, // msecs
	                animateWithJS: false,
	                animationEnabled: true,
	                swipeEnabled:  true,
	                easing:        'ease-out',
	                animateClass:  'wp-animate',
	                widgetClass:   'wp-swipe-panel-group',
	                viewClass:     'wp-swipe-panel-group-view',
	                panelClass:    'wp-swipe-panel-group-panel',
	                previousClass: 'wp-previous',
	                nextClass:     'wp-next',
	                allowDelegation: true,
	                delegateElement: null,
	                trackEvents: [ 'mouse', 'touch', 'pen' ]
	            },

	        _setUp: function( element, options ) {
	            var options = $.extend( {}, this.defaultOptions, options );

	            // The first arg of the PanelGroup widget is actually a selector or collection
	            // of panel elements. In our case, our first arg is actually the top-level element
	            // of the widget which serves as the clip.

	            this.$clip = $( element );

	            // Find the panels for our widget and then pass them on to our base class constructor.

	            var clip = this.$clip[ 0 ],
	                $panels = Utils.scopedFind( clip, '.' + options.panelClass, options.widgetClass, clip );

	            // Find the view class we'll use to move the panels around on screen.

	            this.$view = Utils.scopedFind( clip, '.' + options.viewClass, options.widgetClass, clip );

	            this._blockShowPanel = true;

	            return SwipePanelGroup.prototype._super.prototype._setUp.call( this, $panels, options );
	        },

	        _attachBehavior: function() {
	            SwipePanelGroup.prototype._super.prototype._attachBehavior.apply( this, arguments );

	            var widget = this;

	            this._blockShowPanel = false;
	            this._position = 0;
	            this._startPosition = 0;
	            this._snapPosition = 0;
	            this._lastDelta = 0;
	            this._tracker = new SwipePanelGroupDragTracker( this.$clip[ 0 ], {
	                    direction: this.options.direction,
	                    trackEvents: this.options.trackEvents,
	                    delegateElement: this.options.delegateElement,
	                    dragStart: function( dt, dx, dy ) {
	                            return widget._handleDragStart( dx, dy );
	                        },
	                    dragUpdate: function( dt, dx, dy ) {
	                            return widget._handleDragUpdate( dx, dy );
	                        },
	                    dragStop: function( dt, dx, dy ) {
	                            return widget._handleDragStop( dx, dy );
	                        }
	                });
	            this._isHorizontal = this.options.direction !== 'vertical';

	            this._animationInProgress = false;
	            this._animator = null;
	            this._animationCompleteCB = function( e ) {
	                    // Block any transition events that bubble up from
	                    // any children. We're only interested on transition
	                    // events that are the direct result of us animating
	                    // the view element.

	                    if ( e && e.target && e.target != widget.$view[ 0 ] ) {
	                        return;
	                    }

	                    return widget._handleTransitionEnd();
	                };

	            if ( this.options.animateWithJS ) {
	                this._animStartPos = 0;
	                this._animDistance = 0;
	                this._animator = new Animator(
	                    function( easingConst ) {
	                        widget._setViewPosition( widget._animStartPos + ( ( widget._animDistance * easingConst ) ) );
	                    },
	                    {
	                        easing: this.options.easing,
	                        duration: this.options.duration,
	                        complete: this._animationCompleteCB
	                    }
	                );
	            } else {
	                this.$view.on( 'webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend', this._animationCompleteCB );
	            }
	        },

	        _ready: function() {
	            this._postShowPanel( this.options.defaultIndex );
	        },

	        _setUpBeforeAndAfterPanels: function() {
	            var options = this.options,
	                $clip = this.$clip,
	                $panels = this.$element,
	                curIndex = this.activeIndex,
	                $beforeEle = $(),
	                $currentEle = $(),
	                $afterEle = $();

	            if ( curIndex >= 0 ) {
	                $currentEle = $panels.eq( curIndex );

	                if ( curIndex > 0 ) {
	                    $beforeEle = $panels.eq( curIndex - 1 );
	                }

	                if ( curIndex < $panels.length ) {
	                    $afterEle = $panels.eq( curIndex + 1 );
	                }
	            }

	            // Remove the animate class so that transitions aren't used
	            // when we reposition the next set of panels.

	            this.$clip.removeClass( options.animateClass );

	            // Hide the old set of views that were visible.

	            var queuedClasses = options.activeClass
	                    + ' ' + options.previousClass
	                    + ' ' + options.nextClass,
	                $prevQueued = $panels.filter(
	                    '.' + options.activeClass
	                    + ', .' + options.previousClass
	                    + ', .' + options.nextClass);

	            $prevQueued.removeClass( queuedClasses );

	            // Reset the position of the view so that it is at zero.

	            this._setViewPosition( 0 );

	            // Make the active panel and the panels before and
	            // after it, visible.

	            $beforeEle.addClass( options.previousClass );
	            $currentEle.addClass( options.activeClass );
	            $afterEle.addClass( options.nextClass );

	            // Trigger a notification any time a panel goes from
	            // queued to dequeued.

	            $prevQueued = $prevQueued.filter(function( index ) {
	                    var $ele = $( this );
	                    return !$ele.hasClass( options.activeClass )
	                        && !$ele.hasClass( options.previousClass )
	                        && !$ele.hasClass( options.nextClass );
	                });

	            if ( $prevQueued.length != 0 ) {
	                this.trigger( 'wp-panels-dequeued', {
	                        dequeued: $prevQueued
	                    });
	            }

	            // Trigger a notification any time the panel group queues
	            // up before and after panels so they can get a chance to
	            // initialize themselves.

	            this.trigger( 'wp-panels-queued', {
	                before: $beforeEle,
	                after: $afterEle,
	                active: $currentEle,
	                queued: $beforeEle.add( $afterEle )
	            });

	        },

	        _setElementPosition: function( ele, position, options ) {
	            var x = this._isHorizontal ? position : 0,
	                y = this._isHorizontal ? 0 : position,
	                opts = $.extend( { unit: 'px' }, options );

	            Utils.setElementTransform( ele, 'translate3d(' + x + opts.unit + ',' + y + opts.unit + ',0)');
	        },

	        _setViewPosition: function( position, options ) {
	            this._position = position;
	            this._setElementPosition( this.$view, position, options );
	        },

	        _updateSnapPosition: function( delta ) {
	            var length = this._isHorizontal ? this.$clip.width() : this.$clip.height(),
	                lastDelta = this._lastDelta;

	            // Adjust the snap position if the user continues
	            // to drag in the same direction as the lastDelta.
	            // Note that if the delta is identical to the lastDelta,
	            // we don't adjust the snap position at all.

	            if ( Math.abs( delta ) < this.options.snapThreshold ) {
	                // If the delta is smaller than our threshold,
	                // then we want to snap back to the current
	                // panel.

	                this._snapPosition = 0;
	            } else if ( lastDelta <= 0 && delta < lastDelta ) {
	                // If our lastDelta is less than zero and
	                // the current delta is less than lastDelta
	                // then we are still moving towards the next
	                // panel.

	                this._snapPosition = -length;
	            } else if ( lastDelta >= 0 && delta > lastDelta ) {
	                // If our lastDelta is greater than zero and
	                // the current delta is greater than lastDelta
	                // then we are still moving towards the previous
	                // panel.

	                this._snapPosition = length;
	            } else if ( delta != lastDelta ) {
	                // The current delta isn't the same as the
	                // the lastDelta, so the user must have changed
	                // swipe/drag direction, so snap back to the.
	                // current panel.

	                this._snapPosition = 0;
	            }

	            // If the user is trying to swipe past the first or last panel
	            // make sure we snap back.

	            var panelIndex = this.activeIndex;
	            if ( ( panelIndex === 0 && this._snapPosition > 0 )
	                    || ( ( panelIndex + 1 ) === this.$element.length && this._snapPosition < 0 ) ) {
	                this._snapPosition = 0;
	            }
	        },

	        _postShowPanel: function( indexOrEle ) {
	            // Call the base class showPanel() method so the
	            // activeIndex and activeElement get updated.

	            SwipePanelGroup.prototype._super.prototype.showPanel.apply( this, arguments );

	            // Make sure the panels before and after the
	            // activeElement are in place.

	            this._setUpBeforeAndAfterPanels();
	        },

	        showPanel: function( indexOrEle ) {
	            if ( this._blockShowPanel ) {
	                return;
	            }

	            if ( typeof indexOrEle != 'number' ) {
	                indexOrEle = this._getElementIndex( indexOrEle );
	            }

	            if ( indexOrEle > -1 && indexOrEle !== this.activeIndex ) {
	                var length = this._isHorizontal ? this.$clip.width() : this.$clip.height(),
	                    swipeLeft = indexOrEle > this.activeIndex,
	                    position = swipeLeft ? -length : length,
	                    className = swipeLeft ? this.options.nextClass : this.options.previousClass;
	    ;
	                this._snapIndex = indexOrEle;

	                this.$element.removeClass( className );
	                $( this._getElement( indexOrEle) ).addClass( className );

	                if ( this.options.animationEnabled ) {
	                    this._animatePanels( position );
	                } else {
	                    this._handleTransitionEnd();
	                }
	            }
	        },

	        _handleTransitionEnd: function() {
	            this._postShowPanel( this._snapIndex );
	            this._animationInProgress = false;
	        },

	        _handleDragStart: function( dx, dy ) {
	            if ( !this.options.swipeEnabled ) {
	                return;
	            }

	            if ( this._animationInProgress ) {
	                if ( this.options.animateWithJS ) {
	                    this._animator.stop();
	                }

	                this._handleTransitionEnd();
	            }

	            this.$clip.removeClass( this.options.animateClass );
	            this._lastDelta = 0;
	            this._startPosition = this._position;
	            this._snapPosition = 0;
	            this._snapIndex = this.activeIndex;
	            this._handleDragUpdate( dx, dy );
	        },

	        _handleDragUpdate: function( dx, dy ) {
	            if ( !this.options.swipeEnabled ) {
	                return;
	            }

	            var delta = this._isHorizontal ? dx : dy,
	                currentPanelIndex = this.activeIndex;

	            // If the user is trying to swipe before the first panel,
	            // or after the last panel compress the distance by 60%.

	            if ( ( currentPanelIndex === 0 && delta > 0 ) || ( ( currentPanelIndex + 1 ) >= this.$element.length && delta < 0 ) ) {
	                // At this point we know we want to attempt to delegate the
	                // current drag, but we're not sure if any ancestor can take
	                // over. We need to temporarily zero out the snap position
	                // to make sure we stay on the current panel if the drag
	                // is actually delegated.

	                var snap = this._snapPosition;
	                this._snapPosition = 0;

	                if ( this.options.allowDelegation && this._tracker.delegateDrag() ) {
	                    // Some other tracker took over the drag so
	                    // make sure we dispatch a stop.

	                    //this._handleDragStop( dx, dy );
	                    this._animationInProgress = false;
	                    return;
	                }

	                // The delegate failed, so restore the snap position.

	                this._snapPosition = snap;

	                // We're going to overshoot our bounds, so compress
	                // the the distance.

	                delta *= .4;
	            }

	            this._tracker.blockDelegates();

	            this._updateSnapPosition( delta );
	            this._setViewPosition( this._startPosition + delta );

	            this._lastDelta = delta;
	        },

	        _animatePanels: function( position ) {
	            var startPosition = this._position;

	            this._animationInProgress = true;

	            if ( this.options.animateWithJS ) {
	                this._animator.stop();
	                this._animStartPos = this._position;
	                this._animDistance = position - this._position;
	                this._animator.start();
	            } else {
	                this.$clip.addClass( this.options.animateClass );
	                this._setViewPosition( position );
	            }
	        },

	        enableAnimation: function() {
	            this.options.animationEnabled = true;
	        },

	        disableAnimation: function() {
	            this.options.animationEnabled = false;
	        },

	        enableSwipe: function() {
	            this.options.swipeEnabled = true;
	        },

	        disableSwipe: function() {
	            this.options.swipeEnabled = false;
	        },

	        _handleDragStop: function( dx, dy ) {
	            if ( !this.options.swipeEnabled ) {
	                return;
	            }

	            this._snapIndex = this.activeIndex;

	            if ( this._snapPosition > 0 ) {
	                --this._snapIndex;
	            } else if ( this._snapPosition < 0 ) {
	                ++this._snapIndex;
	            }

	            this._animatePanels( this._snapPosition );
	        },
	    });

	    Widget.addWidgetConstructorAsjQueryPlugin( 'wpSwipePanelGroup', SwipePanelGroup );

	    return SwipePanelGroup;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(4), __webpack_require__(3) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, WebPro, Utils ) {
	    // A component class for triggering functionality at an interpolated interval.

	    var Animator = function( callback, options ) {
	          this.options = $.extend( {}, Animator.prototype.defaultOptions, options );
	          this._startTime = 0;
	          this._timer = 0;
	          this._callback = callback;
	          this._running = false;

	          if ( this.options.easingFunc ) {
	                this._easingFunc = this.options.easingFunc;
	          } else {
	                var easing = this.options.easing || 'linear';
	                this._easingFunc = this.easings[ easing ] || this.easings[ 'linear' ];
	          }

	          var animator = this;
	          this._updateCallback = function() {
	                      animator._handleUpdate();
	                };
	    };

	    $.extend( Animator.prototype, {
	        defaultOptions: {
	            useSetTimeout: false,
	            interval: 1000 / 60, // FPS
	            duration: 1000,
	            easing: 'linear',
	            easingFunc: null
	        },

	        easings: {
	            linear: function( x, t, b, c, d ) {
	                return b + ( ( c - b ) * t / d );
	            },
	            'ease-in': function( x, t, b, c, d ) {
	                return c * ( ( t = t / d -1  ) * t * t + 1 ) + b;
	            },
	            'ease-out': function( x, t, b, c, d ) {
	                return c * ( t /= d ) * t * t + b;
	            }
	        },

	        start: function() {
	            if ( !this._running ) {
	                $( this ).trigger( 'animator-start' );
	                this._startTime = ( new Date() ).getTime();
	                this._handleUpdate();
	            }
	        },

	        stop: function() {
	            this._running = false;

	            if ( this._timer ) {
	                if ( this.options.useSetTimeout ) {
	                    clearTimeout( this._timer );
	                } else {
	                    cancelAnimationFrame( this._timer );
	                }

	                this._timer = 0;
	                $( this ).trigger( 'animator-stop' );
	            }
	        },

	        _handleUpdate: function() {
	            var startTime = this._startTime,
	            elapsed = ( new Date() ).getTime() - startTime,
	            duration = this.options.duration;

	            elapsed = elapsed > duration ? duration : elapsed;

	            var interpolationConstant = this._easingFunc( 0, elapsed, 0, 1, duration );

	            $( this ).trigger( 'animator-update', { interpolationConstant: interpolationConstant } );

	            if ( this._callback ) {
	                this._callback( interpolationConstant );
	            }

	            if ( elapsed === duration ) {
	                if ( this.options.complete ) {
	                    this.options.complete();
	                }
	                $( this ).trigger( 'animator-complete' );
	                this.stop();
	            } else {
	                if ( this.options.useSetTimeout ) {
	                    this._timer = setTimeout( this._updateCallback, this.options.interval );
	                } else {
	                    this._timer = requestAnimationFrame( this._updateCallback );
	                }
	            }
	        }
	    });

	    WebPro.Animator = Animator;

	    return Animator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(15) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $ ) {
	    $.event.special.vtaphold = {
	        duration: 1000,
	        moveThreshold: 10,
	        setup: function() {
	            var $ele = $( this );
	            var $target = $();
	            var $doc = $( document );
	            var duration = $.event.special.vtaphold.duration;
	            var threshold = $.event.special.vtaphold.moveThreshold;
	            var tapHoldEvent = $.Event( 'vtaphold' );
	            var startX = 0;
	            var startY = 0;
	            var timer = 0;

	            // We need to track any mouse/touch movements that happen
	            // after we initiate out taphold timer. If the user moves
	            // beyond our specified threshold, we cancel the taphold
	            // timer so it never fires.

	            var dragHandler = function( e ) {
	                        if ( Math.abs( e.pageX - startX ) > threshold || Math.abs( e.pageY - startY ) > threshold ) {
	                            removeCancelHandlers();
	                        }
	                    };

	            // After the taphold timer fires or is cancelled,
	            // we need to remove any handlers we used to track
	            // the users mouse/touch state and reset the timer.

	            var removeCancelHandlers = function() {
	                        if ( timer ) {
	                            clearTimeout( timer );
	                            timer = 0;
	                        }

	                        $doc
	                            .off( 'vmousemove', dragHandler )
	                            .off( 'vmouseup', removeCancelHandlers );

	                        $ele.data( 'vtapholdSource', false );
	                    };

	            // When the timer fires, we want to remove any handlers
	            // we installed when the timer was started, and then
	            // fire off our virtual taphold event.

	            var timerCallback = function() {
	                    removeCancelHandlers();
	                    $target.trigger( tapHoldEvent );
	                };

	            // We register a vmousedown callback on the element
	            // specified so we know when to start our taphold
	            // timer and register any handlers.

	            $ele.bind( 'vmousedown', function( e ) {
	                    removeCancelHandlers();

	                    startX = e.pageX;
	                    startY = e.pageY;

	                    $target = $( e.target );

	                    // set the taphold event's properties to that of the mouse down event
	                    $.extend( tapHoldEvent, e );
	                    tapHoldEvent.type = 'vtaphold';

	                    var child = e.target;

	                    // Prevent multiple vtaphold listeners in the same ancestor
	                    // chain from all tracking the same event.  Only let the
	                    // deepest child handle it.
	                    while ( child && child != $ele[ 0 ] ){
	                        if ( $( child ).data( 'vtapholdSource' ) == true ){
	                            return;
	                        }
	                        child = child.parentNode;
	                    }

	                    $ele.data( 'vtapholdSource', true );

	                    $doc
	                        .on( 'vmousemove', dragHandler )
	                        .on( 'vmouseup', removeCancelHandlers );

	                    timer = setTimeout( timerCallback, duration );
	                });
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(3), __webpack_require__(6), __webpack_require__(8), __webpack_require__(24) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Utils, Widget, Color, Slider2d ) {
	    // CanvasOverlaySlider2d
	    //
	    // A specialized slider that injects a canvas into
	    // the track element of the slider and manages its
	    // sizing as the sliders dimensions grow/shrink.

	    var CanvasOverlaySlider2d = function( element, options ) {
	        Slider2d.call( this, element, options );
	    };

	    Utils.inherit( CanvasOverlaySlider2d, Slider2d );

	    $.extend( CanvasOverlaySlider2d.prototype, {
	        _transformMarkup: function() {
	            CanvasOverlaySlider2d.prototype._super.prototype._transformMarkup.apply( this, arguments );

	            this.$canvasOverlay = this.$element.find( '.canvas-overlay' );
	            this.$canvas = $( '<canvas></canvas>' );
	            this.$canvas.appendTo( this.$canvasOverlay );
	        },

	        _resetConstraints: function() {
	            CanvasOverlaySlider2d.prototype._super.prototype._resetConstraints.apply( this, arguments );

	            var overlay = this.$canvasOverlay,
	                canvas = this.$canvas[ 0 ],
	                width = overlay.innerWidth(),
	                height = overlay.innerHeight();

	            // Force the canvas to be as large as its container.

	            canvas.width = width > 0 ? width : 0;
	            canvas.height = height > 0 ? height : 0;

	            this.render();
	        },

	        render: function() {
	            // Provided by the derived class.
	        }
	    });

	    // Hue Slider
	    //
	    // A slider with the complete hue spectrum
	    // drawn inside of the slider track.

	    var HueSlider = function( element, options ) {
	        CanvasOverlaySlider2d.apply( this, arguments );
	    };

	    Utils.inherit( HueSlider, CanvasOverlaySlider2d );

	    $.extend( HueSlider.prototype, {
	        render: function() {
	            var canvas = this.$canvas[ 0 ],
	                gc = canvas.getContext( '2d' ),
	                width = canvas.width,
	                height = canvas.height,
	                isVertical = this.options.hueSliderDirection === 'vertical',
	                totalLoops = isVertical ? height : width;
	                angleIncr = 360 / totalLoops,
	                angle = 360;

	            for ( var i = 0; i < totalLoops; i++ ) {
	                gc.save();
	                gc.beginPath();
	                if ( isVertical ) {
	                  gc.moveTo( 0, i );
	                  gc.lineTo( width, i );
	                } else {
	                  gc.moveTo( i, 0 );
	                  gc.lineTo( i, height );
	                }
	                gc.strokeStyle = 'hsl(' + angle + ',100%,50%)';
	                gc.stroke();
	                gc.restore();
	                angle -= angleIncr;
	            }
	        }
	    });

	    // AlphaSlider
	    //
	    // A slider that displays a gradient that goes from
	    // zero to full opacity of a specific color in the
	    // slider track.

	    var AlphaSlider = function( element, options ) {
	        options = $.extend( {}, this.defaultOptions, options );

	        this._color = new Color( options.color );

	        CanvasOverlaySlider2d.apply( this, arguments );
	    };

	    Utils.inherit( AlphaSlider, CanvasOverlaySlider2d );

	    $.extend( AlphaSlider.prototype, {
	        defaultOptions: {
	            color: 'black'
	        },

	        render: function() {
	            var canvas = this.$canvas[ 0 ],
	                gc = canvas.getContext( '2d' ),
	                width = canvas.width,
	                height = canvas.height,
	                isVertical = this.options.hueSliderDirection === 'vertical',
	                gradient = gc.createLinearGradient( 0, 0, isVertical ? 0 : width, isVertical ? height : 0 );

	            var transparentRGB = this._color.getRGB();

	            transparentRGB.a = 0;
	            gradient.addColorStop( 0, ( new Color( transparentRGB ) ).getRGBString() );
	            gradient.addColorStop( 1, this._color.getRGBString() );

	            gc.clearRect( 0, 0, width, height );
	            gc.fillStyle = gradient;
	            gc.fillRect( 0, 0, width, height );
	        },

	        setColor: function( color ) {
	            this._color.setValue( color );
	            this.render();
	        }
	    });

	    var ColorPicker = Widget.build( 'Widget.HSBColorPicker', Widget, {
	        _widgetName: 'hsbcolorpicker',

	        defaultOptions: {
	            saturationClass: 'wp-colorpicker-saturation',
	            saturationViewClass: 'wp-colorpicker-saturation-view',
	            saturationThumbClass: 'wp-colorpicker-saturation-thumb',

	            hueClass: 'wp-colorpicker-hue',
	            hueViewClass: 'wp-colorpicker-hue-view',
	            hueThumbClass: 'wp-colorpicker-hue-thumb',

	            opacityClass: 'wp-colorpicker-opacity',
	            opacityViewClass: 'wp-colorpicker-opacity-view',
	            opacityThumbClass: 'wp-colorpicker-opacity-thumb',

	            hueSliderDirection: 'vertical',
	            alphaSliderDirection: 'horizontal'
	        },

	        _setValue: function( h, s, b, a ) {
	            if ( !this._blockSetValue ) {
	                this._hue = h;
	                this._saturation = s;
	                this._brightness = b;
	                this._alpha = a;

	                // Set our internal color variable
	                // so we can trigger a color-change
	                // event.

	                this._color.setValue({
	                        h: this._hue,
	                        s: this._saturation,
	                        b: this._brightness,
	                        a: this._alpha
	                    });
	            }
	        },

	        setValue: function( value ) {
	            var hsb = ( new Color( value ) ).getHSB() ;
	            this._setValue( hsb.h, hsb.s, hsb.b, hsb.a );
	            this._syncControls();
	        },

	        _attachBehavior: function() {
	            var self = this,
	                opts = this.options;

	            this._blockSetValue = false;

	            // We use a Color object to generate a color-change
	            // event with the same color data dispatched by a
	            // Color object.

	            this._color = new Color( 'black' );

	            this._color.bind( 'color-change', function( e, data ) {
	                    self.trigger( 'color-change', data );
	                });

	            // Color objects store color internally as RGB
	            // values. Unfortunately there isn't necessarily a
	            // a one to one translation of RGB to HSB due to
	            // the fact that white and black can have several
	            // representations in the HSB space. For this reason,
	            // we need to track _hue, etc, ourselves so that as
	            // the user drags the saturation/brightness into
	            // white or black, that we can get back the original
	            // hue that was used as they drag away from white/black.

	            var black = this._color.getHSB();

	            this._hue = black.h;
	            this._saturation = black.s;
	            this._brightness = black.b;
	            this._alpha = black.a;

	            // Attach the 2d slider behavior to the
	            // saturation element.

	            this.$saturation = this.$element.find( '.' + opts.saturationClass );
	            this.$saturationView = this.$saturation.find( '.' + opts.saturationViewClass );

	            this.saturationSlider = new Slider2d( this.$saturation, {
	                trackClassName: opts.saturationViewClass,
	                thumbClassName: opts.saturationThumbClass,
	                ignoreY: false
	            });

	            $( this.saturationSlider ).on( 'wp-slider-update', function( evt, data ) {
	                var s = self._saturation,
	                    b = self._brightness;

	                if ( data.percentageX >= 0 ) {
	                    s = Math.round( data.percentageX * 100 );
	                }
	                if ( data.percentageY >= 0 ) {
	                    b = Math.round( 100 - data.percentageY * 100 );
	                }

	                self._setValue( self._hue, s, b, self._alpha );

	                self._syncAlphaView();
	            });

	            // Attach the slider behavior to the hue element.

	            this.$hue = this.$element.find( '.' + opts.hueClass );

	            this.hueSlider = new HueSlider( this.$hue, {
	                trackClassName: opts.hueViewClass,
	                thumbClassName: opts.hueThumbClass,
	                ignoreY: opts.hueSliderDirection === 'horizontal',
	                ignoreX: opts.hueSliderDirection === 'vertical'
	            });

	            $( this.hueSlider ).on( 'wp-slider-update', function( evt, data ) {
	                var  h = 360 - data.percentage * 360;

	                self._setValue( h, self._saturation, self._brightness, self._alpha );

	                // Update the saturation view.

	                self._syncSaturationView();
	                self._syncAlphaView();
	            });

	            // Attach a slider behavior to the opacity element.

	            this.$opacity = this.$element.find( '.' + opts.opacityClass );

	            this.alphaSlider = new AlphaSlider( this.$opacity, {
	                trackClassName: opts.opacityViewClass,
	                thumbClassName: opts.opacityThumbClass,
	                ignoreY: opts.alphaSliderDirection === 'horizontal',
	                ignoreX: opts.alphaSliderDirection === 'vertical'
	            });

	            $( this.alphaSlider ).on( 'wp-slider-update', function( evt, data ) {
	                self._setValue( self._hue, self._saturation, self._brightness, data.percentage );
	            });
	        },

	        _ready: function() {
	            // Make sure we sync the controls to our initial
	            // HSB values.

	            this._syncControls();
	        },

	        _syncSaturationView: function() {
	            this.$saturationView.css( 'background-color', 'hsl(' + this._hue + ',100%,50%)' );
	        },

	        _syncAlphaView: function() {
	            this.alphaSlider.setColor({
	                    h: this._hue,
	                    s: this._saturation,
	                    b: this._brightness
	                });
	        },

	        _syncControls: function() {
	            var options = this.options;

	            this._blockSetValue = true;

	            // XXX: This is a temporary workaround for the problem where
	            //      the color picker may have been initialized while it
	            //      or its ancestor was display:none. We reset our constraints
	            //      so the max values of the sliders get calculated properly

	            this.saturationSlider._resetConstraints();
	            this.hueSlider._resetConstraints();
	            this.alphaSlider._resetConstraints();

	            // Set the values of the color picker controls.

	            this.saturationSlider.setPositionByPercentage( this._saturation / 100, 1 - this._brightness / 100 );

	            var isVertical = options.hueSliderDirection === 'vertical',
	                value = 1 - this._hue / 360,
	                x = isVertical ? 0 : value,
	                y = isVertical ? value : 0;

	            this.hueSlider.setPositionByPercentage( x, y );

	            isVertical = options.alphaSliderDirection === 'vertical';
	            x = isVertical ? 0 : this._alpha;
	            y = isVertical ? this._alpha : 0;

	            this.alphaSlider.setPositionByPercentage( x, y );

	            this._syncSaturationView();
	            this._syncAlphaView();

	            this._blockSetValue = false;
	        }
	    });

	    Widget.addWidgetConstructorAsjQueryPlugin( 'wpHSBColorPicker', ColorPicker );

	    return ColorPicker;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(6), __webpack_require__(40), __webpack_require__(11), __webpack_require__(35), __webpack_require__(15) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Widget, InteractiveImage, PanelGroup, SwipePanelGroup, Vmouse ) {
	    var CollectionBrowser = Widget.build( 'Widget.CollectionBrowser', Widget, {
	        _widgetName: 'CollectionBrowser',

	        defaultOptions: {
	            sourceArray:                           [],

	            interactiveImageClipClassName:         InteractiveImage.prototype.defaultOptions.clipClassName,
	            interactiveImageViewClassName:         InteractiveImage.prototype.defaultOptions.viewClassName,
	            interactiveImageContentClassName:      InteractiveImage.prototype.defaultOptions.contentClassName,

	            swipePanelGroupClassName:              SwipePanelGroup.prototype.defaultOptions.widgetClass,
	            swipePanelGroupViewClassName:          SwipePanelGroup.prototype.defaultOptions.viewClass,
	            swipePanelGroupPanelClassName:         SwipePanelGroup.prototype.defaultOptions.panelClass,

	            swipePanelGroupPanelPreviousClassName: SwipePanelGroup.prototype.defaultOptions.previousClass,
	            swipePanelGroupPanelActiveClassName:   PanelGroup.prototype.defaultOptions.activeClass,
	            swipePanelGroupPanelNextClassName:     SwipePanelGroup.prototype.defaultOptions.nextClass,

	            closeButtonClassName:                  'wp-collection-browser-close-button',
	            showClassName:                         'wp-show',
	            hideClassName:                         'wp-hide',

	            allowDelegation:                       false
	        },

	        _transformMarkup: function() {
	            var widget = this,
	                opts = this.options,
	                sourceArray = opts.sourceArray,
	                inject = '';

	            // create a SwipePanelGroup where each panel has an interactive image that wraps
	            // around the source data items.
	            inject += '<div class="' + opts.swipePanelGroupClassName + '">';
	            inject += '  <div class="' + opts.swipePanelGroupViewClassName + '">';

	            for ( var i = 0; i < sourceArray.length; i++ ){

	                // add the content class to the data item

	                // TODO: This method of using outerHTML might not be a very efficient
	                //       way of doing this.  Revisit this again later.

	                var item = $( sourceArray[i] ).addClass( opts.interactiveImageContentClassName )
	                                              .prop( "outerHTML" );

	                inject += '    <div class="' + opts.swipePanelGroupPanelClassName + '">';
	                inject += '      <div class="' + opts.interactiveImageClipClassName + '">';
	                inject += '        <div class="' + opts.interactiveImageViewClassName + '">';
	                inject += '          ' + item;
	                inject += '        </div>';
	                inject += '	     </div>';
	                inject += '    </div>';
	            }

	            inject += '  </div>';
	            inject += '</div>';
	            inject += '<button class="' + opts.closeButtonClassName + '"></button>';

	            widget.$element.html(inject);
	        },

	        _attachBehavior: function() {
	            var widget = this,
	                opts = widget.options;

	            // Create a simple slideshow
	            var $group = widget.$element.find( '.' + opts.swipePanelGroupClassName ).wpSwipePanelGroup( { allowDelegation: opts.allowDelegation } );
	            widget.swipePanelGroup = $group.data( 'wpSwipePanelGroup' );

	            // create all of the interactive images
	            widget.$element.find( '.' + opts.interactiveImageClipClassName ).wpInteractiveImage();

	            // fit the panels when they are queued up
	            widget.swipePanelGroup.bind( 'wp-panels-queued', function( event, data ) {
	                widget._fit();
	            });

	            $( window ).resize(function() {
	                widget._fit();
	            });

	            $( window ).load( function() {
	                widget._fit();
	            });

	            // add a click handler to the close button
	            widget.$element.find( ' .' + opts.closeButtonClassName )
	                .bind( 'vclick', function( eventObject ) {
	                    widget.hideWidget();
	                    return false;
	                });

	            // hide on escape
	            $( document ).keyup(function( e ) {
	                if ( e.keyCode == 27 ){
	                    widget.hideWidget();
	                }
	            });

	        },

	        showWidget: function() {
	            var opts = this.options;

	            this.$element.removeClass( opts.hideClassName )
	                         .addClass( opts.showClassName );
	            this._fit();
	            this.trigger( 'show' );
	        },

	        hideWidget: function() {
	            var opts = this.options;

	            this.$element.removeClass( opts.showClassName )
	                         .addClass( opts.hideClassName );
	            this.trigger( 'hide' );
	        },

	        _fit: function() {
	            // Fits and centers the interactive images on the queued/active swipe panels

	            var element = this.$element,
	                methodName = 'fitAndCenter',
	                methodOptions = { duration: 0, canScaleUp: false },
	                opts = this.options,
	                clip = ' .' + opts.interactiveImageClipClassName,
	                content = '.' + opts.interactiveImageContentClassName;

	            // only call fitAndCenter on the panels that exist and have non-zero size
	            var previous = element.find( '.' + opts.swipePanelGroupPanelPreviousClassName + clip );
	            var active   = element.find( '.' + opts.swipePanelGroupPanelActiveClassName + clip );
	            var next     = element.find( '.' + opts.swipePanelGroupPanelNextClassName + clip );

	            if ( previous.length > 0 ){
	                var pC = previous.find( content );
	                if ( pC.width() > 0 && pC.height() > 0 ){
	                    previous.wpInteractiveImage( methodName, methodOptions );
	                }
	            }

	            if ( active.length > 0 ){
	                var aC = active.find( content );
	                if ( aC.width() > 0 && aC.height() > 0 ){
	                    active.wpInteractiveImage( methodName, methodOptions );
	                }
	            }

	            if ( next.length > 0 ){
	                var nC = next.find( content );
	                if ( nC.width() > 0 && nC.height() > 0 ){
	                    next.wpInteractiveImage( methodName, methodOptions );
	                }
	            }

	        },

	        _ready: function() {
	            this._fit();
	        },
	    });

	    // Add a convenience method to the jQuery Collection prototype,
	    // that applies our behavior to all the elements in the collection.

	    Widget.addWidgetConstructorAsjQueryPlugin( 'wpCollectionBrowser', CollectionBrowser );

	    return CollectionBrowser;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(3), __webpack_require__(6), __webpack_require__(7), __webpack_require__(26), __webpack_require__(23), __webpack_require__(36) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Utils, Widget, EventDispatcher, Node, MomentumScrollView, Animator ) {

	    //////////////////// View ////////////////////

	    var View = function() {
	        EventDispatcher.call( this );
	        Node.call( this );

	        this._x = 0;
	        this._y = 0;
	        this._width = 0;
	        this._height = 0;
	    };

	    Utils.inherit( View, Node );

	    $.extend( View.prototype, EventDispatcher.prototype, {
	        getPosition: function() {
	            return { x: this._x, y: this._y };
	        },

	        setPosition: function( x, y ) {
	            this._x = x;
	            this._y = y;
	        },

	        getWidth: function() {
	            return this._width;
	        },

	        setWidth: function( width ) {
	            this._width = width;
	        },

	        getHeight: function() {
	            return this._height;
	        },

	        setHeight: function( height ) {
	            this.height = height;
	        },

	        getBounds: function() {
	            return { width: this.getWidth(), height: this.getHeight() };
	        },

	        setBounds: function( w, h ) {
	            this.setWidth( w );
	            this.setHeight( h );
	        },
	    });

	    //////////////////// DOMView ////////////////////

	    var DOMView = function( element, options ) {
	        View.call( this );
	        this.options = $.extend( {}, options );
	        this.$element = $( element );
	    };

	    Utils.inherit( DOMView, View );

	    $.extend( DOMView.prototype, {
	        _setTransform: function( val ) {
	            this.$element.css({
	                    webkitTransform: val,
	                    mozTransform: val,
	                    oTransform: val,
	                    msTransform: val,
	                    transform: val
	                });
	        },

	        _syncTransform: function() {
	            this._setTransform( 'translate(' + this._x + 'px,' + this._y + 'px)' );
	        },

	        setPosition: function( x, y ) {
	            this._x = x;
	            this._y = y;
	            this._syncTransform();
	        },

	        setWidth: function( width ) {
	            this._width = width;
	            this.$element.css( 'width', width + 'px' );
	        },

	        setHeight: function( height ) {
	            this._height = height;
	            this.$element.css( 'height', height + 'px' );
	        },

	        getWidth: function() {
	            return this.$element.width();
	        },

	        getHeight: function() {
	            return this.$element.height();
	        },
	    });

	    //////////////////// ZoomView ////////////////////

	    var ZoomView = function( element, options ) {
	        DOMView.call( this, element, options );

	        this._zoom = 1;
	    };

	    Utils.inherit( ZoomView, DOMView );

	    $.extend( ZoomView.prototype, {
	        _syncTransform: function() {
	            this._setTransform( 'translate(' + this._x + 'px,' + this._y + 'px) scale(' + this._zoom + ',' + this._zoom + ')' );
	        },

	        getZoomWidth: function() {
	            return this.$element.width() * this._zoom;
	        },

	        getZoomHeight: function() {
	            return this.$element.height() * this._zoom;
	        },

	        getZoomBounds: function() {
	            return { width: this.getZoomWidth(), height: this.getZoomHeight() };
	        },

	        getZoom: function() {
	            return this._zoom;
	        },

	        setZoom: function( zoom ) {
	            this._zoom = zoom;
	            this._syncTransform();
	            this.trigger( 'zoom-changed' );
	        }
	    });

	    //////////////////// ImageZoomView ////////////////////

	    var ImageZoomView = function( clipElement, viewElement, imageElement, options ) {
	        // This view requires 3 elements:
	        //
	        //     clipElement
	        //         - The top-level element that is the clip/viewport for the
	        //           image being viewed. This element will be stored as the
	        //           $element of the view.
	        //
	        //     viewElement
	        //         - The element within the viewport that contains the image
	        //           to be viewed. Its main purpose is to mimic the size of the
	        //           image as it is zoomed in/out. This is necessary because
	        //           scaling an element down with CSS 3 transforms actually
	        //           reserves the same space it would take up if it were un-scaled.
	        //
	        //     imageElement
	        //         - The element that represents the image we are viewing.
	        //           This is the element that will actually be scaled with CSS
	        //           transforms as we zoom in/out. It should be noted that the
	        //           imageElement may actually be an element that is not an <img>
	        //           element. It could be a div that makes use of background images.
	        //

	        options = $.extend( {}, this.defaultOptions, options );

	        DOMView.call( this, clipElement, options );

	        var self = this;

	        this.$view = $( viewElement );
	        this.$image = $( imageElement );

	        this._zoomAnimation = null;

	        // Make the content inside our clip viewport scrollable.
	        // Note that we turn the use of transforms off because
	        // things become very blinky if you transform the content
	        // while some things inside it are being scaled, even
	        // in the case when they are being scaled with transforms.

	        this.scrollview = new MomentumScrollView( this.$element, { useTransform: false } );

	        // Make our image content zoom-able.

	        this.zoomView = new ZoomView( this.$image );

	        // Anytime the zoom level changes on our image content, we
	        // want to know so we can adjust our view size.

	        this.zoomView.bind( 'zoom-changed', function() {
	                self._handleContentChanged();
	            });
	    };

	    Utils.inherit( ImageZoomView, DOMView );

	    $.extend( ImageZoomView.prototype, {
	        defaultOptions: {
	            padding: 0
	        },

	        _getClipBounds: function() {
	            return { width: this.$element.width(), height: this.$element.height() };
	        },

	        _setViewBounds: function( w, h ) {
	            this.$view.css({
	                    width: w + 'px',
	                    height: h + 'px'
	                });
	        },

	        _getZoomCenterPoint: function() {
	            // We need the scrollview so we can calculate the size
	            // of the viewport and where it is currently scrolled.

	            var scrollview = this.scrollview,
	                $scrollviewEle = scrollview.$element,

	                // Get the dimensions of the scrollview.

	                sw = $scrollviewEle.width(),
	                sh = $scrollviewEle.height(),

	                // Get the zoom view.

	                zoomView = this.zoomView,

	                // We'll need the current zoom scale value so we can calculate
	                // the center point of the scrollview in terms of the asset-revision
	                // coordinate system so that after we change the zoom scale, we
	                // can figure out how far the scrollview needs to scroll to bring
	                // it back into the center of the viewport.

	                scale = zoomView.getZoom() || 1,

	                // Get the dimensions of the view.

	                w = zoomView.getWidth(),
	                h = zoomView.getHeight(),

	                // Get the scaled dimensions of the view.

	                zw = w * scale,
	                zh = h * scale,

	                // Get the offset of the asset view from the upper-left corner
	                // of the scrollview..

	                pos = zoomView.getPosition(),
	                offsetX = pos.x,
	                offsetY = pos.y,

	                // Calculate the center-point of the scrollview relative to the
	                // asset-view at its current zoom scale.

	                sx = scrollview.scrollLeft(),
	                sy = scrollview.scrollTop(),

	                // Calculate the center-point of the scrollview relative to the
	                // zoomView at its current zoom scale.

	                x = ( ( sx + ( sw / 2 ) ) - offsetX ) / scale,
	                y = ( ( sy + ( sh / 2 ) ) - offsetY ) / scale;

	          // Clip the x and y value so that they are always within the image.
	          // We don't want to zoom off into the weeds.

	          //x = ( zw < sw ) ? 0 : ( ( x > w ) ? w / 2 : x );
	          //y = ( zh < sh ) ? 0 : ( ( y > h ) ? h / 2 : y );

	          return { x: x, y: y };
	        },

	        getZoom: function() {
	            return this.zoomView.getZoom();
	        },

	        setZoom: function( zoomLevel, options ) {
	            // Make sure we always have a valid zoomLevel.

	            zoomLevel = zoomLevel > 0 ? zoomLevel : 1;

	            // Make sure we have an options object.

	            options = options || {};

	            // Get any center-point specified by the caller.

	            var x = options.x,
	                y = options.y;

	            if ( typeof x != 'number' || typeof y != 'number' ) {
	                var center = this._getZoomCenterPoint();
	                x = center.x;
	                y = center.y;
	            }

	            /*** DEBUG_ZOOM ***
	            // This code places a red square at the x/y point
	            // we calculate as the center we should zoom around.

	            var $cp = this.$image.find( '.center-point' );
	            if ( $cp.length === 0 ) {
	              $cp = $( '<div class="center-point"></div>' );
	              this.$image.append( $cp );
	              $cp.css({
	                  position: "absolute",
	                  'z-index': '1000',
	                  'background-color': '#f00',
	                  width: '10px',
	                  height: '10px'
	                });
	            }

	            $cp.css({
	              top: y + 'px',
	              left: x + 'px',
	            });
	            //*** DEBUG_ZOOM ***/

	            // We need the scrollview so we can calculate the size
	            // of the viewport and where it is currently scrolled.

	            var scrollview = this.scrollview,
	                $scrollviewEle = scrollview.$element,

	                // Get the dimensions of the scrollview.

	                sw = $scrollviewEle.width(),
	                sh = $scrollviewEle.height(),

	                // Get the zoom view for the image.

	                zoomView = this.zoomView,

	                // Get the offset of the asset view from the upper-left corner
	                // of the scrollview..

	                pos = zoomView.getPosition(),
	                offsetX = pos.x,
	                offsetY = pos.y,

	                // Calculate the scroll position that would center the
	                // the same point at the new zoom level.

	                sx = ( x * zoomLevel ) + offsetX - ( sw / 2 ),
	                sy = ( y * zoomLevel ) + offsetY - ( sh / 2 );

	            // Set the new zoom level so we can calculate our
	            // new scroll position.

	            this.zoomView.setZoom( zoomLevel );

	            // Make sure we don't attempt to scroll into negative territory.

	            sx = Math.round( sx < 0 ? 0 : sx );
	            sy = Math.round( sy < 0 ? 0 : sy );

	            // Perform the actual scroll!

	            scrollview.scrollTo( sx, sy );
	        },

	        setZoomAnimate: function( zoomLevel, options ) {
	            var self = this,
	                centerPoint = getZoomCenterPoint(),
	                za = this._zoomAnimation,
	                curLevel = this.zoomView.getZoom(),
	                opts = $.extend( { duration: 500 }, options );

	            if ( za ) {
	                za.stop();
	            }

	            var completeFunc = opts.complete;
	            opts.complete = function() {
	                self._zoomAnimation = null;
	                if ( completeFunc ) {
	                    completeFunc();
	                }
	            };

	            za = this._zoomAnimation = new Animator( function( interpolationVal ) {
	                setZoomLevel( curLevel + ( ( zoomLevel - curLevel ) * interpolationVal ), {
	                        x: centerPoint.x,
	                        y: centerPoint.y
	                    });
	            }, opts );

	            za.start();
	        },

	        _forceBrowserReflow: function() {
	          return document.body.offsetHeight;
	        },

	        scrollRectIntoView: function( rect, options ) {
	            var opts = $.extend( {
	                padding: 20,
	                duration: 500,
	                zoomToFit: false,
	                canScaleUp: false,
	                zoomLevel: undefined,
	                center: true,
	            }, options ),

	            // The scrollview and its DOM element.

	            scrollview = this.scrollview,
	            $scrollviewEle = scrollview.$element,

	            // Get the current scroll position.

	            sx = scrollview.scrollLeft(),
	            sy = scrollview.scrollTop(),

	            // Get the width of the viewport of the scrollview.

	            sw = $scrollviewEle.width(),
	            sh = $scrollviewEle.height(),

	            // Decide if the viewport has changed.

	            viewportSizeChanged = (this.lastViewportWidth != sw || this.lastViewportHeight != sh),

	            // This will track the new scroll position we will have
	            // to scroll to after a zoom. Initially, it is the current
	            // scroll position.

	            nsx = sx,
	            nsy = sy,

	            // The view for the current asset.

	            zoomView = this.zoomView,

	            // The current zoom level for the asset.

	            scale = zoomView.getZoom(),

	            // The un-zoomed width of the rectangle we want
	            // to scroll into view.

	            vw = rect.width,
	            vh = rect.height,

	            // This will track the new zoom level we will set
	            // to make sure the annotation is fully visible.

	            newScale = scale;

	            /*** DEBUG_ZOOM ***
	            // This code places a rect at the x/y point.

	            var $cp = this.$image.find( '.rect-to-show' );
	            if ( $cp.length === 0 ) {
	              $cp = $( '<div class="rect-to-show"></div>' );
	              this.$image.append( $cp );
	              $cp.css({
	                  position: "absolute",
	                  'z-index': '1000',
	                  'background-color': 'rgba(255,0,0,0.25)'
	                });
	            }

	            $cp.css({
	                  top: rect.y + 'px',
	                  left: rect.x + 'px',
	                  width: rect.width + 'px',
	                  height: rect.height + 'px'
	            });
	            //*** DEBUG_ZOOM ***/

	            if ( opts.zoomToFit ) {
	                // Do the dimensions of the rect fit within the viewport at 100% zoom?

	                if ( vw < sw && vh < sh ) {
	                    if ( opts.canScaleUp ) {
	                        newScale = Math.min( ( sw / vw ), ( sh / vh ) );
	                    } else {
	                        // The rect is fully visible within the viewport at
	                        // actual size. Set our scale to 100%.

	                        newScale = 1;
	                    }
	                } else {
	                    // Scale the rect down to fit within the viewport.

	                    newScale = Math.min( ( sw / ( vw + opts.padding ) ), ( sh / ( vh + opts.padding ) ) );
	                }
	            } else if ( opts.zoomLevel ) {
	                newScale = opts.zoomLevel;
	            }

	            // Calculate the new scroll position that would center the rect
	            // within the viewport.
	            //
	            // We need to calculate the bounds of the view containing the
	            // image at the new scale so we can find it's position. This is
	            // because the position of the image within the view can change
	            // depending on the zoom level because we try to keep the image
	            // centered within the view, and respect the user-specified
	            // minimum padding withing the view.

	            var svBounds = this._calculateViewZoomBounds( newScale ),
	                pos = zoomView.getPosition(),
	                vzx = ( rect.x * newScale ) + svBounds.imageX,
	                vzy = ( rect.y * newScale ) + svBounds.imageY,
	                vzw = vw * newScale,
	                vzh = vh * newScale,

	                nsx = Math.round( vzx - ( ( sw - vzw ) / 2 ) ),
	                nsy = Math.round( vzy - ( ( sh - vzh ) / 2 ) );

	            // Make sure we don't attempt to scroll into negative territory.

	            nsx = nsx < 0 ? 0 : nsx;
	            nsy = nsy < 0 ? 0 : nsy;

	            // Are we actually going to scroll or zoom?

	            var shouldScroll = ( sx != nsx || sy != nsy ),
	                shouldZoom = ( scale != newScale ) || viewportSizeChanged;

	            // Keep track of changes in the viewport size

	            this.lastViewportWidth = sw;
	            this.lastViewportHeight = sh;

	            if ( !opts.center && shouldScroll && !shouldZoom ) {
	                if ( vzx >= sx &&  vzy >= sy && ( vzx + vzw ) <= ( sx + sw ) && ( vzy + vzh ) <= ( sy + sh ) ) {
	                    shouldScroll = false;
	                }
	            }

	            // Kill any zoom scroll animation in progress.

	            var za = this._zoomAnimation;

	            if ( za ) {
	                za.stop();
	                this._zoomAnimation = null;
	            }

	            if ( shouldScroll || shouldZoom ) {
	                var self = this,
	                    deltaScale = newScale - scale,
	                    deltaSX = nsx - sx,
	                    deltaSY = nsy - sy;

	                // only animate if a positive duration was given
	                if ( opts.duration > 0 ) {

	                    za = this._zoomAnimation = new Animator( function( interpolationVal ) {
	                        if ( shouldZoom ) {
	                            zoomView.setZoom( scale + ( deltaScale * interpolationVal ) );
	                            self._forceBrowserReflow();
	                        }

	                        if ( shouldScroll ) {
	                            scrollview.scrollTo( sx + Math.round( deltaSX * interpolationVal), sy + Math.round( deltaSY * interpolationVal ) );
	                        }
	                    }, opts );

	                    za.start();

	                } else {

	                    if ( shouldZoom ) {
	                        zoomView.setZoom( newScale );
	                        self._forceBrowserReflow();
	                    }

	                    if ( shouldScroll ) {
	                        scrollview.scrollTo( nsx, nsy );
	                    }

	                }
	            }
	        },

	        getImageBounds: function() {
	            return this.zoomView.getBounds();
	        },

	        _getImageZoomBounds: function( zoomLevel ) {
	            var bounds = this.zoomView.getBounds();
	            bounds.width *= zoomLevel;
	            bounds.height *= zoomLevel;
	            return bounds;
	        },

	        _calculateViewZoomBounds: function( zoomLevel ) {
	            var clipBounds = this._getClipBounds(),
	                imageBounds = this._getImageZoomBounds( zoomLevel ),
	                padding = this.options.padding,
	                imageWidth = imageBounds.width,
	                imageHeight = imageBounds.height,
	                paddingX = Math.max( padding, ( clipBounds.width - imageWidth ) / 2 ),
	                paddingY = Math.max( padding, ( clipBounds.height - imageHeight ) / 2 );

	            return {
	                // The dimensions of the view containing the image.

	                width: ( paddingX * 2 ) + imageWidth,
	                height: ( paddingY * 2 ) + imageHeight,

	                // The location and dimensions of the image inside
	                // the view.

	                imageX: paddingX,
	                imageY: paddingY,
	                imageWidth: imageWidth,
	                imageHeight: imageHeight
	            };
	        },

	        _handleContentChanged: function() {
	            var bounds = this._calculateViewZoomBounds( this.getZoom() );
	            this.zoomView.setPosition( bounds.imageX, bounds.imageY );
	            this._setViewBounds( bounds.width, bounds.height );
	        }
	    });

	    //////////////////// InteractiveImage ////////////////////

	    var InteractiveImage = Widget.build( 'Widget.InteractiveImage', Widget, {
	        defaultOptions: {
	            clipClassName: 'wp-interactive-image-clip',
	            viewClassName: 'wp-interactive-image-view',
	            contentClassName: 'wp-interactive-image-content'
	        },

	        _attachBehavior: function() {
	            this.$clip = this.$element.find( '.' + this.options.clipClassName );

	            if ( this.$clip.length === 0 ) {
	                this.$clip = this.$element;
	            }

	            this.$view = this.$element.find( '.' + this.options.viewClassName );
	            this.$image = this.$element.find( '.' + this.options.contentClassName );

	            this.imageZoomView = new ImageZoomView( this.$clip, this.$view, this.$image );
	        },

	        getClipBounds: function() {
	            return this.imageZoomView._getClipBounds();
	        },

	        getImageBounds: function() {
	            return this.imageZoomView.getImageBounds();
	        },

	        getZoom: function() {
	            return this.imageZoomView.getZoom();
	        },

	        setZoom: function( zoomLevel, options ) {
	            this.imageZoomView.setZoom( zoomLevel, options );
	        },

	        cover: function( options ) {
	            options = $.extend({
	                padding: 0,
	                horizontalPosition: 'center', // 'left', 'center', or 'right'
	                verticalPosition: 'center', // 'top', 'center', 'bottom'
	                complete: undefined,
	                duration: 500
	            }, options );

	            // Get the bounds of the clip region and the image
	            // so we can figure out the zoom level that will
	            // make the image cover the clip, without leaving
	            // any unpainted (black bars) on the edges of the
	            // clip.

	            var clipBounds = this.imageZoomView._getClipBounds(),
	                imageBounds = this.imageZoomView.getImageBounds(),

	                // The position of the zoom rect within the image.

	                x = 0,
	                y = 0,

	                // The rect we zoom into view is going to be
	                // the exact dimensions of the clip view.

	                width = clipBounds.width,
	                height = clipBounds.height,

	                // Calculate the zoom level that scales the image
	                // closest to the viewport size without leaving
	                // any area of the viewport unpainted/blank.

	                zoom = Math.max( width / imageBounds.width, height / imageBounds.height ),

	                // Calculate the dimensions of the image
	                // at this zoom level.

	                scaledWidth = imageBounds.width * zoom,
	                scaledHeight = imageBounds.height * zoom,

	                hPos = options.horizontalPosition,
	                vPos = options.verticalPosition;

	                if ( hPos === 'center' ) {
	                    x = ( scaledWidth - width ) / 2;
	                } else if ( hPos === 'right' ) {
	                    x = scaledWidth - width;
	                }

	                if ( vPos === 'center' ) {
	                    y = ( scaledHeight - height ) / 2;
	                } else if ( hPos === 'bottom' ) {
	                    y = scaledHeight - height;
	                }

	                x /= scaledWidth;
	                y /= scaledHeight;
	                width /= scaledWidth;
	                height /= scaledHeight;

	            this.zoomAndCenterRect({ x: x, y: y, width: width, height: height }, {
	                    percentageValues: true,
	                    padding: options.padding,
	                    complete: options.complete,
	                    duration: options.duration,
	                    canScaleUp: options.canScaleUp
	                });
	        },

	        fitAndCenter: function( options ) {
	            options = $.extend( {
	                padding: 20,
	                complete: undefined,
	                duration: 500
	            }, options );

	            this.zoomAndCenterRect({ x: 0, y: 0, width: 1, height: 1 }, {
	                percentageValues: true,
	                padding: options.padding,
	                complete: options.complete,
	                duration: options.duration,
	                canScaleUp: options.canScaleUp
	            });
	        },

	        zoomAndCenter: function( zoomLevel, xPercent, yPercent, options ) {
	            options = $.extend( {
	                complete: undefined,
	                padding: 20,
	                duration: 500
	            }, options );

	            zoomLevel = zoomLevel > 0 ? zoomLevel : 1;

	            var imageBounds = this.imageZoomView.getImageBounds(),
	                x = xPercent * imageBounds.width,
	                y = yPercent * imageBounds.height;

	            this.imageZoomView.scrollRectIntoView({ x: x, y: y, width: 1, height: 1 }, {
	                    zoomLevel: zoomLevel,
	                    padding: options.padding,
	                    complete: options.complete,
	                    duration: options.duration
	                });
	        },

	        zoomAndCenterRect: function( rect, options ) {
	            var r = $.extend( {}, rect );
	            options = $.extend({
	                canScaleUp: true,
	                padding: 20,
	                complete: undefined,
	                duration: 500,
	                percentageValues: false,
	            }, options );

	            if ( options.percentageValues ) {
	                var imageBounds = this.imageZoomView.getImageBounds();
	                r.x = r.x * imageBounds.width,
	                r.y = r.y * imageBounds.height;
	                r.width = r.width * imageBounds.width;
	                r.height = r.height * imageBounds.height;
	            }

	            this.imageZoomView.scrollRectIntoView( r, {
	                    complete: options.complete,
	                    duration: options.duration,
	                    zoomToFit: true,
	                    canScaleUp: options.canScaleUp,
	                    padding: options.padding,
	                    center: true,
	                });
	        }
	    });

	    Widget.addWidgetConstructorAsjQueryPlugin( 'wpInteractiveImage', InteractiveImage );

	    return InteractiveImage;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(3), __webpack_require__(6), __webpack_require__(42), __webpack_require__(11), __webpack_require__(12) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Utils, Widget, SlideshowBase, PanelGroup, TabGroup ) {
	    var ContentSlideshow = Widget.build( 'Widget.ContentSlideShow', SlideshowBase, {
	        _widgetName: 'content-slideshow',

	        defaultOptions: {
	            slideshowClassName:  'wp-slideshow',
	            clipClassName:       'wp-slideshow-clip',
	            viewClassName:       'wp-slideshow-view',
	            slideClassName:      'wp-slideshow-slide',
	            slideLinkClassName:  'wp-slideshow-slide-link',
	            firstBtnClassName:   'wp-slideshow-first-btn',
	            lastBtnClassName:    'wp-slideshow-last-btn',
	            prevBtnClassName:    'wp-slideshow-prev-btn',
	            nextBtnClassName:    'wp-slideshow-next-btn',
	            playBtnClassName:    'wp-slideshow-play-btn',
	            stopBtnClassName:    'wp-slideshow-stop-btn',
	            playingClassName:    'wp-slideshow-playing',
	            buttonEvent:         'click'
	        },

	        _findWidgetElements: function( selector ) {
	            var ssEle = this.$element[ 0 ];
	            return Utils.scopedFind( ssEle, selector, this.options.slideshowClassName, ssEle );
	        },

	        _attachBtnHandler: function( className, funcName ) {
	            var self = this;

	            // Attach a handler to buttons with the specified
	            // class name. The handler will invoke a method on
	            // the slideshow specified by funcName. After finding
	            // the buttons, store a reference to them on the slideshow
	            // so we don't have to search for them again.

	            this[ '$' + funcName + 'Btn' ] = this._findWidgetElements( '.' + className )
	                .bind( this.options.buttonEvent, function( e ) {
	                    self[ funcName ]();
	                    e.preventDefault();
	                });
	        },

	        _attachBehavior: function() {
	            var self = this,
	                opts = this.options;

	            ContentSlideshow.prototype._super.prototype._attachBehavior.call( this );

	            this._panelShowCallback = function( e, data) {
	                if ( !self._ssTimerTriggered ) {
	                    // The current panel changed but it wasn't due
	                    // to our slideshow timer callback. If the slideshow
	                    // is running, reset the timer so the user has time
	                    // to view the content on the new panel.

	                    if ( self.isPlaying() ) {
	                        self._startTimer();
	                    }
	                }
	            };

	            // Add our internal class to the top-level slideshow element, we
	            // will use this to ehlp us filter out any slides/controls in any
	            // nested slideshows.

	            this.$element.addClass( opts.slideshowClassName );

	            var $slides = this._findWidgetElements( '.' + opts.slideClassName ),
	                $tabs =       this._findWidgetElements( '.' + opts.slideLinkClassName );

	            this.slides = new PanelGroup( $slides, {
	                                    defaultIndex: ( opts.defaultIndex || 0 )
	                                });
	            this.slides.bind( 'wp-panel-show', this._panelShowCallback );

	            this.tabs = null;

	            this.$view = this.$element.find( '.' + opts.viewClassName );

	            if ( $tabs.length ) {
	                this.tabs = new TabGroup( $tabs );
	                this.slides.addTabGroup( this.tabs );
	            }

	            this._attachBtnHandler( opts.firstBtnClassName, 'first' );
	            this._attachBtnHandler( opts.lastBtnClassName, 'last' );
	            this._attachBtnHandler( opts.prevBtnClassName, 'previous' );
	            this._attachBtnHandler( opts.nextBtnClassName, 'next' );
	            this._attachBtnHandler( opts.playBtnClassName, 'play' );
	            this._attachBtnHandler( opts.stopBtnClassName, 'stop' );

	            // Bind to the play and stop events so we can add and remove
	            // a class on the slideshow element that indicates whether
	            // or not it is in play mode. We use listeners instead of
	            // overriding the play() and stop() methods because we want
	            // to give plugins a chance to cancel play/stop requests. If
	            // the play and stop events fire, then we know it is okay
	            // to add/remove the class.

	            this.bind( 'wp-slideshow-play', function() {
	                    this.$element.addClass( opts.playingClassName );
	                });
	            this.bind( 'wp-slideshow-stop', function() {
	                    this.$element.removeClass( opts.playingClassName );
	                });
	        },

	        _resetActiveTracking: function() {
	            // After we've inserted/removed a new panel, we
	            // need to reset the $element collection so
	            // that it contains our new panel.

	            var slides = this.slides,
	                opts = this.options;

	            slides.$element = this.$element.find( '.' + opts.slideClassName );

	            // The index of the active element may have changed
	            // so update activeIndex.

	            slides.activeIndex = slides._getElementIndex( slides.activeElement );
	        },

	        insertPanelBefore: function( panel, reference ) {
	            var slides = this.slides,
	                $panel = $( panel );

	            this.trigger( 'wp-before-insert-panel', { panel: panel, reference: reference } );

	            // If a reference panel was given, insert
	            // the new panel before it. Otherwise, insert
	            // the panel at the very end.

	            if ( reference ) {
	                $panel.insertBefore( $( reference ) );
	            } else {
	                $panel.appendTo( this.$view );
	            }

	            // Once we've inserted our new panel, make sure we
	            // reset the widget's internal bookkeeping.

	            this._resetActiveTracking();

	            this.trigger( 'wp-insert-panel', { panel: panel, reference: reference } );
	        },

	        removePanel: function( panel ) {
	            var activeIndex = this.slides.activeIndex;

	            panel = $( panel )[ 0 ];

	            this.trigger( 'wp-before-remove-panel', { panel: panel } );

	            var activeElement = this.$element.find( '.' + this.options.slideClassName + ':eq(' + activeIndex + ')' )[0];

	            if ( panel === activeElement ) {
	                // The panel we are about to remove is the
	                // currently visible panel. Add a removed class
	                // to the panel element to initiate any removal
	                // animation it may have.

	                $( panel ).addClass( 'removed' );

	                // Transition to another panel. The
	                // actual removal will happen when the
	                // transition is complete.

	                this.slides.showPanel( activeIndex - 1 );
	            }

	            this._deletePanel( panel );
	        },

	        _deletePanel: function( panel ) {
	            if ( panel ) {
	                $( panel ).remove();
	                this._resetActiveTracking();
	                this.trigger( 'wp-remove-panel', { panel: panel } );
	            }
	        },

	        _first: function() {
	            this.slides.showPanel( 0 );
	        },

	        _last: function() {
	            var slides = this.slides;
	            slides.showPanel( slides.$element.length - 1 );
	        },

	        _previous: function() {
	            var slides = this.slides,
	                ai = slides.activeIndex;
	            slides.showPanel( ( ai < 1 ? slides.$element.length : ai ) - 1 );
	        },

	        _next: function() {
	            var slides = this.slides,
	                ai = slides.activeIndex;
	            slides.showPanel( ( ai + 1 ) % slides.$element.length );
	        },

	        _goTo: function() {
	            this.slides.showPanel.apply( this.slides, arguments );
	        }
	    });

	    return ContentSlideshow;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(6) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Widget ) {
	    var SlideshowBase = Widget.build( 'Widget.SlideshowBase', Widget, {
	        _widgetName: 'slideshow-base',

	        defaultOptions: {
	            displayInterval: 6000,
	            autoPlay: false
	        },

	        _setUp: function() {
	            var self = this;

	            this._ssTimer = 0;
	            this._ssTimerTriggered = false;
	            this._ssTimerCallback = function() {
	                self._ssTimerTriggered = true;
	                self.next();
	                self._ssTimerTriggered = false;
	            };

	            return Widget.prototype._setUp.apply( this, arguments );
	        },

	        _ready: function() {
	            if ( this.options.autoPlay ) {
	                this.play();
	            }
	        },

	        play: function() {
	            if ( !this.isPlaying() ) {
	                e = this.trigger( 'wp-slideshow-before-play' );
	                if ( ! e.isDefaultPrevented() ) {
	                    this._startTimer();
	                    this.trigger( 'wp-slideshow-play' );
	                }
	            }
	        },

	        stop: function() {
	            if ( this.isPlaying() ) {
	                e = this.trigger( 'wp-slideshow-before-stop' );
	                if ( ! e.isDefaultPrevented() ) {
	                    this._stopTimer();
	                    this.trigger( 'wp-slideshow-stop' );
	                }
	            }
	        },

	        isPlaying: function() {
	            return this._ssTimer !== 0;
	        },

	        _startTimer: function() {
	            this._stopTimer();
	            this._ssTimer = setTimeout( this._ssTimerCallback, this.options.displayInterval );
	        },

	        _stopTimer: function() {
	            if ( this._ssTimer ) {
	                clearTimeout( this._ssTimer );
	            }
	            this._ssTimer = 0;
	        },

	        _executeCall: function( name, args ) {
	            e = this.trigger( 'wp-slideshow-before-' + name );
	            if ( ! e.isDefaultPrevented() ) {
	                // There are a couple of ways the slideshow can be stopped.
	                // The first is to simply call stop() at any time. The 2nd,
	                // is to simply return a true value from the method being
	                // called.

	                if ( this[ '_' + name ].apply( this, args) ) {
	                    this.stop();
	                }

	                // If we're still in slideshow mode, restart the timer
	                // for the next slide.

	                if ( this.isPlaying() ) {
	                    this._startTimer();
	                }

	                this.trigger( 'wp-slideshow-' + name );
	            }
	        },

	        first: function() {
	            return this._executeCall( 'first', arguments );
	        },

	        last: function() {
	            return this._executeCall( 'last', arguments );
	        },

	        previous: function() {
	            return this._executeCall( 'previous', arguments );
	        },

	        next: function() {
	            return this._executeCall( 'next', arguments );
	        },

	        goTo: function() {
	            return this._executeCall( 'goTo', arguments );
	        },

	        _first: function() {
	            // Derived class must provide an implementation.
	        },

	        _last: function() {
	            // Derived class must provide an implementation.
	        },

	        _previous: function() {
	            // Derived class must provide an implementation.
	        },

	        _next: function() {
	            // Derived class must provide an implementation.
	        },

	        _goTo: function() {
	            // Derived class must provide an implementation.
	        }
	    });

	    return SlideshowBase;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(3), __webpack_require__(6) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Utils, Widget ) {
	    var Display = Widget.build( 'Widget.Display', Widget, {
	        _widgetName: 'display',

	        defaultOptions: {
	            triggers: null,
	            displayClass: 'wp-display-show',
	            hiddenClass: 'wp-display-hide',
	            activeClass: 'wp-display-toggle-active',
	            toggle: true,
	            autoFocus: false,
	            displayEvent: 'click',
	            hideEvent: null,
	            positionAround: {
	                position: 'below',
	                positionOffset: 10,
	                align: 'right'
	            },
	        },

	        _attachBehavior: function() {
	            var self = this,
	                opts = this.options;
	            opts.hideEvent = opts.hideEvent || opts.displayEvent;
	            this.show = opts.displayClass;
	            this.hide = opts.hideClass;
	            this.$display = this.$element;
	            this.$triggers = $( opts.triggers );

	            this.displayHandler = function( evt ) {
	              self._handleEvent( evt );
	            };
	            this.$triggers.on( opts.displayEvent, this.displayHandler );
	        },

	        unbind: function() {
	            this.$triggers.off( this.opts.displayEvent, this.displayHandler );
	        },

	        _handleEvent: function( evt ) {
	            evt.preventDefault();
	            var self = this,
	                $previousTrigger = this.$activeTrigger;

	            this.$activeTrigger = $( evt.currentTarget );
	            if ( this._displayIsHidden() ) {
	                this._showDisplay();
	                this._handleGlobalEvent = function( evt ) {
	                    var $target = $( evt.target );
	                    if ( !self._displayIsHidden() && ( !$target.closest( self.$activeTrigger ).length && !$target.closest( self.$display ).length ) ) {
	                        self._hideDisplay();
	                    }
	                };
	                $( document ).on( self.options.hideEvent, self._handleGlobalEvent );
	            } else if ( $previousTrigger[0] != this.$activeTrigger[0] && this.options.positionAround ) {
	                this._positionDisplay();
	            } else {
	                if ( this.options.toggle ) {
	                    this._hideDisplay();
	                }
	            }
	        },

	        _hideDisplay: function() {
	            this.$display.removeClass( this.show ).addClass( this.hide );
	            $( document ).off( this.options.hideEvent, this._handleGlobalEvent );
	            if ( this.$activeTrigger ) {
	              this.$activeTrigger.removeClass( this.options.activeClass );
	            }
	            this.$display.trigger( 'wp-display-hide' );
	            this.trigger( 'wp-display-hide', this.$activeTrigger );
	            this.$activeTrigger = null;
	        },

	        _positionDisplay: function() {
	            var pos = Utils.positionElementAroundAnother( this.$activeTrigger, this.$display, this.options.positionAround );
	            this.$display.css({ left: pos.x + 'px', top: pos.y + 'px' });
	        },

	        _showDisplay: function() {
	            if ( !this.$activeTrigger || !this.$activeTrigger.length ) {
	                this.$activeTrigger = this.$triggers.eq(0);
	            }
	            this.trigger( 'wp-display-before-show', this.$activeTrigger );

	            this.$display.removeClass( this.hide ).addClass( this.show );
	            if ( this.options.positionAround ) {
	                this._positionDisplay();
	            }
	            this.$activeTrigger.addClass( this.options.activeClass );
	            if ( this.options.autoFocus ) {
	                this.$display.find( 'input[type=text]:first' ).focus();
	            }
	            this.$display.trigger( 'wp-display-show', this.$activeTrigger );
	            this.trigger( 'wp-display-show', this.$activeTrigger );
	        },

	        _displayIsHidden: function() {
	            return !this.$display.hasClass( this.show );
	        }

	    });

	    return Display;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(3), __webpack_require__(41), __webpack_require__(11), __webpack_require__(15), __webpack_require__(20), __webpack_require__(33), __webpack_require__(13), __webpack_require__(27), __webpack_require__(5) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Utils, ContentSlideshow, PanelGroup, Vmouse, ImageLoader, SwipeTracker, RadioGroup, RadioGroupPlugins, Browser ) {
	    //////////////////// Fading Transition Plugin ////////////////////

	    ContentSlideshow.fadingTransitionPlugin = {
	        defaultOptions: {
	            transitionDuration: 500
	        },

	        initialize: function( slideshow, options ) {
	            var plugin = this;

	            // The idea here is that we only want to override props
	            // that aren't already specified in the options we were
	            // given. We then write back the merged results into the
	            // original options object so the caller gets our changes.

	            $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

	            // Hook into the point in time immediately after
	            // the slideshow attaches it's behaviors, so
	            // we can attach our own behaviors.

	            slideshow.bind( "attach-behavior", function() {
	                plugin.attachBehavior( slideshow );
	            });
	        },

	        attachBehavior: function( slideshow ) {
	            var plugin = this,
	                slides = slideshow.slides,
	                slideEles = slides.$element,
	                activeIndex = slides.activeIndex;

	            // Attach some listeners to the slideshow's internal
	            // panel-group widget that manages which slide is showing.
	            // We want to know whenever it hides or shows a slide so
	            // we can fire off a transition for them.

	            slides
	                .bind( "wp-panel-show", function( e, data ) {
	                    plugin.handleShowSlide( slideshow, data );
	                })
	                .bind( "wp-panel-hide", function( e, data ) {
	                    plugin.handleHideSlide( slideshow, data );
	                });

	            // Make sure all slides, except the initial one,
	            //      start off hidden.

	            for ( var i = 0; i < slideEles.length; i++ ) {
	                if ( i !== activeIndex ) {
	                    slideEles[ i ].style.display = "none";
	                }
	            }
	        },

	        handleShowSlide: function( slideshow, slideInfo ) {
	            $( slideInfo.panel )

	                // Force any animation running for the given slide
	                // to jump to its end. This allows any callbacks
	                // registered on the animation to fire.

	                .stop( false, true )

	                // Kick off a fade-in animation.

	                .fadeIn( slideshow.options.transitionDuration );
	        },

	        handleHideSlide: function( slideshow, slideInfo ) {
	            $( slideInfo.panel )

	                // Force any animation running for the given slide
	                // to jump to its end. This allows any callbacks
	                // registered on the animation to fire.

	                .stop( false, true )

	                // Kick off a fade-out animation.

	                .fadeOut( slideshow.options.transitionDuration );
	        }
	    };

	    //////////////////// Pan and Zoom Plugin ////////////////////

	    ContentSlideshow.panAndZoomPlugin = {
	        defaultOptions: {
	        },

	        presets: {
	                'top-left-to-bottom-right-zoom-out': {
	                    from: '0 0 1.5',
	                    to:   '1 1 1'
	                },

	                'top-right-to-bottom-left-zoom-out': {
	                    from: '1 1 2',
	                    to:   '0 0 1'
	                },

	                'bottom-left-to-top-right-zoom-out': {
	                    from: '0 1 1.5',
	                    to:   '1 0 1'
	                },

	                'bottom-right-to-top-left-zoom-out': {
	                    from: '1 1 1.5',
	                    to:   '0 0 1'
	                },

	                'top-to-bottom': {
	                    from: '.5 0 1.5',
	                    to:   '.5 1 1.5'
	                },

	                'bottom-to-top': {
	                    from: '.5 1 1.5',
	                    to:   '.5 0 1.5'
	                },

	                'left-to-right': {
	                    from: '0 .5 2',
	                    to:   '1 .5 2'
	                },

	                'right-to-left': {
	                    from: '1 .5 2',
	                    to:   '0 .5 2'
	                },

	                'zoom-out': {
	                    from: '.5 .5 2',
	                    to:   '.5 .5 1'
	                },

	                'zoom-in': {
	                    from: '.5 .5 1',
	                    to:   '.5 .5 2'
	                }
	            },

	        initialize: function( slideshow, options ) {
	            var plugin = this;

	            // The idea here is that we only want to override props
	            // that aren't already specified in the options we were
	            // given. We then write back the merged results into the
	            // original options object so the caller gets our changes.

	            $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

	            // Hook into the point in time immediately after
	            // the slideshow attaches it's behaviors, so
	            // we can attach our own behaviors.

	            slideshow.bind( "attach-behavior", function() {
	                plugin.attachBehavior( slideshow );
	            });
	        },

	        attachBehavior: function( slideshow ) {
	            var plugin = this,
	                slides = slideshow.slides;

	            // Attach some listeners to the slideshow so that we can
	            // start or stop any transitions for the current slide.

	            slideshow
	                .bind( "wp-slideshow-play", function( e, data ) {
	                    plugin.handlePlay( slideshow, data );
	                })
	                .bind( "wp-slideshow-stop", function( e, data ) {
	                    plugin.handleStop( slideshow, data );
	                });

	            // Attach some listeners to the slideshow's internal
	            // panel-group widget that manages which slide is showing.
	            // We want to know whenever it hides or shows a slide so
	            // we can fire off a transition for them.

	            slides
	                .bind( "wp-panel-show", function( e, data ) {
	                    plugin.handleShowSlide( slideshow, data );
	                })
	                .bind( "wp-panel-hide", function( e, data ) {
	                    plugin.handleHideSlide( slideshow, data );
	                });

	            plugin._calculateSlideProps( slideshow );
	            plugin._syncInitialSlideGeometry( slideshow );
	            plugin._createSlideAnimators( slideshow );

	            // Attach a new method that allows users to resync the slide geometry
	            // when windows are resized.

	            slideshow.resyncSlideGeometry = function() {
	                plugin._calculateSlideProps( slideshow );
	                plugin._syncInitialSlideGeometry( slideshow );
	                plugin._createSlideAnimators( slideshow );
	            };
	       },

	        _getTripletDataValues: function( val ) {
	            // Clean off leading/trailing spaces and collapse
	            // adjacent spaces.

	            var arr = ( val || '' )
	                    .replace( /^\s+|\s+$/g, '' )
	                    .replace( /\s+/g, ' ' )
	                    .split( /\s/ );

	            return {
	                    x: parseFloat( arr[ 0 ] ),
	                    y: parseFloat( arr[ 1 ] ),
	                    scale: parseFloat( arr[ 2 ] )
	                };
	        },

	        getSlideProperties: function( $slide, index ) {
	            var preset = this.presets[ $slide.data( 'preset' ) || '' ],
	                from = this._getTripletDataValues( preset ? preset.from : $slide.data( 'from' ) ),
	                to = this._getTripletDataValues( preset ? preset.to : $slide.data( 'to' ) );

	            return {
	                    x1: isNaN( from.x ) ? .5 : from.x,
	                    y1: isNaN( from.y ) ? .5 : from.y,
	                    s1: isNaN( to.scale ) ? 1 : from.scale,
	                    x2: isNaN( to.x ) ? .5 : to.x,
	                    y2: isNaN( to.y ) ? .5 : to.y,
	                    s2: isNaN( to.scale ) ? 1 : to.scale
	                };
	        },

	        _calculateSlideProps: function( slideshow ) {
	            var plugin = this,
	                $slideshow = slideshow.$element,
	                $clip = $slideshow.find( '.wp-slideshow-clip' ),
	                cw = $clip.width(),
	                ch = $clip.height(),
	                hcw = cw >> 1;  // half clip width
	                hch = ch >> 1;  // half clip height
	                $slides = slideshow.slides.$element;

	            $slides.each(function( index ) {
	                    var $slide = $( this ),
	                        w = $slide.data( 'imageWidth' ) || $slide.width(),
	                        h = $slide.data( 'imageHeight' ) || $slide.height(),
	                        coverScale = Math.max( cw / w, ch / h ) || 1;

	                    // Adjust the calculated dimensions of the image so they
	                    // are always covering the clip viewport.

	                    w = Math.round( w * coverScale );
	                    h = Math.round( h * coverScale );

	                    var options = slideshow.options,
	                        duration = options.displayInterval + options.transitionDuration,
	                        preset = plugin.getSlideProperties( $slide, index ),
	                        w1 = w * preset.s1,
	                        h1 = h * preset.s1,
	                        w2 = w * preset.s2,
	                        h2 = h * preset.s2,

	                        // The starting position of the image with its focal point positioned
	                        // at the center of the clip viewport.

	                        pos1 = {
	                                x: Math.min( 0, hcw - Math.round( w1 * preset.x1 ) ),
	                                y: Math.min( 0, hch - Math.round( h1 * preset.y1 ) ),
	                                w: Math.round( w1 ),
	                                h: Math.round( h1 ),
	                                scale: preset.s1
	                            },

	                        // The ending position of the image with its focal point positioned
	                        // at the center of the clip viewport.

	                        pos2 = {
	                                x: Math.min( 0, hcw - Math.round( w2 * preset.x2 ) ),
	                                y: Math.min( 0, hch - Math.round( h2 * preset.y2 ) ),
	                                w: Math.round( w2 ),
	                                h: Math.round( h2 ),
	                                scale: preset.s2
	                            };

	                    // Make sure the right and bottom edges of the image are never
	                    // less than the right and bottom edge of the clip viewport.

	                    pos1.x += Math.max( 0, ( cw - ( pos1.x + pos1.w ) ) );
	                    pos1.y += Math.max( 0, ( ch - ( pos1.y + pos1.h ) ) );

	                    pos2.x += Math.max( 0, ( cw - ( pos2.x + pos2.w ) ) );
	                    pos2.y += Math.max( 0, ( ch - ( pos2.y + pos2.h ) ) );

	                    $slide.data( 'slideWidth', w );
	                    $slide.data( 'slideHeight', h );
	                    $slide.data( 'slideDuration', duration );
	                    $slide.data( 'fromProps', pos1 );
	                    $slide.data( 'toProps', pos2 );
	                });
	        },

	        _createSlideAnimators: function( slideshow ) {
	            var $slides = slideshow.slides.$element,
	                transformProp = WebPro.vendorPrefix + 'transform';

	            $slides.each( function() {
	                var $slide = $( this ),
	                    animator = $slide.data( 'animator' );

	                if ( !animator ) {
	                    var duration = $slide.data( 'slideDuration' );

	                    animator = new WebPro.Animator( function( easingConst ) {
	                            var data = $slide.data(),
	                                from = data.fromProps,
	                                to = data.toProps,
	                                x = Math.round( from.x + ( ( to.x - from.x ) * easingConst ) ),
	                                y = Math.round( from.y + ( ( to.y - from.y ) * easingConst ) ),
	                                scale = from.scale + ( ( to.scale - from.scale ) * easingConst );

	                            $slide.css( transformProp, 'translate3d(' + x +'px,' + y + 'px,0) scale('+ scale +')');
	                        }, { duration: duration } );

	                    $slide.data( 'animator', animator );
	                }
	            });
	        },

	        _syncInitialSlideGeometry: function( slideshow ) {
	            var $slides = slideshow.slides.$element,
	                prefix = WebPro.vendorPrefix,
	                transform = prefix + 'transform',
	                transformOrigin = prefix + 'transform-origin';

	            for ( var i = 0; i < $slides.length; i++ ) {
	                var $slide = $( $slides[ i ] ),
	                    data = $slide.data(),
	                    fromProps = data.fromProps,
	                    w = data.slideWidth,
	                    h = data.slideHeight;

	                var prefix = WebPro.vendorPrefix,
	                    cssProps = {
	                            width: w + 'px',
	                            height: h + 'px',
	                        };

	                cssProps[ transform ] = 'translate3d(' + fromProps.x +'px,' + fromProps.y + 'px,0) scale('+ fromProps.scale +')';
	                cssProps[ transformOrigin ] = '0 0';

	                $slide.css( cssProps );
	            }
	        },

	        handlePlay: function( slideshow, slideInfo ) {
	            var animator = $( slideshow.slides.activeElement ).data( 'animator' );
	            if ( animator ) {
	                animator.start();
	            }
	        },

	        handleStop: function( slideshow, slideInfo ) {
	            var animator = $( slideshow.slides.activeElement ).data( 'animator' );
	            if ( animator ) {
	                animator.stop();
	            }
	        },

	        handleShowSlide: function( slideshow, slideInfo ) {
	            $( slideInfo.panel )
	                .data( 'animator' )
	                .start();
	        },

	        handleHideSlide: function( slideshow, slideInfo ) {
	            // Nothing to do here for pan and zoom.
	        }
	    };

	    //////////////////// Filmstrip Transition Plugin ////////////////////

	    ContentSlideshow.filmstripTransitionPlugin = {
	        defaultOptions: {
	            transitionDuration: 500,
	            transitionStyle:            "horizontal" // "horizontal" || "vertical"
	        },

	        initialize: function( slideshow, options ) {
	            var plugin = this;

	            // The idea here is that we only want to override props
	            // that aren't already specified in the options we were
	            // given. We then write back the merged results into the
	            // original options object so the caller gets our changes.

	            $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

	            // Hook into the point in time immediately after
	            // the slideshow attaches it's behaviors, so
	            // we can attach our own behaviors.

	            slideshow.bind( "attach-behavior", function() {
	                plugin.attachBehavior( slideshow );
	            });
	        },

	        attachBehavior: function( slideshow ) {
	            var plugin = this,
	                opts = slideshow.options,
	                isHorz = ( opts.transitionStyle === "horizontal" ),
	                slides = slideshow.slides,
	                $slideEles = slides.$element,
	                $clip = slideshow._findWidgetElements( "." + opts.clipClassName ),
	                $view = slideshow._findWidgetElements( "." + opts.viewClassName ),
	                clipWidth = $clip.width(),
	                clipHeight = $clip.height(),
	                offsetSize = isHorz ? clipWidth : clipHeight,
	                offset = 0,
	                viewProps = {
	                        top: "0",
	                        left: "0"
	                    };

	            // We position the view relative to the clip so make sure
	            // the clip has a positioning context on it.

	            if ( $clip.css( "position" ) !== "absolute" ) {
	                $clip.css( "position", "relative" );
	            }

	            // Make sure the view can be positioned.

	            if ( $view.css( "position" ) !== "absolute" ) {
	                viewProps[ "position" ] = "relative";
	            }

	            slideshow._fstp$Clip = $clip;
	            slideshow._fstp$View = $view;
	            slideshow._fstpStyleProp = isHorz ? "left" : "top";
	            slideshow._fstpStylePropZero = isHorz ? "top" : "left";

	            // Attach some listeners to the slideshow's internal
	            // panel-group widget that manages which slide is showing.
	            // We want to know whenever it hides or shows a slide so
	            // we can fire off a transition for them.

	            slides
	                .bind( "wp-panel-show", function( e, data ) {
	                    plugin._goToSlide( slideshow, data.panel );
	                });

	            // We need to know whenever a previous/next request is
	            // made so that we can perform a wrap-around transition
	            // if necessary.

	            slideshow._fstpRequestType = null;

	            slideshow
	                .bind( "wp-slideshow-before-previous wp-slideshow-before-next", function( e ) {
	                    slideshow._fstpRequestType = e.type.replace( /.*-/, "" );
	                    slideshow._fstpOldActiveIndex = slideshow.slides.activeIndex;
	                })
	                .bind( "wp-slideshow-previous wp-slideshow-next", function( e ) {
	                    slideshow._fstpRequestType = null;
	                    slideshow._fstpOldActiveIndex = -1;
	                });

	            // Position each slide within the slides-container
	            // to give the appearance of a film-strip.

	            var prop = slideshow._fstpStyleProp,
	                propZero = slideshow._fstpStylePropZero;

	            for ( var i = 0; i < $slideEles.length; i++ ) {
	                var style = $slideEles[ i ].style;

	                style[ propZero ] =       "0";
	                style[ prop ]             =       offset + "px";
	                style[ "margin" ] =       "0";
	                style[ "position" ] = "absolute";

	                offset += offsetSize;
	            }

	            viewProps[ isHorz ? "width"      : "height" ] = offset + "px";
	            viewProps[ isHorz ? "height" : "width"      ] = ( isHorz ? clipHeight : clipWidth ) + "px";

	            // If there is no active element, position the view offscreen.

	            if ( !slides.activeElement ) {
	                viewProps[ prop ] = ( isHorz ? clipWidth : clipHeight ) + "px";
	                viewProps[ propZero ] = "0";
	            }

	            // We need to make sure that the view has overflow:visible to accomodate
	            // the wrap-around scenario where we temporarily place a slide before the first
	            // or after the last slide.

	            viewProps[ "overflow" ] = "visible";

	            $view.css( viewProps );

	            plugin._goToSlide( slideshow, slides.activeElement );
	        },

	        _goToSlide: function( slideshow, slideEle ) {
	            if ( slideshow ) {
	                var $slide = $( slideEle),
	                    $view = slideshow._fstp$View,
	                    prop = slideshow._fstpStyleProp,
	                    offsetEdge = ( prop === "left" ) ? "offsetLeft" : "offsetTop",
	                    offsetDimension =      ( prop === "left" ) ? "offsetWidth" : "offsetHeight",
	                    viewOffset = slideEle ? -slideEle[ offsetEdge ] : slideshow._fstp$Clip[ 0 ][ offsetDimension ],
	                    props = {};

	                props[ prop ] = viewOffset + "px";

	                // Check to see if we should do a wrap-around animation.

	                var reqType = slideshow._fstpRequestType,
	                    oldActiveIndex = slideshow._fstpOldActiveIndex;

	                if ( reqType && oldActiveIndex !== -1 ) {
	                    var activeIndex = slideshow.slides.activeIndex,
	                        lastIndex = slideshow.slides.$element.length - 1;

	                    if ( activeIndex !== oldActiveIndex ) {
	                        var posChange = 0;

	                        // Verify the oldActiveIndex and current activeIndex
	                        // against the request type, just in case there is some
	                        // slide randomizer plugin in effect. We really only want
	                        // to wrap-around when going from start-to-end or end-to-start.

	                        if ( reqType === "previous" && oldActiveIndex === 0 && activeIndex === lastIndex ) {
	                            // Calculate the offset that positions the last slide before the first slide.

	                            posChange = -slideEle[ offsetDimension ];
	                        } else if ( reqType === "next" && oldActiveIndex === lastIndex && activeIndex === 0 ) {
	                            // Calculate the offset that positions the 1st slide after the last slide.

	                            var prevSlide = slideshow.slides.$element[ oldActiveIndex ];
	                            posChange = prevSlide[ offsetEdge ] + prevSlide[ offsetDimension ];
	                        }

	                        if ( posChange ) {
	                            // Update our animation props object so that we animate to
	                            // the new wrap-around position for the current slide.

	                            props[ prop ] = -posChange + "px";

	                            // Move the current slide now. We will reset it back to its original
	                            // position after our transition animation.

	                            $slide.css( prop, posChange + "px" );
	                        }
	                    }
	                }

	                $view

	                    // Force any animation running for the given slide
	                    // to jump to its end. This allows any callbacks
	                    // registered on the animation to fire.

	                    .stop( false, true )

	                    // Kick off an animation that scrolls the filmstrip.

	                    .animate( props, slideshow.options.transitionDuration, function() {
	                        if ( posChange ) {
	                            // We just completed a wrap-around animation, move the slide we
	                            // just transitioned to, back to its original position.

	                            $slide.css( prop, -viewOffset + "px" );

	                            // Now re-position the view so that it is displaying the
	                            // current slide in its new position.

	                            $view.css( prop, viewOffset + "px" );
	                        }
	                    });
	            }
	        }
	    };

	    //////////////////// Image Include Plugin ////////////////////

	    ContentSlideshow.slideImageIncludePlugin = {
	        defaultOptions: {
	                imageIncludeClassName: "wp-slideshow-slide-image-include",
	                slideLoadingClassName: "wp-slideshow-slide-loading"
	            },

	        initialize: function( slideshow, options ) {
	            var plugin = this;

	            // Resolve the options for this widget. The idea here is that we only want to override props
	            // that aren't already specified in the options we were      given. We then write back the merged
	            // results into the original options object so the caller gets our changes.

	            $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

	            // Create an image loader and store it on the slideshow.

	            slideshow._cssilLoader = new ImageLoader();

	            // Listen for the slideshow's attach-behavior notification so
	            // we can hook in our own behaviors.

	            slideshow.bind( "attach-behavior", function() {
	                plugin._attachBehavior( slideshow );
	            });
	        },

	        _attachBehavior: function( slideshow ) {
	            var plugin = this,
	                loader = slideshow._cssilLoader,

	                // Find the slides within the slideshow.

	                $slides = slideshow._findWidgetElements( "." + slideshow.options.slideClassName ),
	                count = $slides.length,

	                // Find the image-include elements within the slideshow.

	                imageIncludeSelector = "." + slideshow.options.imageIncludeClassName,

	                // We'll place this class name on every slide so we can show
	                // a loading indicator.

	                slideLoadingClassName = slideshow.options.slideLoadingClassName,

	                callback = function( src, w, h, data ) { plugin._handleImageLoad( slideshow, src, w, h, data ); };

	            for ( var i = 0; i < count; i++ ) {
	                var $slide = $slides.eq( i ),
	                    $ele = $slide.find( imageIncludeSelector );
	                    ele = $ele[ 0 ];

	                if ( ele ) {
	                    // Grab the href off the link. If this isn't a link then check
	                    // for a data-src attribute.

	                    var src = ele.href || $ele.data( "src" );
	                    if ( src ) {

	                            // Stuff any include data attribute values into the
	                            // data object we are going to pass to the image-loader.
	                            // When the image actually loads, we'll use this data to
	                            // set attributes on the image element we create to replace
	                            // the actual include element.

	                        var data = {
	                                    id: $ele.data( "id" ) || "",
	                                    width: $ele.data( "width" ),
	                                    height: $ele.data( "height" ),
	                                    $ele: $ele,
	                                    $slide: $slide
	                                };

	                        // Hide the include link.

	                        ele.style.visibility = "hidden";

	                        // Add a request for this image to our image-loader.

	                        loader.add( src, { callback: callback, data: data } );

	                        // Mark the slide as loading.

	                        $slide.addClass( slideLoadingClassName );
	                    }
	                }
	            }

	            // The slideshow is all done initializing, so kick-off
	            // any image-include requests.

	            slideshow._cssilLoader.start();
	        },

	        _handleImageLoad: function( slideshow, src, w, h, data ) {
	            data.$ele.replaceWith('<img id="' + ( data.id || '' ) + '" src="' + src + '" width="' + ( data.width || w ) + '" height="' + ( data.height || h ) + '">');
	            data.$slide.removeClass( slideshow.options.slideLoadingClassName );
	        }
	    };

	    //////////////////// Play Once Plugin ////////////////////

	    ContentSlideshow.playOncePlugin = {
	        defaultOptions: {
	                playOnce: false
	            },

	        initialize: function( slideshow, options ) {
	            var plugin = this;

	            // When the slideshow play-mode is started, we track
	            // the number of slides that are within the slideshow.

	            slideshow._plpNumSlides = 0;

	            // When the slideshow play-mode is started, we start
	            // tracking the number of slides that are shown. Once
	            // our count is equivalent to the number of slides,
	            // play-mode is stopped. We do it this way because we
	            // can't just rely on a sequential visit to each slide
	            // due to the use of the play-shuffle plugin.

	            slideshow._plpSlideCount = 0;

	            // Listen for the slideshow's attach-behavior notification so
	            // we can hook in our own behaviors.

	            slideshow.bind( "attach-behavior", function() {
	                plugin._attachBehavior( slideshow );
	            });
	        },

	        _attachBehavior: function( slideshow ) {
	            // Boolean value that determines whether or not our play-count
	            // is enabled or not.

	            var enabled = false;

	            // Attach a play handler so that we can turn on play-count tracking.

	            slideshow.bind( 'wp-slideshow-play', function( e, data ) {
	                // If the slideshow doesn't loop forever, then
	                // go ahead and turn on our play-count tracking.

	                if ( slideshow.options.playOnce ) {
	                    // Initialize the slidecount.

	                    slideshow._plpSlideCount = 1;

	                    // Cache the number of slides we need to see
	                    // before we call stop.

	                    slideshow._plpNumSlides = slideshow.slides.$element.length;

	                    // Turn on our play-count tracking.

	                    enabled = true;
	                }
	            });

	            // Attach a stop handler so that we can turn off play-count tracking.

	            slideshow.bind( 'wp-slideshow-stop', function( e, data ) {
	                // Turn off our play-count tracking.

	                enabled = false;
	            });

	            // Attach a show handler on the slides so that we can count the
	            // number of slides that are shown during play-mode.

	            slideshow.slides.bind( 'wp-panel-show',function() {
	                // We stop the slideshow when the play-count feature is enabled,and
	                // our play-count reaches the number of slides within the slideshow.
	                // We also stop the slideshow if a slide is told to show and it was
	                // *NOT* triggered by the slideshow timer. This would indicate that
	                // a user gesture caused a change in the current slide being shown.s

	                if ( enabled && ( !slideshow._ssTimerTriggered || ++slideshow._plpSlideCount >= slideshow._plpNumSlides ) ) {
	                    enabled = false;
	                    slideshow.stop();
	                }
	            });
	        }
	    };

	    //////////////////// Shuffle Play Plugin ////////////////////

	    ContentSlideshow.shufflePlayPlugin = {
	        defaultOptions: {
	                randomDefaultIndex: true
	            },

	        initialize: function( slideshow, options ) {
	            var plugin = this;

	            // The idea here is that we only want to override props
	            // that aren't already specified in the options we were
	            // given. We then write back the merged results into the
	            // original options object so the caller gets our changes.

	            $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

	            // This is an array that we use to randomize slide indexes.
	            // We use an array as opposed to calulating a random index on
	            // the fly when next() is called, to make sure that we actually
	            // display *every* slide before we cycle.

	            slideshow._shuffleArray = [];

	            // After we randomize the slide indexes, we create a quick
	            // lookup dictionary that tells us what the next shuffle
	            // order index should be for any slide.

	            slideshow._shuffleNextDict = {};

	            // We override the slideshow's _next() method so that we can
	            // randomize the next slide when the slideshow is playing. We
	            // tuck away the original _next() method so that we can call it
	            // if we aren't in slideshow play mode.

	            slideshow._realNext = slideshow._next;
	            slideshow._next = function() { plugin._handleNext( slideshow ); };

	            // We keep track of the number of slides that have been played
	            // in slideshow mode. When this count reaches the slide count,
	            // we re-shuffle again.

	            slideshow._shufflePlayCount = 0;

	            // Every time the slideshow is played, we want to reshuffle the
	            // slide play order.

	            slideshow.bind( 'wp-slideshow-before-play', function( e, data ) {
	                return plugin._reshuffle( slideshow );
	            });

	            // We want to generate a random default slide index if the user
	            // has not specified a default index. The actual index will be
	            // generated just before the behavior attachment phase.

	            if ( options.randomDefaultIndex && typeof options.defaultIndex === 'undefined' ) {
	                slideshow.bind( 'before-attach-behavior', function( e ) {
	                    // Because we are being invoked before the the slideshow widget's
	                    // attachBehavior() method, we have to manually search for the slide
	                    // elements ourselves.

	                    var numSlides = slideshow._findWidgetElements( "." + slideshow.options.slideClassName ).length,

	                        // Generate a random integer between 0 and the last slide index.

	                        i = Math.floor( Math.random() * numSlides );

	                    // Set the default index to the random index we just calculated.
	                    // Make sure to clip the value of the random index so that it
	                    // is always within the valid range.

	                    slideshow.options.defaultIndex = i >= numSlides ? numSlides - 1 : i;
	                });
	            }
	        },

	        _fisherYatesArrayShuffle: function( arr ) {
	            if ( arr && arr.length ) {
	                var i = arr.length;
	                while ( --i ) {
	                    var j = Math.floor( Math.random() * ( i + 1 ) ),
	                        tmp = arr[ j ];
	                    arr[ j ] = arr[ i ];
	                    arr[ i ] = tmp;
	                }
	            }
	        },

	        _reshuffle: function( slideshow ) {
	            var arr = slideshow._shuffleArray,
	                dict = {},
	                numSlides = slideshow.slides.$element.length;

	            if ( arr.length !== numSlides ) {
	                // The size of our shuffle array has to match
	                // the number of slides. If there is a mismatch,
	                // re-initialize the shuffle array.

	                arr.length = 0;
	                for ( var i = 0; i < numSlides; i++ ) {
	                    arr[ i ] = i;
	                }
	            }

	            // Shuffle the values in the array.

	            this._fisherYatesArrayShuffle( arr );

	            // Now build up a dictionary that given a slide index,
	            // tells us what the 'next' slide in our shuffle order
	            // would be.

	            for ( var i = 0; i < numSlides; i++ ) {
	                dict[ arr[ i ] ] = arr[ ( i + 1 )      % numSlides ];
	            }

	            slideshow._shuffleNextDict = dict;
	            slideshow._shufflePlayCount = 0;
	        },

	        _handleNext: function( slideshow ) {
	            if ( slideshow.isPlaying() ) {
	                // The slideshow is in play mode, lookup the next slide to
	                // go to based on the current active index and call the slideshow's
	                // goTo() method.

	                slideshow._goTo( slideshow._shuffleNextDict[ slideshow.slides.activeIndex ] || 0 );

	                // If we've seen all the slides, re-shuffle the indexes so we get
	                // a different order for the next cycle.

	                if ( ++slideshow._shufflePlayCount >= slideshow.slides.$element.length ) {
	                    this._reshuffle( slideshow );
	                }

	            } else {
	                // The slideshow isn't playing so just call the slideshow's
	                // original next method.

	                slideshow._realNext();
	            }
	        }
	    };

	    //////////////////// Toggle Play Plugin ////////////////////

	    ContentSlideshow.togglePlayPlugin = {
	        defaultOptions: {},

	        initialize: function( slideshow, options ) {
	            // Add a listener on the slideshow so that we can prevent
	            // a play() request if necessary.

	            slideshow.bind( 'wp-slideshow-before-play', function( e, data ) {
	                if ( slideshow.isPlaying() ) {
	                    slideshow.stop();
	                    e.preventDefault();
	                }
	            });

	            // The default implementation of the content-slideshow places a
	            // playing class on the slideshow element itself whenever the slideshow
	            // mode is turned on. Some folks may want this class to go directly
	            // on the play button instead of relying on a contextual selector.
	            // Listen for a successful play/stop request and add/remove the
	            // playing class directly on the play button element.

	            slideshow.bind( 'wp-slideshow-play', function( e, data ) {
	                if ( slideshow.$playBtn ) {
	                    slideshow.$playBtn.addClass( slideshow.options.playingClassName );
	                }
	            });

	            slideshow.bind( 'wp-slideshow-stop', function( e, data ) {
	                if ( slideshow.$playBtn ) {
	                    slideshow.$playBtn.removeClass( slideshow.options.playingClassName );
	                }
	            });
	        }
	    };

	    //////////////////// Swipe Plugin ////////////////////

	    ContentSlideshow.swipePlugin = {
	        defaultOptions: {
	            swipeEvents: {
	                'wp-swipe-slideshow-prev': {
	                    xThreshold: 60
	                },
	                'wp-swipe-slideshow-next': {
	                    xThreshold: -60
	                }
	            }
	        },

	        initialize: function( slideshow, options ) {
	            var plugin = this;

	            // The idea here is that we only want to override props
	            // that aren't already specified in the options we were
	            // given. We then write back the merged results into the
	            // original options object so the caller gets our changes.

	            $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

	            // Re-initialize the tracker on window's resize incase media-queries
	            // cause dimensions to shift drastically
	            $( window ).on( 'resize', function() {
	                plugin.initTracker( slideshow, options );
	            });

	            $( slideshow ).on( 'attach-behavior', function() {
	                plugin.initTracker( slideshow, options );
	            });
	        },

	        initTracker: function( slideshow, options ) {
	            if ( slideshow.swipeTracker ) {
	                slideshow.swipeTracker.destroy();
	                $( slideshow.swipeTracker.element ).off( 'wp-swipe-slideshow-next' );
	                $( slideshow.swipeTracker.element ).off( 'wp-swipe-slideshow-prev' );
	            }
	            slideshow.swipeTracker = new SwipeTracker( slideshow.$element, {
	                angleThreshold: 20,
	                swipeEvents: options.swipeEvents
	            });

	            $( slideshow.swipeTracker.element ).on( 'wp-swipe-slideshow-next', function() {
	                slideshow.next();
	            });
	            $( slideshow.swipeTracker.element ).on( 'wp-swipe-slideshow-prev', function() {
	                slideshow.previous();
	            });
	        }

	    };

	    //////////////////// Next Prev Plugin ////////////////////

	    ContentSlideshow.nextPrevPlugin = {
	        defaultOptions: {
	            nextClassName: 'wp-slideshow-next',
	            prevClassName: 'wp-slideshow-prev'
	        },

	        initialize: function( slideshow, options ) {
	            var plugin = this;

	            // The idea here is that we only want to override props
	            // that aren't already specified in the options we were
	            // given. We then write back the merged results into the
	            // original options object so the caller gets our changes.

	            $.extend( options, $.extend( {}, plugin.defaultOptions, options ) );

	            $( slideshow ).on( 'attach-behavior', function() {
	                plugin.attachBehavior( slideshow );
	            });
	        },

	        attachBehavior: function( ss ) {
	            var plugin = this,
	                $view = ss.$element.find( '.' + ss.options.viewClassName ),
	                $slides = ss.slides.$element,
	                oldIndex = ss.slides.activeIndex;

	            $( ss.slides ).on( 'wp-panel-before-show', function( evt, data ) {
	                ss._resetActiveTracking();

	                var $slides = ss.$element.find( '.' + ss.options.slideClassName ),
	                    activeIndex = ss.slides.activeIndex,
	                    slideCount = $slides.length,
	                    nextEvent = data.panelIndex - oldIndex == 1 || ( data.panelIndex - oldIndex ) == ( 1 - slideCount );

	                $slides.removeClass( ss.options.nextClassName + ' ' + ss.options.prevClassName );
	                $view.removeClass( ss.options.nextClassName + ' ' + ss.options.prevClassName );
	                if ( nextEvent ) {
	                    $next = $slides.eq( ( activeIndex + 2 ) % slideCount );
	                    $prev = $slides.eq( ( activeIndex ) % slideCount );
	                    $next.addClass( ss.options.nextClassName );
	                    $prev.addClass( ss.options.prevClassName );
	                    $view.addClass( ss.options.nextClassName );
	                } else {
	                    $next = $slides.eq( ( activeIndex ) % slideCount );
	                    $prev = $slides.eq( ( activeIndex - 2 ) % slideCount );
	                    $prev.addClass( ss.options.nextClassName );
	                    $next.addClass( ss.options.prevClassName );
	                    $view.addClass( ss.options.prevClassName );
	                }
	                oldIndex = activeIndex;
	            });
	        }

	    };

	    //////////////////// View Dimension Plugin ////////////////////

	    ContentSlideshow.viewDimensionPlugin = {
	        defaultOptions: {
	            viewDimension: 'width'
	        },

	        initialize: function( slideshow, options ) {
	            var plugin = this;
	            this.loader = new ImageLoader();
	            this.options = $.extend( {}, this.defaultOptions, options, slideshow.defaultOptions );
	            $( slideshow ).on( 'attach-behavior', function() {
	                plugin.attachBehavior( slideshow );
	            });
	        },

	        attachBehavior: function( slideshow ) {
	            var plugin = this,
	                $images = slideshow.slides.$element.find( 'img' );
	            this.imageCount = $images.length;
	            this.loadedCount = 0;
	            $images.each( function() {
	                $( this ).load( function() {
	                    plugin.imageLoaded( slideshow );
	                });
	            });
	        },

	        imageLoaded: function( slideshow ) {
	            if ( this.loadedCount < this.imageCount - 1 ) {
	                this.loadedCount++;
	                return;
	            }
	            this.adjustDimension( slideshow );
	        },

	        adjustDimension: function( slideshow ) {
	            var $view = slideshow.$element.find( '.' + this.options.viewClassName ),
	                $slides = $view.find( '.' + this.options.slideClassName );
	            if ( this.options.viewDimension == 'width' ) {
	                var totalWidth = 0;
	                $slides.each( function() {
	                    totalWidth += $( this ).outerWidth();
	                });
	                $view.width( totalWidth );
	            } else {
	                var totalHeight = 0;
	                $slides.each( function() {
	                    totalHeight += $( this ).outerHeight();
	                });
	                $view.height( totalHeight );
	            }
	        }

	    };

	    //////////////////// Carousel Plugin ////////////////////

	    ContentSlideshow.carouselPlugin = {
	        initialize: function( slideshow, options ) {
	            // require nextPrevPlugin
	            var nextPrev = ContentSlideshow.nextPrevPlugin;
	            nextPrev.initialize( slideshow, options );

	            var plugin = this;

	            this.options = $.extend( {}, slideshow.defaultOptions, options );

	            slideshow.bind( 'attach-behavior', function() {
	                plugin.attachBehavior( slideshow );
	            });
	        },

	        attachBehavior: function( slideshow ) {
	            // The carousel slideshow has to have the syncTabsByPanelIdPlugin
	            // because the order of the panels are inconsistent
	            var thumbs = slideshow.slides.tabGroups[0],
	                tabsPlugin = PanelGroup.syncTabsByPanelIdPlugin,
	                dynamicButtonsPlugin = RadioGroup.dynamicButtonsPlugin;

	            slideshow.slides.plugins.push( tabsPlugin );
	            tabsPlugin.initialize( slideshow.slides, slideshow.slides.options );

	            if ( thumbs ) {
	                thumbs.plugins.push( dynamicButtonsPlugin );
	                dynamicButtonsPlugin.initialize( thumbs, thumbs.options );
	            }

	            var plugin = this,
	                opts = slideshow.options,
	                $slides = slideshow.slides.$element;

	            // TODO: A better way of exposing the original unadjusted slides
	            var originalSlides = $slides.clone();
	            slideshow.getUnadjustedIndex = function( slide ) {
	                for (var i = 0 ; i < originalSlides.length; i++){
	                    if (slide.id == originalSlides[i].id){
	                        return i;
	                    }
	                }
	                return -1;
	            };

	            // Set up dimensions and center active slide
	            // Bind this method to resize
	            slideshow.initDimensions = function() {
	                plugin.initDimensions( slideshow );
	            };
	            plugin.initDimensions( slideshow );
	            $( window ).on( 'resize', function() {
	                plugin.initDimensions( slideshow );
	            });

	            slideshow.bind( 'wp-insert-panel', function(evt,data) {
	                plugin.initDimensions( slideshow );
	            });

	            // Set up bool to lock transitions while in progress
	            slideshow._cpssIsTransitioning = false;
	            slideshow.bind( 'wp-slideshow-before-first wp-slideshow-before-last wp-slideshow-before-previous wp-slideshow-before-next wp-slideshow-before-goTo', function( evt ) {
	                plugin.checkIsTransitioning( evt, slideshow );
	            });

	            // Perform actual transition
	            $( slideshow.slides ).on( 'wp-panel-before-show', function( evt, data ) {
	                // constant-large and constant-small are used to initialize our widget without animation
	                // We remove them on the first show event to restore normal behavior
	                // TODO - make class names an option
	                $slides.removeClass( 'wp-slideshow-constant-large wp-slideshow-constant-small' );

	                plugin.slideTo( slideshow, data.panelIndex );
	            });

	            // After the transition is done, we balance slides on each side of the active slide
	            var $view = slideshow.$element.find( '.' + opts.viewClassName );
	            $view.on( 'webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend webkitAnimationEnd oAnimationEnd msAnimationEnd animationend', function( evt ) {
	                if ( !$view.hasClass( 'wp-slideshow-disable-transition' ) ) {
	                  plugin.shiftSlides( slideshow );
	                }
	                slideshow._cpssIsTransitioning = false;
	            });
	        },

	        initDimensions: function( slideshow ) {
	            var plugin = this,
	                opts = slideshow.options,
	                $view = slideshow.$element.find( '.' + opts.viewClassName ),
	                $slides = slideshow.slides.$element,
	                slideCount = $slides.length,
	                $slide, oldIndex = 0, width = 0;

	            slideshow._cpSlideWidth = 0;
	            slideshow._cpSlideMargin = 0;
	            slideshow._cpViewPadding = parseInt( $view.css( 'padding-left' ) );
	            slideshow._cpClipWidth = slideshow.$element.find( '.' + opts.clipClassName ).width();

	            // Set width of the view
	            $slides.each( function() {
	                var $this = $( this );
	                width += $this.outerWidth() + parseInt( $this.css( 'margin-left' ) ) + parseInt( $this.css( 'margin-right' ) );

	                if ( slideshow._cpSlideWidth === 0 || $this.outerWidth() < slideshow._cpSlideWidth ) {
	                    slideshow._cpSlideWidth = $this.outerWidth();
	                    slideshow._cpSlideMargin = parseInt( $this.css( 'margin-left' ) );
	                }

	                if ( $this.hasClass( 'wp-panel-active' ) ) {
	                    slideshow._cpActiveSlideWidth = $this.outerWidth();
	                }
	            });
	            $view.width( width );
	            slideshow.$view = $view;

	            // Move appropriate slides around within carousel
	            plugin.shiftSlides( slideshow );
	        },

	        // Shift slides is used after each show and on initialize to make sure
	        // the number of slides is balances on the left and right of the active slide
	        shiftSlides: function( slideshow ) {
	            var opts = slideshow.options,
	                $view = slideshow.$element.find( '.' + opts.viewClassName ),
	                $slides = slideshow.$element.find( '.' + opts.slideClassName ),
	                activeIndex = slideshow.slides.activeIndex,
	                domIndex = -1,
	                $slide, $left, $right,
	                leftLen, rightLen, minSlides;

	            domIndex = activeIndex;

	            $left = $slides.slice( 0, domIndex );
	            $right = $slides.slice( domIndex + 1 );
	            leftLen = $left.length ? $left.length : 0;
	            rightLen = $right.length ? $right.length : 0;
	            minSlides = Math.floor( ( leftLen + rightLen ) / 2 );

	            if ( leftLen > rightLen ) {
	                for ( var i = 0; i < ( minSlides - rightLen ); i++ ) {
	                    $slide = $view.find( '.' + opts.slideClassName + ':first' );
	                    $slide.remove();
	                    $view.append( $slide );
	                }
	            } else if ( rightLen > leftLen ) {
	                for ( var i = 0; i < ( minSlides - leftLen ); i++ ) {
	                    $slide = $view.find( '.' + opts.slideClassName + ':last' );
	                    $slide.remove();
	                    $view.prepend( $slide );
	                }
	            }

	            slideshow._resetActiveTracking();
	            activeIndex = slideshow.slides.activeIndex;

	            this.slideTo( slideshow, activeIndex, true );
	        },

	        // slideTo calculates the offset of our view and changes our transform
	        // if skipTransition is true we use instantTransform which temporary disables transitions
	        // while executing the change
	        slideTo: function( slideshow, index, skipTransition ) {
	            var plugin = this,
	                width = 0,
	                slideSelector = '.' + slideshow.options.slideClassName,
	                $slides = slideshow.$element.find( slideSelector ),
	                domIndex = index;

	            // Count the number of slides before the active slide
	            for ( var i = 0; i < domIndex; i++ ) {
	                width -= slideshow._cpSlideWidth + slideshow._cpSlideMargin * 2;
	            }

	            // All slides on the left, the active slide's left margin and half of its width get us to 0
	            // Then we add back half of the clip's width
	            slideshow._cpSlideshowOffset = width - slideshow._cpViewPadding - slideshow._cpSlideMargin - slideshow._cpActiveSlideWidth / 2 + slideshow._cpClipWidth / 2;

	            if ( skipTransition ) {
	                Utils.instantTransform( slideshow.$view, 'translateX( ' + slideshow._cpSlideshowOffset + 'px)', 'wp-slideshow-disable-transition' );
	            } else {
	                Utils.setElementTransform( slideshow.$view, 'translateX( ' + slideshow._cpSlideshowOffset + 'px)' );
	            }
	        },

	        checkIsTransitioning: function( evt, slideshow ) {
	              // If we're animating, we want to block any requests
	              // to move on to the next slide until we're done.

	              if ( slideshow._cpssIsTransitioning ) {
	                  // Calling prevent default on the event prevents
	                  // the slideshow from navigating.

	                  evt.preventDefault();
	              } else {
	                  // Set our animation flag. It will get turned off in our
	                  // animation end handler.

	                  slideshow._cpssIsTransitioning = true;
	              }
	        }
	    };

	    //////////////////// Disable Thumbs Plugin ////////////////////

	    ContentSlideshow.disableThumbsPlugin = {
	        initialize: function( slideshow, options ) {
	            var plugin = this;
	            this.options = $.extend( {}, slideshow.DefaultOptions, options );
	            slideshow.bind( 'attach-behavior', function() {
	                if ( plugin.options.thumbsDisabled ) {
	                    slideshow.tabs.disabled( true );
	                }
	            });
	        }
	    };

	    //////////////////// Collection Browser Plugin ////////////////////

	    var nextCollectionBrowserDestinationId = 0;

	    ContentSlideshow.collectionBrowserPlugin = {

	        defaultOptions: {
	            injectionContainerClassName:   "publication-viewer",
	            destinationContainerClassName: "wp-collection-browser"
	        },

	        initialize: function( widget, options ) {
	            var plugin = this;

	            // merge the user provided options with our defaults
	            plugin.options = {};
	            $.extend( plugin.options, $.extend( {}, plugin.defaultOptions, options ) );

	            // extract the data from the source widget
	            widget.bind( 'before-transform-markup', function( e ) {
	                plugin._extractData( widget );
	            });

	            // pass the data to the destination widget
	            widget.bind( 'ready', function( e ) {
	                plugin._createDestinationWidget( widget );
	            });
	        },

	        _extractData: function( widget ) {
	            // copy the array of items in the source widget

	            // find the slideshow images
	            var sourceImages = widget.$element.find( "." + widget.options.clipClassName + " img" );
	            var sourceImagesLength = sourceImages.length;

	            // create a new image with just the src property from each of those source images
	            var newImages = Array( sourceImagesLength );

	            for ( var i = 0; i < sourceImagesLength; i++ ){
	                var image = document.createElement( "img" );
	                image.src = sourceImages[i].src;
	                newImages[i] = image;
	            }

	            // save the new images
	            this.dataItems = newImages;
	        },

	        _createDestinationWidget: function( widget ) {
	            var plugin = this,
	                pluginOptions = plugin.options,
	                dest = pluginOptions.destinationContainerClassName,
	                divId = "destinationWidget" + nextCollectionBrowserDestinationId++;

	            // inject a div where we can create the destination widget
	            var $div = $( '<div id="' + divId + '" class="' + dest + ' wp-hide"></div>' );
	            $div.appendTo( "." + pluginOptions.injectionContainerClassName );

	            // create the destination widget and pass in the source widget's data
	            var $collectionBrowser = $( "#" + divId ).wpCollectionBrowser( { sourceArray: plugin.dataItems } );
	            var destinationWidget = $collectionBrowser.data( "wpCollectionBrowser" );

	            // Connect behaviors between the source and dest widget

	            // attach a mouse down/up handler to zoom in, but only if the mouse motion didn't look like a drag
	            var mainView = widget.$element.find( "." + widget.options.clipClassName );

	            // TODO: This is a temporary hack where we manually calculate the position difference of
	            //       mousedown and mouseup on desktop to decide if this was a click or a swipe.
	            //
	            //       We'll have a task coming up soon around changing the interaction mode of components
	            //       depending on if the user is on a desktop or mobile device.  For example the swipe
	            //       interactions aren't natural on desktop. If we decide to remove all swiping on desktop
	            //       we should revisit this code at which point hopefully all that is needed is the vclick.

	            if ( WebPro.touchEnabled ){
	                // on touch devices just listen for vclick
	                mainView.bind( "vclick", function( e ) {
	                    destinationWidget.showWidget();
	                });
	            } else {
	                // on desktop need to calculate if it was a click or a swipe
	                mainView.bind( "vmousedown", function( mouseDownEvent ) {
	                    var mouseUpHandler = function( mouseUpEvent ) {
	                        var dragThreshold = 10;

	                        if ( ( Math.abs( mouseDownEvent.pageX - mouseUpEvent.pageX ) <= dragThreshold ) &&
	                             ( Math.abs( mouseDownEvent.pageY - mouseUpEvent.pageY ) <= dragThreshold ) ){
	                            destinationWidget.showWidget();
	                        }

	                        $( "body" ).unbind( "vmouseup", mouseUpHandler );
	                    };

	                    $( "body" ).bind( "vmouseup", mouseUpHandler);
	                });
	            }

	            var panelChangeEvent = "wp-panel-show";

	            // update the destination slide when the source widget's slide changes
	            widget.slides.bind( panelChangeEvent, function( event, data ) {
	                return plugin._sourceSlideChanged( widget, destinationWidget, event, data );
	            });

	            // update the source slide when the expanded's slide changes
	            destinationWidget.swipePanelGroup.bind( panelChangeEvent, function( event, data ) {
	                return plugin._destinationSlideChanged( widget, event, data );
	            });

	        },

	        _sourceSlideChanged: function( widget, destinationWidget, event, data ) {

	            // TODO: data.panelIndex reports incorrectly on a ContentSlideshow that uses
	            //       a CarouselPlugin.  For now we test to see if the unadjusted index is available
	            //       and use that, but the correct fix would be make the CarouselPlugin report the
	            //       correct unadjusted index by default.
	            var newIndex = 0;
	            if (widget.getUnadjustedIndex){
	                newIndex = widget.getUnadjustedIndex(data.panel);
	            } else {
	                newIndex = data.panelIndex;
	            }

	            destinationWidget.swipePanelGroup._postShowPanel( newIndex );
	        },

	        _destinationSlideChanged: function( sourceWidget, event, data ) {
	            if (sourceWidget.getUnadjustedIndex){
	                // TODO: ContentSlideshow widgets that have the CarouselPlugin
	                //       won't get their slides synchronized.
	            } else {
	                sourceWidget.slides.showPanel( data.panelIndex );
	            }
	        },

	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(6) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Widget ) {
	    var Form = Widget.build( 'Widget.Form', Widget, {
	        _widgetName: 'form',

	        defaultOptions: {
	            validationEvent: 'blur',
	            errorStateSensitivity: 'low',
	            ajaxSubmit: true,
	            onSubmit: undefined,
	            fieldWrapperClass: 'field',
	            formErrorClass: 'form-error',
	            formSubmittedClass: 'form-submitted',
	            formDeliveredClass: 'form-delivered',
	            focusClass: 'focus',
	            notEmptyClass: 'not-empty',
	            emptyClass: 'empty',
	            validClass: 'valid',
	            invalidClass: 'invalid',
	            requiredClass: 'required'
	        },

	        validationTypes: {
	            'always-valid': /.*/,

	            email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,

	            'min-8': /.{8}.*/,

	            alpha: /^[A-z\s]+$/,

	            numeric: /^[0-9]+$/,

	            phone: /^([0-9])?(\s)?(\([0-9]{3}\)|[0-9]{3}(\-)?)(\s)?[0-9]{3}(\s|\-)?[0-9]{4}(\s|\sext|\sx)?(\s)?[0-9]*$/,

	            url: /((([A-Za-z]{3,9}:(?:\/\/)?)?(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/,

	            time: function( $field ) {
	                var time = $field.val().replace( /[^0-9:APM]/g, '' );
	                if ( time.indexOf( ':' ) != -1 && time.match( /:/ ).length == 1 ) {
	                    var timeArr = time.split( ':' ),
	                        hour = parseInt( timeArr[0] ),
	                        minute = parseInt( timeArr[1] );

	                    if ( hour < 0 || hour > 24 ) {
	                        return true;
	                    }

	                    if ( minute < 0 || minute > 59 ) {
	                        return true;
	                    }
	                } else {
	                    return false;
	                }
	                $field.val( time );
	                return true;
	            }
	        },

	        _extractData: function() {
	            //shortening variable names
	            this.event = this.options.validationEvent;
	            this.errorSensitivity = this.options.errorStateSensitivity;
	            this.onSubmit = this.options.onSubmit;
	            this.classNames = {
	                focus: this.options.focusClass,
	                blur: this.options.emptyClass,
	                keydown: this.options.notEmptyClass
	            };
	        },

	        _attachBehavior: function() {
	            var self = this;

	            this.$element.find( 'input, textarea' ).each( function() {
	                if ( $( this ).val() != 'empty' ) {
	                    $( this ).removeClass( self.options.emptyClass );
	                }
	            });

	            this.$element.find( '.' + this.options.fieldWrapperClass ).each( function() {
	                var control = $( this ).find( 'input, textarea' );
	                if ( control.val() != '' ) {
	                    $( this ).addClass( self.classNames.keydown );
	                }
	            });

	            this.$element.on( 'focus focusin blur focusout keydown change propertychange', 'input, textarea', function(e) {
	                var className = self.classNames[ e.type ],
	                    focus = self.classNames[ 'focus' ],
	                    keydown = self.classNames[ 'keydown' ],
	                    blur = self.classNames[ 'blur' ],
	                    $this = $( this ),
	                    $field = $this.closest( '.' + self.options.fieldWrapperClass );

	                switch ( e.type ) {
	                    case 'focusin':
	                    case 'focus':
	                        $field.addClass( focus ).removeClass( blur );
	                        break;
	                    case 'focusout':
	                    case 'blur':
	                        $field.removeClass( focus );
	                        if ( $this.val() == '' ) {
	                            $field.addClass( blur ).removeClass( keydown );
	                        }
	                        break;
	                    case 'keydown':
	                        $field.addClass( className ).removeClass( blur );
	                        break;
	                    case 'change':
	                    case 'propertychange':
	                        if ( $this.val() != '' ) {
	                            $field.addClass( keydown ).removeClass( blur );
	                        } else {
	                            $field.addClass( blur ).removeClass( keydown );
	                        }
	                    default:
	                        break;
	                }
	            });

	            switch ( this.event ) {
	                case 'blur':
	                case 'keyup':
	                    this.$element.on( this.event, '.' + this.options.fieldWrapperClass + ' input, .' + this.options.fieldWrapperClass + ' textarea', function() {
	                        self._validate( $( this ).closest( '.' + self.options.fieldWrapperClass ) );
	                    });
	                case 'submit':
	                    this.$element.submit( function(e) {
	                        var idx = 0, formValid = true,
	                            $fields = self.$element.find( '.' + self.options.fieldWrapperClass );

	                        $fields.each( function() {
	                            formValid = self._validate( $( this ) ) && formValid;
	                        });

	                        if ( formValid ) {
	                            if ( self.onSubmit ) {
	                                self.onSubmit.call( this, e );
	                            }
	                            if ( self.options.ajaxSubmit ) {
	                                e.preventDefault();
	                                self._submitForm();
	                            }
	                        } else {
	                            e.preventDefault();
	                        }
	                    });
	                    break;
	                default:
	                    break;
	            }
	        },

	        _submitForm: function() {
	            var self = this,
	                submitted = this.options.formSubmittedClass,
	                delivered = this.options.formDeliveredClass,
	                error = this.options.formErrorClass,
	                allClasses = submitted + ' ' + delivered + ' ' + error,
	                buttons = this.$element.find( 'input[type=submit], button' );
	            $.ajax({
	                url: this.$element.attr( 'action' ),
	                type: 'post',
	                data: this.$element.serialize(),
	                beforeSend: function() {
	                    self.$element.removeClass( allClasses );
	                    self.$element.addClass( submitted );
	                    self.$element.find( '.' + self.options.fieldWrapperClass ).removeClass( self.options.focusClass );
	                    buttons.attr( 'disabled', 'disabled' );
	                },
	                success: function( response ) {
	                    self.$element.addClass( delivered ).removeClass( submitted );
	                    self.$element.find( 'input:not([type=submit]), textarea' ).each( function() {
	                        $( this ).val( '' );
	                    })
	                    buttons.removeAttr( 'disabled' );
	                },
	                error: function( response ) {
	                    self.$element.addClass( error ).removeClass( submitted )
	                    buttons.removeAttr( 'disabled' );
	                }
	            })
	        },

	        _validate: function( $field, requiredOnly ) {
	            var type = $field.attr( 'data-type' ) || 'always-valid';
	            var control = $field.find( 'input, textarea' );
	            var requiredOnly = requiredOnly || false;
	            var validObj = this.validationTypes[ type ];
	            var isRequired = $field.attr( 'data-required' ) === 'true';
	            var value = control.length > 1 ? this._getRadioValue( control ) : control.val();
	            var isEmpty = value == '';
	            var isValid = (validObj instanceof RegExp) ? Boolean( value.match( validObj ) ) : validObj( control );

	            if ( isRequired && isEmpty ) {
	                return this._switchState( 'required', $field );
	            }
	            if ( !isValid && !requiredOnly ) {
	                return this._switchState( 'invalid', $field );
	            }

	            return this._switchState( 'valid', $field );
	        },

	        _getRadioValue: function( $list ) {
	            var value = '';
	            $list.each( function( i, button ) {
	                if ( button.checked ) {
	                    value = button.value;
	                    return false;
	                }
	            });

	            return value;
	        },

	        _switchState: function( state, $field ) {
	            var valid = this.options.validClass,
	                invalid = this.options.invalidClass,
	                required = this.options.requiredClass,
	                allClasses = valid + ' ' + invalid + ' ' + required;

	            $field.removeClass( allClasses );
	            if ( state == 'required' || state == 'invalid' ) {
	                if ( state == 'invalid' ) {
	                    $field.addClass( invalid );
	                } else {
	                    $field.addClass( required );
	                    var requiredOnly = true;
	                }
	                if ( this.errorSensitivity != 'low' ) {
	                    var self = this,
	                        event;
	                    if ( this.errorSensitivity == 'high' ) {
	                        event = 'keyup';
	                    } else {
	                        //medium
	                        event = 'blur';
	                    }

	                    if ( !$field.data( 'error-state' ) ) {
	                        $field.data( 'error-state', true );
	                        $field.on( event, 'input, textarea', function() {
	                            self._validate( $field, requiredOnly );
	                        });
	                    }
	                }
	                return false;
	            }
	            if ( $field.data( 'error-state' ) ) {
	                if ( this.errorSensitivity == 'high' ) {
	                    if ( this.event != 'keyup' ) {
	                        $field.data( 'error-state', false ).find( 'input, textarea' ).unbind( 'keyup' );
	                    }
	                } else if ( this.errorSensitivity == 'medium' ) {
	                    //medium
	                    if ( this.event != 'blur' ) {
	                        $field.data( 'error-state', false ).find( 'input, textarea' ).unbind( 'blur' );
	                    }
	                }
	            }
	            $field.addClass( valid );
	            return true;
	        }
	    });

	    Widget.addWidgetConstructorAsjQueryPlugin( 'wpForm', Form );

	    return Form;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(6), __webpack_require__(20), __webpack_require__(47), __webpack_require__(49) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Widget, $, ImageLoader, fileUpload, canvasToBlob ) {
	    var ImageUpload = Widget.build( 'Widget.ImageUpload', Widget, {
	        _widgetName: 'image-upload',

	        defaultOptions: {
	          savePath: null,
	          autoDestroy: false,
	          formData: []
	        },

	        _attachBehavior: function() {
	          var self = this,
	              opts = this.options;

	          this.$input = this.$element;

	          this.$input.fileupload({
	            url: opts.savePath,
	            dataType: 'json',
	            formData: opts.formData,
	            add: function( evt, data ) {
	              self.beforeSave( data );
	              self.save( data );
	            },
	            done: function( evt, data ) {
	              self.afterSave( data.result.image );
	            },
	            fail: function( evt, data ) {
	              self.fail( data );
	            },
	            stop: function( evt, data ) {
	              if ( opts.autoDestroy ) {
	                  self.$input.fileupload( 'destroy' );
	              }
	            }
	          });
	        },

	        fail: function( data ) {
	          this.trigger( 'wp-image-upload-error' );

	          console.error( 'There was a problem saving one or more images' );
	        },

	        // Temporarily add in blob url
	        beforeSave: function( data ) {
	          var self = this,
	              url = URL.createObjectURL( data.files[0] ),
	              loader = new ImageLoader();

	          loader.add( url, {
	            callback: function() {
	              console.log(url);
	              self.trigger( 'wp-image-upload-blob-url', url );
	            }
	          });

	          loader.start();
	        },

	        // Save/upload image to backend api
	        save: function( data ) {
	          data.submit();
	        },

	        // Trigger event with saved image url
	        afterSave: function( image ) {
	          var self = this,
	              loader = new ImageLoader();

	          loader.add( image, {
	            callback: function() {
	              self.trigger( 'wp-image-upload-saved-url', image );
	            }
	          });

	          loader.start();
	        }
	    });

	    return ImageUpload;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * jQuery File Upload Plugin 5.40.3
	 * https://github.com/blueimp/jQuery-File-Upload
	 *
	 * Copyright 2010, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * http://www.opensource.org/licenses/MIT
	 */

	/* jshint nomen:false */
	/* global define, window, document, location, Blob, FormData */

	(function (factory) {
	    'use strict';
	    if (true) {
	        // Register as an anonymous AMD module:
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	            __webpack_require__(2),
	            __webpack_require__(48)
	        ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        // Browser globals:
	        factory(window.jQuery);
	    }
	}(function ($) {
	    'use strict';

	    // Detect file input support, based on
	    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
	    $.support.fileInput = !(new RegExp(
	        // Handle devices which give false positives for the feature detection:
	        '(Android (1\\.[0156]|2\\.[01]))' +
	            '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
	            '|(w(eb)?OSBrowser)|(webOS)' +
	            '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
	    ).test(window.navigator.userAgent) ||
	        // Feature detection for all other devices:
	        $('<input type="file">').prop('disabled'));

	    // The FileReader API is not actually used, but works as feature detection,
	    // as some Safari versions (5?) support XHR file uploads via the FormData API,
	    // but not non-multipart XHR file uploads.
	    // window.XMLHttpRequestUpload is not available on IE10, so we check for
	    // window.ProgressEvent instead to detect XHR2 file upload capability:
	    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
	    $.support.xhrFormDataFileUpload = !!window.FormData;

	    // Detect support for Blob slicing (required for chunked uploads):
	    $.support.blobSlice = window.Blob && (Blob.prototype.slice ||
	        Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

	    // The fileupload widget listens for change events on file input fields defined
	    // via fileInput setting and paste or drop events of the given dropZone.
	    // In addition to the default jQuery Widget methods, the fileupload widget
	    // exposes the "add" and "send" methods, to add or directly send files using
	    // the fileupload API.
	    // By default, files added via file input selection, paste, drag & drop or
	    // "add" method are uploaded immediately, but it is possible to override
	    // the "add" callback option to queue file uploads.
	    $.widget('blueimp.fileupload', {

	        options: {
	            // The drop target element(s), by the default the complete document.
	            // Set to null to disable drag & drop support:
	            dropZone: $(document),
	            // The paste target element(s), by the default the complete document.
	            // Set to null to disable paste support:
	            pasteZone: $(document),
	            // The file input field(s), that are listened to for change events.
	            // If undefined, it is set to the file input fields inside
	            // of the widget element on plugin initialization.
	            // Set to null to disable the change listener.
	            fileInput: undefined,
	            // By default, the file input field is replaced with a clone after
	            // each input field change event. This is required for iframe transport
	            // queues and allows change events to be fired for the same file
	            // selection, but can be disabled by setting the following option to false:
	            replaceFileInput: true,
	            // The parameter name for the file form data (the request argument name).
	            // If undefined or empty, the name property of the file input field is
	            // used, or "files[]" if the file input name property is also empty,
	            // can be a string or an array of strings:
	            paramName: undefined,
	            // By default, each file of a selection is uploaded using an individual
	            // request for XHR type uploads. Set to false to upload file
	            // selections in one request each:
	            singleFileUploads: true,
	            // To limit the number of files uploaded with one XHR request,
	            // set the following option to an integer greater than 0:
	            limitMultiFileUploads: undefined,
	            // The following option limits the number of files uploaded with one
	            // XHR request to keep the request size under or equal to the defined
	            // limit in bytes:
	            limitMultiFileUploadSize: undefined,
	            // Multipart file uploads add a number of bytes to each uploaded file,
	            // therefore the following option adds an overhead for each file used
	            // in the limitMultiFileUploadSize configuration:
	            limitMultiFileUploadSizeOverhead: 512,
	            // Set the following option to true to issue all file upload requests
	            // in a sequential order:
	            sequentialUploads: false,
	            // To limit the number of concurrent uploads,
	            // set the following option to an integer greater than 0:
	            limitConcurrentUploads: undefined,
	            // Set the following option to true to force iframe transport uploads:
	            forceIframeTransport: false,
	            // Set the following option to the location of a redirect url on the
	            // origin server, for cross-domain iframe transport uploads:
	            redirect: undefined,
	            // The parameter name for the redirect url, sent as part of the form
	            // data and set to 'redirect' if this option is empty:
	            redirectParamName: undefined,
	            // Set the following option to the location of a postMessage window,
	            // to enable postMessage transport uploads:
	            postMessage: undefined,
	            // By default, XHR file uploads are sent as multipart/form-data.
	            // The iframe transport is always using multipart/form-data.
	            // Set to false to enable non-multipart XHR uploads:
	            multipart: true,
	            // To upload large files in smaller chunks, set the following option
	            // to a preferred maximum chunk size. If set to 0, null or undefined,
	            // or the browser does not support the required Blob API, files will
	            // be uploaded as a whole.
	            maxChunkSize: undefined,
	            // When a non-multipart upload or a chunked multipart upload has been
	            // aborted, this option can be used to resume the upload by setting
	            // it to the size of the already uploaded bytes. This option is most
	            // useful when modifying the options object inside of the "add" or
	            // "send" callbacks, as the options are cloned for each file upload.
	            uploadedBytes: undefined,
	            // By default, failed (abort or error) file uploads are removed from the
	            // global progress calculation. Set the following option to false to
	            // prevent recalculating the global progress data:
	            recalculateProgress: true,
	            // Interval in milliseconds to calculate and trigger progress events:
	            progressInterval: 100,
	            // Interval in milliseconds to calculate progress bitrate:
	            bitrateInterval: 500,
	            // By default, uploads are started automatically when adding files:
	            autoUpload: true,

	            // Error and info messages:
	            messages: {
	                uploadedBytes: 'Uploaded bytes exceed file size'
	            },

	            // Translation function, gets the message key to be translated
	            // and an object with context specific data as arguments:
	            i18n: function (message, context) {
	                message = this.messages[message] || message.toString();
	                if (context) {
	                    $.each(context, function (key, value) {
	                        message = message.replace('{' + key + '}', value);
	                    });
	                }
	                return message;
	            },

	            // Additional form data to be sent along with the file uploads can be set
	            // using this option, which accepts an array of objects with name and
	            // value properties, a function returning such an array, a FormData
	            // object (for XHR file uploads), or a simple object.
	            // The form of the first fileInput is given as parameter to the function:
	            formData: function (form) {
	                return form.serializeArray();
	            },

	            // The add callback is invoked as soon as files are added to the fileupload
	            // widget (via file input selection, drag & drop, paste or add API call).
	            // If the singleFileUploads option is enabled, this callback will be
	            // called once for each file in the selection for XHR file uploads, else
	            // once for each file selection.
	            //
	            // The upload starts when the submit method is invoked on the data parameter.
	            // The data object contains a files property holding the added files
	            // and allows you to override plugin options as well as define ajax settings.
	            //
	            // Listeners for this callback can also be bound the following way:
	            // .bind('fileuploadadd', func);
	            //
	            // data.submit() returns a Promise object and allows to attach additional
	            // handlers using jQuery's Deferred callbacks:
	            // data.submit().done(func).fail(func).always(func);
	            add: function (e, data) {
	                if (e.isDefaultPrevented()) {
	                    return false;
	                }
	                if (data.autoUpload || (data.autoUpload !== false &&
	                        $(this).fileupload('option', 'autoUpload'))) {
	                    data.process().done(function () {
	                        data.submit();
	                    });
	                }
	            },

	            // Other callbacks:

	            // Callback for the submit event of each file upload:
	            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

	            // Callback for the start of each file upload request:
	            // send: function (e, data) {}, // .bind('fileuploadsend', func);

	            // Callback for successful uploads:
	            // done: function (e, data) {}, // .bind('fileuploaddone', func);

	            // Callback for failed (abort or error) uploads:
	            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

	            // Callback for completed (success, abort or error) requests:
	            // always: function (e, data) {}, // .bind('fileuploadalways', func);

	            // Callback for upload progress events:
	            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

	            // Callback for global upload progress events:
	            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

	            // Callback for uploads start, equivalent to the global ajaxStart event:
	            // start: function (e) {}, // .bind('fileuploadstart', func);

	            // Callback for uploads stop, equivalent to the global ajaxStop event:
	            // stop: function (e) {}, // .bind('fileuploadstop', func);

	            // Callback for change events of the fileInput(s):
	            // change: function (e, data) {}, // .bind('fileuploadchange', func);

	            // Callback for paste events to the pasteZone(s):
	            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

	            // Callback for drop events of the dropZone(s):
	            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

	            // Callback for dragover events of the dropZone(s):
	            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

	            // Callback for the start of each chunk upload request:
	            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

	            // Callback for successful chunk uploads:
	            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

	            // Callback for failed (abort or error) chunk uploads:
	            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

	            // Callback for completed (success, abort or error) chunk upload requests:
	            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

	            // The plugin options are used as settings object for the ajax calls.
	            // The following are jQuery ajax settings required for the file uploads:
	            processData: false,
	            contentType: false,
	            cache: false
	        },

	        // A list of options that require reinitializing event listeners and/or
	        // special initialization code:
	        _specialOptions: [
	            'fileInput',
	            'dropZone',
	            'pasteZone',
	            'multipart',
	            'forceIframeTransport'
	        ],

	        _blobSlice: $.support.blobSlice && function () {
	            var slice = this.slice || this.webkitSlice || this.mozSlice;
	            return slice.apply(this, arguments);
	        },

	        _BitrateTimer: function () {
	            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
	            this.loaded = 0;
	            this.bitrate = 0;
	            this.getBitrate = function (now, loaded, interval) {
	                var timeDiff = now - this.timestamp;
	                if (!this.bitrate || !interval || timeDiff > interval) {
	                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
	                    this.loaded = loaded;
	                    this.timestamp = now;
	                }
	                return this.bitrate;
	            };
	        },

	        _isXHRUpload: function (options) {
	            return !options.forceIframeTransport &&
	                ((!options.multipart && $.support.xhrFileUpload) ||
	                $.support.xhrFormDataFileUpload);
	        },

	        _getFormData: function (options) {
	            var formData;
	            if ($.type(options.formData) === 'function') {
	                return options.formData(options.form);
	            }
	            if ($.isArray(options.formData)) {
	                return options.formData;
	            }
	            if ($.type(options.formData) === 'object') {
	                formData = [];
	                $.each(options.formData, function (name, value) {
	                    formData.push({name: name, value: value});
	                });
	                return formData;
	            }
	            return [];
	        },

	        _getTotal: function (files) {
	            var total = 0;
	            $.each(files, function (index, file) {
	                total += file.size || 1;
	            });
	            return total;
	        },

	        _initProgressObject: function (obj) {
	            var progress = {
	                loaded: 0,
	                total: 0,
	                bitrate: 0
	            };
	            if (obj._progress) {
	                $.extend(obj._progress, progress);
	            } else {
	                obj._progress = progress;
	            }
	        },

	        _initResponseObject: function (obj) {
	            var prop;
	            if (obj._response) {
	                for (prop in obj._response) {
	                    if (obj._response.hasOwnProperty(prop)) {
	                        delete obj._response[prop];
	                    }
	                }
	            } else {
	                obj._response = {};
	            }
	        },

	        _onProgress: function (e, data) {
	            if (e.lengthComputable) {
	                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
	                    loaded;
	                if (data._time && data.progressInterval &&
	                        (now - data._time < data.progressInterval) &&
	                        e.loaded !== e.total) {
	                    return;
	                }
	                data._time = now;
	                loaded = Math.floor(
	                    e.loaded / e.total * (data.chunkSize || data._progress.total)
	                ) + (data.uploadedBytes || 0);
	                // Add the difference from the previously loaded state
	                // to the global loaded counter:
	                this._progress.loaded += (loaded - data._progress.loaded);
	                this._progress.bitrate = this._bitrateTimer.getBitrate(
	                    now,
	                    this._progress.loaded,
	                    data.bitrateInterval
	                );
	                data._progress.loaded = data.loaded = loaded;
	                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
	                    now,
	                    loaded,
	                    data.bitrateInterval
	                );
	                // Trigger a custom progress event with a total data property set
	                // to the file size(s) of the current upload and a loaded data
	                // property calculated accordingly:
	                this._trigger(
	                    'progress',
	                    $.Event('progress', {delegatedEvent: e}),
	                    data
	                );
	                // Trigger a global progress event for all current file uploads,
	                // including ajax calls queued for sequential file uploads:
	                this._trigger(
	                    'progressall',
	                    $.Event('progressall', {delegatedEvent: e}),
	                    this._progress
	                );
	            }
	        },

	        _initProgressListener: function (options) {
	            var that = this,
	                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
	            // Accesss to the native XHR object is required to add event listeners
	            // for the upload progress event:
	            if (xhr.upload) {
	                $(xhr.upload).bind('progress', function (e) {
	                    var oe = e.originalEvent;
	                    // Make sure the progress event properties get copied over:
	                    e.lengthComputable = oe.lengthComputable;
	                    e.loaded = oe.loaded;
	                    e.total = oe.total;
	                    that._onProgress(e, options);
	                });
	                options.xhr = function () {
	                    return xhr;
	                };
	            }
	        },

	        _isInstanceOf: function (type, obj) {
	            // Cross-frame instanceof check
	            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
	        },

	        _initXHRData: function (options) {
	            var that = this,
	                formData,
	                file = options.files[0],
	                // Ignore non-multipart setting if not supported:
	                multipart = options.multipart || !$.support.xhrFileUpload,
	                paramName = $.type(options.paramName) === 'array' ?
	                    options.paramName[0] : options.paramName;
	            options.headers = $.extend({}, options.headers);
	            if (options.contentRange) {
	                options.headers['Content-Range'] = options.contentRange;
	            }
	            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
	                options.headers['Content-Disposition'] = 'attachment; filename="' +
	                    encodeURI(file.name) + '"';
	            }
	            if (!multipart) {
	                options.contentType = file.type || 'application/octet-stream';
	                options.data = options.blob || file;
	            } else if ($.support.xhrFormDataFileUpload) {
	                if (options.postMessage) {
	                    // window.postMessage does not allow sending FormData
	                    // objects, so we just add the File/Blob objects to
	                    // the formData array and let the postMessage window
	                    // create the FormData object out of this array:
	                    formData = this._getFormData(options);
	                    if (options.blob) {
	                        formData.push({
	                            name: paramName,
	                            value: options.blob
	                        });
	                    } else {
	                        $.each(options.files, function (index, file) {
	                            formData.push({
	                                name: ($.type(options.paramName) === 'array' &&
	                                    options.paramName[index]) || paramName,
	                                value: file
	                            });
	                        });
	                    }
	                } else {
	                    if (that._isInstanceOf('FormData', options.formData)) {
	                        formData = options.formData;
	                    } else {
	                        formData = new FormData();
	                        $.each(this._getFormData(options), function (index, field) {
	                            formData.append(field.name, field.value);
	                        });
	                    }
	                    if (options.blob) {
	                        formData.append(paramName, options.blob, file.name);
	                    } else {
	                        $.each(options.files, function (index, file) {
	                            // This check allows the tests to run with
	                            // dummy objects:
	                            if (that._isInstanceOf('File', file) ||
	                                    that._isInstanceOf('Blob', file)) {
	                                formData.append(
	                                    ($.type(options.paramName) === 'array' &&
	                                        options.paramName[index]) || paramName,
	                                    file,
	                                    file.uploadName || file.name
	                                );
	                            }
	                        });
	                    }
	                }
	                options.data = formData;
	            }
	            // Blob reference is not needed anymore, free memory:
	            options.blob = null;
	        },

	        _initIframeSettings: function (options) {
	            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
	            // Setting the dataType to iframe enables the iframe transport:
	            options.dataType = 'iframe ' + (options.dataType || '');
	            // The iframe transport accepts a serialized array as form data:
	            options.formData = this._getFormData(options);
	            // Add redirect url to form data on cross-domain uploads:
	            if (options.redirect && targetHost && targetHost !== location.host) {
	                options.formData.push({
	                    name: options.redirectParamName || 'redirect',
	                    value: options.redirect
	                });
	            }
	        },

	        _initDataSettings: function (options) {
	            if (this._isXHRUpload(options)) {
	                if (!this._chunkedUpload(options, true)) {
	                    if (!options.data) {
	                        this._initXHRData(options);
	                    }
	                    this._initProgressListener(options);
	                }
	                if (options.postMessage) {
	                    // Setting the dataType to postmessage enables the
	                    // postMessage transport:
	                    options.dataType = 'postmessage ' + (options.dataType || '');
	                }
	            } else {
	                this._initIframeSettings(options);
	            }
	        },

	        _getParamName: function (options) {
	            var fileInput = $(options.fileInput),
	                paramName = options.paramName;
	            if (!paramName) {
	                paramName = [];
	                fileInput.each(function () {
	                    var input = $(this),
	                        name = input.prop('name') || 'files[]',
	                        i = (input.prop('files') || [1]).length;
	                    while (i) {
	                        paramName.push(name);
	                        i -= 1;
	                    }
	                });
	                if (!paramName.length) {
	                    paramName = [fileInput.prop('name') || 'files[]'];
	                }
	            } else if (!$.isArray(paramName)) {
	                paramName = [paramName];
	            }
	            return paramName;
	        },

	        _initFormSettings: function (options) {
	            // Retrieve missing options from the input field and the
	            // associated form, if available:
	            if (!options.form || !options.form.length) {
	                options.form = $(options.fileInput.prop('form'));
	                // If the given file input doesn't have an associated form,
	                // use the default widget file input's form:
	                if (!options.form.length) {
	                    options.form = $(this.options.fileInput.prop('form'));
	                }
	            }
	            options.paramName = this._getParamName(options);
	            if (!options.url) {
	                options.url = options.form.prop('action') || location.href;
	            }
	            // The HTTP request method must be "POST" or "PUT":
	            options.type = (options.type ||
	                ($.type(options.form.prop('method')) === 'string' &&
	                    options.form.prop('method')) || ''
	                ).toUpperCase();
	            if (options.type !== 'POST' && options.type !== 'PUT' &&
	                    options.type !== 'PATCH') {
	                options.type = 'POST';
	            }
	            if (!options.formAcceptCharset) {
	                options.formAcceptCharset = options.form.attr('accept-charset');
	            }
	        },

	        _getAJAXSettings: function (data) {
	            var options = $.extend({}, this.options, data);
	            this._initFormSettings(options);
	            this._initDataSettings(options);
	            return options;
	        },

	        // jQuery 1.6 doesn't provide .state(),
	        // while jQuery 1.8+ removed .isRejected() and .isResolved():
	        _getDeferredState: function (deferred) {
	            if (deferred.state) {
	                return deferred.state();
	            }
	            if (deferred.isResolved()) {
	                return 'resolved';
	            }
	            if (deferred.isRejected()) {
	                return 'rejected';
	            }
	            return 'pending';
	        },

	        // Maps jqXHR callbacks to the equivalent
	        // methods of the given Promise object:
	        _enhancePromise: function (promise) {
	            promise.success = promise.done;
	            promise.error = promise.fail;
	            promise.complete = promise.always;
	            return promise;
	        },

	        // Creates and returns a Promise object enhanced with
	        // the jqXHR methods abort, success, error and complete:
	        _getXHRPromise: function (resolveOrReject, context, args) {
	            var dfd = $.Deferred(),
	                promise = dfd.promise();
	            context = context || this.options.context || promise;
	            if (resolveOrReject === true) {
	                dfd.resolveWith(context, args);
	            } else if (resolveOrReject === false) {
	                dfd.rejectWith(context, args);
	            }
	            promise.abort = dfd.promise;
	            return this._enhancePromise(promise);
	        },

	        // Adds convenience methods to the data callback argument:
	        _addConvenienceMethods: function (e, data) {
	            var that = this,
	                getPromise = function (args) {
	                    return $.Deferred().resolveWith(that, args).promise();
	                };
	            data.process = function (resolveFunc, rejectFunc) {
	                if (resolveFunc || rejectFunc) {
	                    data._processQueue = this._processQueue =
	                        (this._processQueue || getPromise([this])).pipe(
	                            function () {
	                                if (data.errorThrown) {
	                                    return $.Deferred()
	                                        .rejectWith(that, [data]).promise();
	                                }
	                                return getPromise(arguments);
	                            }
	                        ).pipe(resolveFunc, rejectFunc);
	                }
	                return this._processQueue || getPromise([this]);
	            };
	            data.submit = function () {
	                if (this.state() !== 'pending') {
	                    data.jqXHR = this.jqXHR =
	                        (that._trigger(
	                            'submit',
	                            $.Event('submit', {delegatedEvent: e}),
	                            this
	                        ) !== false) && that._onSend(e, this);
	                }
	                return this.jqXHR || that._getXHRPromise();
	            };
	            data.abort = function () {
	                if (this.jqXHR) {
	                    return this.jqXHR.abort();
	                }
	                this.errorThrown = 'abort';
	                that._trigger('fail', null, this);
	                return that._getXHRPromise(false);
	            };
	            data.state = function () {
	                if (this.jqXHR) {
	                    return that._getDeferredState(this.jqXHR);
	                }
	                if (this._processQueue) {
	                    return that._getDeferredState(this._processQueue);
	                }
	            };
	            data.processing = function () {
	                return !this.jqXHR && this._processQueue && that
	                    ._getDeferredState(this._processQueue) === 'pending';
	            };
	            data.progress = function () {
	                return this._progress;
	            };
	            data.response = function () {
	                return this._response;
	            };
	        },

	        // Parses the Range header from the server response
	        // and returns the uploaded bytes:
	        _getUploadedBytes: function (jqXHR) {
	            var range = jqXHR.getResponseHeader('Range'),
	                parts = range && range.split('-'),
	                upperBytesPos = parts && parts.length > 1 &&
	                    parseInt(parts[1], 10);
	            return upperBytesPos && upperBytesPos + 1;
	        },

	        // Uploads a file in multiple, sequential requests
	        // by splitting the file up in multiple blob chunks.
	        // If the second parameter is true, only tests if the file
	        // should be uploaded in chunks, but does not invoke any
	        // upload requests:
	        _chunkedUpload: function (options, testOnly) {
	            options.uploadedBytes = options.uploadedBytes || 0;
	            var that = this,
	                file = options.files[0],
	                fs = file.size,
	                ub = options.uploadedBytes,
	                mcs = options.maxChunkSize || fs,
	                slice = this._blobSlice,
	                dfd = $.Deferred(),
	                promise = dfd.promise(),
	                jqXHR,
	                upload;
	            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
	                    options.data) {
	                return false;
	            }
	            if (testOnly) {
	                return true;
	            }
	            if (ub >= fs) {
	                file.error = options.i18n('uploadedBytes');
	                return this._getXHRPromise(
	                    false,
	                    options.context,
	                    [null, 'error', file.error]
	                );
	            }
	            // The chunk upload method:
	            upload = function () {
	                // Clone the options object for each chunk upload:
	                var o = $.extend({}, options),
	                    currentLoaded = o._progress.loaded;
	                o.blob = slice.call(
	                    file,
	                    ub,
	                    ub + mcs,
	                    file.type
	                );
	                // Store the current chunk size, as the blob itself
	                // will be dereferenced after data processing:
	                o.chunkSize = o.blob.size;
	                // Expose the chunk bytes position range:
	                o.contentRange = 'bytes ' + ub + '-' +
	                    (ub + o.chunkSize - 1) + '/' + fs;
	                // Process the upload data (the blob and potential form data):
	                that._initXHRData(o);
	                // Add progress listeners for this chunk upload:
	                that._initProgressListener(o);
	                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
	                        that._getXHRPromise(false, o.context))
	                    .done(function (result, textStatus, jqXHR) {
	                        ub = that._getUploadedBytes(jqXHR) ||
	                            (ub + o.chunkSize);
	                        // Create a progress event if no final progress event
	                        // with loaded equaling total has been triggered
	                        // for this chunk:
	                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
	                            that._onProgress($.Event('progress', {
	                                lengthComputable: true,
	                                loaded: ub - o.uploadedBytes,
	                                total: ub - o.uploadedBytes
	                            }), o);
	                        }
	                        options.uploadedBytes = o.uploadedBytes = ub;
	                        o.result = result;
	                        o.textStatus = textStatus;
	                        o.jqXHR = jqXHR;
	                        that._trigger('chunkdone', null, o);
	                        that._trigger('chunkalways', null, o);
	                        if (ub < fs) {
	                            // File upload not yet complete,
	                            // continue with the next chunk:
	                            upload();
	                        } else {
	                            dfd.resolveWith(
	                                o.context,
	                                [result, textStatus, jqXHR]
	                            );
	                        }
	                    })
	                    .fail(function (jqXHR, textStatus, errorThrown) {
	                        o.jqXHR = jqXHR;
	                        o.textStatus = textStatus;
	                        o.errorThrown = errorThrown;
	                        that._trigger('chunkfail', null, o);
	                        that._trigger('chunkalways', null, o);
	                        dfd.rejectWith(
	                            o.context,
	                            [jqXHR, textStatus, errorThrown]
	                        );
	                    });
	            };
	            this._enhancePromise(promise);
	            promise.abort = function () {
	                return jqXHR.abort();
	            };
	            upload();
	            return promise;
	        },

	        _beforeSend: function (e, data) {
	            if (this._active === 0) {
	                // the start callback is triggered when an upload starts
	                // and no other uploads are currently running,
	                // equivalent to the global ajaxStart event:
	                this._trigger('start');
	                // Set timer for global bitrate progress calculation:
	                this._bitrateTimer = new this._BitrateTimer();
	                // Reset the global progress values:
	                this._progress.loaded = this._progress.total = 0;
	                this._progress.bitrate = 0;
	            }
	            // Make sure the container objects for the .response() and
	            // .progress() methods on the data object are available
	            // and reset to their initial state:
	            this._initResponseObject(data);
	            this._initProgressObject(data);
	            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
	            data._progress.total = data.total = this._getTotal(data.files) || 1;
	            data._progress.bitrate = data.bitrate = 0;
	            this._active += 1;
	            // Initialize the global progress values:
	            this._progress.loaded += data.loaded;
	            this._progress.total += data.total;
	        },

	        _onDone: function (result, textStatus, jqXHR, options) {
	            var total = options._progress.total,
	                response = options._response;
	            if (options._progress.loaded < total) {
	                // Create a progress event if no final progress event
	                // with loaded equaling total has been triggered:
	                this._onProgress($.Event('progress', {
	                    lengthComputable: true,
	                    loaded: total,
	                    total: total
	                }), options);
	            }
	            response.result = options.result = result;
	            response.textStatus = options.textStatus = textStatus;
	            response.jqXHR = options.jqXHR = jqXHR;
	            this._trigger('done', null, options);
	        },

	        _onFail: function (jqXHR, textStatus, errorThrown, options) {
	            var response = options._response;
	            if (options.recalculateProgress) {
	                // Remove the failed (error or abort) file upload from
	                // the global progress calculation:
	                this._progress.loaded -= options._progress.loaded;
	                this._progress.total -= options._progress.total;
	            }
	            response.jqXHR = options.jqXHR = jqXHR;
	            response.textStatus = options.textStatus = textStatus;
	            response.errorThrown = options.errorThrown = errorThrown;
	            this._trigger('fail', null, options);
	        },

	        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
	            // jqXHRorResult, textStatus and jqXHRorError are added to the
	            // options object via done and fail callbacks
	            this._trigger('always', null, options);
	        },

	        _onSend: function (e, data) {
	            if (!data.submit) {
	                this._addConvenienceMethods(e, data);
	            }
	            var that = this,
	                jqXHR,
	                aborted,
	                slot,
	                pipe,
	                options = that._getAJAXSettings(data),
	                send = function () {
	                    that._sending += 1;
	                    // Set timer for bitrate progress calculation:
	                    options._bitrateTimer = new that._BitrateTimer();
	                    jqXHR = jqXHR || (
	                        ((aborted || that._trigger(
	                            'send',
	                            $.Event('send', {delegatedEvent: e}),
	                            options
	                        ) === false) &&
	                        that._getXHRPromise(false, options.context, aborted)) ||
	                        that._chunkedUpload(options) || $.ajax(options)
	                    ).done(function (result, textStatus, jqXHR) {
	                        that._onDone(result, textStatus, jqXHR, options);
	                    }).fail(function (jqXHR, textStatus, errorThrown) {
	                        that._onFail(jqXHR, textStatus, errorThrown, options);
	                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
	                        that._onAlways(
	                            jqXHRorResult,
	                            textStatus,
	                            jqXHRorError,
	                            options
	                        );
	                        that._sending -= 1;
	                        that._active -= 1;
	                        if (options.limitConcurrentUploads &&
	                                options.limitConcurrentUploads > that._sending) {
	                            // Start the next queued upload,
	                            // that has not been aborted:
	                            var nextSlot = that._slots.shift();
	                            while (nextSlot) {
	                                if (that._getDeferredState(nextSlot) === 'pending') {
	                                    nextSlot.resolve();
	                                    break;
	                                }
	                                nextSlot = that._slots.shift();
	                            }
	                        }
	                        if (that._active === 0) {
	                            // The stop callback is triggered when all uploads have
	                            // been completed, equivalent to the global ajaxStop event:
	                            that._trigger('stop');
	                        }
	                    });
	                    return jqXHR;
	                };
	            this._beforeSend(e, options);
	            if (this.options.sequentialUploads ||
	                    (this.options.limitConcurrentUploads &&
	                    this.options.limitConcurrentUploads <= this._sending)) {
	                if (this.options.limitConcurrentUploads > 1) {
	                    slot = $.Deferred();
	                    this._slots.push(slot);
	                    pipe = slot.pipe(send);
	                } else {
	                    this._sequence = this._sequence.pipe(send, send);
	                    pipe = this._sequence;
	                }
	                // Return the piped Promise object, enhanced with an abort method,
	                // which is delegated to the jqXHR object of the current upload,
	                // and jqXHR callbacks mapped to the equivalent Promise methods:
	                pipe.abort = function () {
	                    aborted = [undefined, 'abort', 'abort'];
	                    if (!jqXHR) {
	                        if (slot) {
	                            slot.rejectWith(options.context, aborted);
	                        }
	                        return send();
	                    }
	                    return jqXHR.abort();
	                };
	                return this._enhancePromise(pipe);
	            }
	            return send();
	        },

	        _onAdd: function (e, data) {
	            var that = this,
	                result = true,
	                options = $.extend({}, this.options, data),
	                files = data.files,
	                filesLength = files.length,
	                limit = options.limitMultiFileUploads,
	                limitSize = options.limitMultiFileUploadSize,
	                overhead = options.limitMultiFileUploadSizeOverhead,
	                batchSize = 0,
	                paramName = this._getParamName(options),
	                paramNameSet,
	                paramNameSlice,
	                fileSet,
	                i,
	                j = 0;
	            if (limitSize && (!filesLength || files[0].size === undefined)) {
	                limitSize = undefined;
	            }
	            if (!(options.singleFileUploads || limit || limitSize) ||
	                    !this._isXHRUpload(options)) {
	                fileSet = [files];
	                paramNameSet = [paramName];
	            } else if (!(options.singleFileUploads || limitSize) && limit) {
	                fileSet = [];
	                paramNameSet = [];
	                for (i = 0; i < filesLength; i += limit) {
	                    fileSet.push(files.slice(i, i + limit));
	                    paramNameSlice = paramName.slice(i, i + limit);
	                    if (!paramNameSlice.length) {
	                        paramNameSlice = paramName;
	                    }
	                    paramNameSet.push(paramNameSlice);
	                }
	            } else if (!options.singleFileUploads && limitSize) {
	                fileSet = [];
	                paramNameSet = [];
	                for (i = 0; i < filesLength; i = i + 1) {
	                    batchSize += files[i].size + overhead;
	                    if (i + 1 === filesLength ||
	                            ((batchSize + files[i + 1].size + overhead) > limitSize) ||
	                            (limit && i + 1 - j >= limit)) {
	                        fileSet.push(files.slice(j, i + 1));
	                        paramNameSlice = paramName.slice(j, i + 1);
	                        if (!paramNameSlice.length) {
	                            paramNameSlice = paramName;
	                        }
	                        paramNameSet.push(paramNameSlice);
	                        j = i + 1;
	                        batchSize = 0;
	                    }
	                }
	            } else {
	                paramNameSet = paramName;
	            }
	            data.originalFiles = files;
	            $.each(fileSet || files, function (index, element) {
	                var newData = $.extend({}, data);
	                newData.files = fileSet ? element : [element];
	                newData.paramName = paramNameSet[index];
	                that._initResponseObject(newData);
	                that._initProgressObject(newData);
	                that._addConvenienceMethods(e, newData);
	                result = that._trigger(
	                    'add',
	                    $.Event('add', {delegatedEvent: e}),
	                    newData
	                );
	                return result;
	            });
	            return result;
	        },

	        _replaceFileInput: function (input) {
	            var inputClone = input.clone(true);
	            $('<form></form>').append(inputClone)[0].reset();
	            // Detaching allows to insert the fileInput on another form
	            // without loosing the file input value:
	            input.after(inputClone).detach();
	            // Avoid memory leaks with the detached file input:
	            $.cleanData(input.unbind('remove'));
	            // Replace the original file input element in the fileInput
	            // elements set with the clone, which has been copied including
	            // event handlers:
	            this.options.fileInput = this.options.fileInput.map(function (i, el) {
	                if (el === input[0]) {
	                    return inputClone[0];
	                }
	                return el;
	            });
	            // If the widget has been initialized on the file input itself,
	            // override this.element with the file input clone:
	            if (input[0] === this.element[0]) {
	                this.element = inputClone;
	            }
	        },

	        _handleFileTreeEntry: function (entry, path) {
	            var that = this,
	                dfd = $.Deferred(),
	                errorHandler = function (e) {
	                    if (e && !e.entry) {
	                        e.entry = entry;
	                    }
	                    // Since $.when returns immediately if one
	                    // Deferred is rejected, we use resolve instead.
	                    // This allows valid files and invalid items
	                    // to be returned together in one set:
	                    dfd.resolve([e]);
	                },
	                successHandler = function (entries) {
	                    that._handleFileTreeEntries(
	                        entries,
	                        path + entry.name + '/'
	                    ).done(function (files) {
	                        dfd.resolve(files);
	                    }).fail(errorHandler);
	                },
	                readEntries = function () {
	                    dirReader.readEntries(function (results) {
	                        if (!results.length) {
	                            successHandler(entries);
	                        } else {
	                            entries = entries.concat(results);
	                            readEntries();
	                        }
	                    }, errorHandler);
	                },
	                dirReader, entries = [];
	            path = path || '';
	            if (entry.isFile) {
	                if (entry._file) {
	                    // Workaround for Chrome bug #149735
	                    entry._file.relativePath = path;
	                    dfd.resolve(entry._file);
	                } else {
	                    entry.file(function (file) {
	                        file.relativePath = path;
	                        dfd.resolve(file);
	                    }, errorHandler);
	                }
	            } else if (entry.isDirectory) {
	                dirReader = entry.createReader();
	                readEntries();
	            } else {
	                // Return an empy list for file system items
	                // other than files or directories:
	                dfd.resolve([]);
	            }
	            return dfd.promise();
	        },

	        _handleFileTreeEntries: function (entries, path) {
	            var that = this;
	            return $.when.apply(
	                $,
	                $.map(entries, function (entry) {
	                    return that._handleFileTreeEntry(entry, path);
	                })
	            ).pipe(function () {
	                return Array.prototype.concat.apply(
	                    [],
	                    arguments
	                );
	            });
	        },

	        _getDroppedFiles: function (dataTransfer) {
	            dataTransfer = dataTransfer || {};
	            var items = dataTransfer.items;
	            if (items && items.length && (items[0].webkitGetAsEntry ||
	                    items[0].getAsEntry)) {
	                return this._handleFileTreeEntries(
	                    $.map(items, function (item) {
	                        var entry;
	                        if (item.webkitGetAsEntry) {
	                            entry = item.webkitGetAsEntry();
	                            if (entry) {
	                                // Workaround for Chrome bug #149735:
	                                entry._file = item.getAsFile();
	                            }
	                            return entry;
	                        }
	                        return item.getAsEntry();
	                    })
	                );
	            }
	            return $.Deferred().resolve(
	                $.makeArray(dataTransfer.files)
	            ).promise();
	        },

	        _getSingleFileInputFiles: function (fileInput) {
	            fileInput = $(fileInput);
	            var entries = fileInput.prop('webkitEntries') ||
	                    fileInput.prop('entries'),
	                files,
	                value;
	            if (entries && entries.length) {
	                return this._handleFileTreeEntries(entries);
	            }
	            files = $.makeArray(fileInput.prop('files'));
	            if (!files.length) {
	                value = fileInput.prop('value');
	                if (!value) {
	                    return $.Deferred().resolve([]).promise();
	                }
	                // If the files property is not available, the browser does not
	                // support the File API and we add a pseudo File object with
	                // the input value as name with path information removed:
	                files = [{name: value.replace(/^.*\\/, '')}];
	            } else if (files[0].name === undefined && files[0].fileName) {
	                // File normalization for Safari 4 and Firefox 3:
	                $.each(files, function (index, file) {
	                    file.name = file.fileName;
	                    file.size = file.fileSize;
	                });
	            }
	            return $.Deferred().resolve(files).promise();
	        },

	        _getFileInputFiles: function (fileInput) {
	            if (!(fileInput instanceof $) || fileInput.length === 1) {
	                return this._getSingleFileInputFiles(fileInput);
	            }
	            return $.when.apply(
	                $,
	                $.map(fileInput, this._getSingleFileInputFiles)
	            ).pipe(function () {
	                return Array.prototype.concat.apply(
	                    [],
	                    arguments
	                );
	            });
	        },

	        _onChange: function (e) {
	            var that = this,
	                data = {
	                    fileInput: $(e.target),
	                    form: $(e.target.form)
	                };
	            this._getFileInputFiles(data.fileInput).always(function (files) {
	                data.files = files;
	                if (that.options.replaceFileInput) {
	                    that._replaceFileInput(data.fileInput);
	                }
	                if (that._trigger(
	                        'change',
	                        $.Event('change', {delegatedEvent: e}),
	                        data
	                    ) !== false) {
	                    that._onAdd(e, data);
	                }
	            });
	        },

	        _onPaste: function (e) {
	            var items = e.originalEvent && e.originalEvent.clipboardData &&
	                    e.originalEvent.clipboardData.items,
	                data = {files: []};
	            if (items && items.length) {
	                $.each(items, function (index, item) {
	                    var file = item.getAsFile && item.getAsFile();
	                    if (file) {
	                        data.files.push(file);
	                    }
	                });
	                if (this._trigger(
	                        'paste',
	                        $.Event('paste', {delegatedEvent: e}),
	                        data
	                    ) !== false) {
	                    this._onAdd(e, data);
	                }
	            }
	        },

	        _onDrop: function (e) {
	            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
	            var that = this,
	                dataTransfer = e.dataTransfer,
	                data = {};
	            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
	                e.preventDefault();
	                this._getDroppedFiles(dataTransfer).always(function (files) {
	                    data.files = files;
	                    if (that._trigger(
	                            'drop',
	                            $.Event('drop', {delegatedEvent: e}),
	                            data
	                        ) !== false) {
	                        that._onAdd(e, data);
	                    }
	                });
	            }
	        },

	        _onDragOver: function (e) {
	            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
	            var dataTransfer = e.dataTransfer;
	            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 &&
	                    this._trigger(
	                        'dragover',
	                        $.Event('dragover', {delegatedEvent: e})
	                    ) !== false) {
	                e.preventDefault();
	                dataTransfer.dropEffect = 'copy';
	            }
	        },

	        _initEventHandlers: function () {
	            if (this._isXHRUpload(this.options)) {
	                this._on(this.options.dropZone, {
	                    dragover: this._onDragOver,
	                    drop: this._onDrop
	                });
	                this._on(this.options.pasteZone, {
	                    paste: this._onPaste
	                });
	            }
	            if ($.support.fileInput) {
	                this._on(this.options.fileInput, {
	                    change: this._onChange
	                });
	            }
	        },

	        _destroyEventHandlers: function () {
	            this._off(this.options.dropZone, 'dragover drop');
	            this._off(this.options.pasteZone, 'paste');
	            this._off(this.options.fileInput, 'change');
	        },

	        _setOption: function (key, value) {
	            var reinit = $.inArray(key, this._specialOptions) !== -1;
	            if (reinit) {
	                this._destroyEventHandlers();
	            }
	            this._super(key, value);
	            if (reinit) {
	                this._initSpecialOptions();
	                this._initEventHandlers();
	            }
	        },

	        _initSpecialOptions: function () {
	            var options = this.options;
	            if (options.fileInput === undefined) {
	                options.fileInput = this.element.is('input[type="file"]') ?
	                        this.element : this.element.find('input[type="file"]');
	            } else if (!(options.fileInput instanceof $)) {
	                options.fileInput = $(options.fileInput);
	            }
	            if (!(options.dropZone instanceof $)) {
	                options.dropZone = $(options.dropZone);
	            }
	            if (!(options.pasteZone instanceof $)) {
	                options.pasteZone = $(options.pasteZone);
	            }
	        },

	        _getRegExp: function (str) {
	            var parts = str.split('/'),
	                modifiers = parts.pop();
	            parts.shift();
	            return new RegExp(parts.join('/'), modifiers);
	        },

	        _isRegExpOption: function (key, value) {
	            return key !== 'url' && $.type(value) === 'string' &&
	                /^\/.*\/[igm]{0,3}$/.test(value);
	        },

	        _initDataAttributes: function () {
	            var that = this,
	                options = this.options,
	                clone = $(this.element[0].cloneNode(false));
	            // Initialize options set via HTML5 data-attributes:
	            $.each(
	                clone.data(),
	                function (key, value) {
	                    var dataAttributeName = 'data-' +
	                        // Convert camelCase to hyphen-ated key:
	                        key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	                    if (clone.attr(dataAttributeName)) {
	                        if (that._isRegExpOption(key, value)) {
	                            value = that._getRegExp(value);
	                        }
	                        options[key] = value;
	                    }
	                }
	            );
	        },

	        _create: function () {
	            this._initDataAttributes();
	            this._initSpecialOptions();
	            this._slots = [];
	            this._sequence = this._getXHRPromise(true);
	            this._sending = this._active = 0;
	            this._initProgressObject(this);
	            this._initEventHandlers();
	        },

	        // This method is exposed to the widget API and allows to query
	        // the number of active uploads:
	        active: function () {
	            return this._active;
	        },

	        // This method is exposed to the widget API and allows to query
	        // the widget upload progress.
	        // It returns an object with loaded, total and bitrate properties
	        // for the running uploads:
	        progress: function () {
	            return this._progress;
	        },

	        // This method is exposed to the widget API and allows adding files
	        // using the fileupload API. The data parameter accepts an object which
	        // must have a files property and can contain additional options:
	        // .fileupload('add', {files: filesList});
	        add: function (data) {
	            var that = this;
	            if (!data || this.options.disabled) {
	                return;
	            }
	            if (data.fileInput && !data.files) {
	                this._getFileInputFiles(data.fileInput).always(function (files) {
	                    data.files = files;
	                    that._onAdd(null, data);
	                });
	            } else {
	                data.files = $.makeArray(data.files);
	                this._onAdd(null, data);
	            }
	        },

	        // This method is exposed to the widget API and allows sending files
	        // using the fileupload API. The data parameter accepts an object which
	        // must have a files or fileInput property and can contain additional options:
	        // .fileupload('send', {files: filesList});
	        // The method returns a Promise object for the file upload call.
	        send: function (data) {
	            if (data && !this.options.disabled) {
	                if (data.fileInput && !data.files) {
	                    var that = this,
	                        dfd = $.Deferred(),
	                        promise = dfd.promise(),
	                        jqXHR,
	                        aborted;
	                    promise.abort = function () {
	                        aborted = true;
	                        if (jqXHR) {
	                            return jqXHR.abort();
	                        }
	                        dfd.reject(null, 'abort', 'abort');
	                        return promise;
	                    };
	                    this._getFileInputFiles(data.fileInput).always(
	                        function (files) {
	                            if (aborted) {
	                                return;
	                            }
	                            if (!files.length) {
	                                dfd.reject();
	                                return;
	                            }
	                            data.files = files;
	                            jqXHR = that._onSend(null, data);
	                            jqXHR.then(
	                                function (result, textStatus, jqXHR) {
	                                    dfd.resolve(result, textStatus, jqXHR);
	                                },
	                                function (jqXHR, textStatus, errorThrown) {
	                                    dfd.reject(jqXHR, textStatus, errorThrown);
	                                }
	                            );
	                        }
	                    );
	                    return this._enhancePromise(promise);
	                }
	                data.files = $.makeArray(data.files);
	                if (data.files.length) {
	                    return this._onSend(null, data);
	                }
	            }
	            return this._getXHRPromise(false, data && data.context);
	        }

	    });

	}));


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery UI Widget 1.10.4+amd
	 * https://github.com/blueimp/jQuery-File-Upload
	 *
	 * Copyright 2014 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * http://api.jqueryui.com/jQuery.widget/
	 */

	(function (factory) {
	    if (true) {
	        // Register as an anonymous AMD module:
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        // Browser globals:
	        factory(jQuery);
	    }
	}(function( $, undefined ) {

	var uuid = 0,
		slice = Array.prototype.slice,
		_cleanData = $.cleanData;
	$.cleanData = function( elems ) {
		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			try {
				$( elem ).triggerHandler( "remove" );
			// http://bugs.jquery.com/ticket/8235
			} catch( e ) {}
		}
		_cleanData( elems );
	};

	$.widget = function( name, base, prototype ) {
		var fullName, existingConstructor, constructor, basePrototype,
			// proxiedPrototype allows the provided prototype to remain unmodified
			// so that it can be used as a mixin for multiple widgets (#8876)
			proxiedPrototype = {},
			namespace = name.split( "." )[ 0 ];

		name = name.split( "." )[ 1 ];
		fullName = namespace + "-" + name;

		if ( !prototype ) {
			prototype = base;
			base = $.Widget;
		}

		// create selector for plugin
		$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
			return !!$.data( elem, fullName );
		};

		$[ namespace ] = $[ namespace ] || {};
		existingConstructor = $[ namespace ][ name ];
		constructor = $[ namespace ][ name ] = function( options, element ) {
			// allow instantiation without "new" keyword
			if ( !this._createWidget ) {
				return new constructor( options, element );
			}

			// allow instantiation without initializing for simple inheritance
			// must use "new" keyword (the code above always passes args)
			if ( arguments.length ) {
				this._createWidget( options, element );
			}
		};
		// extend with the existing constructor to carry over any static properties
		$.extend( constructor, existingConstructor, {
			version: prototype.version,
			// copy the object used to create the prototype in case we need to
			// redefine the widget later
			_proto: $.extend( {}, prototype ),
			// track widgets that inherit from this widget in case this widget is
			// redefined after a widget inherits from it
			_childConstructors: []
		});

		basePrototype = new base();
		// we need to make the options hash a property directly on the new instance
		// otherwise we'll modify the options hash on the prototype that we're
		// inheriting from
		basePrototype.options = $.widget.extend( {}, basePrototype.options );
		$.each( prototype, function( prop, value ) {
			if ( !$.isFunction( value ) ) {
				proxiedPrototype[ prop ] = value;
				return;
			}
			proxiedPrototype[ prop ] = (function() {
				var _super = function() {
						return base.prototype[ prop ].apply( this, arguments );
					},
					_superApply = function( args ) {
						return base.prototype[ prop ].apply( this, args );
					};
				return function() {
					var __super = this._super,
						__superApply = this._superApply,
						returnValue;

					this._super = _super;
					this._superApply = _superApply;

					returnValue = value.apply( this, arguments );

					this._super = __super;
					this._superApply = __superApply;

					return returnValue;
				};
			})();
		});
		constructor.prototype = $.widget.extend( basePrototype, {
			// TODO: remove support for widgetEventPrefix
			// always use the name + a colon as the prefix, e.g., draggable:start
			// don't prefix for widgets that aren't DOM-based
			widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
		}, proxiedPrototype, {
			constructor: constructor,
			namespace: namespace,
			widgetName: name,
			widgetFullName: fullName
		});

		// If this widget is being redefined then we need to find all widgets that
		// are inheriting from it and redefine all of them so that they inherit from
		// the new version of this widget. We're essentially trying to replace one
		// level in the prototype chain.
		if ( existingConstructor ) {
			$.each( existingConstructor._childConstructors, function( i, child ) {
				var childPrototype = child.prototype;

				// redefine the child widget using the same prototype that was
				// originally used, but inherit from the new version of the base
				$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
			});
			// remove the list of existing child constructors from the old constructor
			// so the old child constructors can be garbage collected
			delete existingConstructor._childConstructors;
		} else {
			base._childConstructors.push( constructor );
		}

		$.widget.bridge( name, constructor );
	};

	$.widget.extend = function( target ) {
		var input = slice.call( arguments, 1 ),
			inputIndex = 0,
			inputLength = input.length,
			key,
			value;
		for ( ; inputIndex < inputLength; inputIndex++ ) {
			for ( key in input[ inputIndex ] ) {
				value = input[ inputIndex ][ key ];
				if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
					// Clone objects
					if ( $.isPlainObject( value ) ) {
						target[ key ] = $.isPlainObject( target[ key ] ) ?
							$.widget.extend( {}, target[ key ], value ) :
							// Don't extend strings, arrays, etc. with objects
							$.widget.extend( {}, value );
					// Copy everything else by reference
					} else {
						target[ key ] = value;
					}
				}
			}
		}
		return target;
	};

	$.widget.bridge = function( name, object ) {
		var fullName = object.prototype.widgetFullName || name;
		$.fn[ name ] = function( options ) {
			var isMethodCall = typeof options === "string",
				args = slice.call( arguments, 1 ),
				returnValue = this;

			// allow multiple hashes to be passed on init
			options = !isMethodCall && args.length ?
				$.widget.extend.apply( null, [ options ].concat(args) ) :
				options;

			if ( isMethodCall ) {
				this.each(function() {
					var methodValue,
						instance = $.data( this, fullName );
					if ( !instance ) {
						return $.error( "cannot call methods on " + name + " prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}
					if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name + " widget instance" );
					}
					methodValue = instance[ options ].apply( instance, args );
					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				});
			} else {
				this.each(function() {
					var instance = $.data( this, fullName );
					if ( instance ) {
						instance.option( options || {} )._init();
					} else {
						$.data( this, fullName, new object( options, this ) );
					}
				});
			}

			return returnValue;
		};
	};

	$.Widget = function( /* options, element */ ) {};
	$.Widget._childConstructors = [];

	$.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: false,

			// callbacks
			create: null
		},
		_createWidget: function( options, element ) {
			element = $( element || this.defaultElement || this )[ 0 ];
			this.element = $( element );
			this.uuid = uuid++;
			this.eventNamespace = "." + this.widgetName + this.uuid;
			this.options = $.widget.extend( {},
				this.options,
				this._getCreateOptions(),
				options );

			this.bindings = $();
			this.hoverable = $();
			this.focusable = $();

			if ( element !== this ) {
				$.data( element, this.widgetFullName, this );
				this._on( true, this.element, {
					remove: function( event ) {
						if ( event.target === element ) {
							this.destroy();
						}
					}
				});
				this.document = $( element.style ?
					// element within the document
					element.ownerDocument :
					// element is window or document
					element.document || element );
				this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
			}

			this._create();
			this._trigger( "create", null, this._getCreateEventData() );
			this._init();
		},
		_getCreateOptions: $.noop,
		_getCreateEventData: $.noop,
		_create: $.noop,
		_init: $.noop,

		destroy: function() {
			this._destroy();
			// we can probably remove the unbind calls in 2.0
			// all event bindings should go through this._on()
			this.element
				.unbind( this.eventNamespace )
				// 1.9 BC for #7810
				// TODO remove dual storage
				.removeData( this.widgetName )
				.removeData( this.widgetFullName )
				// support: jquery <1.6.3
				// http://bugs.jquery.com/ticket/9413
				.removeData( $.camelCase( this.widgetFullName ) );
			this.widget()
				.unbind( this.eventNamespace )
				.removeAttr( "aria-disabled" )
				.removeClass(
					this.widgetFullName + "-disabled " +
					"ui-state-disabled" );

			// clean up events and states
			this.bindings.unbind( this.eventNamespace );
			this.hoverable.removeClass( "ui-state-hover" );
			this.focusable.removeClass( "ui-state-focus" );
		},
		_destroy: $.noop,

		widget: function() {
			return this.element;
		},

		option: function( key, value ) {
			var options = key,
				parts,
				curOption,
				i;

			if ( arguments.length === 0 ) {
				// don't return a reference to the internal hash
				return $.widget.extend( {}, this.options );
			}

			if ( typeof key === "string" ) {
				// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
				options = {};
				parts = key.split( "." );
				key = parts.shift();
				if ( parts.length ) {
					curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
					for ( i = 0; i < parts.length - 1; i++ ) {
						curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
						curOption = curOption[ parts[ i ] ];
					}
					key = parts.pop();
					if ( arguments.length === 1 ) {
						return curOption[ key ] === undefined ? null : curOption[ key ];
					}
					curOption[ key ] = value;
				} else {
					if ( arguments.length === 1 ) {
						return this.options[ key ] === undefined ? null : this.options[ key ];
					}
					options[ key ] = value;
				}
			}

			this._setOptions( options );

			return this;
		},
		_setOptions: function( options ) {
			var key;

			for ( key in options ) {
				this._setOption( key, options[ key ] );
			}

			return this;
		},
		_setOption: function( key, value ) {
			this.options[ key ] = value;

			if ( key === "disabled" ) {
				this.widget()
					.toggleClass( this.widgetFullName + "-disabled ui-state-disabled", !!value )
					.attr( "aria-disabled", value );
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}

			return this;
		},

		enable: function() {
			return this._setOption( "disabled", false );
		},
		disable: function() {
			return this._setOption( "disabled", true );
		},

		_on: function( suppressDisabledCheck, element, handlers ) {
			var delegateElement,
				instance = this;

			// no suppressDisabledCheck flag, shuffle arguments
			if ( typeof suppressDisabledCheck !== "boolean" ) {
				handlers = element;
				element = suppressDisabledCheck;
				suppressDisabledCheck = false;
			}

			// no element argument, shuffle and use this.element
			if ( !handlers ) {
				handlers = element;
				element = this.element;
				delegateElement = this.widget();
			} else {
				// accept selectors, DOM elements
				element = delegateElement = $( element );
				this.bindings = this.bindings.add( element );
			}

			$.each( handlers, function( event, handler ) {
				function handlerProxy() {
					// allow widgets to customize the disabled handling
					// - disabled as an array instead of boolean
					// - disabled class as method for disabling individual parts
					if ( !suppressDisabledCheck &&
							( instance.options.disabled === true ||
								$( this ).hasClass( "ui-state-disabled" ) ) ) {
						return;
					}
					return ( typeof handler === "string" ? instance[ handler ] : handler )
						.apply( instance, arguments );
				}

				// copy the guid so direct unbinding works
				if ( typeof handler !== "string" ) {
					handlerProxy.guid = handler.guid =
						handler.guid || handlerProxy.guid || $.guid++;
				}

				var match = event.match( /^(\w+)\s*(.*)$/ ),
					eventName = match[1] + instance.eventNamespace,
					selector = match[2];
				if ( selector ) {
					delegateElement.delegate( selector, eventName, handlerProxy );
				} else {
					element.bind( eventName, handlerProxy );
				}
			});
		},

		_off: function( element, eventName ) {
			eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
			element.unbind( eventName ).undelegate( eventName );
		},

		_delay: function( handler, delay ) {
			function handlerProxy() {
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}
			var instance = this;
			return setTimeout( handlerProxy, delay || 0 );
		},

		_hoverable: function( element ) {
			this.hoverable = this.hoverable.add( element );
			this._on( element, {
				mouseenter: function( event ) {
					$( event.currentTarget ).addClass( "ui-state-hover" );
				},
				mouseleave: function( event ) {
					$( event.currentTarget ).removeClass( "ui-state-hover" );
				}
			});
		},

		_focusable: function( element ) {
			this.focusable = this.focusable.add( element );
			this._on( element, {
				focusin: function( event ) {
					$( event.currentTarget ).addClass( "ui-state-focus" );
				},
				focusout: function( event ) {
					$( event.currentTarget ).removeClass( "ui-state-focus" );
				}
			});
		},

		_trigger: function( type, event, data ) {
			var prop, orig,
				callback = this.options[ type ];

			data = data || {};
			event = $.Event( event );
			event.type = ( type === this.widgetEventPrefix ?
				type :
				this.widgetEventPrefix + type ).toLowerCase();
			// the original event may come from any element
			// so we need to reset the target on the new event
			event.target = this.element[ 0 ];

			// copy original event properties over to the new event
			orig = event.originalEvent;
			if ( orig ) {
				for ( prop in orig ) {
					if ( !( prop in event ) ) {
						event[ prop ] = orig[ prop ];
					}
				}
			}

			this.element.trigger( event, data );
			return !( $.isFunction( callback ) &&
				callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
				event.isDefaultPrevented() );
		}
	};

	$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
		$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
			if ( typeof options === "string" ) {
				options = { effect: options };
			}
			var hasOptions,
				effectName = !options ?
					method :
					options === true || typeof options === "number" ?
						defaultEffect :
						options.effect || defaultEffect;
			options = options || {};
			if ( typeof options === "number" ) {
				options = { duration: options };
			}
			hasOptions = !$.isEmptyObject( options );
			options.complete = callback;
			if ( options.delay ) {
				element.delay( options.delay );
			}
			if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
				element[ method ]( options );
			} else if ( effectName !== method && element[ effectName ] ) {
				element[ effectName ]( options.duration, options.easing, callback );
			} else {
				element.queue(function( next ) {
					$( this )[ method ]();
					if ( callback ) {
						callback.call( element[ 0 ] );
					}
					next();
				});
			}
		};
	});

	}));


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * JavaScript Canvas to Blob 2.0.5
	 * https://github.com/blueimp/JavaScript-Canvas-to-Blob
	 *
	 * Copyright 2012, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * http://www.opensource.org/licenses/MIT
	 *
	 * Based on stackoverflow user Stoive's code snippet:
	 * http://stackoverflow.com/q/4998908
	 */

	/*jslint nomen: true, regexp: true */
	/*global window, atob, Blob, ArrayBuffer, Uint8Array, define */

	(function (window) {
	    'use strict';
	    var CanvasPrototype = window.HTMLCanvasElement &&
	            window.HTMLCanvasElement.prototype,
	        hasBlobConstructor = window.Blob && (function () {
	            try {
	                return Boolean(new Blob());
	            } catch (e) {
	                return false;
	            }
	        }()),
	        hasArrayBufferViewSupport = hasBlobConstructor && window.Uint8Array &&
	            (function () {
	                try {
	                    return new Blob([new Uint8Array(100)]).size === 100;
	                } catch (e) {
	                    return false;
	                }
	            }()),
	        BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder ||
	            window.MozBlobBuilder || window.MSBlobBuilder,
	        dataURLtoBlob = (hasBlobConstructor || BlobBuilder) && window.atob &&
	            window.ArrayBuffer && window.Uint8Array && function (dataURI) {
	                var byteString,
	                    arrayBuffer,
	                    intArray,
	                    i,
	                    mimeString,
	                    bb;
	                if (dataURI.split(',')[0].indexOf('base64') >= 0) {
	                    // Convert base64 to raw binary data held in a string:
	                    byteString = atob(dataURI.split(',')[1]);
	                } else {
	                    // Convert base64/URLEncoded data component to raw binary data:
	                    byteString = decodeURIComponent(dataURI.split(',')[1]);
	                }
	                // Write the bytes of the string to an ArrayBuffer:
	                arrayBuffer = new ArrayBuffer(byteString.length);
	                intArray = new Uint8Array(arrayBuffer);
	                for (i = 0; i < byteString.length; i += 1) {
	                    intArray[i] = byteString.charCodeAt(i);
	                }
	                // Separate out the mime component:
	                mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
	                // Write the ArrayBuffer (or ArrayBufferView) to a blob:
	                if (hasBlobConstructor) {
	                    return new Blob(
	                        [hasArrayBufferViewSupport ? intArray : arrayBuffer],
	                        {type: mimeString}
	                    );
	                }
	                bb = new BlobBuilder();
	                bb.append(arrayBuffer);
	                return bb.getBlob(mimeString);
	            };
	    if (window.HTMLCanvasElement && !CanvasPrototype.toBlob) {
	        if (CanvasPrototype.mozGetAsFile) {
	            CanvasPrototype.toBlob = function (callback, type, quality) {
	                if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
	                    callback(dataURLtoBlob(this.toDataURL(type, quality)));
	                } else {
	                    callback(this.mozGetAsFile('blob', type));
	                }
	            };
	        } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
	            CanvasPrototype.toBlob = function (callback, type, quality) {
	                callback(dataURLtoBlob(this.toDataURL(type, quality)));
	            };
	        }
	    }
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return dataURLtoBlob;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        window.dataURLtoBlob = dataURLtoBlob;
	    }
	}(this));


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(6) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Widget ) {
	    // An extremely brain-dead version of inifinite scrolling.
	    // This class does not load data or generate any content,
	    // it simply manages when data/markup should be loaded
	    // into a scrollview as the user scrolls towards the bottom
	    // of the scrollview. The caller's loadFunc will be invoked
	    // and passed a deferred object. The loadFunc must call
	    // the resolve() method on the deferred object after it
	    // has loaded and rendered new data before any further
	    // scroll tracking will occur.

	    var InfiniteScroller = Widget.build( 'InfiniteScroller', Widget, {
	        _widgetName: "inifinite-scroller",

	        defaultOptions: {
	            loadFunc: null,
	            clickEvent: 'click',
	            triggerSelector: '.wp-infinite-scroller-trigger'
	        },

	        _attachBehavior: function() {
	            var widget = this,
	                options = this.options;

	            this._triggerEnabled = true;

	            this.$trigger = this.$element.find( options.triggerSelector );

	            // We register a click handler on the trigger just in case
	            // the browser fails to generate a scroll event. This can happen
	            // in some platforms like iOS Safari when the web-page is scaled
	            // up or down.

	            this.$trigger.on( options.clickEvent, function( e ) {
	                    widget.triggerLoad();
	                    return false;
	                });

	            // Listen to scroll events on the widget's top-level element,
	            // or any specified scrollview instance. Notice that we use
	            // bind() so that we are compatible with jQuery and any scrollview
	            // widget instance we may be given.

	            var scroller = options.scrollview ? options.scrollview : this.$element;
	            this.bindToScrollEvent(function( e ) {
	                    return widget._handleScroll( e );
	                });
	        },

	        bindToScrollEvent: function( callback ) {
	            var widget = this;

	            this.$element.on( 'scroll', function( e ) {
	                    return widget._handleScroll( e );
	                });
	        },

	        triggerIsEnabled: function() {
	          return this._triggerEnabled;
	        },

	        enableTrigger: function() {
	            this._triggerEnabled = true;
	        },

	        disableTrigger: function() {
	            this._triggerEnabled = false;
	        },

	        getScrollerClientBounds: function() {
	            return this.$element[ 0 ].getBoundingClientRect();
	        },

	        getTriggerClientBounds: function() {
	            return this.$trigger[ 0 ].getBoundingClientRect();
	        },

	        triggerLoad: function() {
	            if ( this._triggerEnabled ) {
	                this.trigger( 'before-load' );

	                var widget = this,
	                    options = this.options,
	                    deferred = $.Deferred();

	                deferred
	                    .done(function() {
	                        widget._handleLoadComplete();
	                    })
	                    .fail(function() {
	                        widget._handleLoadFailed();
	                    });

	                this.$trigger.addClass( 'loading' );
	                this.disableTrigger();

	                if ( options.loadFunc ) {
	                    options.loadFunc( this.$trigger, deferred );
	                }
	            }
	        },

	        _handleLoadComplete: function() {
	            this.$trigger.removeClass( 'loading' );
	            this.enableTrigger();
	            this.trigger( 'load' );
	        },

	        _handleLoadFailed: function() {
	            this.$trigger.removeClass( 'loading' );
	            this.enableTrigger();
	            this.trigger( 'load-failed' );
	        },

	        _handleScroll: function( e ) {
	            if ( this._triggerEnabled && this.$trigger.length ) {
	                var scrollerBounds = this.getScrollerClientBounds(),
	                    triggerBounds = this.getTriggerClientBounds();

	                if ( triggerBounds.left < ( scrollerBounds.left + scrollerBounds.width )
	                      && triggerBounds.top < ( scrollerBounds.top + scrollerBounds.height )  ) {
	                    this.triggerLoad();
	                }
	            }
	        }
	    });

	    Widget.addWidgetConstructorAsjQueryPlugin( 'wpInfiniteScroller', InfiniteScroller );

	    return InfiniteScroller;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(6), __webpack_require__(15) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Widget, VMouse ) {
	    var Overlay = Widget.build( 'Widget.Overlay', Widget, {
	        _widgetName: 'overlay',

	        defaultOptions: {
	            showClass: 'show-modal'
	        },

	        _attachBehavior: function() {
	            var widget = this,
	                opts = this.options;

	            this.$popup = this.$element.find( '.' + opts.popupClass );

	            this.$element.on( 'vclick', '.close', function( evt ) {
	                widget._closeHandler( evt );
	            });

	            this.$element.on( 'vclick', function( evt ) {
	                widget._closeHandler( evt );
	            });
	        },

	        _closeHandler: function( evt ) {
	            var $currentTarget = $( evt.currentTarget );

	            if ( $currentTarget.hasClass( '.close' ) || evt.target == this.$element[0] ) {
	                this.trigger( 'wp-overlay-hide' );
	                this.hide();
	            }
	        },

	        hide: function() {
	            this.$element.removeClass( this.options.showClass );
	        },

	        show: function() {
	            this.$element.addClass( this.options.showClass );
	        }
	    });

	    $.fn.wpOverlay = function() {
	        var overlay = new Overlay( this );
	        this.data( 'wp-overlay', overlay );
	    };

	    return Overlay;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(3), __webpack_require__(6), __webpack_require__(11), __webpack_require__(36) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Utils, Widget, PanelGroup, Animator ) {
	    var parallaxClassDict = {
	            'parallax-1':  {
	                    h: .2,
	                    v: 0
	                },
	            'parallax-2':  {
	                    h: .4,
	                    v: 0
	                },
	            'parallax-3':  {
	                    h: .8,
	                    v: 0
	                },
	            'parallax-4':  {
	                    h: 1.6,
	                    v: 0
	                },
	            'parallax-5':  {
	                    h: 3.2,
	                    v: 0
	                },
	            'parallax-v-1':  {
	                    h: 0,
	                    v: .2
	                },
	            'parallax-v-2':  {
	                    h: 0,
	                    v: .4
	                },
	            'parallax-v-3':  {
	                    h: 0,
	                    v: .8
	                },
	            'parallax-v-4':  {
	                    h: 0,
	                    v: 1.6
	                },
	            'parallax-v-5':  {
	                    h: 0,
	                    v: 3.2
	                }
	        };

	    var ParallaxPanelGroup = Widget.build( 'Widget.ParallaxPanelGroup', PanelGroup, {
	        _widgetName: 'parallax-panel-group',

	        defaultOptions: {
	                defaultIndex:  0,
	                direction:     'horizontal', // 'horizontal' || 'vertical'
	                snapDuration:  1000, // msecs
	                animateClass:  'wp-animate',
	                widgetClass:   'wp-parallax-panel-group',
	                viewClass:     'wp-parallax-panel-group-view',
	                panelClass:    'wp-parallax-panel-group-panel',
	                classDict:     null
	            },

	        _setUp: function( element, options ) {
	            var options = $.extend( {}, this.defaultOptions, options );

	            // Merge any class dictionary the caller gave us with our defaults.

	            options.classDict = $.extend( {}, parallaxClassDict, options.classDict );

	            // The first arg of the PanelGroup widget is actually a selector or collection
	            // of panel elements. In our case, our first arg is actually the top-level element
	            // of the widget which serves as the clip for a scrollview.

	            this.$clip = $( element );

	            // Find the panels for our widget and then pass them on to our base class constructor.

	            var clip = this.$clip[ 0 ],
	                $panels = Utils.scopedFind( clip, '.' + options.panelClass, options.widgetClass, clip );

	            // Find the view class we'll use to move the panels around on screen.

	            this.$view = Utils.scopedFind( clip, '.' + options.viewClass, options.widgetClass, clip );

	            // Our base class will trigger a showPanel before we can attach
	            // our behavior, so we need a means of blocking this initial
	            // showPanel call until we're ready.

	            this._blockShowPanel = true;

	            return ParallaxPanelGroup.prototype._super.prototype._setUp.call( this, $panels, options );
	        },

	        _attachBehavior: function() {
	            ParallaxPanelGroup.prototype._super.prototype._attachBehavior.apply( this, arguments );

	            var widget = this,
	                $panels = this.$element,
	                options = this.options;

	            this._isHorizontal = this.options.direction === 'horizontal';
	            this.items = [];
	            this._animScrollStartOffset = 0;
	            this._animScrollDistance = 0;
	            this._blockShowPanel = false;

	            this._scrollProp = this._isHorizontal ? 'scrollLeft' : 'scrollTop';
	            this._offsetProp = this._isHorizontal ? 'offsetLeft' : 'offsetTop';
	            this._panelOffsetProp = this._isHorizontal ? 'left' : 'top';

	            this._animator = new Animator(
	                function( easingConst ) {
	                    widget.$clip[ 0 ][ widget._scrollProp ] = widget._animScrollStartOffset + ( easingConst * widget._animScrollDistance );
	                },
	                {
	                    duration: 1000,
	                    easing: 'ease-out'
	                }
	            );

	            $panels.each( function() {
	                    var panel = this,
	                        $panel = $( panel ),
	                        panelOffset = { left: panel.offsetLeft, top: panel.offsetTop },
	                        dict = options.classDict,
	                        className;

	                    for ( className in dict ) {
	                        var data = dict[ className ],
	                            $items = Utils.scopedFind( panel, '.' + className, options.panelClass, panel );

	                        $items.each( function() {
	                            widget.items.push({
	                                ele: this,
	                                classData: data,
	                                panelOffset: panelOffset
	                            });

	                            widget._updateElementParallaxPosition( this, 0, panelOffset[ widget._panelOffsetProp ], data);
	                        });
	                    }
	                });

	            this.$clip
	                .on( 'scroll', function( e ) {
	                    widget._handleScroll();
	                })
	                .on( 'scroll-start', function( e ) {
	                    widget._handleScrollStart();
	                })
	                .on( 'momentum-stop', function( e ) {
	                    widget._handleMomentumStop();
	                });
	        },

	        _ready: function() {
	            this.showPanel( this.options.defaultIndex );
	        },

	        _handleScroll: function() {
	            var widget = this,
	                scrollEle = this.$clip[ 0 ],
	                scrollOffset = scrollEle[ this._scrollProp ],
	                items = this.items,
	                numItems = items.length;

	            for ( var i = 0; i < numItems; i++ ) {
	                var item = items[ i ];
	                widget._updateElementParallaxPosition( item.ele, scrollOffset, item.panelOffset[ this._panelOffsetProp ], item.classData );
	            }
	        },

	        _handleScrollStart: function() {
	            this._animator.stop();
	        },

	        _handleMomentumStop: function() {
	            this._snapToClosestPanel();
	        },

	        _snapToClosestPanel: function() {
	            var $panels = this.$element,
	                numPanels = $panels.length,
	                scrollEle = this.$clip[ 0 ],
	                offsetProp = this._offsetProp,
	                scrollOffset = scrollEle[ this._scrollProp ],
	                panelIndex = 0,
	                scrollToOffset = 0,
	                scrollToDist = -1;

	            for ( var i = 0; i <  numPanels; i++ ) {
	                var panel = $panels[ i ],
	                    offset = panel[ offsetProp ],
	                    dist = offset - scrollOffset;

	                if ( Math.abs( dist ) < Math.abs( scrollToDist ) || scrollToDist === -1 ) {
	                    scrollToDist = dist;
	                    panelIndex = i;
	                }
	            }

	            this.showPanel( panelIndex );
	        },

	        showPanel: function( indexOrEle ) {
	            if ( this._blockShowPanel ) {
	                return;
	            }

	            var panelEle = ( typeof indexOrEle === 'number' ) ?  this._getElement( indexOrEle ) : indexOrEle;

	            if ( panelEle && panelEle !== this.activeElement ) {
	                var oldOffset = this.$clip[ 0 ][ this._scrollProp ],
	                    newOffset = panelEle[ this._offsetProp ];

	                this._animator.stop();
	                this._animScrollStartOffset = oldOffset;
	                this._animScrollDistance = newOffset - oldOffset;
	                this._animator.start();
	            }
	        },

	        _updateElementParallaxPosition: function( ele, scrollOffset, panelOffset, data ) {
	            var dist = panelOffset - scrollOffset,
	                tx = dist * data.h,
	                ty = dist * data.v;

	            Utils.setElementTransform( ele, 'translate3d(' + tx + 'px,' + ty + 'px,0)' );
	        }
	    });

	    ParallaxPanelGroup.parallaxClassDict = parallaxClassDict;

	    Widget.addWidgetConstructorAsjQueryPlugin( 'wpParallaxPanelGroup', ParallaxPanelGroup );

	    return ParallaxPanelGroup;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(3), __webpack_require__(6) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Utils, Widget ) {
	    var ScrollView = Widget.build( 'Widget.ScrollView', Widget, {
	          defaultOptions: {
	                      smoothScroll: true,
	                      method: 'scroll' // scroll | offset | transform
	                },

	          _attachBehavior: function() {
	                this._scrollX = 0;
	                this._scrollY = 0;

	                this.$inner = this.$element.children().first();
	          },

	          _ready: function() {
	                // Set the initial position of the
	                // scrolling view.

	                this.scrollTo( this._scrollX, this._scrollY );
	          },

	          // Scroll to the specified x,y position.

	          scrollTo: function( x, y ) {
	                this.trigger( 'scroll-start', {
	                            x: this._scrollX,
	                            y: this._scrollY
	                      });

	                this._setScrollPosition( x, y );

	                this.trigger( 'scroll-stop', {
	                            x: this._scrollX,
	                            y: this._scrollY
	                      });
	          },

	          _translate3d: function( x, y ) {
	                Utils.setElementTransform( this.$inner, 'translate3d(' + x + 'px,' + y + 'px, 0)' );
	          },

	          // Position the view inside the scrolling
	          // viewport at the specified x,y position.

	          _setScrollPosition: function( x, y ) {
	                x = x > 0 ? x : 0;
	                y = y > 0 ? y : 0;

	                switch ( this.options.method ) {
	                      case 'offset':
	                            this.$inner.css({
	                                        left: ( -x ) + 'px',
	                                        top: ( -y ) + 'px'
	                                  });
	                            break;
	                      case 'scroll':
	                            this.$element[ 0 ].scrollLeft = x;
	                            this.$element[ 0 ].scrollTop = y;
	                            break;
	                      case 'transform':
	                            this._translate3d( -x, -y );
	                            break;
	                }

	                this._scrollX = x;
	                this._scrollY = y;

	                this.trigger( 'scroll', {
	                            x: this._scrollX,
	                            y: this._scrollY
	                      });
	          },

	          // Get the width of the scrolling viewport.

	          getWidth: function() {
	                return this.$element.width();
	          },

	          // Get the height of the scrolling viewport.

	          getHeight: function() {
	                return this.$element.height();
	          },

	          // Get the width of the content view
	          // inside the scrolling viewport.

	          getScrollWidth: function() {
	                return this.options.method === 'scroll' ? this.$element[ 0 ].scrollWidth : this.$inner[ 0 ].offsetWidth;
	          },

	          // Get the height of the content view
	          // inside the scrolling viewport.

	          getScrollHeight: function() {
	                return this.options.method === 'scroll' ? this.$element[ 0 ].scrollHeight : this.$inner[ 0 ].offsetHeight;
	          },

	          // Get the max scroll position in the
	          // horizontal direction.

	          getScrollMaxX: function() {
	                var width = this.getScrollWidth() - this.getWidth();
	                return width < 0 ? 0 : width;
	          },

	          // Get the max scroll position in the
	          // vertical direction.

	          getScrollMaxY: function() {
	                var height = this.getScrollHeight() - this.getHeight();
	                return height < 0 ? 0 : height;
	          },

	          // Get the current x,y scroll position of
	          // the scrolling view.

	          getPosition: function() {
	                return {
	                            x: this._scrollX,
	                            y: this._scrollY
	                      };
	          }
	    });

	    Widget.addWidgetConstructorAsjQueryPlugin( 'wpScrollView', ScrollView );

	    return ScrollView;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(6), __webpack_require__(18) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Widget, DragTracker ) {
	    // XXX: This still needs to be made generic so that we can use
	    //                  this in a horizontal, vertical, and both mode.
	    var Slider = Widget.build( 'Widget.Slider', Widget, {
	        _widgetName: 'slider',

	        defaultOptions: {
	            trackClassName: 'wp-slider-track',
	            trackFeedbackClassName: 'wp-slider-track-feedback',
	            thumbClassName: 'wp-slider-thumb',
	            useTransforms: false
	        },

	        _attachBehavior: function() {
	            var self = this,
	                opts = this.options;

	            this.$track = this.$element.find( '.' + opts.trackClassName );
	            this.$trackFeedback = this.$element.find( '.' + opts.trackFeedbackClassName );
	            this.$thumb = this.$element.find( '.' + opts.thumbClassName );

	            this.percentage = 0; // % value in the range from zero to one.
	            this.position = 0; // px

	            this._resetConstraints();

	            this.tracker = new DragTracker( this.$thumb[ 0 ], {
	                    dragStart: function( dt, dx, dy ) { self._handleDragStart( dx, dy ); },
	                    dragUpdate: function( dt, dx, dy ) { self._handleDragUpdate( dx, dy ); },
	                    dragStop: function( dt, dx, dy ) { self._handleDragStop( dx, dy ); }
	                });
	        },

	        _handleDragStart: function( dx, dy ) {
	            this._resetConstraints();
	            this._startPos = this.position;
	            this.trigger( 'wp-slider-drag-start', { position: this.position, percentage: this.percentage } );
	        },

	        _handleDragUpdate: function( dx, dy ) {
	            this.setPositionByPixel( this._startPos + dx );
	        },

	        _handleDragStop: function( dx, dy ) {
	            this._startPos = 0;
	            this.trigger( 'wp-slider-drag-stop', { position: this.position, percentage: this.percentage } );
	        },

	        _resetConstraints: function( update ) {
	            var trackWidth = this.$track.width(),
	                thumbWidth = this.$thumb.width();

	            this.maxPos = trackWidth - thumbWidth;

	            // Reset the thumb based on our new width.

	            this.setPositionByPixel( this.percentage * this.maxPos, update );
	        },

	        setPositionByPixel: function( pos, update )
	        {
	            // Clip the value we were given to our pixel range.

	            pos = Math.round( pos || 0 );
	            pos = pos < 0 ? 0 : ( pos > this.maxPos ? this.maxPos : pos );

	            this._setThumbPosition( pos, update );
	        },

	        setPositionByPercentage: function( percent, update ) {
	            this.percentage = percent < 0 ? 0 : ( percent < 1 ? percent : 1 );
	            this._setThumbPosition( Math.round( this.percentage * this.maxPos ), update );
	        },

	        getPosition: function() {
	            return this.position;
	        },

	        getPositionAsPercentage: function() {
	            return this.percentage;
	        },

	        _setThumbPosition: function( pos, update ) {
	            this.percentage = pos / this.maxPos;
	            this.position = pos;

	            this.$trackFeedback.css( 'width', ( this.percentage * 100 ) + '%');

	            if ( this.options.useTransforms ) {
	                var transformStr = 'translateX(' + pos + 'px)';
	                this.$thumb.css({
	                        webkitTransform: transformStr,
	                        mozTransform: transformStr,
	                        oTransform: transformStr,
	                        msTransform: transformStr,
	                        transform: transformStr
	                    });
	            } else {
	                this.$thumb.css( 'left', pos + 'px');
	            }

	            // standard updates can be blocked by passing
	            // false through update parameter. This would
	            // be done to update the thumb view without
	            // affecting the scroll model

	            if ( update === undefined || update ) {
	                this.update();
	            }

	        },

	        update: function() {
	            this._update();
	            this.trigger( 'wp-slider-update', { position: this.position, percentage: this.percentage } );
	        },

	        _update: function() {
	            // Stub function to be used by derived class.
	        }
	    });

	    // Add a convenience method to the jQuery Collection prototype,
	    // that applies our Slider behavior to all the elements in the collection.

	    Widget.addWidgetConstructorAsjQueryPlugin( 'wpSlider', Slider );

	    // XXX: This needs to be folded into the slider and
	    //      slider2d widgets, and made optional.

	    Slider.sliderTrackPlugin = {
	        initialize: function( slider, options ) {
	            var plugin = this;

	            slider.bind( 'attach-behavior', function( e ) {
	                    plugin._attachBehavior( slider );
	                });
	        },

	        _attachBehavior: function( slider ) {
	            slider.$track.bind( slider.tracker.dragEventHandler.startEvent, function( e ) {
	                    // Ideally we would use event offsetX/offsetY, but they
	                    // don't exist for touch events.

	                    var offset = slider.$track.offset();

	                    slider._resetConstraints();
	                    slider.setPositionByPixel( e.pageX - offset.left, e.pageY - offset.top );
	                    slider.tracker.dragEventHandler._startDrag( e );

	                    // Call preventDefault() on the event to prevent
	                    // the browser from triggering default behaviors
	                    // like selection of content.

	                    e.preventDefault();
	                });
	        }
	    };

	    return Slider;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(6), __webpack_require__(18), __webpack_require__(3) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, Widget, DragTracker, Utils ) {
	    var DraggableList = Widget.build( 'Widget.DraggableList', Widget, {
	        _widgetName: 'draggable-list',

	        defaultOptions: {
	            scrollPanelSelector: 'wp-list-scroll-panel',
	            scrollPanelInnerSelector: 'wp-list-scroll-panel-inner',
	            itemSelector: 'wp-list-item',
	            draggableImageSelector: 'wp-draggable-list-item',
	            parentSelector: undefined,
	            draggingClass: 'wp-list-item-dragging',
	            insertAfterClass: 'wp-list-insert-after',
	            insertBeforeClass: 'wp-list-insert-before',
	            autoScrollThreshold: 200,
	            autoScrollInterval: 80,
	            compensateForScroll: false,
	            useWindowInnerHeight: false,
	            dropCallback: undefined
	        },

	        _attachBehavior: function() {
	            var self = this;
	            var opts = this.options;
	            this.$main = $( opts.scrollPanelSelector );
	            this.$mainInner = $( opts.scrollPanelInnerSelector );
	            this.boxes = this._calculateBoxes();

	            this.$element.on( 'vmousedown', opts.draggableItemSelector, function( evt, data ) {
	                evt.stopPropagation();
	                self._onMouseDown( evt, data );
	            });
	        },

	        _getTopPosition: function( targetEl ) {
	            // Calulcate top position based on nested parent selector
	            var topPositions = [ targetEl.position().top ];
	            var parentSelector = this.options.parentSelector;
	            if ( parentSelector ) {
	                var $el = $( targetEl );
	                var $parent = $el.parent( parentSelector );
	                while( $parent.length ) {
	                    $el = $parent;
	                    topPositions.push( $el.position().top );
	                    $parent = $el.parent( parentSelector );
	                }
	            }
	            return topPositions.reduce( function( pv, cv ) { return pv + cv; }, 0 );
	        },

	        _calculateBoxes: function() {
	            // calculate hit boxes
	            var self = this;
	            var debug = false;
	            if ( debug ) {
	                $( '.debug-box' ).remove();
	            }

	            var boxes = [];
	            var items = this.$element.find( this.options.itemSelector ).get();
	            for ( var i = 0, len = items.length; i < len; i++ ) {
	                var $item = $( items[ i ] );

	                var top = self._getTopPosition( $item );
	                var height = $item.outerHeight();

	                boxes.push({
	                    top: top,
	                    height: height
	                });

	                if ( debug ) {
	                    var box = $( '<div class="debug-box" style="border: 1px solid red; position: absolute;left: 0;height:' + height + 'px;width: 100%;top:' + top + 'px;"></div>')
	                    self.$element.append( box );
	                }
	            }

	            return boxes;
	        },

	        _onMouseDown: function( evt, data ) {
	            // when we mouse down on an item, instantiate a new drag tracker
	            // that will handle update and stop
	            var self = this;
	            var opts = this.options;
	            var $main = this.$main;
	            var $mainInner = this.$mainInner;
	            var insertAfterClass = opts.insertAfterClass;
	            var insertBeforeClass = opts.insertBeforeClass;
	            var boxes = this.boxes;

	            var $target = $( evt.currentTarget );
	            var $clone = $target.clone();
	            $clone.addClass( opts.draggingClass );

	            var scrollTimerId;

	            var dt = new DragTracker( $target, {
	                dragStart: function( dt, dx, dy ) {
	                    dt.scrollStart = $main.scrollTop();
	                    dt.scrollDy = 0;
	                    // Take care of scrolling while dragging
	                    $main.on( 'mousewheel', function() {
	                        dt.scrollDy = $main.scrollTop() - dt.scrollStart;
	                    });
	                },
	                dragUpdate: function( dt, dx, dy ) {
	                    Utils.setElementTransform( $clone, 'translateX(' + dx + 'px) translateY(' + ( dt.scrollDy + dy ) + 'px)' );

	                    var mouseLeft = dt.startX + dx;
	                    if ( opts.compensateForScroll ) {
	                        var mouseTop = $main.scrollTop() + dt.startY + dy;
	                        var mouseClientTop = dt.startY + dy;
	                    } else {
	                        var mouseClientTop = dt.startY + dy - $main.scrollTop();
	                        var mouseTop = dt.startY + dy;
	                    }

	                    // check box hits and apply insertBeforeClass
	                    //
	                    // XXX it is currently expected that the insertbefore class
	                    // doesn't require recalculating boxes
	                    var $items = self.$element.find( opts.itemSelector );
	                    $items.removeClass( insertAfterClass );
	                    $items.removeClass( insertBeforeClass );
	                    // first half of first box
	                    if ( mouseTop >= 0 && mouseTop < boxes[0].height / 2 ) {
	                        $items.eq( 0 ).addClass( insertBeforeClass );
	                    }
	                    for ( var i = 1, len = boxes.length; i < len; i++ ) {
	                        var box = boxes[ i ];
	                        var prevBox = boxes[ i - 1 ];
	                        if ( mouseTop > ( prevBox.top + ( prevBox.height / 2 ) ) &&
	                             mouseTop <= ( box.top + ( box.height / 2 ) ) ) {

	                            // insertAfter
	                            $items.eq( i - 1 ).addClass( insertAfterClass );
	                            break;
	                        }
	                    }
	                    // last half of last box
	                    var lastBox = boxes[ boxes.length - 1];
	                    if ( mouseTop > lastBox.top + ( lastBox.height / 2 ) ) {
	                        $items.eq( boxes.length - 1 ).addClass( insertAfterClass );
	                    }

	                    // auto scroll if near the edges
	                    //
	                    // XXX only up and down for now
	                    if ( opts.useWindowInnerHeight ) {
	                        var winHeight = window.innerHeight;
	                    } else {
	                        var winHeight = $main.height();
	                    }
	                    var maxDownScroll = $mainInner.height() - winHeight;
	                    var currentScroll = $main.scrollTop();
	                    var autoScrollThreshold = opts.autoScrollThreshold;

	                    if ( mouseClientTop < autoScrollThreshold && currentScroll > 0 ) {
	                        var percentage = mouseClientTop / autoScrollThreshold;
	                        var currentRate = percentage * opts.autoScrollInterval;
	                        // scroll up
	                        if ( scrollTimerId ) {
	                            clearInterval( scrollTimerId );
	                        }
	                        var scrollUp = function() {
	                            if ( $main.scrollTop() >= 20 ) {
	                                $main.scrollTop( currentScroll -= 20 );
	                                if ( opts.compensateForScroll ) {
	                                    dt.scrollDy -= 20;
	                                }
	                                Utils.setElementTransform( $clone, 'translateX(' + dx + 'px) translateY(' + ( dt.scrollDy + dy ) + 'px)' );
	                            } else {
	                                clearInterval( scrollTimerId );
	                            }
	                        };
	                        scrollUp();
	                        scrollTimerId = setInterval( scrollUp, currentRate );
	                    } else if ( mouseClientTop >= ( winHeight - autoScrollThreshold ) && currentScroll < maxDownScroll ) {
	                        var percentage = ( winHeight - mouseClientTop ) / autoScrollThreshold;
	                        var currentRate = percentage * opts.autoScrollInterval;
	                        // scroll down
	                        if ( scrollTimerId ) {
	                            clearInterval( scrollTimerId );
	                        }
	                        var scrollDown = function() {
	                            if ( $main.scrollTop() <= maxDownScroll - 20 ) {
	                                $main.scrollTop( currentScroll += 20 );
	                                if ( opts.compensateForScroll ) {
	                                    dt.scrollDy += 20;
	                                }
	                                Utils.setElementTransform( $clone, 'translateX(' + dx + 'px) translateY(' + ( dt.scrollDy + dy ) + 'px)' );
	                            } else {
	                                clearInterval( scrollTimerId );
	                            }
	                        };
	                        scrollDown();
	                        scrollTimerId = setInterval( scrollDown, currentRate );
	                    } else {
	                        clearInterval( scrollTimerId );
	                    }
	                },
	                dragStop: function( dt, dx, dy ) {
	                    clearInterval( scrollTimerId );
	                    $clone.remove();

	                    // get newSibling, and domMoveMethod
	                    var $newSibling = self.$element.find( '.' + insertAfterClass );
	                    var domMoveMethod = 'insertAfter';
	                    if ( !$newSibling.length ) {
	                        $newSibling = self.$element.find( '.' + insertBeforeClass );
	                        domMoveMethod = 'insertBefore';
	                    }

	                    // reset
	                    self.$element.find( opts.itemSelector ).removeClass( insertAfterClass + ' ' + insertBeforeClass );
	                    boxes = self.boxes = self._calculateBoxes();

	                    // disable and let GC clean it out later
	                    dt.disable();

	                    // for a drop, check dropcallback
	                    // if move and remove is passed back, remove target, the
	                    // dropcallback took care of it
	                    // if just move is set, move the item
	                    // if neither is set, do nothing
	                    if ( opts.dropCallback && typeof opts.dropCallback == 'function' ) {
	                        opts.dropCallback( $target, $newSibling, domMoveMethod == 'insertAfter' ? 'after' : 'before', function( move, remove ) {
	                            if ( move ) {
	                                if ( remove ) {
	                                    $target.remove();
	                                } else {
	                                    // normal move
	                                    $target[ domMoveMethod ]( $newSibling );
	                                }
	                                if ( opts.postDropCallback && typeof opts.postDropCallback == 'function' ) {
	                                    opts.postDropCallback();
	                                }
	                            }
	                        });
	                    }
	                }
	            });

	            var topPosition = self._getTopPosition( $target );

	            // set startX, startY, and eventHandlers
	            dt.dragEventHandler._startDrag( evt );
	            // set initial top and left (use transforms dx/dy for updates)
	            $clone.css({
	                top: topPosition + 'px',
	                left: '0px'
	            });
	            // add $clone to dom
	            this.$element.append( $clone );
	        },
	    });

	    return DraggableList;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(4) ], __WEBPACK_AMD_DEFINE_RESULT__ = function( $, WebPro ) {
	    window.$ = window.jQuery = $;
	    window.WebPro = WebPro;

	    return WebPro;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
/******/ ]);