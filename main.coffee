if process.argv.length < 4
  console.log 'Usage: coffee main.coffee <query> <destination> [page]'
  process.exit 1

client = require 'google-images'
url = require 'url'
path = require 'path'
crypto = require 'crypto'

main = ->
  page = process.argv[4] ? '0'
  if isNaN page = parseInt page
    console.log 'Invalid page number'
    process.exit 1
  query =
    for: process.argv[2]
    page: page
    callback: writeResults
    rsz: 8
    imgsz: 'huge'
  client.search query

writeResults = (err, images) ->
  for image in images
    basename = path.basename url.parse(image.url).pathname
    filename = urlHash(image.url) + '_' + basename
    filename = path.join process.argv[3], filename
    image.writeTo filename

urlHash = (url) ->
  c = crypto.createHash 'sha1'
  c.update url
  return c.digest 'hex'

main()
