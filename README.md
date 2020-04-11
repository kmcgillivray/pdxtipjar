This is a [Gatsby](https://www.gatsbyjs.org/) site that pulls data from a Google Sheet. Forked from [PDX Tip Jar](https://github.com/noahmanger/pdxtipjar).

If you haven't already, we encourage you to go tip someone in need!

## Developing

Clone the repo, navigate into the directory.

If it's your first time, install dependencies:

```shell
   npm install
```

Start developing:

```shell
   gatsby develop
```

## Cloning
We're working on making this easier, but for now, if you'd like to duplicate this site for your own city:

1. Fork this repo.
2. Set up a new Google Form that saves data to [a Google Sheet with these headers](https://docs.google.com/spreadsheets/d/e/2PACX-1vQuZugxK6PwsMWUTHFrWxF7xZ0mmlkIcNLLQ4H8LWjflx_JpPi1804_BgKp-KLNnScVnmcmant9DDmp/pubhtml?gid=1536693349&single=true)
3. Embed your Google Sheet on the signup form page
4. Set your Google Sheet to publish to a CSV
5. Insert the URL [to the CSV here](https://github.com/noahmanger/pdxtipjar/blob/master/src/components/constants.js#L2)
6. Deploy (Northeast WI Tip Jar currently uses [Netlify](https://netlify.com))
