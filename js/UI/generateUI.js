import {titleContainer} from "./titleContainer.js";
import {informationIcon} from "./informationIcon.js";
import {textInput} from "./textInput.js";
import {dropdownMenu} from "./dropdownMenu.js";
import {radioButtons} from "./radioButtons.js";
import {displayResult, outputContainer} from "./outputContainer.js";
import {copyButton} from "./copyButton.js";
import {resetButton} from "./resetButton.js";
import {submitButton} from "./submitButton.js";

export function generateUI(functionToExecute, metadata) {
    
    console.log(`Generating UI section for ${metadata.title}`);
    const mainContainer = document.getElementById('container');
    const section = document.createElement('section');
    
    section.appendChild(informationIcon(metadata));
    section.appendChild(titleContainer(metadata));
    
    if (metadata.inputId && metadata.dropdownMenuId) {
        const rowContainer = document.createElement('div');
        rowContainer.className = 'row-container';
        rowContainer.appendChild(textInput(metadata));
        rowContainer.appendChild(dropdownMenu(metadata));
        section.appendChild(rowContainer);
    } else if (metadata.inputId) {
        const rowContainer = document.createElement('div');
        rowContainer.className = 'row-container';
        rowContainer.appendChild(textInput(metadata));
        section.appendChild(rowContainer);
    } else if (metadata.dropdownMenuId) {
        const rowContainer = document.createElement('div');
        rowContainer.className = 'row-container';
        rowContainer.appendChild(dropdownMenu(metadata));
        section.appendChild(rowContainer);
    } else if (metadata.type) {
        section.appendChild(radioButtons(metadata));
    }

    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'button-container';
        buttonDiv.appendChild(submitButton(metadata, functionToExecute));
        buttonDiv.appendChild(resetButton(metadata, functionToExecute));
        buttonDiv.appendChild(copyButton(metadata, functionToExecute));
        
    section.appendChild(buttonDiv);
    section.appendChild(outputContainer(metadata));
    mainContainer.appendChild(section);

    if (metadata.autoExecute) {
        displayResult(metadata, functionToExecute());
    }
}