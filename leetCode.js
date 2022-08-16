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