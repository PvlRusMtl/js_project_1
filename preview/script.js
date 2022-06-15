'use strict';


function isPangram(string) {
    const set = new Set(string);
    const str1 = Array.from(set).join('')
                        .replace(/ /g,'');
    return (str1.substring(1).length === 26);
}
isPangram('The quick brown fox jumps over the lazy dog');