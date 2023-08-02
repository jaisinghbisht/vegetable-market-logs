let names = [
    "Apple",
    "Apricot",
    "Banana",
    "Bitter Gourd",
    "Brinjal",
    "Lady Finger",
    "Orange",
    "Pear",
    "Strawberry",
    "Watermelon",
    "Carrot",
    "Broccoli",
    "Tomato",
    "Lettuce",
    "Spinach",
    "Potato",
    "Cucumber",
    "Zucchini",
    "Pumpkin",
    "Grapes",
    "Blueberry",
    "Mango",
    "Pineapple",
    "Avocado",
    "Kiwi",
    "Cherry",
    "Raspberry",
    "Pomegranate",
    "Grapefruit",
    "Cantaloupe",
    "Eggplant",
    "Cabbage",
    "Onion",
    "Radish",
    "Bell Pepper",
    "Cauliflower",
    "Garlic",
    "Peas",
    "Green Beans",
    "Corn",
    "Asparagus",
    "Watercress",
    "Artichoke",
    "Beets",
    "Sweet Potato",
    "Mushroom",
    "Celery",
    "Cranberry",
    "Guava",
    "Papaya",
    "Lime",
    "Plum",
    "Tangerine",
    "Turnip",
    "Fig",
    "Rhubarb",
    "Blackberry",
    "Kale",
    "Coconut",
    "Dragonfruit",
    "Jicama",
    "Jackfruit",
    "Kiwifruit",
    "Nectarine",
    "Passionfruit",
    "Quince",
    "Rutabaga",
    "Ugli Fruit",
    "Yam",
    "Zucchini"
];
//Sort names in ascending order
let sortedNames = names.sort();

//reference
let input = document.getElementById("input");

//Execute function on keyup
input.addEventListener("keyup", (e) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    for (let i of sortedNames) {
        //convert input to lowercase and compare with each string

        if (
            i.toLowerCase().startsWith(input.value.toLowerCase()) &&
            input.value != ""
        ) {
            //create li element
            let listItem = document.createElement("li");
            //One common class name
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");
            //Display matched part in bold
            let word = "<b>" + i.substr(0, input.value.length) + "</b>";
            word += i.substr(input.value.length);
            //display the value in array
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});

function displayNames(value) {
    input.value = value;
    removeElements();
}

function removeElements() {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
}
function filterItems() {
    const searchTerm = input.value.toLowerCase();
    const items = document.querySelectorAll(".item");

    items.forEach((item) => {
      const itemName = item.querySelector("h3").innerText.toLowerCase();
      const displayStyle = itemName.includes(searchTerm) ? "block" : "none";
      item.style.display = displayStyle;
    });
  }

  input.addEventListener("keyup", filterItems);