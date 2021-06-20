
import { TopLevelSpec } from "vega-lite";

export const commentsSym: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'Bar chart for total number of comments for stock sentiment',
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
            field: "no_of_comments",
            type: "quantitative"
        },
        tooltip: [
            {
                field: "sentiment_score",
                type: "quantitative",
                title: "Sentiment"
            },
            {
                field: "no_of_comments",
                type: "quantitative",
                title: "Comments"
            }
        ],
        text: {
            field: "emoji",
            type: "nominal"
        },
        size: {
           value: 20
        },
    }
};