
import {Iterator} from './Iterator';


export interface Collection<K, V> extends Iterator<K, V> {

    has(key: K): boolean;

    get(key: K): V;

    add(key: K, value: V): void;

    remove(key: K): void;

    size(): number;

}
