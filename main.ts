let list = [60, 64, 67, 72, 70, 69, 67, 64]
basic.forever(function () {
    for (let index = 0; index <= Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 1, 8); index++) {
        music.playTone(list[0], music.beat(BeatFraction.Whole))
    }
})
