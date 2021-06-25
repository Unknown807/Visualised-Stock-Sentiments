# Visualised-Stock-Sentiments

Have a go via GitHub pages - https://unknown807.github.io/Visualised-Stock-Sentiments/

There is a problem that can be encountered with CORS, so install this extension and enable CORS and then fetching data from the API should work and display: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

## Description

A simple visualisation using a few different chart types of top 50 stock sentiments (a score between -1 and 1) on the WSB subreddit, via an api: https://dashboard.nbshare.io/apps/reddit/api/

## Dependencies

For more information look in package.json

- typescript - ^4.3.4
- browserify - ^17.0.0 (to bundle all dependencies into compiled js files)
- vega - ^5.20.2
- vega-embed - ^6.18.2
- vega-lite - ^5.1.0
- jest - ^27.0.4
- eslint - ^7.28.0

## How To Use

There are a number of options to use along the top of the page. The refresh button fetches new data (if there is any) from the api and immediatly plots it with the currently selected chart type. Chart type is a dropdown selection of charts, limit is how many of the top 50 stock sentiments you want to be plotted and the check boxes of bearish and bullish are to filter stocks with those sentiments.

![](/imgs/img1.PNG)

This is a very simple bar chart showing the top 50 stocks sorted by the highest number of comments and coloured with green for bullish and red for bearish sentiment.

![](/imgs/img2.PNG)

Another interesting chart type is using emoji symbols for bearish and bullish sentiments. Additionally, hovering over any plot point will display a tooltip with more/specific information about the datum.
