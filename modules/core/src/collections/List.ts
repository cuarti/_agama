
import {Collection} from './Collection';


export interface List<T> extends Collection<number, T> {

    toArray(): T[];

}
