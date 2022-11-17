export function shortenContent(content, wordsCount = 8) {
  const splitContent = content.split(" ");
  const sliceContent = splitContent.slice(0, wordsCount);
  let getLastWord = [...sliceContent].pop();
  let getLastSymbol = getLastWord[getLastWord.length - 1];

  while (getLastSymbol === ".") {
    getLastWord = getLastWord.slice(0, -1);
    getLastSymbol = getLastWord[getLastWord.length - 1];
  }

  if (getLastSymbol === ".") {
    return {
      content: [...sliceContent.slice(0, -1), getLastWord].join(" "),
      dotLast: true,
    };
  } else {
    return {
      content: [...sliceContent.slice(0, -1), getLastWord].join(" "),
      dotLast: false,
    };
  }
}
