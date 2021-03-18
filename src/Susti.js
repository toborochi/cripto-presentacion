export default class SustitutionCipher {

    constructor() {
        this.abc = "abcdefghijklmnopqrstuvwxyz";
        this.abc_up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }


    caesarShift(str, amount) {
        
        // Descifrar
        if (amount < 0) {
            return this.caesarShift(str, amount + 26);
        }

        var output = "";

        for (var i = 0; i < str.length; i++) {
            var c = str[i];

            // Es letra
            if (c.match(/[a-z]/i)) {
                // Codigo del caracter
                var code = str.charCodeAt(i);

                // Mayusc
                if (code >= 65 && code <= 90) {
                    c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
                }

                // Minusc
                else if (code >= 97 && code <= 122) {
                    c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
                }
            }

            
            output += c;
        }

        
        return output;
    };
}