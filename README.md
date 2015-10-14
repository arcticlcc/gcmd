GCMD Keyword Viewer
==================

Application for visualizing [NASA's Global Change Master Directory (GCMD) Keyword lists](http://gcmd.nasa.gov/learn/keywords.html), in particular the science keywords.

### About the GCMD Keyword Viewer

The [Arctic Landscape Conservation Cooperative](http://arcticlcc.org) developed this application to assist in the use of GCMD keywords. GCMD keywords are very useful for metadata and facilitating data discovery. However, finding and choosing specific keywords can be difficult due to the size of the list. This viewer is intended to provide an easy way to explore and use the GCMD keyword list.

### About NASA’s GCMD Keywords

This keyword list is based on the GCMD/IDN Science Keywords Version 8.1 Released 2015-03-26\. The the keyword lists are maintained by the GCMD science team.

#### Citation:

*Global Change Master Directory (GCMD). 2015. GCMD Keywords, Version 8.1. Greenbelt, MD: Global Change Data Center, Science and Exploration Directorate, Goddard Space Flight Center (GSFC) National Aeronautics and Space Administration (NASA). URL: [http://gcmd.nasa.gov/learn/keywords.html_](http://gcmd.nasa.gov/learn/keywords.html)*

### Built using:
 - [bootstrap-sass](https://github.com/twbs/bootstrap-sass)
 - [bootstrap-treeview](https://github.com/jonmiles/bootstrap-treeview)
 - [jQuery](http://jquery.com/)
 - [autosize](https://www.npmjs.com/package/autosize)
 - [Grunt HTML Boiler](https://github.com/mhulse/grunt-html-boiler)
 - [browserify](https://github.com/substack/node-browserify)

## Installation

 1. Clone repository: `git clone git@github.com:arcticlcc/gcmd.git`
 2. Enter project directory: `cd gcmd`
 3. Install dependencies via Bower: `bower install`
 4. Install dependencies via NPM: `npm install`
 5. Build project via Grunt: `grunt`
    - `grunt dev`:  Development build. This will create dev.html and basic.html
    in the project root(these files are .gitignored). This build will load all
    unminified js files individually.
    - `grunt prod`: Production build. This will create a production version at
    *./prod/<%= pkg.version %>/<%= now %>/<%= ver %>*. The production version
    includes concatenated and minified js/css. Note: jQuery is
    **not** included in the js builds. The *prod* directory is also .gitignored.
 6. Serve with your favorite web server:
    - Use `grunt connect:server:keepalive` to start a basic server at http://localhost:9001
    - [example basic nginx config](https://gist.github.com/foxxyz/0b978dcea9b95f94aa3e)
    - Python: `python -m SimpleHTTPServer 9001`
    - php 5.4+: `php -S localhost:9001`

##Development

Edit the [templates](https://github.com/arcticlcc/gcmd/tree/master/templates)
to modify layout:

 - index.html: jQuery Mobile interface. Copied to /dev.html on
 `grunt dev`.
 - latest.html: redirects to the last production build. Copied to /index.html on
 `grunt prod`.

##Grunt

See [Gruntfile.js](https://github.com/arcticlcc/gcmd/blob/master/Gruntfile.js)
for details on the available Grunt tasks. `grunt --help` will also list available
tasks.
