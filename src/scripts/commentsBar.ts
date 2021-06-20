/* I could use one json structure for the spec and change it dynamically when the user changes
the chart. However, having a separate file to define each structure is a lot easier and significantly more
readable.
*/

import { TopLevelSpec } from "vega-lite";

export const commentsBar: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'A simple bar chart with embedded data.',
    height: "container",
    width: "container",
    data: {
      values: []
    },
    mark: 'bar',
    encoding: {
      x: {
        field: 'ticker', 
        type: 'ordinal',
        sort: {
          field: "no_of_comments",
          order: "descending"
        }
      },
      y: {
        field: 'no_of_comments', 
        type: 'quantitative'
      },
      tooltip: [
        {
          field: "sentiment_score",
          type: "quantitative",
          title: "Sentiment"
        }
      ],
      color: {
        field: "sentiment",
        scale: {
          range: ["#D73A52", "#32A852"]
        }
      }
    },
};