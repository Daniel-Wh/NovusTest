const responseObjArr = [
  { name: "Adam", age: 20, salary: 30_100 },
  { name: "Bob", age: 60, salary: 102_000 },
  { name: "Carla", age: 31, salary: 57_000 },
  { name: "Dave", age: 42, salary: 22_000 },
  { name: "Ethel", age: 80, salary: 91_000 },
  { name: "Frank", age: 28, salary: 73_000 },
  { name: "Gina", age: 21, salary: 16_000 },
];

const initializePage = () => {
  const initialOrder = responseObjArr.sort((a, b) => b.age - a.age);
  // insert dom elements for names and for results
  // set boundary values for above graph
  const max = initialOrder[0].age;
  const baseline = initialOrder[initialOrder.length-1].age
  initialOrder.map((person, index) => {
    // names first
    const htmlName = `<p>${person.name}</p>`;
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("graph-names");
    outerDiv.innerHTML = htmlName;
    document.getElementById("graph-name-container").appendChild(outerDiv);
    const htlmBar = document.createElement("div")
    htlmBar.classList.add("graph-result")
    const pixelWidth = (person.age / max) * 100
    console.log(pixelWidth);
    htlmBar.style.width = `${pixelWidth}%`
    document.getElementById("graph-bar-container").appendChild(htlmBar)
  });
};

initializePage();
