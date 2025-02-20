function substringFinder(string, startIndex, count) {
    let resultText = string.substring(startIndex, startIndex + count);
    console.log(resultText);
}

substringFinder('ASentence', 1, 8);
substringFinder('SkipWord', 4, 7);