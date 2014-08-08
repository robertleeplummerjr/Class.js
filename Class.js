/**
 *
 * @param {String} name
 * @param {Function|Object}_class
 * @param {Function} _base
 * @returns {*}
 * @constructor
 */
var Class = function(name, _class, _base) {
    var construct = _class.construct || _class,
        _static = {},
        parent;

    if (construct) {
        //create static methods/attributes
        _class.typeOf = name;
        if (typeof _class == "object") {
            _static = _class;
        }


        if (construct.extends !== undefined) {
            _base = construct.extends;
        }

        //extend and set parent
        if (_base && (parent = _base.prototype)) {
            for (var attr in parent) {
                if (attr !== 'construct') {
                    _static[attr] = _class[attr] || parent[attr];
                }
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
            return Class(type, child, construct);
        };

        construct.prototype = _static;

        //this defaults to window, extend with name, and return;
        return this[name] = construct;
    }
};
