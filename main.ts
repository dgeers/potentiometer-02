basic.forever(function () {
    basic.pause(500)
    music.playTone(Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 1, 10) * 12, music.beat(BeatFraction.Whole))
})
