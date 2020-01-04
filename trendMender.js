
const BOX = '[data-testid="trend"]';
const TREND = '[dir="ltr"]';

function mend() {
  console.log("Running TrendMender");
  let trendBox = document.querySelectorAll(BOX);
  trendBox.forEach( (item) => { mendTrend(item.querySelectorAll(TREND)) } );

  function findTrendItem(list) {
    for(let i=0; i<list.length; i++) {
      if (list[0].innerText != "") {
        return list[i];
      }
    }
  }

  function mendTrend(list) {
    let item = findTrendItem(list);
    let text = item.innerText;
    let uri = `/search?q=${text}%20-trending&src=typed_query`.replace('#', '%23');
    console.log(`${text} now links to ${uri}`);
    item.innerHTML = `<a href="${uri}">${item.innerText}</a>`;
  }
}

setTimeout(mend, 5000);
