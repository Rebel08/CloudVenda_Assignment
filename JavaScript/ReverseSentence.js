function reverseWords(sentence) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split('').reverse().join('');
    }
    return words.join(' ');
  }
  
const sentence = 'This is a sunny day';
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence);