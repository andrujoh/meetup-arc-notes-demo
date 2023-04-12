# Pragmas
@app
notes

@sandbox
livereload true

# AWS specific configuration
@aws
profile personal
region eu-west-2
architecture arm64
# runtime typescript
# runtime nodejs16.x

@plugins
architect/plugin-lambda-invoker
# architect/plugin-typescript

# configure path to shared source code (Has default path)
# @shared
# src src/shared

# web socket functions
# @ws

# @static
# spa true

# Http routes
@http

# get /helloworld
get /
get /notes

post /notes
get /notes/:noteID
post /notes/:noteID
post /notes/:noteID/delete

post /likes

# Run AWS Simple Notification System (sns) Others apps can listen through event bus
@events
notification
create-and-send-pdf
# slack

# Run AWS Simple Queue System (sqs)
@queues
emails
# send-websocket

# Run cron jobs
@scheduled
lower-likes rate(7 hours)

# Persist data in dynamodb
@tables
notes
  noteID *String
	
# Table global secondary indexes (Dynamodb)
# @tables-indexes
# notes
#   GSI1PK *String
#   GSI1SK **String