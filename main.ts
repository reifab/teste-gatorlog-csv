basic.showIcon(IconNames.Heart)
gatorLog.beginWithCustomPins(SerialPin.P8, SerialPin.P12, DigitalPin.P13)
gatorLog.setDateAndTime(
2021,
12,
15,
15,
30
)
gatorLog.mkDirectory("TestCSVFolder")
gatorLog.chDirectory("TestCSVFolder")
gatorLog.openCSVFile("TestCSVFile")
gatorLog.writeRowWithTextToCSV(["Temperature °C", "Lightintensity"], HeaderLine.YES)
basic.clearScreen()
basic.forever(function () {
    gatorLog.writeRowWithNumbersToCSV([input.temperature(), input.lightLevel()], HeaderLine.NO)
    basic.pause(5000)
})
