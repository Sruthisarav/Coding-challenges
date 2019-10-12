function solution(N) {
    let binary = [];
    function convert_to_binary(N) {
        if(N === 0) {
            return true;
        } else {
            if (N%2 === 0) {
                binary.unshift('0');
                return convert_to_binary(N/2);
            } else {
                binary.unshift('1');
                return convert_to_binary(Math.floor(N/2));
            }
        }
    }
    convert_to_binary(N);
    let max = 0;
    len = binary.length;
    function largest_gap(counter, gap) {
        if (counter === len) {
            return max;
        } else if (binary[counter] === '1') {
            if (gap > max) {
                max = gap;
            }
            return largest_gap(counter+1, 0);
        } else {
            return largest_gap(counter+1, gap+1);
        }
    }
    return largest_gap(0, 0);
}
