
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













