import {createTitleContainer} from "./UI/createTitleContainer.js";
import {createInformationIcon} from "./UI/createInformationIcon.js";
import {createTextInput} from "./UI/createTextInput.js";
import {createDropdownMenu} from "./UI/createDropdownMenu.js";
import {createRadioButtons} from "./UI/createRadioButtons.js";
import {createOutputContainer} from "./UI/createOutputContainer.js";
import {createCopyButton} from "./UI/createCopyButton.js";
import {createResetButton} from "./UI/createResetButton.js";
import {createSubmitButton} from "./UI/createSubmitButton.js";

export function generateUI(functionToExecute, metadata) {
    
    console.log(`Generating UI section for ${metadata.title}`);
    const mainContainer = document.getElementById('container');
    const section = document.createElement('section');
    
    section.appendChild(createInformationIcon(metadata));
    section.appendChild(createTitleContainer(metadata));
    
    const inputDiv = document.createElement('div');
    inputDiv.className = 'input-container';
    if (metadata.inputId) {
        inputDiv.appendChild(createTextInput(metadata));
    }
    if (metadata.dropdownMenuId) {
        inputDiv.appendChild(createDropdownMenu(metadata));
    }
    if (metadata.type) {
        inputDiv.appendChild(createRadioButtons(metadata));
    }
    section.appendChild(inputDiv)

    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'button-container';
        buttonDiv.appendChild(createSubmitButton(metadata, functionToExecute));
        buttonDiv.appendChild(createResetButton(metadata, functionToExecute));
        buttonDiv.appendChild(createCopyButton(metadata, functionToExecute));
    section.appendChild(buttonDiv);
    section.appendChild(createOutputContainer(metadata));
    mainContainer.appendChild(section);
}