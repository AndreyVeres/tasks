//         https://github.com/rolling-scopes-school/tasks/blob/master/tasks/codewars/Codewars1-2022Q1.md



//  ============== NUMBERS , STRING ==============       2
//================================================
{
    //  https://www.codewars.com/kata/highest-and-lowest
    {

        function highAndLow(str) {
            let result = ''
            const numbers = str.split(' ')
            let max = numbers[0]
            let min = numbers[0]
            for (let i = 0; i < numbers.length; i++) {
                max = Math.max(max, numbers[i])
                min = Math.min(min, numbers[i])
                console.log(max, min)
            }
            return result + max + ' ' + min
        }

        console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")) //42 -9
        highAndLow("1 2 3 4 5");  // return "5 1"
        highAndLow("1 2 -3 4 5"); // return "5 -3"
        highAndLow("1 9 3 4 -5"); // return "9 -5"
    }

    //https://www.codewars.com/kata/disemvowel-trolls
    {


        function disemvowel(str) {
            const letters = 'ieoua'
            let result = ''
            for (let i = 0; i < str.length; i++) {
                let currentLatter = str[i]

                if (!letters.includes(currentLatter.toLowerCase())) {
                    result += currentLatter
                }
            }

            return result
        }



        console.log(disemvowel("This website is for losers LOL!")) //, "Ths wbst s fr lsrs LL!")
        console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")) //, "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
        console.log(disemvowel("What are you, a communist?"))//, "Wht r y,  cmmnst?")
    }

    //https://www.codewars.com/kata/isograms
    {
        function isIsogram(str) {
            return str.length === new Set(str.toLowerCase()).size
        }


        console.log(isIsogram("isogram"))//, true);
        console.log(isIsogram("aba"))//, false, "same chars may not be adjacent");
        console.log(isIsogram("Dermatoglyphics"))//, true);
        console.log(isIsogram("moOse"))//, false, "same chars may not be same case");
        console.log(isIsogram("isIsogram"))//, false);
        console.log(isIsogram(""))//, true, "an empty string is a valid isogram");
    }

    //https://www.codewars.com/kata/digits-explosion
    {
        function explode(s) {
            let result = ''

            for (let i = 0; i < s.length; i++) {
                if (s[i] === 0) continue
                result += s[i].repeat(parseInt(s[i]))
            }

            return result
        }


        console.log(explode("312"))
        console.log(explode("102269"))
        console.log(explode("0"))
        console.log(explode("000"))
        console.log(explode("123"))

    }

    //https://www.codewars.com/kata/handshake-problem
    {
        function getParticipants(handshakes) {
            // if (handshakes = 0) return 0
            // if (handshakes <= 1) return 2
            if (handshakes === 2) return 3
            if (handshakes === 1) return 2
            if (handshakes === 0) return 0
            let needPeople = 1;
            let count = 0
            while (handshakes > 0) {
                count++
                handshakes = handshakes - count
                needPeople++

            }

            return needPeople
        }

        console.log(getParticipants(0))
        console.log(getParticipants(1))
        console.log(getParticipants(3))
        console.log(getParticipants(6))
        console.log(getParticipants(7))
    }


    //https://www.codewars.com/kata/duplicate-encoder   //НЕ РЕШИЛ
    {
        function duplicateEncode(word) {
            let map = {}
            let result = ''

            for (let i = 0; i < word.length; i++) {
                let current = word[i].toLowerCase()
                if (map[current]) {
                    map[current] += 1
                } else {
                    map[current] = 1
                }

            }


            for (let i = 0; i < word.length; i++) {
                result += map[word[i]] === 1 ? '(' : ')'
                // console.log(map[word[i]])
            }
            return result
        }

        console.log(duplicateEncode("din"), "(((");
        console.log(duplicateEncode("recede"), "()()()");
        console.log(duplicateEncode("(( @"), "))((");
        console.log(duplicateEncode("Success"), ")())())");
        console.log(duplicateEncode("TTmTTTTTTGTTOTTbTTT"), "))())))))))))))()))");


        {
            function duplicateEncode(word) {
                var unique = '';
                word = word.toLowerCase();
                for (var i = 0; i < word.length; i++) {
                    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
                        unique += '(';
                    }
                    else {
                        unique += ')';
                    }
                }
                return unique;
            }

            console.log(duplicateEncode("din"), "(((");
            console.log(duplicateEncode("recede"), "()()()");
            console.log(duplicateEncode("(( @"), "))((");
            console.log(duplicateEncode("Success"), ")())())");
            console.log(duplicateEncode("TTmTTTTTTGTTOTTbTTT"), "))())))))))))))()))");


        }
    }


    // https://www.codewars.com/kata/n-th-fibonacci    //НЕ РЕШИЛ
    {
        function nthFibo(n) {
            if (n === 0) return 0
            if (n === 1) return 1
            if (n === 2) return 1
            let num = 3
            let a = 1;
            let b = 1;

            for (let i = 3; i < n; i++) {
                let c = a + b
                a = b
                b = c
                num++
            }

            return num
        }


        console.log(nthFibo(1), 0, "1-st Fibo");
        console.log(nthFibo(2), 1, "2-nd Fibo");
        console.log(nthFibo(3), 1, "3-rd Fibo");
        console.log(nthFibo(4), 2, "4-th Fibo");

    }

    // https://www.codewars.com/kata/multiples-of-3-or-5
    {
        function solution(number) {
            let numbers = []
            for (let i = 1; i < number; i++) {
                if (i % 3 === 0 || i % 5 === 0) {
                    numbers.push(i)
                }
            }
            return numbers.reduce((acc, item) => {
                return acc + item
            }, 0)
        }

        console.log(solution(10))
    }
}

