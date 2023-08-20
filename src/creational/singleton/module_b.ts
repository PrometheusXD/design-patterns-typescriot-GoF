import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabase as myDatabaseFromModuleA } from './module_a';

const myDatabase = MyDatabaseFunction;
myDatabase.add({ name: 'joao', age: 21 });
myDatabase.add({ name: 'maria', age: 26 });
myDatabase.add({ name: 'jose', age: 25 });
myDatabase.show();

console.log(myDatabaseFromModuleA === myDatabase);
