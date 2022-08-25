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



{
    //найти первый уникальный символ в строке 

    const input1 = 'b1bbcse'

    function uniqSymbol(s) {


        const map = {};
        let index = 0
        for (let i = 0; i < s.length; i++) {
            map[s[i]] = map[s[i]] ? map[s[i]] += 1 : 1
        }

        for (let i = 0; i < s.length; i++) {
            let current = s[i]

            if (map[current] === 1) {
                index = i
                break
            }
        }

        return index
    }

    console.log(uniqSymbol(input1))
}


{
    // 26. Remove Duplicates from Sorted Array
    const input1 = [1, 1, 2]


    function removeDuplicates(s) {
        for (let i = 0; i < s
            .length; i++) {
            if (s[i] === s[i + 1]) {
                s.splice(i, 1)
                i--
                console.log(s[i])
            }
        }

        return s.length
    }

    console.log(removeDuplicates(input1))
}

{
    // 1423 . Максимальное количество очков, которое можно получить за карты

    const cardPoints = [1, 2, 3, 4, 5, 6, 1], k = 3

    function maxScore(cards, n) {
        let leftCards = cards.slice(0, k)
        let rightCards = cards.slice(-k)
        let reduseSym = (acc, item) => acc + item;

        return Math.max(leftCards.reduce(reduseSym), rightCards.reduce(reduseSym))
    }

    console.log(maxScore(cardPoints))

    maxScore(cardPoints)
}

{
    const cardPoints = [1, 12, 3, 4, 5, 6, 1], k = 3

    function maxScore(cards, n) {
        const result = []
        let left = 0
        let right = cards.length - 1;
        let count = n;

        while (count > 0) {
            let maxValue = Math.max(cards[left], cards[right])
            let nextMaxValue = Math.max(cards[left + 1], cards[right - 1])

            let index = cards.indexOf(maxValue)
            result.push(maxValue)

            cards.indexOf(nextMaxValue) === index - 1 ? left++ : right--
            index > cards.length / 2 ? right-- : left++
            count--
        }

        return result.reduce((acc, value) => acc + value)
    }

    console.log(maxScore(cardPoints, k))
}


{
    const cardPoints = [1, 12, 3, 4, 5, 6, 1], k = 3

    function maxScore(cards, n) {
        const result = []

        let left = 0;
        let right = cards.length - 1;

        while (n > 0) {
            // if(cards[left] === cards[right]){
            //     let maxNextValue = Math.max(cards[left + 1] , cards[right -1])
            //     let index = cards.indexOf(maxNextValue)
            //     result.push(maxNextValue)
            //     index < cards.length / 2 ? cards.shift() : cards.pop()


            // }
            let maxValue = Math.max(cards[left], cards[right])
            result.push(maxValue)
            cards.indexOf(maxValue) < cards.length / 2 ? cards.shift() : cards.pop()

            n--
        }
        console.log(result)
        // return result.reduce ((acc , value ) => acc + value)
    }

    console.log(maxScore(cardPoints, k))
}



{
    const cardPoints = [1, 79, 80, 1, 1, 1, 200, 1], k = 3
    function maxScore(cards, n) {
        const result = []
        let left = 0;
        let right = cards.length - 1;
        while (n > 0) {
            let leftValue = cards[left]
            let rightValue = cards[right]
            console.log(leftValue, rightValue)
            if (leftValue === rightValue) {
                let tmp = [...cards]
                let leftSum, rightSum
                if (cards.length % 2 === 0) {
                    leftSum = tmp.splice(0, tmp.length / 2);
                    rightSum = tmp
                } else {
                    leftSum = tmp.splice(0, tmp.length / 2);
                    rightSum = tmp.splice(1)
                }

                let sumFromLeft = leftSum.reduce((acc, i) => acc + i)
                let sumFromRight = rightSum.reduce((acc, i) => acc + i)
                console.log(sumFromLeft, sumFromRight)
                if (sumFromLeft > sumFromRight) {
                    result.push(cards[left])
                    left += 1
                } else {
                    result.push(cards[right])
                    right -= 1
                }
                n--
            } else {
                if (leftValue > rightValue) {
                    result.push(leftValue)
                    left += 1
                } else {
                    result.push(rightValue)
                    right -= 1
                }
                n--
            }

        }
        return result.reduce((acc, i) => acc + i)
    }
    console.log(maxScore(cardPoints, k))
}


{
    const cardPoints = [11, 49, 100, 20, 86, 29, 72]

    const k = 4;

    function maxPoints(cards, k) {
        let end = k
        let minusEnd = 0
        let max = cards.slice(0, k).reduce((acc, i) => acc + i)

        let current = cards.slice(0, k)
        if (cards.length === k) return max
        while (end >= 0) {
            let tmp = [...cards]
            let current = [...tmp.slice(0, end), ...tmp.slice(minusEnd)]
            let sum = current.reduce((acc, i) => {
                return acc + i
            }, 0)

            end -= 1
            minusEnd -= 1
            max = Math.max(max, sum)

        }

        return max
    }
    console.log(maxPoints(cardPoints, k))
}

{
    const cardPoints = [11, 49, 100, 20, 86, 29, 72]

    const k = 4;
    var maxScore = function (cardPoints, k) {
        let maxScore = cardPoints.slice(0, k).reduce((acc, i) => acc + i)
        let current = maxScore
        let counter = 0;
        if (cardPoints.length === k) return maxScore
        while (counter < k) {
            current = current - cardPoints[k - 1 - counter] + cardPoints[cardPoints.length - 1 - counter]
            maxScore = Math.max(current, maxScore)
            counter++
        }

        return maxScore
    };

    console.log(maxScore(cardPoints, k))
}

{
    // 746 . Минимальная стоимость подъема по лестнице
    const price = [1, 100, 2, 3, 3, 103, 4, 5, 104, 6]
    const minCostClimbingStairs = (cost) => {
        for (let i = 2; i < cost.length; i++) {
            cost[i] = cost[i] + Math.min(cost[i - 2], cost[i - 1]);
            console.log(cost[i])
        }
        // console.log(cost)
        return Math.min(cost[cost.length - 2], cost[cost.length - 1]);
    }

    console.log(minCostClimbingStairs(price))
}