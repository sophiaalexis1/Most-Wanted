
function app(people) {
    displayWelcome();
    runSearchAndMenu(people);
    return exitOrRestart(people);
}

function displayWelcome() {
    alert('Hello and welcome to the Most Wanted search application!');
}

function runSearchAndMenu(people) {
    const searchResults = searchPeopleDataSet(people);

    if (searchResults.length > 1) {
        displayPeople('Search Results', searchResults);
    }
    else if (searchResults.length === 1) {
        const person = searchResults[0];
        mainMenu(person, people);
    }
    else {
        alert('No one was found in the search.');
    }
}

function searchPeopleDataSet(people) {

    const searchTypeChoice = validatedPrompt(
        'Please enter in what type of search you would like to perform.',
        ['id', 'name', 'traits']
    );

    let results = [];
    switch (searchTypeChoice) {
        case 'id':
            results = searchById(people);
            break;
        case 'name':
            results = searchByName(people);
            break;
        case 'traits':
            results = searchByTraits(people);
            break;
        default:
            return searchPeopleDataSet(people);
    }

    return results;
}

function searchById(people) {
    const idToSearchForString = prompt('Please enter the id of the person you are searching for.');
    const idToSearchForInt = parseInt(idToSearchForString);
    const idFilterResults = people.filter(person => person.id === idToSearchForInt);
    return idFilterResults;
}

function searchByName(people) {
    const firstNameToSearchFor = prompt('Please enter the the first name of the person you are searching for.');
    const lastNameToSearchFor = prompt('Please enter the the last name of the person you are searching for.');
    const fullNameSearchResults = people.filter(person => (person.firstName.toLowerCase() === firstNameToSearchFor.toLowerCase() && person.lastName.toLowerCase() === lastNameToSearchFor.toLowerCase()));
    return fullNameSearchResults;
}

function searchByTraits(people) {
    const traitsToSearchFor = validatedPrompt('Please enter the the trait you are searching for.' ['gender', 'dob', 'height', 'weight', 'eyeColor', 'occupation', 'parents', 'currentSpouse']);
    let traitsResults = [];
    switch (traitsToSearchFor) {
        case 'gender':
            traitsResults = [SearchByGender(people)];
            console.log(traitsResults);
            break;
        case 'dob':
            null;
            break;    
        case 'height':
            null;
            break;    
        case 'weight':
            null;
            break;    
        case 'eyeColor':
            traitsResults = [SearchByEyeColor(people)];
            console.log(traitsResults);
            break;    
        case 'occupation':
            traitsResults = [SearchByOccupation];
            console.log(traitsResults);
            break;    
        case 'parents':
            null;
            break;    
        case 'currentSpouse':
            null;
            break;    
        default:
            alert("Invalid input!");
            return searchByTraits(people);  
    }
    return traitsResults;
}

function SearchByGender(people) {
    let genderToSearch = prompt('Press 1 to search for Males. Press 2 to search for Females.');
    let results = [];    
    if (genderToSearch === '1') {
        const genderToSearchFor = "male";
        results = people.filter(person => person.gender === genderToSearchFor)
        }
    else if (genderToSearch === '2') {
        const genderToSearchFor = "female";
        results = people.filter(person => person.gender === genderToSearchFor)
        }
        else {
            alert('Invalid input. Please try agin.');
            SearchByGender(people);
        }
    return results
}

