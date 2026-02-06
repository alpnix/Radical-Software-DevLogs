export const data = {
  common: ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'lime', 'mango', 'nectarine', 'orange', 'pear', 'pineapple', 'plum', 'raspberry', 'strawberry', 'tangerine', 'watermelon']
};

export const functions = {
  randomFromArray: (arr) => {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  }
};
