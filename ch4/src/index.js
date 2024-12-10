// 나는 사수가 작성한 자바스크립트 코드의 유지보수를 맡게 되었다.
// 코드를 읽고 이해한 후, 다른 개발자들이 잘 사용할 수 있도록 TypeScript로 변환해보자.
// 타입스크립트로 전환하면서 잠재적인 문제점을 찾아서 수정하자.
// any 타입은 사용하지 말자.
// 함수의 파라미터와 반환값에 타입을 명시적으로 정의하자.
{
    class User {
        constructor(id, name, role, age) {
            this.id = id;
            this.name = name;
            // user 또는 admin 두 가지 역할 중 하나를 가진다.
            this.role = role;
            this.age = age;
            this.uuid = crypto.randomUUID();
        }

        greet() {
            // 만나이를 출력
            console.log(`Hello, I'm ${this.name}, ${this.age - 1} years old.`);
        }

        isAdmin() {
            return this.role === 'adnim';
        }
    }

    class UserManager {
        constructor(users) {
            this.users = users;
        }

        addUser(user) {
            this.users.push(new User(user.id, user.name, user.role, user.age));
        }

        getUsersInfo() {
            return this.users.map((user) => {
                return {
                    name: user.name,
                    age: user.age,
                };
            });
        }
    }

    function findUserById(users, id) {
        return users.find((user) => user.id === id);
    }

    function filterUsersByRole(users, role) {
        return users.filter((user) => user.role === role);
    }

    const manager = new UserManager([
        // 서버에서 내려준 데이터
        new User(1, 'Alice', 'admin', 30),
        new User(2, 'Bob', 'user', 20),
        new User(3, 'Charlie', 'user', 25),
        new User(4, 'David', 'admin', 35),
        new User(5, 'Ella', 'user', 24),
    ]);
    manager.addUser({ id: 4, name: 'Daniel', role: 'admin' });

    console.log(manager.getUsersInfo());

    const someUser = findUserById(manager.users, 6);
    someUser.greet();

    const adminUsers = filterUsersByRole(manager.users, 'admin');
    console.log(adminUsers);
}
