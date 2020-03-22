module.exports = function toReadable(number) {
    let num = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];
    let tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    function numberToReadable(n) {
        if (n < 20) return num[n];
        let digit = n % 10;
        if (n < 100)
            return (
                tens[Math.floor(n / 10) - 2] + (digit ? " " + num[digit] : "")
            );
        if (n < 1000)
            return (
                num[Math.floor(n / 100)] +
                " hundred" +
                (n % 100 == 0 ? "" : " " + numberToReadable(n % 100))
            );
        return (
            numberToReadable(Math.floor(n / 1000)) +
            " thousand" +
            (n % 1000 != 0 ? " " + numberToReadable(n % 1000) : "")
        );
    }
    return numberToReadable(number);
};