
var findTheLongestSubstring = function(s) {
    var state = new Array(32)
    var cur = 0;
    var ans = 0;
      state[0] = -1
    for(let i = 0; i < s.length; i ++) {
      switch (s[i]) {
        case 'a':
          cur^=1;
          break;
        case 'e':
          cur^=2;
          break;
        case 'i':
          cur^=4;
          break;
        case 'o':
          cur^=8;
          break;
        case 'u':
          cur^=16;
          break;
        default:
          break;
      }
      if(state[cur] === undefined) {
        state[cur] = i
      } else {
        ans = Math.max(ans, i - state[cur])
      }
    }
    return ans
  };
  