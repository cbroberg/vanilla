const cls = require('../services/lib').cls
const log = require('../services/lib').log

// Immediately-Invoked Function Expression (IIFE) (unnamed)
// It doesn't work without adding a semicolon to the ending of the former function or expression

cls()

/*eslint-disable*/

// Named IIFE
var immediatelyInvoked = (() => {
    var superSecret = 'Immediately-Invoked Function Expression (IIFE) (unnamed)'
    log(superSecret)
})();

// Unamed IIFE
(function(){
    var superSecret = 42
    console.log(superSecret)
})();

// Named IIFE
(favNumber = function (num = 3) {
    log('My favorite number is ' + num)
})();

favNumber(666);

(yesIDidIt = function(msg) {
    log('I actually did it and found the error ... :) ')
})()


/*eslint-enable*/

