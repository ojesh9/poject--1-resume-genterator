// Function to add new Work Experience field
function addNewWEField() {
    let weContainer = document.getElementById('we');
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter Here");
    weContainer.insertBefore(newNode, weContainer.lastElementChild.previousElementSibling);
}

// Function to add new Academic Qualification field
function addNewQField() {
    let aqContainer = document.getElementById('aq');
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter Here");
    aqContainer.insertBefore(newNode, aqContainer.lastElementChild.previousElementSibling);
}

// Function to generate CV
function generateCV() {
    let name = document.getElementById('nameField').value;
    let contact = document.getElementById('contactField').value;
    let address = document.getElementById('addressField').value;
    let objectives = document.getElementById('objectivesField').value;
    let workExperience = document.querySelectorAll('.weField');
    let academicQualification = document.querySelectorAll('.eqField');
    
    let generatedCV = `Name: ${name}\nContact: ${contact}\nAddress: ${address}\nObjectives: ${objectives}\n\nWork Experience:\n`;
    workExperience.forEach((experience, index) => {
        generatedCV += `${index + 1}. ${experience.value}\n`;
    });
    generatedCV += `\nAcademic Qualification:\n`;
    academicQualification.forEach((qualification, index) => {
        generatedCV += `${index + 1}. ${qualification.value}\n`;
    });

    document.getElementById('cvContent').textContent = generatedCV;
}

// Event listener for adding Work Experience field
document.getElementById('weAddButton').addEventListener('click', addNewWEField);

// Event listener for adding Academic Qualification field
document.getElementById('aqAddButton').addEventListener('click', addNewQField);

// Event listener for generating CV
document.getElementById('generateCVButton').addEventListener('click', generateCV);
