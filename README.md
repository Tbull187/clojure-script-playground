# ClojureScript Playground

More than just a TODO app!

## Overview

A collection of examples illustrating how to implement common web development patterns in ClojureScript.

## Development Setup

Prerequisites: Install Leiningen, a Clojure build tool, [here](https://leiningen.org/)

Clone this repo:

    git clone https://github.com/Tbull187/clojure-script-todo.git

To get an interactive development environment running:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein do clean, cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL.

## Build Styles

The project uses scss styles for development which get compiled to css. Make sure that sass is installed globally:

    npm install sass -g

Tell sass to watch your scss files and compile them to css:
    
    sass --watch src/styles:resources/public/css

## License

Copyright © 2019

Distributed under the Eclipse Public License 1.0
