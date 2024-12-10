{
    const input = document.getElementById('narrowing');

    // if (input instanceof HTMLInputElement) {
    input.value = 'Hello TypeScript';
    // }

    function whatType(value: string): number | string | null {
        if (value === 'string') {
            return value;
        } else if (value === 'number') {
            return 0;
        } else {
            return null;
        }
    }
    const type = whatType('string');
    if (type != null) {
        type;
        if (typeof type === 'string') {
            type;
        }
    }
}
