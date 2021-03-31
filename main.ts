input.onButtonPressed(Button.A, function () {
    _1저정 = randint(0, 9)
    basic.showString("" + (음식[_1저정]))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (음식[_1저정]))
    basic.showString("" + (음료수[_2저장]))
})
input.onButtonPressed(Button.B, function () {
    _2저장 = randint(0, 2)
    basic.showString("" + (음료수[_2저장]))
})
let _2저장 = 0
let _1저정 = 0
let 음료수: string[] = []
let 음식: string[] = []
음식 = ["chicken", "pizza", "spaghetti", "curry", "sweet potato", "ice cream", "houce rice", "pork cutlet", "tteokbokki", "ramen"]
음료수 = ["coke", "cider", "water"]
