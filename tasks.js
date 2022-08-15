
{
    const data = { a: 1, b: 2, c: 3 };
    function makePairs(data) {
        let result = []
        for (let key in data) {
            result.push([key, data[key]])
        }
        return result;
    }

    const makePairs = (object) => Object.entries(object);

    const makePairs2 = (object) => Object.keys(object).map((el) => [el, object[el]]);

}

{
    const data = { a: 1, b: 2, c: 3 };
    function without(data, ...rest) {
        let params = [...rest]
        for (let i = 0; i < params.length; i++) {
            if (data.hasOwnProperty(params[i])) {
                delete data[params[i]]
            }
        }
        return data
    }
    console.log(without(data, 'b', 'c'))

}


{
    const data = { a: 1, b: 2, c: 3 };
    const without = (object, ...args) => {
        const newObject = { ...object };

        args.forEach((arg) => {
            delete newObject[arg];
        });

        return newObject;
    };
    console.log(without(data, 'b', 'c'))
}




{

    const num = 6;

    const canWinNim = function (n) {
        return n % 4 !== 0
    };


    console.log(canWinNim(num))

}



{
    const string = '[{)(#)}]'
    function brackets(str) {
        let start = '({['
        let end = ')}]'
        let stack = []
        let map = {
            '}': '{',
            ']': '[',
            ')': '('
        }
        for (let i = 0; i < str.length; i++) {
            let current = str[i]

            if (start.includes(current)) {
                stack.push(current)
            } else if (end.includes(current)) {
                last = stack.pop()
                if (map[current] !== last) {
                    return false
                }
            }
        }
        return stack.length === 0
    }

    console.log(brackets(string))


}


{
    // По условиям задачи: необходимо посчитать количество островов в матрице. Островом считаются единицы (1), которые находятся друг рядом с другом по горизонтали и по вертикали. Водой считаются ячейки матрицы с нулями. 

    let grid = [
        ['1', '0', '1', '1', '1',],
        ['1', '0', '1', '1', '1',],
        ['1', '1', '1', '1', '1',],
        ['1', '0', '1', '1', '1',],
        ['1', '0', '1', '1', '1',],
    ]
    let grid2 = [
        ['1', '0', '1', '0', '1',],
        ['1', '0', '0', '0', '1',],
        ['1', '0', '1', '1', '1',],
        ['1', '0', '1', '1', '1',],
        ['1', '0', '1', '1', '1',],
    ]
    function countIsland(grid) {
        let counter = 0;
        let rowL = grid.length
        let colsL = grid[0].length
        function markIsland(grid, R, C) {

            grid[R][C] = '6';
            if (grid[R][C - 1] === '1') markIsland(grid, R, C - 1)
            if (grid[R][C + 1] === '1') markIsland(grid, R, C + 1)
            if (grid?.[R + 1]?.[C] === '1') markIsland(grid, R + 1, C)
            if (grid?.[R - 1]?.[C] === '1') markIsland(grid, R - 1, C)
        }
        for (let R = 0; R < rowL; R++) {
            for (let C = 0; C < colsL; C++) {
                if (grid[R][C] === '1') {
                    counter++
                    markIsland(grid, R, C)
                }
            }
        }
        return counter;
    }

    console.log(countIsland(grid))
    console.log(countIsland(grid2))
}




{
    const nums = [4, 1, 2, 3]
    var sortEvenOdd = function (nums) {



        return nums.sort()
    };
}


{
    let nums = [1, 2, 3, 3, 3, 4, 5, 5]

    function countNums(nums) {

        const counter = {}

        for (let i = 0; i < nums.length; i++) {
            if (counter[nums[i]]) {
                counter[nums[i]]++
            } else {
                counter[nums[i]] = 1
            }
        }
        let result = []
        for (let key in counter) {
            result.push(key)
        }

        result.sort((a, b) => counter[b] - counter[a])
        return result[0]
    }

    console.log(countNums(nums))
}



