
import * as types from './types';
import * as helpers from './helpers';
import * as validation from './validation';


declare module window {
    export let agama: any
}

if(typeof window !== 'undefined' && window.agama) {

    window.agama = (agama => {

        agama.types = types;
        agama.helpers = helpers;
        agama.validation = validation;

        return agama;

    })(window.agama || {});
}
