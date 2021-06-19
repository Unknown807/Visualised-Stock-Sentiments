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
      }
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
const limitInput = <HTMLInputElement>document.getElementById("limit-input");
const chartTypeInput = <HTMLInputElement>document.getElementById("chart-types-select");



refreshButton?.addEventListener("click", function(): void {
  refreshSentiments();
  embedChart();
});

//let selectedRadio = document.querySelector("input[name='type']:checked")?.nodeValue;

function embedChart() {
  const dataOrNull: Ijson[] | null = useSentiments();
  if (dataOrNull === null) {
    alert("Data cannot be null, must be an error with the API. Try again later");
    return;
  }

  //let data: Ijson[] = sortData(dataOrNull)
  let data: Ijson[] = filterCheckboxes(dataOrNull);
  data = limitData(data);
  

  chartSpec["data"] = {
    values: <InlineDataset>data
  }

  vegaSpec = compile(chartSpec, {config}).spec;
  vegaEmbed('#canvas', vegaSpec);
}
