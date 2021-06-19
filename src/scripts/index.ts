import { Config, TopLevelSpec, compile } from "vega-lite";
import vegaEmbed from "vega-embed";
import { Spec } from "vega";
import { InlineDataset } from "vega-lite/build/src/data";

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
      x: {field: 'ticker', type: 'ordinal'},
      y: {field: 'no_of_comments', type: 'quantitative'}
    },
  };

config = {
    bar: {
        color: "firebrick"
    }
}

const refreshButton = <HTMLButtonElement>document.getElementById("refresh-button");

const bullCheck = <HTMLInputElement>document.getElementById("bullish-checkbox");
const bearCheck = <HTMLInputElement>document.getElementById("bearish-checkbox");
const chartTypeInput = <HTMLInputElement>document.getElementById("chart-types-select");

refreshButton?.addEventListener("click", function(): void {
  embedChart();
});

//let selectedRadio = document.querySelector("input[name='type']:checked")?.nodeValue;

function embedChart() {
  let limit: number = Number((<HTMLInputElement>document.getElementById("limit-input")).value);
  if (limit < 0 || limit > 50) {
    limit = 50;
  }

  let data = <InlineDataset>useSentiments()?.slice(0, limit);

  console.log(limit);
  console.log(data);

  chartSpec["data"] = {
    values: data
  }

  vegaSpec = compile(chartSpec, {config}).spec;
  vegaEmbed('#canvas', vegaSpec);
}
