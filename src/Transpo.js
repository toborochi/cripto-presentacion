export const cipher_type = {
    COLUMNA: 1,
    FILA: 0
};

export default class TranspositionCipher {



    constructor() {
        this.text = "";
        this.permutation = [];
        this.type = cipher_type.FILA;
        this.table = "";
        this.matrix = [[]];
    }

    setText(p) {
        this.text = p;
    }

    cipherText(t, k) {

        console.log('ORIGINAL ',t);
        
        var tabla = [];
        this.table = "";
        var cifrado = "";
        var texto = t;
        //texto = texto.replace(/\s/g, '');

        var cols = Math.ceil((texto.length / k));

        for (var i = 0; i < k; ++i) {
            var j = i;
            var it = 0;
            var a = [];
            while (it < cols) {
                if (j >= texto.length) {
                    cifrado = cifrado.concat("X");
                } else {
                    cifrado += texto[j];
                }
                a.push(cifrado[cifrado.length - 1]);
                j += k;
                it++;
            }
            tabla.push(a);
        }


        this.matrix=tabla;

        console.log('TIPO: ',this.type);

        if (this.type === cipher_type.COLUMNA){
            var temp = [];
            for (var i = 0; i < cols; ++i) {
                var aux = [];
                for (var j = 0; j < k; ++j) {
                    aux.push(tabla[j][i]);
                }
                temp.push(aux);
            }
            this.matrix=temp;
        }

        //console.log(this.matrix);
        console.log('CIFRADO ',cifrado);
        return cifrado;
    }

    setType(t){
        if(!t){
            this.type=cipher_type.FILA;
        }else{
            this.type=cipher_type.COLUMNA;
        }
    }

    decrypyText(t, k) {
        var original = "";
        var texto = t;

        var cols = Math.ceil((texto.length / k));
        console.log(cols);
        for (var i = 0; i < cols; ++i) {
            var j = i;
            var it = 0;
            console.log("---");
            while (it < k) {

                if (j < texto.length) {
                    console.log(texto[j]);
                    original += texto[j];
                }



                j += cols;

                it++;
            }
        }



        return original;
    }

    setKeyfromArray(p) {
        this.permutation = p;
    }


}