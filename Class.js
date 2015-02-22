/**
 *
 * @param {String} name
 * @param {Function|Object} _class
 * @param {Function} [_base]
 * @returns {*}
 * @constructor
 */
var Class = function(name, _class, _base) {
	"use strict";

    var context = this,
	    construct = _class.construct || _class,
        _static = {},
        parent;

    if (construct) {
        //create static methods/attributes
        _class.typeOf = name;
	    _class.instanceOf = construct;
        if (typeof _class == "object") {
            _static = _class;
        }

        if (_class.extends !== undefined) {
            _base = _class.extends;
        }

        //extend and set parent
        if (_base && (parent = _base.prototype)) {
            for (var attr in parent) if (parent.hasOwnProperty(attr) && attr !== 'construct') {
                _static[attr] = _class[attr] || parent[attr];
            }
            //set parent attribute to what is being inherited
            _static.parent = parent;
        }

        //make ability to extend as anon
        construct.extend = function(typeOrChild, child) {
            var type = 'anon';
            if (child) {
                type = typeOrChild;
            } else {
                child = typeOrChild;
            }
            return Class.call(context, type, child, construct);
        };

        construct.prototype = _static;

        //this defaults to window, extend with name, and return;
        return (this || window)[name] = construct;
    }
};