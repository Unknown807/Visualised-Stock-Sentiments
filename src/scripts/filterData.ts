function sortData(data: Ijson[]): Ijson[] {

    const sortedData: Ijson[] = data.sort((a, b) => {
        if (a["no_of_comments"] > b["no_of_comments"]) {
            return 1;
        }

        if (a["no_of_comments"] < b["no_of_comments"]) {
            return -1;
        }

        return 0;
    });

    return sortedData;
}

function limitData(data: Ijson[]): Ijson[] {
    let limit = Number((<HTMLInputElement>document.getElementById("limit-input")).value);
    if (limit < 0 || limit > data.length) {
      limit = data.length;
    }

    return sortData(data).reverse().slice(0, limit);
}

function filterCheckboxes(data: Ijson[]): Ijson[] {
    const bullish: boolean = (<HTMLInputElement>document.getElementById("bullish-checkbox")).checked;
    const bearish: boolean = (<HTMLInputElement>document.getElementById("bearish-checkbox")).checked;
    const newData: Ijson[] = [];

    for (let i=0; i<data.length; i++) {
        if (bullish) {
            if (data[i]["sentiment"] === "Bullish") {
                newData.push(data[i]);
            }
        }

        if (bearish) {
            if (data[i]["sentiment"] === "Bearish") {
                newData.push(data[i]);
            }
        }

        // If neither checkboxes are checked, then it should show all other results
        if (!bullish && !bearish) {
            if (data[i]["sentiment"] !== "Bullish" && data[i]["sentiment"] !== "Bearish") {
                newData.push(data[i]);
            }
        }
    }

    return newData;
}