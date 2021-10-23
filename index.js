function solution(s) {
    var answer = 0;
    
    if (typeof s === 'string' && (s.length < 1 || s.length > 1000)) {
        throw new Error('Invalid argument!');
    }
    
    function chunkS(size) {
        const nums = Math.ceil(s.length / size)
        const chunks = new Array(nums)
        
        var j = 0;
        for (var i = 0; i < nums; ++i, j += size) {
            chunks[i] = s.substr(j, size)
        }
    
        return chunks
    }
    
    const divComp = [];
    for (var i = 0; i < s.length; i++) {
        var output = '';
        var count = 0;
        const chars = chunkS(i+1);
        for (var j = 0; j < chars.length; j++) {
            count++;
            if (chars[j] !== chars[j+1]) {
                output += chars[j] + count;
                count = 0;
            }
        }
        divComp.push(output.length);
    }
    
    answer = Math.min(...divComp);
    return answer
}
