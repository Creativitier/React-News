import 'whatwg-fetch'
export let getNews = (type, count=4) => {
  const result = fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`)
  return result
}

export let getDetail = (ID) => {
  const result = fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${ID}`)
  return result
}