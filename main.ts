input.onButtonPressed(Button.A, function () {
    if (playing == 1) {
        for (let index = 0; index <= Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 1, 8); index++) {
            music.playTone(list[index], music.beat(BeatFraction.Quarter))
        }
        playing = 1
    } else {
        playing = 0
    }
})
let list: number[] = []
let playing = 0
music.setVolume(60)
playing = 0
list = [262, 330, 392, 523, 494, 440, 392, 330]
