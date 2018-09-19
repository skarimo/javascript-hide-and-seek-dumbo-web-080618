function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(nested) {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let allDivs = document.querySelectorAll('#grand-node div')
  let deepestDiv = allDivs[allDivs.length - 1]
  return deepestDiv
}

function increaseRankBy(n)  {
    let list = document.querySelectorAll(".ranked-list")

    list.forEach((e) => ( e.innerHTML = parseInt(e.innerHTML) + 1 ))
}
