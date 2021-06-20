// Easier to see data which has sentiments close to 0 (and thus not that visible on the bar graph)

import { TopLevelSpec } from "vega-lite";

export const sentimentsSym: TopLevelSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "Bar chart for stock sentiments",
    height: "container",
    width: "container",
    data: {
      values: []
    },
    transform: [
      {
          calculate: "{'Bullish': '🐮', 'Bearish': '🐻'}[datum.sentiment]",
          as: "emoji"
      },
    ],
    mark: {
      type: "text",
      baseline: "middle"
    },
    encoding: {
      x: {
        field: "ticker", 
        type: "nominal",
        sort: {
          field: "no_of_comments",
          order: "descending"
        }
      },
      y: {
        field: "sentiment_score", 
        type: "quantitative"
      },
      tooltip: [
        {
          field: "no_of_comments",
          type: "quantitative",
          title: "Comments"
        },
        {
          field: "sentiment_score",
          type: "quantitative",
          title: "Sentiment"
        }
      ],
      text: {
        field: "emoji",
        type: "nominal"
      },
      size: {
        value: 20
      }
    },
};