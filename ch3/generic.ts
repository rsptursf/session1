{
    function whatType<T>(arg: T): T {
        return arg;
    }

    function whatTheType(arg: any) {
        return arg;
    }

    const string = whatType('hello');
    const length = [1, 2, 3].length;
    const number = whatType(length);

    const boolean = whatTheType(true);
}
