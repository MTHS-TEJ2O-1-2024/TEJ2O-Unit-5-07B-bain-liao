/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bain Liao
 * Created on: Oct 2024
 * This program moves a servo
*/

// variables
const servoNumber1 = robotbit.Servos.S1

// setup
basic.showIcon(IconNames.Happy)

//rotates servo 69 degrees
input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoNumber1, 69)
    basic.clearScreen()
    basic.showString('69')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

//rotates servo 138 degrees
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 138)
    basic.clearScreen()
    basic.showString('138')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
