During 'lein figwheel', the build process is triggered and clojure is transpiled to javascript. The full
site consists of index.html, /js, /images, and /css. These all sit in an aws S3 bucket.

So to deploy the site, first build with 'lein figwheel'. Then:

    aws s3 cp --recursive resources/public s3://clojurescript-playground.com/