//         https://github.com/rolling-scopes-school/tasks/blob/master/tasks/codewars/Codewars1-2022Q1.md



//  ============== NUMBERS , STRING ==============       +++
//================================================
{
    console.log(parseInt('DE', 16))
    console.log(parseInt('FF', 16))
    // https://www.codewars.com/kata/62eb800ba29959001c07dfee/train/javascript
    {
        function brightest(colors) {
            let brightestColor = 0
            let valueMax = 0

            for (let i = 0; i < colors.length; i++) {
                let color = colors[i]

                let r = parseInt(color.slice(1, 3), 16)
                let g = parseInt(color.slice(3, 5), 16)
                let b = parseInt(color.slice(5, 7), 16)
                let value = Math.max(r, g, b)

                if (value > valueMax) {
                    valueMax = value
                    brightestColor = colors[i]
                }


            }
            return brightestColor
        }


        console.log(brightest(["#001000", "#000000", "#001000"]));
        console.log(["#ABCDEF", "#123456"], "#ABCDEF");
        console.log(["#00FF00", "#FFFF00"], "#00FF00");
        console.log(["#FFFFFF", "#1234FF"], "#FFFFFF");
    }
    //  https://www.codewars.com/kata/highest-and-lowest    ++
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

    //https://www.codewars.com/kata/disemvowel-trolls   ++
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

    //https://www.codewars.com/kata/isograms    ++
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

    //https://www.codewars.com/kata/digits-explosion    ++
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

    //https://www.codewars.com/kata/handshake-problem   ++
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


    //https://www.codewars.com/kata/duplicate-encoder   ++++
    {

        function duplicateEncode(word) {
            word = word.toLowerCase();
            let result = '';

            for (let i in word) {
                let letter = word[i].toLowerCase();
                result += word.indexOf(letter) != word.lastIndexOf(letter) ? ')' : '(';
            }

            return result;
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


    // https://www.codewars.com/kata/n-th-fibonacci    ++++
    {
        function nthFibo(n) {
            let res = n
            let a = 1;
            let b = 1;
            let fiboQ = [0, a, b];
            while (n > 0) {
                let c = a + b;
                fiboQ.push(c)
                a = b;
                b = c;
                n--
            }
            return fiboQ[res - 1]
        }


        console.log(nthFibo(1))
        console.log(nthFibo(2))
        console.log(nthFibo(3))
        console.log(nthFibo(4))

    }

    // https://www.codewars.com/kata/multiples-of-3-or-5   ++
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

// ==================== ARRAYS ===================      2
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

    // https://www.codewars.com/kata/length-of-missing-array  // ++
    {
        function getLengthOfMissingArray(arrayOfArrays) {
            const lengths = (arrayOfArrays || []).map(item => Array.isArray(item) ? item.length : 0).sort((a, b) => a - b)

            for (let i = 0; i < lengths.length; i++) {
                if (lengths[i] + 1 !== lengths[i + 1]) {
                    return lengths[i] + 1
                }
            }
            if (lengths.includes(0)) {
                return 0
            }

            return 0
        }
        console.log(getLengthOfMissingArray([[3],
        [],
        [1, 1, 1],
        [4, 2, 3, 1, 0],
        [2, 0, 3, 0, 0, 4, 1, 2],
        [4, 2, 0, 0, 1, 1, 2],
        [0, 1],
        [3, 2, 0, 3],
        [2, 3, 1, 3, 2, 3, 4, 2, 0],
        [3, 0, 0, 3, 3, 1, 1, 3, 4, 4],
        [4, 0, 1, 0, 2, 3, 4, 1, 3, 1, 0]]))

        console.log(getLengthOfMissingArray([[2, 3],
        [],
        [3, 3, 1]]))




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


// ================= FUNCTIONS ============                +++     ----
//=========================================
{

    //https://www.codewars.com/kata/558ccca75f511f2b0d0000f7       ---
    {
        let arr = [undefined, undefined]

        Array.prototype.map = function (callback, thisArg) {
            if (this == null) throw new Error('this is null');
            if (typeof callback !== 'function') throw new Error('it is not a function');

            let context = this;

            if (thisArg) {
                context = thisArg
            }
            let result = new Array(context.length)
            for (let i = 0; i < this.length; i++) {
                if (this[i] === undefined) {
                    result[i] = undefined
                } else {
                    result[i] = callback.call(context, this[i], i, this)
                }
            }
            console.log(result)
            return result
        }


        let newarr = arr.map(item => item += 2)

        console.log(newarr)
    }
    // https://www.codewars.com/kata/javascript-mathematician       ++
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

    //https://www.codewars.com/kata/can-you-keep-a-secret     ++
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

// ============ OBJECTS ============   +++     ----
//==================================
{

    // https://www.codewars.com/kata/59418db3f5c394eca80000ef   ---
    {
        let object = { user: { name: { first: 'John', last: 'Snow' } } };
        function find(object, path) {
            let search = '.'
            let arr = path.split('.')
            for (let i = 0; i < arr.length; i++) {
                if (i === arr.length - 1) {
                    search += `${arr[i]}`
                } else {
                    search += `${arr[i]}.`
                }

            }

            console.log(search)
            return eval(`object${search}`)
        }



        console.log(find(object, 'user.name.first'))


    }
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
                if (obj.material === 'paper' || obj.secondMaterial === 'paper') paper.push(obj.type)
                if (obj.material === 'glass' || obj.secondMaterial === 'glass') glass.push(obj.type)
                if (obj.material === 'organic' || obj.secondMaterial === 'organic') organic.push(obj.type)
                if (obj.material === 'plastic' || obj.secondMaterial === 'plastic') plastic.push(obj.type)
            });

            return [paper, glass, organic, plastic]

        }
        console.log(recycle(a))
    }




}


// ============ Date ==============       +++
// ================================
{

    //https://www.codewars.com/kata/the-coupon-code  ++
    {
        function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
            return enteredCode === correctCode && new Date(currentDate) < new Date(expirationDate)
        }

        console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'), true);
        console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'), false);
    }
    //https://www.codewars.com/kata/unlucky-days ++
    {
        function unluckyDays(year) {
            let fridays = 0;
            for (let month = 0; month < 12; month++) {
                let date = new Date(year, month, 13)
                if (date.getDay() === 5) fridays++
            }
            return fridays
        }

        console.log(unluckyDays(2015))
    }

    // https://www.codewars.com/kata/human-readable-duration-format ++
    {
        function formatDuration(seconds) {
            if (!seconds) return 'now';
            let localSeconds = seconds;
            let year = 0
            let day = 0
            let hour = 0;
            let minute = 0
            let duration = []
            const stringBuilder = (value, label) => `${value} ${value > 1 ? label + 's' : label}`
            if (localSeconds >= 31536000) {
                year = Math.floor(localSeconds / 31536000)
                localSeconds = localSeconds - ((year * 31536000))
            }
            if (localSeconds >= 86400) {
                day = Math.floor(localSeconds / 86400)
                localSeconds = localSeconds - ((day * 86400))
            }
            if (localSeconds >= 3600) {
                hour = Math.floor(localSeconds / 3600)
                localSeconds = localSeconds - ((hour * 3600))
            }
            if (localSeconds >= 60) {
                minute = Math.floor(localSeconds / 60)
                localSeconds = localSeconds - ((minute * 60))
            }
            if (year) duration.push(stringBuilder(year, 'year'))
            if (day) duration.push(stringBuilder(day, 'day'))
            if (hour) duration.push(stringBuilder(hour, 'hour'))
            if (minute) duration.push(stringBuilder(minute, 'minute'))
            if (localSeconds) duration.push(stringBuilder(localSeconds, 'second'))
            if (duration.length > 1) {
                let last = duration.pop()
                return duration.join(', ') + ' and ' + last
            }
            return duration[0]
        }


        console.log(3600 / 60) / 60

        console.log(formatDuration(1), "1 second");
        console.log(formatDuration(62), "1 minute and 2 seconds");
        console.log(formatDuration(120), "2 minutes");
        console.log(formatDuration(3600), "1 hour");
        console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
    }
}


