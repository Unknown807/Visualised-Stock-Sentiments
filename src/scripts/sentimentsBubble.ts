
import { TopLevelSpec } from "vega-lite";

export const sentimentsBubble: TopLevelSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    description: "Bar chart for stock sentiments",
    height: "container",
    width: "container",
    data: {
      values: []
    },
    mark: "point",
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
      size: {
          field: "no_of_comments",
          type: "quantitative"  
      },
      tooltip: [
        {
          field: "no_of_comments",
          type: "quantitative",
          title: "Comments"
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