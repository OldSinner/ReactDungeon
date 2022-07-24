export default class UtilContext {
    constructor() {}
    cursor: number = 0;
    GetNewId(): number {
        this.cursor++;
        return this.cursor;
    }
}
