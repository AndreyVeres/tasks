

{
    // Треугольник. Напишите цикл,  выводит такой треугольник:

    {
        const limit = 10;
        let counter = 0;
        while (counter <= limit) {
            let result = ''
            for (let i = 0; i < counter; i++) {
                result += '#'
            }
            console.log(result);
            counter++;
        }
    }

    {
        const limit = 7;
        let str = ''
        let counter = 0;
        for (let i = counter; counter < limit; counter++) {
            console.log(str += '#')
        }
    }

}

{
    // FizzBuzz. Напишите программу, которая выводит через console.log все числа от 1 до 100,
    //  с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
    //   а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так,
    //    чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.

    {
        for (let i = 1; i <= 40; i++) {

            if (i % 3 === 0) {
                console.log('fizz');
            }
            else if (i % 5 === 0 && i % 3 !== 0) {
                console.log('buzz');
            } else if (i % 3 === 0 && i % 5 === 0) {
                console.log('fizzbuzz')
            }
            else {
                console.log(i)
            }
        }
    }
}

{
    // Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8,
    //  в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #.
    //   В результате должна получиться шахматная доска.


    {
        let limit = 10;
        let result = ''
        for (let i = 0; i < limit; i++) {
            for (let j = 0; j < limit; j++) {
                if (i % 2 === 0) {
                    result += j % 2 === 0 ? '#' : ' '
                } else {
                    result += j % 2 === 0 ? ' ' : '#'
                }


            }
            result += '\n'
        }
        console.log(result)
    }
}

{
    // Минимум. Напишите функцию min, принимающую два аргумента,
    // и возвращающую минимальный из них.

    {
        function min(a, b) {
            return a < b ? a : b
        }
        console.log(min(0, 10));
        console.log(min(-22, -110));
    }

    {


        function min(a, b, c, d, e) {
            let min = arguments[0];

            for (let i = 0; i < arguments.length; i++) {
                if (arguments[i] < min) {
                    min = arguments[i]
                }
            }

            return min
        }

        console.log(min(15, 35, 55, 111, 77, 66))

    }

    {

        const arr = [11, 12, 35, 54, 6, 72, 8]
        function min(array) {
            let min = array[0];
            for (let i = 0; i < array.length; i++) {
                if (array[i] < min) {
                    min = array[i]
                }
            }
            return min;
        }

        console.log(min(arr))

    }

}


{

    // Рекурсия. Ноль чётный. Единица нечётная. У любого числа N
    //  чётность такая же, как у N-2.Напишите рекурсивную функцию isEven
    //   согласно этим правилам. Она должна принимать число и возвращать 
    //   булевское значение. Потестируйте её на 50 и 75. Попробуйте задать 
    //   ей -1. Почему она ведёт себя таким образом? Можно ли её как-то 
    //   исправить?

    {
        //10
        function isEven(n) {
            if (n === 0) return true
            if (n < 0) return isEven(n + 2) // return false
            if (n === 1) return false;

            return isEven(n - 2);
        }

        console.log(isEven(-4));
        console.log(isEven(-3));
        console.log(isEven(35));
        console.log(isEven(50));
    }
}


{
    // Считаем бобы. Символ номер N строки можно получить,
    //  добавив к ней .charAt(N) ( “строчка”.charAt(5) ) – схожим 
    //  образом с получением длины строки при помощи .length.
    //   Возвращаемое значение будет строковым, состоящим из одного
    //    символа (к примеру, “к”). У первого символа строки позиция 
    //    0, что означает, что у последнего символа позиция будет
    //     string.length – 1. Другими словами, у строки из двух 
    //     символов длина 2, а позиции её символов будут 0 и 1.
    //     Напишите функцию countBs, которая принимает строку в 
    //     качестве аргумента, и возвращает количество символов “B”,
    //      содержащихся в строке.Затем напишите функцию countChar, 
    //      которая работает примерно как countBs, только принимает 
    //      второй параметр — символ, который мы будем искать в строке 
    //      (вместо того, чтобы просто считать количество символов “B”).
    //       Для этого переделайте функцию countBs.


    {
        let string = 'QSBSFKBLSB'

        function countBs(str, symbol) {
            counter = 0;
            for (let char of str) {
                if (char === symbol) {
                    counter++
                }
            }
            return counter === 0 ? 'В строке нет таких символов' : `В строке символов ${symbol} = ${counter} `;
        }

        console.log(countBs(string, 'B'))
    }
}

