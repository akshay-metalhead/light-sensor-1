basic.forever(function () {
    if (input.lightLevel() > 100) {
    	
    } else {
        basic.clearScreen()
    }
    basic.showLeds(`
        # . # . #
        . . . . #
        . . # # #
        . . . # #
        . . # # #
        `)
})
