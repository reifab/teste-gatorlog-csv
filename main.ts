gatorLog.beginWithCustomPins(SerialPin.P8, SerialPin.P12, DigitalPin.P13)
gatorLog.setDateAndTime(
2021,
12,
15,
15,
30
)
gatorLog.mkDirectory("Testfolder")
gatorLog.chDirectory("Testfolder")
gatorLog.openCSVFile("Testfile")
gatorLog.writeRowWithTextToCSV(["Temperature °C", "Lightintensity"], HeaderLine.YES)
basic.forever(function () {
    gatorLog.writeRowWithNumbersToCSV([input.temperature(), input.lightLevel()], HeaderLine.NO)
    basic.pause(1000)
})
