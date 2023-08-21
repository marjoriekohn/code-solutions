import {copyFunctionCode} from './copyFunctionCode.js';
import {getFirstValue, getFirstValueMetadata} from "./myFunctions/getFirstValue.js";
import {convertMinutes, convertMinutesMetadata} from "./myFunctions/convertMinutes.js";
import {lessThan100, lessThan100Metadata} from "./myFunctions/lessThan100.js";
import {validateAndIdentifyCard, validateAndIdentifyCardMetadata} from "./myFunctions/validateAndIdentifyCard.js";
import {generateRandomDNA, generateRandomDNAMetadata} from "./myFunctions/generateRandomDNA.js";
import {randomNumber, randomNumberMetadata} from "./myFunctions/randomNumber.js";

export function generateFunctionSections() {
    generateUISection(getFirstValue, getFirstValueMetadata);
    generateUISection(convertMinutes, convertMinutesMetadata);
    generateUISection(lessThan100, lessThan100Metadata);
    generateUISection(validateAndIdentifyCard, validateAndIdentifyCardMetadata);
    generateUISection(generateRandomDNA, generateRandomDNAMetadata);
    generateUISection(randomNumber, randomNumberMetadata);
}

function generateUISection(functionToExecute, metadata) {
    const container = document.getElementById('container');
    const section = document.createElement('section');

    // Article 1 - Title and Description
    const article1 = document.createElement('article');
    const p = document.createElement('p');
    p.textContent = metadata.title;
    article1.appendChild(p);
    section.appendChild(article1);

    // Input
    const inputDiv = document.createElement('div');
    const input = document.createElement('input');
    input.placeholder = metadata.inputPlaceholder;
    input.id = metadata.inputId;
    input.type = metadata.inputType;
    inputDiv.appendChild(input);
    section.appendChild(inputDiv);
    
    // Second Input (if applicable)
    if (metadata.inputPlaceholder2) {
        const inputDiv2 = document.createElement('div');
        const input2 = document.createElement('input');
        input2.placeholder = metadata.inputPlaceholder2;
        input2.type = metadata.inputType2;
        input2.id = metadata.inputId2;
        inputDiv2.appendChild(input2);
        section.appendChild(inputDiv2);
    }

    // Buttons
    const buttonDiv = document.createElement('div');
    const executeButton = document.createElement('button');
    executeButton.textContent = metadata.buttonText;
    const copyButton = document.createElement('button');
    copyButton.textContent = "Copy Code";
    copyButton.id = 'copyCode';
    buttonDiv.appendChild(executeButton);
    buttonDiv.appendChild(copyButton);
    section.appendChild(buttonDiv);

    // Article 2 - Output
    const article2 = document.createElement('article');
    const output = document.createElement('p');
    output.id = metadata.outputId;
    article2.appendChild(output);
    section.appendChild(article2);

    container.appendChild(section);

    buttonDiv.addEventListener('click', (event) => {
        if (event.target.id === 'copyCode') {
            copyFunctionCode(functionToExecute);
        } else {
            const rawInputs = [
                document.getElementById(metadata.inputId1).value,
                metadata.inputId2 ? document.getElementById(metadata.inputId2).value : null
            ].filter(val => val !== null); // removes null values from the array (for functions with only 1 input)
            const processedInputs = metadata.processInput ? metadata.processInput(...rawInputs) : rawInputs;
            const result = functionToExecute(...processedInputs);
            document.getElementById(metadata.outputId).innerHTML = metadata.generateOutputText(result);
        }
    });
}

