{
    /**
     * Type Aliases (별칭) 타입에 별칭을 지어주자
     */
    type Text = string;
    const name: Text = 'jun';

    type Num = number | undefined;

    type Student = {
        name: string;
        age: Num;
    };
    type Person = {
        name: string;
        age: Num;
    };
    const student: Student = {
        name: 'jun',
        age: 12,
    };

    // String Literal Types
    type Month = 'jan';
    let someMonth: Month;
    someMonth = 'jan'; // ok

    // 값자체를 타입으로 쓸 수 있다.
    type isRed = true;
    const red: isRed = true;

    // Union Types
    type Days = 'mon' | 'tue' | 'wed';
    let day: Days = 'mon';
}
