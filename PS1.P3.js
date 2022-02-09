const p3 = (str, func) => func(str);

const p31 = p3('supercalifragilisticexpialidocious', str => str.replace(/c/g, "#c").split('#'));

const p32 = str => {
    return {
        originalString: str,
        modifiedString: str.replace(/a/g, 'A'),
        numberReplaced: str.match(/a/g).length,
        length: str.length
    };
}

/* Test */
// console.log(p31);
// console.log(p32('supercalifragilisticexpialidocious'));