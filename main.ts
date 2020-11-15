let list = [262, 330, 392, 523, 494, 440, 392, 330]
basic.forever(function () {
    for (let index = 0; index <= Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 1, 8); index++) {
        music.playTone(list[index], music.beat(BeatFraction.Quarter))
    }
})
