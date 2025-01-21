// madlibs.js

// Lenape examples data structure
const lenapeExamples = {
    greetings: `Greetings in Lenape:
    He! (hay) = Hello!
    Kulamalsi hech? (kule-ah-mahl-see huch) = How are you?
    Nulamalsi (nule-ah-mahl-see) = I am well.`,
    
    numbers: `Numbers in Lenape:
    kweti (kwuh-tee) = one
    nisha = two
    naxa = three
    newa = four
    palenaxk = five
    kwetash = six
    nishash = seven
    xash = eight
    peshkunk = nine
    telen = ten
    nishinxke = twenty
    xinxke = thirty
    neinxke = forty
    
    Making larger numbers:
    telen ok kweti = 11 (ten and one)
    nishinxke ok nisha = 22 (twenty and two)`,
    
    // Add other categories as needed
};

// Setup functions
document.addEventListener('DOMContentLoaded', function() {
    setupExamples();
    setupMadlib1();
    setupMadlib2();
    setupEventListeners();
});

function setupExamples() {
    const exampleSection = document.getElementById('example-section');
    
    for (const [category, text] of Object.entries(lenapeExamples)) {
        // Create button
        const button = document.createElement('button');
        button.textContent = category.replace('_', ' ').charAt(0).toUpperCase() + 
                           category.slice(1) + ' Examples';
        button.className = 'example-button';
        button.onclick = () => toggleExample(category);
        
        // Create content div
        const exampleDiv = document.createElement('div');
        exampleDiv.id = `example-${category}`;
        exampleDiv.style.display = 'none';
        exampleDiv.innerHTML = text.replace(/\n/g, '<br>');
        exampleDiv.style.padding = '10px';
        exampleDiv.style.marginBottom = '10px';
        exampleDiv.style.backgroundColor = '#fff';
        exampleDiv.style.borderRadius = '4px';
        
        exampleSection.appendChild(button);
        exampleSection.appendChild(exampleDiv);
    }
}

function createInputField(container, labelText, inputId) {
    const div = document.createElement('div');
    div.className = 'input-group';
    
    const label = document.createElement('label');
    label.textContent = labelText;
    
    const input = document.createElement('input');
    input.id = inputId;
    
    div.appendChild(label);
    div.appendChild(input);
    container.appendChild(div);
}

function setupMadlib1() {
    const container = document.getElementById('madlib1-inputs');
    const fields = [
        ['Enter a body part:', 'input1-bodypart'],
        ['Enter another body part:', 'input1-bodypart2'],
        ['Enter a number:', 'input1-number'],
        ['Enter a color:', 'input1-color'],
        ['Enter an emotion:', 'input1-emotion'],
        ['Enter a different number:', 'input1-number2'],
        ['Enter an activity:', 'input1-activity']
    ];
    
    fields.forEach(([label, inputId]) => {
        createInputField(container, label, inputId);
    });
}

function setupMadlib2() {
    const container = document.getElementById('madlib2-inputs');
    const fields = [
        ['Enter a number:', 'input2-number'],
        ['Enter a friend\'s name:', 'input2-friend'],
        ['Enter a body part:', 'input2-bodypart'],
        ['Enter another body part:', 'input2-bodypart2'],
        ['Enter a color:', 'input2-color'],
        ['Enter a fruit:', 'input2-fruit'],
        ['Enter a plural body part:', 'input2-bodyparts']
    ];
    
    fields.forEach(([label, inputId]) => {
        createInputField(container, label, inputId);
    });
}

function setupEventListeners() {
    document.getElementById('generate1').addEventListener('click', generateStory1);
    document.getElementById('generate2').addEventListener('click', generateStory2);
}

// Toggle example visibility
function toggleExample(category) {
    const exampleDiv = document.getElementById(`example-${category}`);
    exampleDiv.style.display = exampleDiv.style.display === 'none' ? 'block' : 'none';
}

// Story generation functions
function generateStory1() {
    const inputs = {
        bodypart: document.getElementById('input1-bodypart').value,
        bodypart2: document.getElementById('input1-bodypart2').value,
        number: document.getElementById('input1-number').value,
        color: document.getElementById('input1-color').value,
        emotion: document.getElementById('input1-emotion').value,
        number2: document.getElementById('input1-number2').value,
        activity: document.getElementById('input1-activity').value
    };
    
    const story = `I was riding my bike, but I crashed! I scraped my ${inputs.bodypart} 
                   and broke my ${inputs.bodypart2}. I had to wear a cast for ${inputs.number} weeks. 
                   The weirdest part was that my ${inputs.bodypart} turned ${inputs.color}. 
                   I wasn't expecting that! It made me feel ${inputs.emotion}. 
                   I probably won't be able to ride my bike again for ${inputs.number2} days. 
                   Next time, I'll try something safer, like ${inputs.activity}!`;
    
    document.getElementById('story1-output').innerHTML = story;
}

function generateStory2() {
    const inputs = {
        number: document.getElementById('input2-number').value,
        friend: document.getElementById('input2-friend').value,
        bodypart: document.getElementById('input2-bodypart').value,
        bodypart2: document.getElementById('input2-bodypart2').value,
        color: document.getElementById('input2-color').value,
        fruit: document.getElementById('input2-fruit').value,
        bodyparts: document.getElementById('input2-bodyparts').value
    };
    
    const story = `${inputs.number} weeks ago, I was dancing with my friend ${inputs.friend}. 
                   They stepped on my ${inputs.bodypart} and hurt my ${inputs.bodypart2}. 
                   My ${inputs.bodypart} turned ${inputs.color}, 
                   and my ${inputs.bodypart2} looked more like a ${inputs.fruit}. 
                   I guess you can say ${inputs.friend} has two left ${inputs.bodyparts}!`;
    
    document.getElementById('story2-output').innerHTML = story;
}