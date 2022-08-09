
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













