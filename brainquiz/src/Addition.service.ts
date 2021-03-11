export function getAdditionQuestion(): AdditionQuestion {
    let number1 = Math.floor(Math.random()*10);
    let number2 = Math.floor(Math.random()*10);

    console.log(`number1: ${number1}`);
    console.log(`number2: ${number2}`);

    return new AdditionQuestion(number1, number2);
}

//this might not need to be its own function... but whatever
export function checkAnswer(input: number, correctAnswer: number): boolean {
    return input === correctAnswer;
}

export class AdditionQuestion {

    public correctAnswer: number

    constructor(public number1: number, public number2: number) {
        this.correctAnswer = number1 + number2;
    }

}