{
    const nums1 = [1, 2, 2, 1]
    const nums2 = [2, 2]

    function insersect(arr1, arr2) {
        let length = Math.max(arr1.length, arr2.length)
        let result = []
        for (let i = 0; i < length; i++) {
            let current = arr1[i]
            if (arr2.includes(current)) {
                result.push(current)
            }
        }

        return result
    }
    console.log(insersect(nums1, nums2))
}

{
    let nums = [1, 2, 3, 4, 0]
    let index = [0, 1, 2, 3, 0]
    Вывод: [0, 4, 1, 3, 2]
    var createTargetArray = function (nums, index) {
        let result = []
        for (let i = 0; i < nums.length; i++) {
            result.splice(index[i], 0, nums[i])
        }
        return result
    };
    console.log(createTargetArray(nums, index))
}


{
    const matrix = [
        [3, 2, 3, 4],
        [5, 3, 2, 3],
        [9, 5, 3, 2]]
    let matrix2 = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]

    function isToeplitzMatrix(matrix) {
        for (let i = 0; i < matrix.length - 1; i++) {
            for (let j = 0; j < matrix[0].length - 1; j++) {
                if (matrix[i][j] !== matrix[i + 1][j + 1]) {
                    return false
                }
            }
        }
        return true
    }




    console.log(isToeplitzMatrix(matrix2))
}



{
    let list1 = [1, 2, 4]
    let list2 = [1, 3, 4]

    function mergeTwoList(list1, list2) {
        let result = []
        while (list1.length || list2.length) {
            result.push(list1.shift())
            result.push(list2.shift())
        }

        return result
    }

    console.log(mergeTwoList(list1, list2))
}




{
    //     Дан массив nums.Мы определяем текущую сумму массива как  runningSum[i] = sum(nums[0]…nums[i]).
    // Вернуть текущую сумму nums.
    const nums = [1, 2, 3, 4, 50]

    function runningSum(nums) {
        let result = []
        nums.reduce((acc, current) => {
            acc += current
            result.push(acc)
            return acc
        }, 0)

        return result
    }

    console.log(runningSum(nums))
}


{
    //     Учитывая массив целых чисел nums, вычислите индекс поворота этого массива.
    // Сводной индекс — это индекс, в котором сумма всех чисел строго слева от индекса равна сумме всех чисел строго справа от индекса.
    // Если индекс находится на левом краю массива, то левая сумма получается 0потому, что слева нет элементов. Это также относится к правому краю массива.
    // Возвращает самый левый опорный индекс . Если такого индекса не существует, вернуть -1.


    const nums = [2, 1, -1]

    function pivotIndex(nums) {
        let left = 0;
        let right = nums.length - 1;
        let sumLeft = 0;
        let sumRight = 0;

        while (left !== right) {

            if (sumLeft > sumRight) {
                sumRight += nums[right]
                right--
            } else {
                sumLeft += nums[left]
                left++
            }

        }

        return sumLeft === sumRight ? left : -1
    }
    console.log(pivotIndex(nums))

}


{

    const nums = [2, 1, 3, 1, 2]
    const pivotIndex = function (nums) {
        let sum = nums.reduce((acc, item) => {
            return acc += item;
        }, 0)

        let leftSum = 0;

        for (let i = 0; i < nums.length; i++) {
            if (sum - leftSum - nums[i] === leftSum) {
                return i
            }
            leftSum += nums[i]

        }
    };

    console.log(pivotIndex(nums))
}


{
    //     Учитывая массив целых чисел nums и целое число target, верните индексы двух чисел так, чтобы они составляли в суммеtarget.
    // Вы можете предположить, что каждый вход будет иметь ровно одно решение, и вы не можете использовать один и тот же элемент дважды.
    // Вы можете вернуть ответ в любом порядке.



    function twoSum(nums, target) {
        let final = [];
        for (let i = 0; i < nums.length; i++) {
            let j = i + 1;

            while (j < nums.length) {
                if (nums[i] + nums[j] === target) {
                    final.push(i);
                    final.push(j);
                    return final;
                }
                j++;
            }
        }

    }

    console.log(twoSum([3, 2, 4]
        , 6))
}


