module.exports = function toReadable (number) {
    let DIGITS = [
        {rate: 1000000000000000000000, string: "sextillion"},
        {rate: 1000000000000000000, string: "quintillion"},
        {rate: 1000000000000000, string: "quadrillion"},
        {rate: 1000000000000, string: "trillion"},
        {rate: 1000000000, string: "billion"},
        {rate: 1000000, string: "million"},
        {rate: 1000, string: "thousand"},
        {rate: 100, string: "hundred"},
        {rate: 90, string: "ninety"},
        {rate: 80, string: "eighty"},
        {rate: 70, string: "seventy"},
        {rate: 60, string: "sixty"},
        {rate: 50, string: "fifty"},
        {rate: 40, string: "forty"},
        {rate: 30, string: "thirty"},
        {rate: 20, string: "twenty"},
        {rate: 19, string: "nineteen"},
        {rate: 18, string: "eighteen"},
        {rate: 17, string: "seventeen"},
        {rate: 16, string: "sixteen"},
        {rate: 15, string: "fifteen"},
        {rate: 14, string: "fourteen"},
        {rate: 13, string: "thirteen"},
        {rate: 12, string: "twelve"},
        {rate: 11, string: "eleven"},
        {rate: 10, string: "ten"},
        {rate: 9, string: "nine"},
        {rate: 8, string: "eight"},
        {rate: 7, string: "seven"},
        {rate: 6, string: "six"},
        {rate: 5, string: "five"},
        {rate: 4, string: "four"},
        {rate: 3, string: "three"},
        {rate: 2, string: "two"},
        {rate: 1, string: "one"}
    ];

    if (number < 0) {
        return "minus " + toReadable(-number);
    } else if (number === 0) {
        return "zero";
    } else {
        let readStr = "";
        for (let num of DIGITS) {
            if (number >= num.rate) {
                if (number < 100) {
                    readStr += num.string;
                    number -= num.rate;
                    if (number > 0) readStr += " ";
                } else {
                    let round = Math.floor(number / num.rate);
                    readStr += toReadable(round) + " " + num.string;
                    number -= num.rate * round;
                    if (number > 0) readStr += " ";
                }
            }
        }
        return readStr;
    }
}
