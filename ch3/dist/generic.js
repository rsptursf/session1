"use strict";
{
    function whatType(arg) {
        return arg;
    }
    function whatTheType(arg) {
        return arg;
    }
    const string = whatType('hello');
    const length = [1, 2, 3].length;
    const number = whatType(length);
    const boolean = whatTheType(true);
}
