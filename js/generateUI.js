import {copyFunctionCode} from './copyFunctionCode.js';

export function generateUI(functionToExecute, metadata) {
    
    console.log(`Generating UI section for ${metadata.title}`);
    const mainContainer = document.getElementById('container');
    const section = document.createElement('section');

    // Article 1 - Title and Description
    const article1 = document.createElement('article');
    const p = document.createElement('p');
    p.textContent = metadata.title;
    article1.appendChild(p);
    section.appendChild(article1);

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
    if (metadata.inputPlaceholder2) {
        const input2 = document.createElement('input');
        input.className = 'side-by-side';
        input2.className = 'side-by-side';
        input2.placeholder = metadata.inputPlaceholder2;
        input2.type = metadata.inputType2;
        input2.id = metadata.inputId2;
        inputDiv.appendChild(input2);
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
        console.log("Button clicked");
        if (event.target.className === 'copy side-by-side') {
            copyFunctionCode(metadata.functionName, event.target.parentNode);
        } else {
            const rawInputs = [
              document.getElementById(metadata.inputId).value, metadata.inputId2 ? document.getElementById(metadata.inputId2).value : null
            ].filter(val => val !== null); // removes null values from the array (for functions with only 1 input)
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