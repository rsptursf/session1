{
    /**
     * Enum 다른 프로그래밍 언어에서도 자주 사용되는 타입 js에는 없음
     */
    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    // 이런식으로 다른 언어의 enum처럼 사용할 수 있음
    const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    enum Days {
        // Monday = 1,
        // Monday = 'mon',
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    // 타입스크립트에서 다른 언어의 enum처럼 사용할 수 있음
    console.log(Days.Monday);
    let day: Days = Days.Saturday;
    day = Days.Tuesday;
    // 옛날엔 5버전 이하에서는 에러가 없었음. 그래서 enum을 잘 사용하지 않았음
    day = 10;
    console.log(day);

    let dayOfweek: DaysOfWeek = 'Monday';
    dayOfweek = 'Wednesday';
}
