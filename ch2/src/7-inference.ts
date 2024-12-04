{
    /**
     * Type Inference 타입 추론, 알아서 타입이 결정된다.
     */

    // 뻔한 타입은 생략하자
    let text = 'hello';
    text = 1; // error

    // any로 추론되었음 any는 타입스크립트에서 지양해야함
    function print(message) {
        console.log(message);
    }
    print('hello');

    function add(x: number, y: number) {
        return x + y;
    }
    // 함수 리턴값이 number로 추론됨
    const result = add(1, 2);

    // 타입추론 양날의 검 예제는 간단하기 때문에 실수할일이 없지만.
    // 누군가 add 함수의 리턴값을 string으로 바꾸면 ??
    // 팀의 스타일이 있다면 그에 맞춰가는게 제일 좋음
    function add(x: number, y: number) {
        return x + y + 'hello';
    }
}
