input.onGesture(Gesture.LogoUp, function () {
    Marche = 0
})
function Effacer_Gauche () {
    led.unplot(4, 4)
    led.unplot(4, 3)
    led.unplot(4, 2)
    led.unplot(4, 1)
    led.unplot(4, 0)
    led.unplot(3, 4)
    led.unplot(3, 3)
    led.unplot(3, 2)
    led.unplot(3, 1)
    led.unplot(3, 0)
}
input.onLogoEvent(TouchButtonEvent.Released, function () {
    Marche = 1
})
input.onButtonPressed(Button.A, function () {
    if (Gauche < Vitesse_min + Inc_Vit * 14) {
        Gauche += Inc_Vit
    }
    Droite = Vitesse_min
    Effacer_Droite()
    Effacer_Gauche()
    Effacer()
})
function Effacer_Droite () {
    led.unplot(0, 4)
    led.unplot(0, 3)
    led.unplot(0, 2)
    led.unplot(0, 1)
    led.unplot(0, 0)
    led.unplot(1, 4)
    led.unplot(1, 3)
    led.unplot(1, 2)
    led.unplot(1, 1)
    led.unplot(1, 0)
}
function Effacer () {
    led.unplot(2, 4)
    led.unplot(2, 3)
    led.unplot(2, 2)
    led.unplot(2, 1)
    led.unplot(2, 0)
}
input.onButtonPressed(Button.B, function () {
    if (Droite < Vitesse_min + Inc_Vit * 14) {
        Droite += Inc_Vit
    }
    Gauche = Vitesse_min
    Effacer_Droite()
    Effacer_Gauche()
    Effacer()
})
let Droite = 0
let Gauche = 0
let Marche = 0
let Vitesse_min = 0
let Inc_Vit = 0
basic.showIcon(IconNames.SmallHeart)
Inc_Vit = 5
Vitesse_min = 90
Marche = 0
Gauche = Vitesse_min
Droite = Vitesse_min
basic.forever(function () {
    if (Marche == 1) {
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, Gauche, Droite)
    } else {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    }
})
basic.forever(function () {
    if (Droite < Vitesse_min + Inc_Vit) {
        led.plot(4, 4)
    } else if (Droite < Vitesse_min + Inc_Vit * 2) {
        led.plot(4, 3)
    } else if (Droite < Vitesse_min + Inc_Vit * 3) {
        led.plot(4, 2)
    } else if (Droite < Vitesse_min + Inc_Vit * 4) {
        led.plot(4, 1)
    } else if (Droite < Vitesse_min + Inc_Vit * 5) {
        led.plot(4, 0)
    } else if (Droite < Vitesse_min + Inc_Vit * 6) {
        led.plot(3, 4)
    } else if (Droite < Vitesse_min + Inc_Vit * 7) {
        led.plot(3, 3)
    } else if (Droite < Vitesse_min + Inc_Vit * 8) {
        led.plot(3, 2)
    } else if (Droite < Vitesse_min + Inc_Vit * 9) {
        led.plot(3, 1)
    } else if (Droite < Vitesse_min + Inc_Vit * 10) {
        led.plot(3, 0)
    } else if (Droite < Vitesse_min + Inc_Vit * 11) {
        led.plot(2, 4)
    } else if (Droite < Vitesse_min + Inc_Vit * 12) {
        led.plot(2, 3)
    } else if (Droite < Vitesse_min + Inc_Vit * 13) {
        led.plot(2, 2)
    } else if (Droite < Vitesse_min + Inc_Vit * 14) {
        led.plot(2, 1)
    } else if (Droite < Vitesse_min + Inc_Vit * 15) {
        led.plot(2, 0)
    }
})
basic.forever(function () {
    if (Gauche < Vitesse_min + Inc_Vit * 1) {
        led.plot(0, 4)
    } else if (Gauche < Vitesse_min + Inc_Vit * 2) {
        led.plot(0, 3)
    } else if (Gauche < Vitesse_min + Inc_Vit * 3) {
        led.plot(0, 2)
    } else if (Gauche < Vitesse_min + Inc_Vit * 4) {
        led.plot(0, 1)
    } else if (Gauche < Vitesse_min + Inc_Vit * 5) {
        led.plot(0, 0)
    } else if (Gauche < Vitesse_min + Inc_Vit * 6) {
        led.plot(1, 4)
    } else if (Gauche < Vitesse_min + Inc_Vit * 7) {
        led.plot(1, 3)
    } else if (Gauche < Vitesse_min + Inc_Vit * 8) {
        led.plot(1, 2)
    } else if (Gauche < Vitesse_min + Inc_Vit * 9) {
        led.plot(1, 1)
    } else if (Gauche < Vitesse_min + Inc_Vit * 10) {
        led.plot(1, 0)
    } else if (Gauche < Vitesse_min + Inc_Vit * 11) {
        led.plot(2, 4)
    } else if (Gauche < Vitesse_min + Inc_Vit * 12) {
        led.plot(2, 3)
    } else if (Gauche < Vitesse_min + Inc_Vit * 13) {
        led.plot(2, 2)
    } else if (Gauche < Vitesse_min + Inc_Vit * 14) {
        led.plot(2, 1)
    } else if (Gauche < Vitesse_min + Inc_Vit * 15) {
        led.plot(2, 0)
    }
})
