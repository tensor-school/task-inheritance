interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;
}

export class Student extends Person {
    readonly _phone: string;
}
