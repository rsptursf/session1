{
    /**
     * JavaScript
     * 원시 타입: number, string, boolean, bigint, symbol, null, undefined
     * 객체 타입: function, array 등등...
     */

    // 숫자
    const number: number = -6;

    // 문자열
    const string: string = 'hello';

    // 불리언
    const boolean: boolean = false;

    // undefined
    let gender: undefined; // 실제로 쓸 일은 거의 없음
    let age: number | undefined;
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return 1;
    }

    // null
    let person: null;
    let person2: string | null;

    let any: any; // 어떤 타입이든 다 가능
    let unknown: unknown; // 타입을 지정하지 않겠다.

    let hi: string;
    hi = any;
    // hi = unknown; // error

    // void
    function print(): void {
        console.log('hello');
        return;
    }
    let unusable: void = undefined;

    // never
    function throwError(message: string): never {
        throw new Error(message);
    }

    const object = new Object({ name: 'jack' });
    let obj: object | Record<string, string>;
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({ name: 'jack' });
}
