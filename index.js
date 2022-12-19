// Declare the Element class. The values of elementId and elementName properties need to be passed into the constructor. The class has two methods of onSubmit and onToolbarClick, which are both bound to its constructor as event handlers by using the bind function.
class Element {
  constructor(id, name) {
    this.elementId = id;
    this.elementName = name;
    this.onSubmit = this.onSubmit.bind(this);
    this.onToolbarClick = this.onToolbarClick.bind(this);
  }

  onSubmit() {
    const formElement = document.getElementById(this.elementId);
    formElement.addEventListener("click", () => {
      alert(
        `The ${this.elementName} is submitted!\nThe value of the elementId property of the class passed into the constructor is "${this.elementId}".`
      );
    });
  }

  onToolbarClick() {
    const btnElement = document.getElementById(this.elementId);
    btnElement.addEventListener("click", () => {
      alert(
        `${this.elementName} is clicked!\nThe value of the elementId property of the class passed into the constructor is "${this.elementId}".`
      );
    });
  }
}

//The idsAndNames array includes all the id's and names of the HTML elements.
const idsAndNames = [
  ["form-submit-button", "Form"],
  ["btn1", "Button 1"],
  ["btn2", "Button 2"],
  ["btn3", "Button 3"],
  ["btn4", "Button 4"],
];

//Apply a map function to map over the idsAndNames array to create the objects with the defined Element class.
const objectsArray = idsAndNames.map((items) => {
  return new Element(items[0], items[1]);
});

//Create the alerts array to include all the event handler functions.
const alerts = objectsArray.map((objects, index) => {
  if (index === 0) {
    return objects.onSubmit;
  } else {
    return objects.onToolbarClick;
  }
});

// Call all the event handler functions that are saved in the alerts array.
for (let i = 0; i < alerts.length; i++) {
  alerts[i]();
}
