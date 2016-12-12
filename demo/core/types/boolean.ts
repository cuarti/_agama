
import {TBoolean} from '@agama/core';


let bool: TBoolean = new TBoolean(true);

console.log(bool);
console.log(bool.equals(true));
console.log(bool.equals(false));

let cloned: TBoolean = bool.clone();

console.log(cloned, cloned === bool);
