import { Config, TopLevelSpec, compile } from "vega-lite";
import vegaEmbed from "vega-embed";

let yourVlSpec: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'A simple bar chart with embedded data.',
    data: {
      values: [
        {a: 'A', b: 28},
        {a: 'B', b: 55},
        {a: 'C', b: 43},
        {a: 'D', b: 91},
        {a: 'E', b: 81},
        {a: 'F', b: 53},
        {a: 'G', b: 19},
        {a: 'H', b: 87},
        {a: 'I', b: 52}
      ]
    },
    mark: 'bar',
    encoding: {
      x: {field: 'a', type: 'ordinal'},
      y: {field: 'b', type: 'quantitative'}
    }
  };

const config: Config = {
    bar: {
        color: "firebrick"
    }
}

const vegaSpec = compile(yourVlSpec, {config}).spec;

vegaEmbed('#vis', vegaSpec);
