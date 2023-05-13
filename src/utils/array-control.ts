export default class ArrayControl {
  static clearArray(array: any[]) {
    array.splice(0, array.length);
  }

  static getRandomIndex(array: any[]) {
    return Math.floor(Math.random() * array.length);
  }

  static shuffleArray(array: any[]) {
    const shuffledArray = [...array];

    for (let i = 0; i < shuffledArray.length; i++) {
      const randomIndex = this.getRandomIndex(shuffledArray);

      [shuffledArray[i], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[i]
      ];
    }

    return shuffledArray;
  }
}
