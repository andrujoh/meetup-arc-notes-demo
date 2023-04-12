@app
notes

@create
autocreate true

@sandbox
livereload true

@aws
profile personal
region eu-west-2
architecture arm64

@shared
src src/shared

@plugins
architect/plugin-lambda-invoker

@http
get /
get /notes

post /notes
get /notes/:noteID
post /notes/:noteID
post /notes/:noteID/delete

post /likes

@events
notification

@queues
emails

@scheduled
lower-likes rate(7 hours)

@tables
notes
  noteID *String
