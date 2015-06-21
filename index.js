module.exports = function (window) {
    "use strict";

    require('./css/i-splitdiv-secondfixed.css'); // <-- define your own css filename here

    require('itags.core')(window);

    var pseudoName = 'secondfixed', // <-- define your own pseudo-name here
        superClassName = 'i-splitdiv', // <-- define the itag-name of the superClass here
        itagName = superClassName+'#'+pseudoName, // <-- define the itag-name of the superClass here
        DOCUMENT = window.document,
        ITSA = window.ITSA,
        Itag, ISuperClass;

    if (!window.ITAGS[itagName]) {

        ISuperClass = require('i-splitdiv')(window);  // <-- define the itag-name of the superClass here NOT by variable, for browserify wouldn't load it

        Itag = ISuperClass.pseudoClass(pseudoName, {

            render: function() {
                var element = this,
                    divider;
                element.$superProp('render');
                divider = element.getData('_divider1');
                if (divider) {
                    divider.setData('_reverse', true);
                    divider.setData('_section', 2);
                    divider.setData('_borderNode', element.setData('_section1'));
                }
            }

        });

        window.ITAGS[itagName] = Itag;
    }

    return window.ITAGS[itagName];
};
