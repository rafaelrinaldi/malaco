![Malaco](./malaco.jpg)

Malaco is a tool that consumes data from Sao Paulo's subway system and expose it in a normalized API.

# Commands

```sh
                            oooo
                            `888
ooo. .oo.  .oo.    .oooo.    888   .oooo.    .ooooo.   .ooooo.
`888P"Y88bP"Y88b  `P  )88b   888  `P  )88b  d88' `"Y8 d88' `88b
 888   888   888   .oP"888   888   .oP"888  888       888   888
 888   888   888  d8(  888   888  d8(  888  888   .o8 888   888
o888o o888o o888o `Y888""8o o888o `Y888""8o `Y8bod8P' `Y8bod8P'



Usage
  λ status      get subway operational status
  λ import      import data to output mechanism
  λ connect     compile assets and startup local server
  λ serve       serve port 9000 through ngrok
  λ refresh     force data to be updated
  λ simulation  runs iOS simulator
```

# The idea

While building [the app Siga](http://github.com/rafaelrinaldi/siga) I've found that, despite the fact that is required by law, the data of Sao Paulo's subway system is spread accross many websites and weird documents on the web. Besides that there's a whole lot of confusion due to political issues that makes acessing the data a real challenge. To give you an example, each one of the lines are maintained by a different company, which has it's own way to "expose" the data.

I needed a somewhat decent API to access all the data, that's why I built Malaco. It's an effort to abstract all the mess.

There are no tests, I would rewrite some stuff from scratch and probably there are a few bugs here and there!

I'm open sourcing it because I think it can be useful to someone else and also because I currently have no time to maintain nor improve it due to my fulltime job.

[Here are the slides explaining the whole project (in Brazilian Portuguese).](https://speakerdeck.com/rafaelrinaldi/projeto-de-conclusao-de-curso)

# Goal

I really want to someday deploy this as an app somewhere and serve the data through a nice REST API.

# How it works

Malaco was actually built on a weekend so you'll find some weird stuff for sure.

First of all, the data is fetched via web scraping. There are two main requests made, the general import process which is responsible for fetching the data from a list of websites one by one and the train status service that's responsible for fetching the data about subway lines availability.

These two import processes will generate two static files, `stations.json` and `status.json`. All the parsers will look for these files to avoid making any other requests.
Ideally I wouldn't use IO to do that but for an MVP it worked pretty well.

Another thing to notice is the coordinates data. There's a static file containing the geolocation information for every subway station. The data is fetched by a separate bookmarklet I've created. At first it was fetched and processed by the scraping scripts but the data provided is very inconsistent and doesn't play well with the Google Maps API which is what I'm using for parsing and processing geolocation data.

# Contributing

Please, feel free to contribute with anything. Bug reports, ideas and pull requests are welcome. For pull requests, just make sure you create a separate branch before submiting.

# Setup

To get things up and running you must have [Node.js](http://nodejs.org) installed (with [NPM](http://npmjs.com)).

There are some stuff from the setup that you might not need at all, they're just there for demo purposes. They are pointing to a local folder of mine. `connect`, `refresh` and `simulation` will look for it.

# License

[MIT license](http://rinaldi.mit-license.org).
