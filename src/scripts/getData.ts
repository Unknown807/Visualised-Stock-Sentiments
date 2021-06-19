interface Ijson {
    no_of_comments: number,
    sentiment: string,
    sentiment_score: number,
    ticker: string
}

async function getSentiments(): Promise<Ijson[]> {
    return fetch("https://dashboard.nbshare.io/api/v1/apps/reddit")
        .then(res => res.json())
        .then(res => {
            return res as Ijson[]
        });
}

async function saveSentiments() {
    getSentiments()
        .then(data => {
            localStorage.setItem("data", JSON.stringify(data));
        })
        .catch((error) => {
            alert(`Error fetching new data: ${error}`);
        });   
}

saveSentiments();

let data: string | null = localStorage.getItem("data");
if (data !== null) {
    data = JSON.parse(data);
    console.log(data);
} else {
    alert("Error reading saved data");
}