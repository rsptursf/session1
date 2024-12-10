{
    interface Todo {
        title: string;
        description?: string;
    }

    // Partial
    type PartialTodo = Partial<Todo>;
    const partialTodo: PartialTodo = {};

    // Required
    type RequiredTodo = Required<Todo>;
    const requiredTodo: RequiredTodo = { title: 'title' };

    // Readonly
    type ReadonlyTodo = Readonly<Todo>;
    const readonlyTodo: ReadonlyTodo = { title: 'title' };
}
