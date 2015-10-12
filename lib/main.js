// Grab an existing namespace object, or create a blank object
// if it doesn't exist
var GCMD = require('./gcmd');

window.GCMD = GCMD;
GCMD.json = require('../assets/gcmd.json');
GCMD.autosize = require('autosize');

//setup jquery and plugins
var $jq = require('jquery');
require('../node_modules/bootstrap-sass/assets/javascripts/bootstrap/tab.js');
require('../node_modules/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js');
require('../node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js');
require('../bower_components/bootstrap-treeview/src/js/bootstrap-treeview.js');

$jq(() => {
    // jQuery document ready
    GCMD.init();
});