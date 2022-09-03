
//   NUMBERS , STRING
//================================================


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


//https://www.codewars.com/kata/duplicate-encoder
{
    function duplicateEncode(word) {
        let map = {}
        let result = ''
        for (let i = 0; i < word.length; i++) {
            let current = word[i]
            
            if (map[current]) {
                map[current] += 1
            } else {
                map[current] = 1
            }

        }

        for (let i = 0; i < word.length; i++) {
            result += map[word[i]] > 1 ? ')' : '('
        }
        return map['s'] === map['S']
    }

    console.log(duplicateEncode("din"), "(((");
    console.log(duplicateEncode("recede"), "()()()");
    console.log(duplicateEncode("(( @"), "))((");
    console.log(duplicateEncode("Success"), ")())())", "should ignore case");
}

