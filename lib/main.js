// Grab an existing namespace object, or create a blank object
// if it doesn't exist
var GCMD = require('./gcmd');
//GCMD.load = require('json2csv');
window.GCMD = GCMD;

var $jq = require('jquery');

$jq(() => {
    // jQuery document ready
    console.info('ready');
    GCMD.init();
});