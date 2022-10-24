
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// console.log(stations[0][1]) //returns "10"

/*
const chooseStations = function (stations) {
  //Takes in array, checks arr[1] for number >= 20, arr[2] for "school" or "community centre"
  //if so, returns an array of arr[0] that matches
  
  let stArr = [];
  for (let i = 0; i <= stations.length; i++) {
    if (stations[i][1] >= 20) {
      if (stations[i][2] === "school" || stations[i][2] === "community centre") {
        stArr.push(stations[i][0])
      }
    }
  }
  return stArr
  
}
*/


function chooseStations (stations) {
  let stArr = [];

  for (const station of stations) {
    const capacity = station[1]
    if (capacity >= 20) {
      const type = station[2] 
      if (type === "school" || type === 'community centre') {
        stArr.push(station[0])
      }

    }
  }
  return stArr
}
console.log(chooseStations(stations));

