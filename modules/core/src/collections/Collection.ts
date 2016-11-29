
import {Iterator} from './Iterator';


export interface Collection<K, V> extends Iterator<K, V> {

    get(key: K): V;

}
