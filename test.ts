vl53l0x.initialise()
serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("" + (vl53l0x.distance()))
    basic.pause(1000)
})
