{
    // 배열
    const names: string[] = ['a', 'b', 'c'];
    // readonly로 object의 불변성을 지킬 수 있다.
    function printArray(fruits: readonly string[]) {
        fruits.push('d'); // Error
        fruits.forEach(console.log);
    }

    // 실제론 interface나 type alias로 대체해서 사용하는 것이 좋다.(가독성)
    const [state, setState] = useState();
    function useState<T>(initial?: T): [T | undefined, () => void] {
        return [initial, () => {}];
    }
}
