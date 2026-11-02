const {test}=require('node:test');
const assert=require('node:assert/strict');
const {compose,decompose,mapKey,initials,vowels,finals}=require('../quiz-hangul.js');
const type=text=>compose([...text].map(ch=>mapKey(ch)||ch));
test('two-beolsik everyday words, vowel-initial syllables and spaces',()=>{
    for(const [keys,word] of [['gksrmf','한글'],['dkssudgktpdy','안녕하세요'],['rkatkgkqslek','감사합니다'],['gksrnr','한국'],['dkdldh','아이오'],['rk rk','가 가'],['rk, sk!','가, 나!'],['123','123']])assert.equal(type(keys),word,keys);
});
test('all seven shifted keys and five tense initials',()=>{
    assert.deepEqual([...['R','E','Q','T','W','O','P']].map(mapKey),[...'ㄲㄸㅃㅆㅉㅒㅖ']);
    for(const [keys,word] of [['Rk','까'],['Ek','따'],['Qk','빠'],['Tk','싸'],['Wk','짜'],['dO','얘'],['dP','예'],['qkR','밖'],['dlT','있']])assert.equal(type(keys),word);
});
test('all compound vowels, composite finals and final migration before a vowel',()=>{
    for(const [keys,word] of [['rhk','과'],['rho','괘'],['rhl','괴'],['rnj','궈'],['rnp','궤'],['rnl','귀'],['rml','긔'],['rkqt','값'],['rkqtk','갑사'],['rkqtdl','값이'],['akfr','맑'],['akfrh','말고'],['dlfrdjdy','읽어요'],['rkrk','가가'],['dkssk','안나']])assert.equal(type(keys),word,keys);
});
test('all 11,172 modern syllables round-trip through keyboard components',()=>{
    assert.equal(initials.length,19);assert.equal(vowels.length,21);assert.equal(finals.length,28);
    for(let code=0xAC00;code<=0xD7A3;code++){
        const ch=String.fromCharCode(code);assert.equal(compose(decompose(ch)),ch,'U+'+code.toString(16));
    }
});
test('backspace can undo each keystroke without losing preceding syllables',()=>{
    const tokens=[...'gksrmf'].map(mapKey);
    const expected=['한글','한그','한ㄱ','한','하','ㅎ',''];
    for(const value of expected){assert.equal(compose(tokens),value);tokens.pop();}
    assert.equal(compose(decompose('괜').slice(0,-1)),'괘');
    assert.equal(compose(decompose('괘').slice(0,-1)),'고');
    assert.equal(compose(decompose('값').slice(0,-1)),'갑');
    assert.equal(compose(decompose('밖').slice(0,-1)),'바');
});