// ==================== ARRAYS ===================      3
// ===============================================
{
    // https://www.codewars.com/kata/head-tail-init-and-last  // НЕ ПОНЯЛ УСЛОВИЕ
    { }

    // https://www.codewars.com/kata/array-deep-count          ++
    {
        function deepCount(a) {
            let count = 0
            for (let i = 0; i < a.length; i++) {
                if (Array.isArray(a[i])) {
                    count++
                    count += deepCount(a[i])
                } else {
                    count++
                }
            }

            return count;
        }

        console.log(deepCount([]), 0, "Expected 0")
        console.log(deepCount([1, 2, 3]), 3, "Expected 3")
        console.log(deepCount(["x", "y", ["z"]]), 4, "Expected 4")
        console.log(deepCount([1, 2, [3, 4, [5]]]), 7, "Expected 7")
        console.log(deepCount([[[[[[[[[]]]]]]]]]), 8, "Expected 8")
    }

    // https://www.codewars.com/kata/length-of-missing-array  // НЕ РЕШИЛ
    {
        function getLengthOfMissingArray(arrayOfArrays) {
            if (arrayOfArrays.length === 0) return 0
            let min = arrayOfArrays[0].length;
            let max = arrayOfArrays[0].length
            let totalSum = arrayOfArrays.reduce((acc, item) => {
                if (!isNaN(item)) return 0
                min = Math.min(min, item.length)
                max = Math.max(max, item.length)
                return acc + item.length
            }, 0)

            let currentSum = 0;
            for (let i = min; i <= max; i++) {
                currentSum += i
            }

            return currentSum - totalSum
        }
        console.log(getLengthOfMissingArray([[3], [1, 2, 0, 2, 2, 2], null, [4, 4], [0, 3, 0, 2], [4, 0, 1, 0, 0]]))
        console.log(getLengthOfMissingArray([[],
        [0],
        [2, 1, 2]]))

        console.log(getLengthOfMissingArray([[0, 2, 3],
        [2, 1, 1, 3],
        [1, 0, 2, 1, 0],
        [2, 2, 1, 1, 1, 4, 2, 4],
        [3, 2, 4, 1, 4, 0, 4]]))
        console.log(getLengthOfMissingArray([[null], [null, null, null]]))
        console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))

        console.log(getLengthOfMissingArray([['a', 'a', 'a'], ['a', 'a'], ['a', 'a', 'a', 'a'], ['a'], ['a', 'a', 'a', 'a', 'a', 'a']]))
    }

    // https://www.codewars.com/kata/pair-of-gloves 
    {
        function numberOfPairs(gloves) {
            let map = {}
            let counter = 0
            for (let i = 0; i < gloves.length; i++) {
                let current = gloves[i]
                if (map[current]) {
                    map[current] += 1
                } else {
                    map[current] = 1
                }
            }

            for (let value of Object.values(map)) {
                helper(value)
            }
            function helper(num) {
                if (num - 2 >= 0) {
                    counter += 1;
                    helper(num - 2)
                }
            }
            return counter
        }

        let input3 = ["red", "green", "red", "blue", "blue"]
        let input1 = ["red", "red", "red", "red", "red", "red"]
        // let input2 = ["Navy", "Navy", "Silver", "Olive", "Teal", "Navy", "Purple", "Teal", "Olive", "Fuchsia", "Red", "Fuchsia", "Black", "Navy", "Black", "Red", "Yellow", "Fuchsia",
        //     "Purple", "Red", "Purple", "Yellow", "Green", "Olive", "Aqua", "Black", "White", "Purple", "Blue", "Aqua", "Maroon", "Lime", "Maroon", "Silver"]

        console.log(numberOfPairs(input3))
        console.log(numberOfPairs(input1))
    }

    // https://www.codewars.com/kata/sorting-by-bits   // НАГУГЛИТЬ КАК СДЕЛАТЬ
    { }
}


