
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






