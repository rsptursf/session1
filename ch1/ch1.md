# chapter1

## Typescript 왜 쓰는 걸까?

### 1. 자바스크립트의 한계

```javascript
// 자바스크립트는 동적 타이핑을 지원하는 너그러운 언어이다. => 니가 어떻게 작성하던 나는 실행 시켜볼게!
1 + '1'; // '11'
```

-   자바스크립트는 10일 만에 만들어진 언어
-   브라우저를 단순히 제어하기 위한 목적으로 만들어졌다.
-   웹페이지는 시간이 지날수록 인터렉션이 많아지고 복잡해졌다. 하나의 (웹)애플리케이션으로 진화하였음
-   또한 브라우저 외의 환경에서도 사용되기 시작했다. (Node.js, React Native, Electron 등)
-   이런 대규모 애플리케이션을 개발하기에는 동적 타입 언어는 다소 불편하다.

```javascript
function greet(name) {
    console.log('Hello, ' + name.toUpperCase());
}

let user = null;
greet(user); // 런타임 오류: TypeError: Cannot read property 'toUpperCase' of nul
```

```javascript
function greet(user) {
    return 'Hello, ' + user.name + '. You are ' + user.age + ' years old.';
}

let invalidUser = { name: 'Alice' }; // age 속성이 없음
console.log(greet(invalidUser)); // "Hello, Alice. You are undefined years old."
```

-   개발자가 실수를 하기 쉽다.
-   런타임에서 발견될 때가 많다.
-   개발 중 미리 발견하기 어렵다.

### 2. 타입스크립트의 등장

나열한 자바스크립트의 한계를 극복하기 위해 마이크로소프트에서 개발한 언어 자바스크립트의 상위 집합(Superset) 언어
브라우저가 이해할 수 있는 언어는 자바스크립트 뿐, 타입스크립트로 작성한 코드를 자바스크립트로 컴파일, 컴파일 과정에서 오류를 미리 발견할 수 있다.

### 3. 타입스크립트의 사용하는 이유

#### 가. 타입 안정성

빌드과정을 통해 스크립트 실행전에 타입 오류를 발견할 수 있다.

#### 나. 자동화에 가까운 문서화

인터페이스나 타입을 통해 자동으로 문서화되는 효과를 얻을 수 있습니다. 이는 코드 작성자의 의도를 명확히 전달하는 데 도움을 줍니다.

```typescript
function greet(name: string) {
    console.log('Hello, ' + name.toUpperCase());
}

let user = null;
greet(user); // 컴파일 오류: Object is possibly 'null'
```

### 4. 언제 사용하면 좋을까?

-   규모가 있는 프로젝트
-   협업이 필요한 프로젝트
-   유지보수가 필요한 프로젝트

> 초기에는 생산성이 떨어질 수 있지만, 프로젝트 규모가 커질수록 타입스크립트의 장점이 더욱 부각됩니다.

### 링크

[LiveShare](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

### Typescript 관련 링크

[Typescript 공식 홈페이지](https://www.typescriptlang.org/)
[Typescript Playground](https://www.typescriptlang.org/play)
[Typescript Cheat Sheet](https://www.typescriptlang.org/cheatsheets/)
[type-challenges](https://github.com/type-challenges/type-challenges)
[react-typescript-cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### FAQ

-   자바스크립트를 배우고 타입스크립트를 배워야 하나요?
-   리액트랑 타입스크립트 둘 다 같이 배워도 되나요?
-   협업시 타입스크립트 필수 인가요?
