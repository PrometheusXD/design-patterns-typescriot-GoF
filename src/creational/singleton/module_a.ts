import { MyDatabaseFunction } from './db/my-database-function';

const myDatabase = MyDatabaseFunction;

myDatabase.add({ name: 'matheus', age: 21 });
myDatabase.add({ name: 'lucas', age: 26 });
myDatabase.add({ name: 'eduardo', age: 25 });

export { myDatabase };
