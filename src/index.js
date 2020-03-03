const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrWords = expr.split('**********').map(function(item){
        let letter = [];
        let stack = [];
        for(let i = 1; i <= item.length; i++){
            stack.push(item[i-1]);
            if(i != 0 && i % 10 == 0){
                let str = stack.join('');
                stack = [];
                let index = str.indexOf('1');
                letter.push(str.slice(index));
            }
        }
        return letter;
    });
    
    let arr = arrWords.map(function(item){
        
        let resultLetter = [];
        
        for(let i = 0; i < item.length; i++){
            let k = 0;
            let arrMorze = [];
            while(k < item[i].length){
                if(item[i][k]+item[i][k+1] == '10'){
                    arrMorze.push('.');
                }else{
                    arrMorze.push('-');
                }
                k += 2;
            }
            resultLetter.push(MORSE_TABLE[arrMorze.join('')]);
        }
        return resultLetter.join('');
    })

return arr.join(' ');
}

module.exports = {
    decode
}