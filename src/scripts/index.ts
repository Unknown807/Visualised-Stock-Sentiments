import { TopLevelSpec, compile } from "vega-lite";
import vegaEmbed from "vega-embed";
import { Spec } from "vega";
import { InlineDataset } from "vega-lite/build/src/data";
import { commentsBar } from "./commentsBar";
import { sentimentsSym } from "./sentimentsSym";
import { sentimentBar } from "./sentimentsBar";
import { sentimentsBubble } from "./sentimentsBubble";
import { commentsSym } from "./commentsSym";

let chartSpec: TopLevelSpec;
let vegaSpec: Spec;

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

  const chartType: string = (<HTMLInputElement>document.getElementById("chart-types-select")).value;
  switch (chartType) {
    case "0":
      chartSpec = commentsBar;
      break;
    case "1":
      chartSpec = sentimentBar;
      break;
    case "2":
      chartSpec = sentimentsSym;
      break;
    case "3":
      chartSpec = sentimentsBubble;
      break;
    case "4":
      chartSpec = commentsSym;
      break;
  }

  let data: Ijson[] = filterCheckboxes(dataOrNull);
  data = limitData(data);
  
  chartSpec["data"] = {
    values: <InlineDataset>data
  };

  vegaSpec = compile(chartSpec).spec;
  vegaEmbed("#canvas", vegaSpec);
}
