const instanceData = {
    petName: "Gary", 
    number1: 21,
    number2: 2,
    sentence1: "my name is sarah.",
    sentence2: "bye",
    sentence3: "i am 20 years old"
};

const half = (num) => num / 2;
const pow3 = (num) => Math.pow(num, 3);
const capitalize = (sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1);
const reverseString = (str) => str.split('').reverse().join('');
const capitalizeAndReverse = (sentence) => reverseString(sentence.toUpperCase());
const results = {
    BLANK1: instanceData.petName,
    BLANK2: instanceData.number1 * instanceData.number2,
    BLANK3: half(instanceData.number1),
    BLANK4: pow3(instanceData.number2),
    BLANK5: capitalize(instanceData.sentence1),
    BLANK6: reverseString(instanceData.sentence2),
    BLANK7: capitalizeAndReverse(instanceData.sentence3)
};
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('petName').textContent = results.BLANK1;
    document.getElementById('number1TimesNumber2').textContent = results.BLANK2;
    document.getElementById('halfOfNumber1').textContent = results.BLANK3;
    document.getElementById('number2ToThePowerOf3').textContent = results.BLANK4;
    document.getElementById('capitalizedSentence1').textContent = results.BLANK5;
    document.getElementById('reversedSentence2').textContent = results.BLANK6;
    document.getElementById('capitalizedAndReversedSentence3').textContent = results.BLANK7;
});
