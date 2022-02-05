const responseObjArr = [
  { name: "Adam", age: 20, salary: 30_100 },
  { name: "Bob", age: 60, salary: 102_000 },
  { name: "Carla", age: 31, salary: 57_000 },
  { name: "Dave", age: 42, salary: 22_000 },
  { name: "Ethel", age: 80, salary: 91_000 },
  { name: "Frank", age: 28, salary: 73_000 },
  { name: "Gina", age: 21, salary: 16_000 },
];
let currentOrder = "age";

const initializePage = () => {
  orderArray(currentOrder);
  document.getElementById("graph-title").innerText = "Age";
  document.getElementById("select").addEventListener("change", () => {
    if (currentOrder === "age") {
      orderArray("salary");
      currentOrder = "salary";
    } else {
      orderArray("age");
      currentOrder = "age";
    }
  });
};

const orderArray = (value) => {
  if (value === "age") {
    clearParent();
    document.getElementById("graph-title").innerText = "Age";
    const initialOrder = responseObjArr.sort((a, b) => b.age - a.age);
    const max = initialOrder[0].age;
    initialOrder.map((person) => {
      const htmlValue = `<p>${person.name}</p><p>${person.age} y/o</p>`;
      const outerDiv = document.createElement("div");
      outerDiv.classList.add("graph-names");
      outerDiv.innerHTML = htmlValue;
      document.getElementById("graph-name-container").appendChild(outerDiv);
      const htlmBar = document.createElement("div");
      htlmBar.classList.add("graph-result");
      const pixelWidth = (person.age / max) * 100;
      htlmBar.style.width = `${pixelWidth}%`;
      document.getElementById("graph-bar-container").appendChild(htlmBar);
    });
  } else {
    clearParent();
    document.getElementById("graph-title").innerText = "Salary";
    const initialOrder = responseObjArr.sort((a, b) => b.salary - a.salary);
    const max = initialOrder[0].salary;
    initialOrder.map((person) => {
      const htmlName = `<p>${
        person.name
      }</p> <p>$${person.salary.toLocaleString("en-us")}/year</p>`;
      const outerDiv = document.createElement("div");
      outerDiv.classList.add("graph-names");
      outerDiv.innerHTML = htmlName;
      document.getElementById("graph-name-container").appendChild(outerDiv);
      const htlmBar = document.createElement("div");
      htlmBar.classList.add("graph-result");
      const pixelWidth = (person.salary / max) * 100;
      console.log(pixelWidth);
      htlmBar.style.width = `${pixelWidth}%`;
      document.getElementById("graph-bar-container").appendChild(htlmBar);
    });
  }
};

const clearParent = () => {
  document.getElementById("graph-bar-container").innerHTML = "";
  document.getElementById("graph-name-container").innerHTML = "";
};

initializePage();
