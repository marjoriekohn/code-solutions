import {copyFunctionCode} from './copyFunctionCode.js';

export function generateUI(functionToExecute, metadata) {
    
    console.log(`Generating UI section for ${metadata.title}`);
    const mainContainer = document.getElementById('container');
    const section = document.createElement('section');
    const functionInformationIcon = document.createElement('i');
    functionInformationIcon.className = 'fa-solid fa-circle-info';
    functionInformationIcon.addEventListener('click', () => {
        alert(metadata.description);
    });
    section.appendChild(functionInformationIcon);

    // Title and Description
    const titleContainer = document.createElement('article');
    const functionTitle = document.createElement('p');
    functionTitle.textContent = metadata.title;
    titleContainer.appendChild(functionTitle);
    section.appendChild(titleContainer);

    // Input
    const inputDiv = document.createElement('div');
    inputDiv.className = 'input-container';
    const input = document.createElement('input');
    input.placeholder = metadata.inputPlaceholder;
    input.id = metadata.inputId;
    input.type = metadata.inputType;
    inputDiv.appendChild(input);
    section.appendChild(inputDiv);
    
    // Second Input (if applicable)
    if (metadata.inputId2) {
        const input2 = document.createElement('input');
        input.className = 'side-by-side';
        input2.className = 'side-by-side';
        input2.placeholder = metadata.inputPlaceholder2;
        input2.type = metadata.inputType2;
        input2.id = metadata.inputId2;
        inputDiv.appendChild(input2);
        section.appendChild(inputDiv);
    }
    
    // Third Input (if applicable)
    if (metadata.dropdownMenuId) {
        const dropdownMenu = document.createElement('select');
        dropdownMenu.id = metadata.dropdownMenuId;

        const option1 = document.createElement('option');
        option1.value = metadata.option1;
        option1.text = metadata.option1;
        dropdownMenu.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = metadata.option2;
        option2.text = metadata.option2;
        dropdownMenu.appendChild(option2);

        const option3 = document.createElement('option');
        option3.value = metadata.option3;
        option3.text = metadata.option3;
        dropdownMenu.appendChild(option3);
        inputDiv.appendChild(dropdownMenu);
        section.appendChild(inputDiv);
    }

    // Buttons
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'button-container';
    const executeButton = document.createElement('button');
    executeButton.className = 'side-by-side';
    executeButton.textContent = metadata.buttonText;
    const copyButton = document.createElement('button');
    copyButton.className = 'copy side-by-side';
    const copyIcon = document.createElement('i');
    copyIcon.className = 'fa-solid fa-clipboard';
    copyButton.appendChild(copyIcon);
    buttonDiv.appendChild(executeButton);
    buttonDiv.appendChild(copyButton);
    section.appendChild(buttonDiv);

    // Article 2 - Output
    const article2 = document.createElement('article');
    const output = document.createElement('p');
    output.id = metadata.outputId;
    article2.appendChild(output);
    section.appendChild(article2);

    buttonDiv.addEventListener('click', (event) => {
        console.log(`${metadata.buttonText} button clicked`);
        if (event.target.className.includes('copy')) {
            copyFunctionCode(metadata.functionName, event.target.parentNode);
        } else {
            const rawInputs = [
                document.getElementById(metadata.inputId).value, 
                metadata.inputId2 ? document.getElementById(metadata.inputId2).value : null,
                metadata.dropdownMenuId ? document.getElementById(metadata.dropdownMenuId).value : null
            ]
            .filter(val => val !== null); // removes null values from the array (for functions with only 1 input)
            
            const processedInputs = metadata.processInput ? metadata.processInput(...rawInputs) : rawInputs;
            
            let result;
            try {
                if (metadata.expectsArray) {
                    result = functionToExecute(processedInputs); // If the function expects a single array as its argument
                } else {
                    result = functionToExecute(...processedInputs); // If the function expects multiple arguments
                }
            } catch (error) {
                console.error("Error occurred during processing input or executing function:", error.message);
            }
            document.getElementById(metadata.outputId).innerHTML = metadata.generateOutputText(result);
            console.log("Result:", result);
        }
    });
    mainContainer.appendChild(section);
}