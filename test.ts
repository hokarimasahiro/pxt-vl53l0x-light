serial.redirectToUSB()
serial.writeLine("init=" + vl53l0x.initialise());
basic.forever(function () {
    serial.writeLine("" + (vl53l0x.distance()))
    basic.pause(1000)
})