function SearchByEyeColor(people) {
    let eyeColorToSearch = prompt('Press 1 for Brown. Press 2 for Black. Press 3 for Hazel. Press 4 for Blue. Press 5 for Green.');
    let results = [];    
    if (eyeColorToSearch === '1') {
        const eyeColorToSearchFor = "brown";
        results = people.filter(person => person.eyeColor === eyeColorToSearchFor)
        }
    else if (eyeColorToSearch === '2') {
        const eyeColorToSearchFor = "black";
        results = people.filter(person => person.eyeColor === eyeColorToSearchFor)
        }
    else if (eyeColorToSearch === '3') {
        const eyeColorToSearchFor = "hazel";
        results = people.filter(person => person.eyeColor === eyeColorToSearchFor)
        }
    else if (eyeColorToSearch === '4') {
        const eyeColorToSearchFor = "blue";
        results = people.filter(person => person.eyeColor === eyeColorToSearchFor)
        }
    else if (eyeColorToSearch === '5') {
        const eyeColorToSearchFor = "green";
        results = people.filter(person => person.eyeColor === eyeColorToSearchFor)
        }
    else {
            alert('Invalid input. Please try agin.');
            SearchByEyeColor(people);
        }
    return results
}
function SearchByOccupation(people) {
    let occupationToSearch = prompt('Press 1 for Brown. Press 2 for Black. Press 3 for Hazel. Press 4 for Blue. Press 5 for Green.');
    let results = [];    
    if (occupationToSearch === '1') {
        const occupationToSearchFor = "brown";
        results = people.filter(person => person.eyeColor === eyeColorToSearchFor)
        }
    else if (eyeColorToSearch === '2') {
        const eyeColorToSearchFor = "black";
        results = people.filter(person => person.eyeColor === eyeColorToSearchFor)
        }
    else if (eyeColorToSearch === '3') {
        const eyeColorToSearchFor = "hazel";
        results = people.filter(person => person.eyeColor === eyeColorToSearchFor)
        }
    else if (eyeColorToSearch === '4') {
        const eyeColorToSearchFor = "blue";
        results = people.filter(person => person.eyeColor === eyeColorToSearchFor)
        }
    else if (eyeColorToSearch === '5') {
        const eyeColorToSearchFor = "green";
        results = people.filter(person => person.eyeColor === eyeColorToSearchFor)
        }
    else {
            alert('Invalid input. Please try agin.');
            SearchByEyeColor(people);
        }
    return results
}

function searchByDOB(people) {
    let dobToSearchString = prompt('Please enter date of birth: m/dd/year');
    let dobToSearchInt = parseInt(dobToSearchString);
    let results = [];    
    if (genderToSearch === '1') {
        const genderToSearchFor = "male";
        results = people.filter(person => person.gender === genderToSearchFor)
        }
    else if (genderToSearch === '2') {
        const genderToSearchFor = "female";
        results = people.filter(person => person.gender === genderToSearchFor)
        }
        else {
            alert('Invalid input. Please try agin.');
            SearchByGender(people);
        }
    return results
}

function mainMenu(person, people) {

    const mainMenuUserActionChoice = validatedPrompt(
        `Person: ${person.firstName} ${person.lastName}\n\nDo you want to know their full information, family, or descendants?`,
        ['info', 'family', 'descendants', 'quit']
    );

    switch (mainMenuUserActionChoice) {
        case "info":
            //! TODO
            // displayPersonInfo(person);
            break;
        case "family":
            //! TODO
            // let personFamily = findPersonFamily(person, people);
            // displayPeople('Family', personFamily);
            break;
        case "descendants":
            //! TODO
            // let personDescendants = findPersonDescendants(person, people);
            // displayPeople('Descendants', personDescendants);
            break;
        case "quit":
            return;
        default:
            alert('Invalid input. Please try again.');
    }

    return mainMenu(person, people);
}

function displayPeople(displayTitle, peopleToDisplay) {
    const formatedPeopleDisplayText = peopleToDisplay.map(person => `${person.firstName} ${person.lastName}`).join('\n');
    alert(`${displayTitle}\n\n${formatedPeopleDisplayText}`);
}

function validatedPrompt(message, acceptableAnswers) {
    acceptableAnswers = acceptableAnswers.map(aa => aa.toLowerCase());

    const builtPromptWithAcceptableAnswers = `${message} \nAcceptable Answers: ${acceptableAnswers.map(aa => `\n-> ${aa}`).join('')}`;

    const userResponse = prompt(builtPromptWithAcceptableAnswers).toLowerCase();

    if (acceptableAnswers.includes(userResponse)) {
        return userResponse;
    }
    else {
        alert(`"${userResponse}" is not an acceptable response. The acceptable responses include:\n${acceptableAnswers.map(aa => `\n-> ${aa}`).join('')} \n\nPlease try again.`);
        return validatedPrompt(message, acceptableAnswers);
    }
}


function exitOrRestart(people) {
    const userExitOrRestartChoice = validatedPrompt(
        'Would you like to exit or restart?',
        ['exit', 'restart']
    );

    switch (userExitOrRestartChoice) {
        case 'exit':
            return;
        case 'restart':
            return app(people);
        default:
            alert('Invalid input. Please try again.');
            return exitOrRestart(people);
    }

}