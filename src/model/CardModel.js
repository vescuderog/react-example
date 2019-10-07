export default class CardModel {
    constructor(jsonCard) {
        this.question = jsonCard.question;
        this.answers = jsonCard.incorrect_answers;
        this.correctAnswer = jsonCard.correct_answer;
        this.answers.push(jsonCard.correct_answer);
        this.answered = false;
        this.rightAnswered = false;
    }
}
