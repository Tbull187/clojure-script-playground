# ClojureScript Playground

More than just a TODO app!

## Overview

A collection of simple components / functionaly written in ClojureScript and corresponding libraries. Currently includes:
* A counter app
* A todo app
* Data fetch example
* More to come...

## Setup

To get an interactive development environment run:

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

## Layout

Current layout looks like:
* app-container
  * app-header
  * app-body
    * app-sidebar
    * content-div

## License

Copyright © 2019

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
