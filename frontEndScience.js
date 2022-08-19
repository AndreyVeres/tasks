
{
    //merge intervals
    //           1    3
    //              2      6
    //                   5       10
    let intervals = [[1, 4], [5, 6], [5, 10], [15, 18]]

    function mergeIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0])

        let result = [intervals[0]];

        for (let interval of intervals) {
            let recent = result[result.length - 1]
            if (recent[1] >= interval[0]) {
                recent[1] = Math.max(recent[1], interval[1])
            } else {
                result.push(interval)
            }
        }
        return result
    }
    // result [1,6]
    // recent [1,6]
    // interval [3,6]
    console.log(mergeIntervals(intervals))
    // let interval = [...Math.max(interval[] , intervals[i + 1]) ]

}



{

    //лучшее время для покупки акций
    let price = [0, 7, 1, 5, 3, 6, 4]


    function act(price) {
        let profit = 0;
        for (let i = 0; i < price.length; i++) {
            let current = price[i]

            if (current < price[i + 1]) {
                profit += price[i + 1] - current
            }
        }

        return profit
    }

    console.log(act(price))
}



{

    // https://www.youtube.com/watch?v=2xZq8z_A-NQ&list=PL0k-9Y7O1GwccXKHRzmvVj17yB7T9pjTo&index=3
    //сбор дождевой воды
    //                                 3
    //                 2               3   2       2
    //    _    1   _   2   1   _   1   3   2   1   2   1
    const input1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    function trap(height) {
        let maxLeft = height[0]
        let maxRight = height[height.length - 1];
        let left = 1
        let right = height.length - 2;
        let total = 0;
        //height [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
        // maxLeft = 1
        //maxRight = 12
        //left = 3
        // right = 1 
        //total = 1
        while (left <= right) {
            if (maxLeft <= maxRight) {
                if (maxLeft - height[left] > 0) {
                    total += maxLeft - height[left]
                }
                maxLeft = Math.max(maxLeft, height[left])
                left += 1;

            } else {
                if (maxRight - height[right] > 0) {
                    total += maxRight - height[right]
                }
                maxRight = Math.max(maxRight, height[right])
                right -= 1;
            }
        }
        return total
    }
    console.log(trap(input1))
}

{

    const input1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

    //                                 3
    //                 2               3   2       2
    //    _    1   _   2   1   _   1   3   2   1   2   1
    function trap(height) {
        let left = 0;
        let right = height.length - 1;
        let maxLeft = height[0];
        let maxRight = height[height.length - 1];
        let result = 0;

        while (left <= right) {
            if (maxLeft <= maxRight) {

                maxLeft = Math.max(maxLeft, height[left])
                result += maxLeft - height[left]
                left += 1;
            } else {

                maxRight = Math.max(maxRight, height[right])
                result += maxRight - height[right]
                right -= 1;
            }
        }

        return result
    }

    console.log(trap(input1))
}


{
    //контейнер с наибольшим кол-вом воды
    //моё решение
    const container = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const container2 = [1, 1];
    const container3 = [4, 3, 2, 1, 4];
    const container4 = [1, 2, 1];

    function cont(container) {
        let result = 0;

        let left = 0;
        let right = container.length - 1;

        while (left <= right) {

            let height = Math.min(container[left], container[right]);
            let witdh = right - left
            result = Math.max(height * witdh, result)

            if (container[left] < container[right]) {
                left += 1
            } else {
                right -= 1;
            }

        }

        return result
    }
    console.log(cont(container))
    console.log(cont(container2))
    console.log(cont(container3))
    console.log(cont(container4))
}


{

    //правильная последовательность скобочек
    //мое решение
    let s = '{(})'
    function validBrackets(brackets) {
        let start = '({['
        let stack = [];
        let map = {
            '}': '{',
            ']': '[',
            ')': '('
        }

        for (let i = 0; i < brackets.length; i++) {
            let current = brackets[i];


            if (start.includes(current)) {
                stack.push(current);

            } else {
                let last = stack.pop()
                if (last !== map[current]) {
                    return false
                }
            }
        }

        return stack.length === 0
    }

    console.log(validBrackets(s))
}


{

    //кирпичная стена
    // 111 | 222222 | 222222 | 111 
    // 333333333 | 111 | 222222 
    // 111 | 333333333 | 333333 
    const wall = [
        [1, 2, 2, 1],
        [1, 2, 3],
        [1, 3, 2],
        [2, 4],
        [3, 1, 2],
        [1, 3, 1, 1]
    ]

    function bricks(wall) {

        let map = {}
        let max = 0;

        wall.forEach(row => {
            let sum = 0;
            for (let i = 0; i < row.length - 1; i++) {
                sum += row[i]
                map[sum] = map[sum] ? map[sum] + 1 : 1;
                max = Math.max(map[sum], max)
            }
        })

        console.log(map)
        return wall.length - max
    }

    console.log(bricks(wall))

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
    //найти одинокое число

    const nums = [1, 2, 3, 4, 3, 2, 1]
    function aloneNumber(nums) {
        let uniq =Array.from(new Set(nums)) 

        let reduceSum = (a, i) => a + i
        let sumUniq = uniq.reduce(reduceSum)
        let originSum = nums.reduce(reduceSum)
      
        return (sumUniq * 2 ) - originSum
    }

   console.log(aloneNumber(nums)) 




}