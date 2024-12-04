{
    /**
     * Type Assertions
     * 타입을 확신할 수 있는 경우 사용
     * 지양해야하지만 라이브러리를 사용하다보면 필요할때가 있다.
     */

    //타입이 정의되지 않은 라이브러리
    //라이브러리 문서에선 항상 string을 리턴한다고 가정
    function someLibrary(): any {
        return 'hello';
    }
    const result = someLibrary();

    // 어느날 라이브러리가 number를 리턴하게 바뀌었다면? 빌드시 에러가 나지 않음 😱
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1));

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    // \!를 붙이면 null이나 undefined가 아니라고 확신할때 사용
    const numbers = findNumbers()!;
    numbers.push(2);

    const button = document.querySelector('class')!;
}