// ================= FUNCTIONS ============                1
//=========================================
// https://www.codewars.com/kata/javascript-mathematician       ++
{
    {
        {
            function calculate() {
                let current = 0
                for (let value of Object.values(arguments)) {
                    current += value
                }
                return function () {
                    let secondCurrent = 0
                    for (let value of Object.values(arguments)) {
                        current += value
                    }

                    return current + secondCurrent
                }


            }
            calculate(1, 2, 3)
            console.log(calculate(1)(1), 2);
            console.log(calculate(1, 1)(1), 3);
            console.log(calculate(1, 1)(1, -1), 2);
            console.log(calculate(2, 4)(3, 7, 1), 17);
        }
    }


    //https://www.codewars.com/kata/nuclear-missile-manager         ++
    {
        function launchAll(launchMissile) {
            for (let i = 0; i < 5; i++) {
                setTimeout(function () {
                    launchMissile(i);
                }, i * 1000);
            }
        }
    }
    //https://www.codewars.com/kata/closures-and-scopes            ++
    {
        function createFunctions(n) {
            var callbacks = [];

            for (let i = 0; i < n; i++) {
                callbacks.push(function () {
                    return i;
                });
            }

            return callbacks;
        }
    }

    //https://www.codewars.com/kata/can-you-keep-a-secret     --
    {
        function createSecretHolder(secret) {
            let _secret = secret
            return {

                getSecret: function () {
                    return _secret
                },
                setSecret: function (val) {
                    _secret = val
                }
            }

        }


        obj = createSecretHolder(5)

        console.log(obj.getSecret())// returns 5
        console.log(obj.setSecret(2))
        console.log(obj.getSecret())// returns 2
    }

}

// ============ OBJECTS ============
//==================================
{

    //https://www.codewars.com/kata/my-language-skills  +++
    {
        function myLanguages(languages) {
            let result = []
            for (let value in languages) {
                if (languages[value] >= 60) result.push(value)
            }
            return result.sort((a, b) => languages[b] - languages[a])
        }
        console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }), ["Ruby", "Python"])
        console.log(myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 }), ["Dutch", "Greek", "Hindi"])
        console.log(myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 }), [])
    }

    //https://www.codewars.com/kata/run-length-encoding +++
    {
        let arrr = 'test string'
        var runLengthEncoding = function (str) {
            let result = []
            let counter = 0;
            for (let i = 0; i < str.length; i++) {
                let currentResult = []
                let currentVal = str[i]
                if (str[i + 1] === currentVal) {
                    counter++;
                } else {
                    counter++;
                    currentResult.push(counter)
                    currentResult.push(currentVal)
                    result.push(currentResult)
                    counter = 0
                }
            }
            return result
        }
        console.log(runLengthEncoding('IIIQQQKLNMMNNUUUOOEEECBB'))

    }

    //https://www.codewars.com/kata/lets-recycle   // говно
    {
        let a = [
            { type: 'rotten apples', material: 'organic' },
            { type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic' },
            { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
            { type: 'amazon box', material: 'paper' },
            { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' }
        ];
        function recycle(array) {
            let paper = [], glass = [], organic = [], plastic = [];

            array.forEach(obj => {  
              if(obj.material === 'paper' || obj.secondMaterial === 'paper' ) paper.push(obj.type)
              if(obj.material === 'glass' || obj.secondMaterial === 'glass') glass.push(obj.type)
              if(obj.material === 'organic' || obj.secondMaterial === 'organic') organic.push(obj.type)
              if(obj.material === 'plastic' || obj.secondMaterial === 'plastic') plastic.push(obj.type)
            });
          
            return [paper, glass, organic, plastic]

        }
        console.log(recycle(a))
    }




}

