export const kebabToPlain = (string: string) => {
  if (!string || typeof string !== 'string') {
    return '';
  }

  // Prepositions must stay lower case unless they start the sentence
  const prepositions = ['in', 'on', 'at', 'by', 'to', 'for', 'from', 'of', 'with'];
  const sentence = string.split('-');

  for (let i = 0; i < sentence.length; i++) {
    if (!prepositions.includes(sentence[i]) || i === 0) {
      sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
    }
  }

  return sentence.join(' ');
};