// OOP CODEWARZ

{
    // https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript
    {

        var santa = {
            sayHoHoHo: function () { console.log('Ho Ho Ho!') },
            distributeGifts: function () { console.log('Gifts for all!'); },
            goDownTheChimney: function () { console.log('*whoosh*'); }
        };

        var notSanta = {
            sayHoHoHo: function () { console.log('Oink Oink!') }
            // no distributeGifts() and no goDownTheChimney()
        };


        function isSantaClausable(obj) {
            // if(Array.from(obj).length === 0) return false
            // if(Object.prototype.toString().call(obj) !== '[object Object]') return false
            console.log((Object.prototype.toString(obj) !== '[object Object]'))
            // let funcs = ['sayHoHoHo' , 'distributeGifts','goDownTheChimney'];
            // for(let i = 0 ; i < funcs.length ; i++) {
            //     if (obj.hasOwnProperty(funcs[i])) return false
            // }
            // return true
        }

        isSantaClausable(santa); // must return TRUE
        isSantaClausable(notSanta); // must return FALSE


    }
    //https://www.codewars.com/kata/513e1e47c600c93cef000001/train/javascript
    {


        class Animal {
            constructor(name, type) {
                this.type = type,
                    this.name = name


            }

            toString() {
                // console.log(`${this.name} is a ${this.type}`)
                return `${this.name} is a ${this.type}`;
            }
        }


        var dog = new Animal('Max', 'dog');
        dog.toString(); // should return 'Max is a dog'
        dog.type; // should == 'dog'
        dog.name; // should == 'Max'
        dog.name = 'Lassie'; // should set name to 'Lassie'
    }


    //https://www.codewars.com/kata/5a2cb53cee1aaef2fa000037/train/javascript

    {

    }


    //https://www.codewars.com/kata/56f935002e6c0d55fa000d92/train/javascript

    {


        class Animal {
            constructor(name, age, legs, species, status) {
                this.name = name
                this.age = age
                this.legs = legs
                this.species = species
                this.status = status
            }
            introduce() {
                console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
                return `Hello, my name is ${this.name} and I am ${this.age} years old.`
            }
        }



        class Shark extends Animal {
            constructor(name, age, status) {
                super(name, age, status)
                this.legs = 0
                this.species = "shark"
                this.status = status
            }
        }
        class Cat extends Animal {
            constructor(name, age, status) {
                super(name, age, status)
                this.legs = 4
                this.species = "cat"
                this.status = status
            }

            introduce() {
                return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
            }
        }
        class Dog extends Animal {
            constructor(name, age, status, master) {
                super(name, age, status)
                this.master = master
                this.legs = 4
                this.species = "dog"
                this.status = status
            }

            greetMaster() {
                return `Hello ${this.master}`
            }
        }


        let shark = new Dog('vasa', 23, 'asdas', 'andrey')
        shark.greetMaster()

    }


    //https://www.codewars.com/kata/56fcc1ee45040039ab0016da/train/javascript

    {

        class Cube {
            constructor(length) {
                this.length = length
                this.surfaceArea
                this.volume
            }

            get surfaceArea() {
                return (this.length * this.length) * 6
            }

            set surfaceArea(value) {
                this.length = Math.sqrt(value / 6)
            }

            get volume() {
                return this.length * this.length * this.length
            }



        }
        var cube = new Cube(1);
        console.log(cube.length, 1);
        console.log(cube.surfaceArea, 6);
        console.log(cube.volume, 1);
        cube.length = 2;
        console.log(cube.surfaceArea, 24);
        console.log(cube.volume, 8);
        cube.surfaceArea = 54;
        console.log(cube.length, 3);
        console.log(cube.volume, 27);
        cube.surfaceArea = 96;
    }


    //https://www.codewars.com/kata/5784c8116211383b5f0001d3/train/javascript
    {
        class File {
            constructor(fullName, contents) {
                this._fullName = fullName
                this.contents = contents
                this.filename = fullName.split('.')[0]
                this.extension = fullName.split('.')[1]
                this.line
                this.index = 0

            }
            write(str) {
                this.contents += str + '\n';
            }
            getContents() {
                return this.contents
            }
            gets() {
                this.line = this.contents.split('\n')[this.index];
                this.index++
                console.log(this.line)
                return this

            }
            // get _fullName() {
            //     return this._fullName;
            // }
        }


        var myFile = new File("example.txt", "sss\nasdasd\nasdasd");
        console.log(myFile.gets().gets())



    }


    //https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript
    {
        var numbers = [1, 2, 3, 4, 5];

        Array.prototype.square = function () {
            return this.map(item => {
                return item * item
            })
        }

        Array.prototype.cube = function () {
            return this.map(item => {
                return Math.pow(item, 3)
            })
        }

        Array.prototype.average = function () {
            return this.reduce((acc, item) => {
                return acc + item
            }, 0) / this.length
        }

        Array.prototype.sum = function () {
            return this.reduce((acc, item) => {
                return acc + item
            }, 0)
        }

        Array.prototype.even = function () {
            return this.filter((item) => {
                return item % 2 === 0;
            })
        }

        Array.prototype.odd = function () {
            return this.filter((item) => {
                return item % 2 !== 0;
            })
        }

    }

    // https://www.codewars.com/kata/5411e3e95f3a7f6a7a0000e3/train/javascript

    {

        Array.prototype.reduce = function (process, initial) {
            let result = initial

            for (let i = 0; i < this.length; i++) {
                let type = typeof this[i] === 'number' ? 0 : ''
                result = process(result ? result : type, this[i])
            }

            return result
        }

        console.log(

            [1, 2, 3].reduce((acc, item) => {
                return acc + item
            })

        )

    }


    // https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript 
    {
        var obj = {
            person: {
                name: 'joe',
                history: {
                    hometown: 'bratislava',
                    bio: {
                        funFact: 'I like fishing.'
                    }
                }
            }
        };


        Object.prototype.hash = function (string) {
            let paths = string.split('.');
            console.log(paths)
            let context = this
            let result = ''
            for (let i = 0; i < paths.length; i++) {

                if (!paths[i] in this) {
                    console.log(paths[i])
                    return undefined;
                }
                result += paths[i]
            }

            console.log( this.paths[0])
            // return context.paths.join('.')
        }

        console.log(obj.hash('person.name')) // 'joe'



        obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
        obj.hash('person.history.homeStreet'); // undefined
        obj.hash('person.animal.pet.needNoseAntEater'); // undefined
    }

}
