export class TodoModel {
    constructor(
        public id: string,
        public title: string,
        public completed: boolean
    ) {

    }
    toggle() {
        this.completed = !this.completed;
    }
}
