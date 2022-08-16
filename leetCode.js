{
    // 409. Longest Palindrome

    //     Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
    // Letters are case sensitive, for example, "Aa" is not considered a palindrome here.


    const input1 = 'abccccdd';
    const input2 = 'a';
    const input3 = 'AabB'
    const input4 = 'ab'

    //         
    var longestPalindrome = function (s) {
        const map = {}
        let poliCount = 0; //4 //2
        let oddCount = 0 //1 
        for (let i = 0; i < s.length; i++) {
            map[s[i]] = map[s[i]] ? map[s[i]] += 1 : 1
        }

        for (let letter of Object.values(map)) {
            if (letter % 2 === 0) {
                poliCount += letter
            } else {
                oddCount = 1;
                poliCount += (letter - 1)
            }
        }

        return poliCount + oddCount
    };



    console.log(longestPalindrome(input1))
    console.log(longestPalindrome(input2))
    console.log(longestPalindrome(input3))
    console.log(longestPalindrome(input4))
}


{
    // 121. Best Time to Buy and Sell Stock
    // You are given an array prices where prices[i] is the price of a given stock on the ith day.
    // You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    // Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

    const prices = [7, 1, 5, 3, 6, 4];
    const prices2 = [7, 6, 4, 3, 1]


    // |
    // |               |   
    // |       |       |
    // |       |       |   |
    // |       |   |   |   |    
    // |       |   |   |   |
    // |   |   |   |   |   |
    function maxProfit(prices) {
        let result = 0;
        let min = prices[0];
        for (let i = 1; i < prices.length; i++) {
            min = Math.min(min, prices[i])
            result = Math.max(result, prices[i] - min)
        }
        return result;
    }

    console.log(maxProfit(prices))
    console.log(maxProfit(prices2))
}


{
    // 9. Palindrome Number
    // Given an integer x, return true if x is palindrome integer.
    // An integer is a palindrome when it reads the same backward as forward.
    // For example, 121 is a palindrome while 123 is not.
    const input1 = 131353131
    const input2 = -121



    // function isPalindrome(x) {
    //     return x.toString().split('').reverse().join('') === x.toString();
    // }

    function isPalindrome(x) {
        if (x < 0) return false;
        if (x < 10) return true;
        if (x % 10 === 0) return false
        let reverse = 0;

        while (x > reverse) {
            console.log(x, reverse)
            reverse *= 10;
            reverse += x % 10;
            x = Math.trunc(x / 10)
        }

        return reverse === x || x === Math.trunc(reverse / 10)
    }

    console.log(isPalindrome(input1))
    console.log(isPalindrome(input2))
}


{
    // 3. Longest Substring Without Repeating Characters

    // Given a string s, find the length of the longest substring without repeating characters.


    const input1 = "abcabcbb";
    const input2 = "pwwkew";
    const input3 = "bbbb";

    function lengthOfLongestSubstring(str) {

    }


    console.log(lengthOfLongestSubstring(input1))
    console.log(lengthOfLongestSubstring(input2))
    console.log(lengthOfLongestSubstring(input3))
}



{
    //     13. Roman to Integer

    //     Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

    // Symbol       Value
    // I             1
    // V             5
    // X             10
    // L             50
    // C             100
    // D             500
    // M             1000
    // For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

    // Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    // I can be placed before V (5) and X (10) to make 4 and 9. 
    // X can be placed before L (50) and C (100) to make 40 and 90. 
    // C can be placed before D (500) and M (1000) to make 400 and 900.
    // Given a roman numeral, convert it to an integer.


    const input1 = "III";
    const input2 = "LVIII";
    const input3 = "MCMXCIV"

    function romanToInt(s) {
        const map = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,

        }
        let result = 0;
      
        for (let i = 0; i < s.length; i++) {
            if (map[s[i]] < map[s[i + 1]]) {
                result += map[s[i + 1]] - map[s[i]]
                i++
            } else {
                result += map[s[i]]
            }

        }

        return result

    }

    console.log(romanToInt(input1))
    console.log(romanToInt(input2))
    console.log(romanToInt(input3))
}