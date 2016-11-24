
import * as types from './types';
import * as helpers from './helpers';


declare module window {
    export let agama: any
}

window.agama = (agama => {

    agama.types = types;
    agama.helpers = helpers;

    return agama;

})(window.agama || {});
