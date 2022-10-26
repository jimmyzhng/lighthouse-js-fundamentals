const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },

  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },

  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

/* DOES NOT WORK
let judgeVegetable = function (list, desc) {
  let name = "";
  let score = 0;
  for (let i = 0; i <= list.length; i++) {
    let vegetable = list[i]
    if (vegetable.desc > score) {
      let name = vegetable.submitter
    }
  }
  return name
}
*/

let judgeVegetable = function (list, desc) {
  let name = "";
  let score = 0;
  for (let i = 0; i <= list.length; i++) {
    let veggie = list[i]
    for (let key in veggie) {
      if (key === desc && veggie[key] > score) {
        // console.log(veggie[key], veggie.submitter)
        score = veggie[key]
        name = veggie.submitter
      }
    }
  }
  return name
}

console.log(judgeVegetable(vegetables, metric));
