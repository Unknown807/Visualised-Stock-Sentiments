import { TopLevelSpec, compile } from "vega-lite";
import vegaEmbed from "vega-embed";
import { Spec } from "vega";
import { InlineDataset } from "vega-lite/build/src/data";

let chartSpec: TopLevelSpec;
let vegaSpec: Spec;

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
      },
      color: {
        field: "sentiment",
        scale: {
          range: ["#D73A52", "#32A852"]
        }
      }
    },
  };

const refreshButton = <HTMLButtonElement>document.getElementById("refresh-button");

const bullCheck = <HTMLInputElement>document.getElementById("bullish-checkbox");
const bearCheck = <HTMLInputElement>document.getElementById("bearish-checkbox");
const limitInput = <HTMLInputElement>document.getElementById("limit-input");
const chartTypeInput = <HTMLInputElement>document.getElementById("chart-types-select");

refreshButton?.addEventListener("click", function(): void {
  refreshSentiments();
  embedChart();
});

bullCheck?.addEventListener("change", function(): void {
  embedChart();
});

bearCheck?.addEventListener("change", function(): void {
  embedChart();
});

chartTypeInput?.addEventListener("change", function(): void {
  embedChart();
});

limitInput?.addEventListener("input", function(): void {
  embedChart();
});

function embedChart() {
  const dataOrNull: Ijson[] | null = useSentiments();
  if (dataOrNull === null) {
    return;
  }

  let data: Ijson[] = filterCheckboxes(dataOrNull);
  data = limitData(data);
  

  chartSpec["data"] = {
    values: <InlineDataset>data
  }

  vegaSpec = compile(chartSpec).spec;
  vegaEmbed('#canvas', vegaSpec);
}
