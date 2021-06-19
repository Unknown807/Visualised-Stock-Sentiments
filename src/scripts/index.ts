import { Config, TopLevelSpec, compile } from "vega-lite";
import vegaEmbed from "vega-embed";
import { Spec } from "vega";

let chartSpec: TopLevelSpec;
let vegaSpec: Spec;
let config: Config;

chartSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    description: 'A simple bar chart with embedded data.',
    height: "container",
    width: "container",
    data: {
      values: []
    },
    mark: 'bar',
    encoding: {
      x: {field: 'a', type: 'ordinal'},
      y: {field: 'b', type: 'quantitative'}
    },
  };

config = {
    bar: {
        color: "firebrick"
    }
}

const refreshButton = <HTMLButtonElement>document.getElementById("refresh-button");
const chartTypeInput = <HTMLInputElement>document.getElementById("chart-types-select");
const limitInput = <HTMLInputElement>document.getElementById("limit-input");

refreshButton?.addEventListener("click", function(): void {
  embedChart();
});

//let selectedRadio = document.querySelector("input[name='type']:checked")?.nodeValue;

function embedChart() {
  let data: Ijson[] | null = useSentiments();
  console.log(data);

  chartSpec["data"] = {
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
  }

  vegaSpec = compile(chartSpec, {config}).spec;
  vegaEmbed('#canvas', vegaSpec);
}
