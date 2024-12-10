{
    // constants assertion
    type Role = 'admin' | 'user';
    // const RoleList = ['admin', 'user'] as const;
    // type Role = typeof RoleList[number];
    // const Roles = {
    //     admin: 'admin',
    //     user: 'user',
    // }
    // type Role = keyof typeof Roles;

    class User {
        id: number;
        name: string;
        role: Role;
        age: number;
        uuid: string;

        constructor(id: number, name: string, role: Role, age: number) {
            this.id = id;
            this.name = name;
            this.role = role;
            this.age = age;
            this.uuid = crypto.randomUUID();
        }

        greet() {
            // 만나이를 출력
            console.log(`Hello, I'm ${this.name}, ${this.age - 1} years old.`);
        }

        isAdmin(): boolean {
            return this.role === 'admin';
        }
    }

    class UserManager {
        public users: User[];

        constructor(users: User[]) {
            this.users = users;
        }

        addUser(user: Pick<User, 'id' | 'name' | 'role' | 'age'>) {
            this.users.push(new User(user.id, user.name, user.role, user.age));
        }

        getUsersInfo(): Pick<User, 'name' | 'age'>[] {
            return this.users.map((user) => {
                return {
                    name: user.name,
                    age: user.age,
                };
            });
        }
    }

    function findUserById(users: User[], id: number): User | undefined {
        return users.find((user) => user.id === id);
    }

    function filterUsersByRole(users: User[], role: Role): User[] {
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
    // 실행코드를 고쳐야 할까? 내가 정의한 함수를 고쳐야할까? 백엔드를 고쳐야 할까?
    manager.addUser({ id: 4, name: 'Daniel', role: 'admin', age: 40 });

    console.log(manager.getUsersInfo());

    const someUser = findUserById(manager.users, 6);
    if (someUser) {
        someUser.greet();
    }

    const adminUsers = filterUsersByRole(manager.users, 'admin');
    console.log(adminUsers);
}
