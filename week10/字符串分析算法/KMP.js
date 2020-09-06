// 在字符串中查找段落
function kmp(source, pattern) {
  let table = new Array(pattern.length).fill(0);

  // 计算
  {
    let i = 1, j = 0;

    while(i < pattern.length) {
      if (pattern[i] === pattern[j]) {
        ++j, ++i;
        table[i] = j;
      } else {
        if (j > 0) {
          j = table[j]
        } else {
          ++i
        }
      }
    }
  }

  // 匹配
  {
    let i = 0, j = 0;

    while(i < source.length) {
      if(pattern[j] === source[i]) {
        ++i, ++j;
      } else {
        if (j > 0) {
          j = table[j]
        } else {
          ++i
        }
      }

      if(j === pattern.length) return true;
    }

    return false
  }
}

console.log(kmp('dslfjlsjflkasjdflkdsjfalk', 'asjdfl'))