{
    //     Given a sorted array of distinct integers and a target value, return
    //      the index if the target is found. If not, return the index where it would be if it were inserted in order.
    // You must write an algorithm with O(log n) runtime complexity.

    const nums = [1, 3, 5, 6]
    let target = 5

    function searchInsert(nums, target) {
        if (target < nums[0]) return 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) {
                return i
            }
            if (nums[i + 1] !== undefined) {
                if (nums[i] < target && target < nums[i + 1]) {
                    return i + 1
                }
            }
            else {
                return i + 1;
            }

        }
    }



}






{
    let s = 'eggg'
    let t = 'aeee'
    var isIsomorphic = function (s, t) {
        let sMap = {}
        let tMap = {}

        for (let i = 0; i < s.length; i++) {
            let a = s.charAt(i) //e
            let b = t.charAt(i) //a

            sMap[a] = i  //e : 1
            tMap[b] = i  //a : 1
            if (sMap[a] !== tMap[b]) {
                return false
            }
            console.log(sMap[a])
        }

        console.log(tMap)
        return true
    };


}





{

    const board = [
        ["o", "a", "a", "n"]
        , ["e", "t", "a", "e"]
        , ["i", "h", "k", "r"]
        , ["i", "f", "l", "v"]
    ]


    const words = ["oath", "pea", "eat", "rain"]

    function findWords(board, words) {
        const latter = 0
        const word = 0
        let result = []
        let firstLatters = words.map(item => item.slice(0, 1)).join('')

        for (let R = 0; R < board.length; R++) {
            for (let C = 0; C < board[0].length; C++) {
                if (firstLatters.includes(board[R][C])) {

                }
            }
        }
    }

    findWords(board, words)
}


{
    let s = "ab"

    let t = "abab"

    var isSubsequence = function (s, t) {
        if (s == "" && t == "") {
            return true
        }
        let left = 0;
        for (let i = 0; i < t.length; i++) {
            if (s[left] === t[i]) {
                left++
            }
            if (left >= s.length) {
                return true
            }
        }
        return false;
    }
    console.log(isSubsequence(s, t))
};


{

    let l1 = [9, 9, 9, 9, 9, 9, 9]
    let l2 = [9, 9, 9, 9]
    console.log(Array.isArray((parseInt(l1.reverse().join('')) + parseInt(l2.reverse().join('')) + '').split('')))
    function addTwoNumbers(l1, l2) {
        return ((parseInt(l1.reverse().join('')) + parseInt(l2.reverse().join('')) + '').split('')).reverse()


    }
    console.log(addTwoNumbers(l1, l2))

}


{
    // Given a string s, find the length of the longest substring without repeating characters.
    let s = "pwwkew"



    function lengthOfLongestSubstring(s) {
        let arr = ''

        for (let i = 0; i < s.length; i++) {
            if (!arr.includes(s[i])) {
                arr += s[i]
            }
        }

        while (true) {

        }



    }

    console.log(lengthOfLongestSubstring(s))

}

{
    // Given the head of a singly linked list, reverse the list, and return the reversed list. 

    const arr = [1, 2, 3, 4, 5]
    function Node(val) {
        this.val = val;
        this.next = null;
    };

    function LinkedList() {
        this.head = null;
        this.insert = function (val) {
            let node = new Node(val);
            if (this.head === null) {
                this.head = node;
            } else {
                node.next = this.head;
                this.head = node;
            }
            return this
        }
    }
    var reverseList = function (head) {
        let temp = head;
        let output = new LinkedList();

        while (temp) {
            output.insert(temp.val);
            temp = temp.next;
        }

        return output.head;
    };

    console.log(reverseList(1, 2))
}




