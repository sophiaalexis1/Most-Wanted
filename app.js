
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
    const traitsToSearchFor = validatedPrompt(
        'Please enter the the trait you are searching for.', 
        ['gender', 'dob', 'height', 'weight', 'eyeColor', 'occupation', 'parents', 'currentSpouse']
        );
    let traitsResults = [];
    switch (traitsToSearchFor) {
        case 'gender':
            traitsResults = [SearchByGender(people)];
            console.log(traitsResults);
            break;
        case 'dob':
            traitsResults = [searchByDOB(people)];
            console.log(traitsResults);
            break;    
        case 'height':
            null;
            break;    
        case 'weight':
            traitsResults = [SearchByWeight(people)];
            console.log(traitsResults);
            break;    
        case 'eyeColor':
            traitsResults = [SearchByEyeColor(people)];
            console.log(traitsResults);
            break;    
        case 'occupation':
            traitsResults = [SearchByOccupation(people)];
            console.log(traitsResults);
            break;      
        default:
            alert("Invalid input!");
            return searchByTraits(people);  
    }
    return traitsResults;
}

function SearchByGender(people) {
    let genderToSearch = validatedPrompt(
        'Please choose an option to filter by gender trait.',
        ['male', 'female']
        );
    let results = [];    
    if (genderToSearch === 'male') {
        const genderToSearchFor = "male";
        results = people.filter(person => person.gender === genderToSearchFor)
        }
    else if (genderToSearch === 'female') {
        const genderToSearchFor = "female";
        results = people.filter(person => person.gender === genderToSearchFor)
        }
        else {
            alert('Invalid input. Please try agin.');
            SearchByGender(people);
        }
    return results
}
function searchByDOB(people) {
    let dobToSearchString = validatedPrompt(
        'Please choose an option to filter by date of birth', 
        ['month', 'year']
        );
    let results = [];
    if (dobToSearchString = "month") {
        const monthToSearchFor = validatedPrompt(
            'Please choose an option to filter by month',
            ['january', 'february', 'march', 'april', 'may', 'july', 'august','september', 'october', 'november', 'december',]
        );
        switch(monthToSearchFor) {
            case 'january':
                results =
                people.filter(person => person.dob === '1/18/1949');
                break;
            case 'february':
                results = people.filter(person => (
                person.dob === '2/8/1972' ||
                person.dob === '2/19/1966' ||
                person.dob === '2/19/1970' ||
                person.dob === '2/02/1987'
                ));
                break;
            case 'march':
                results = people.filter(person => (
                person.dob === '3/16/1938' ||
                person.dob === '3/13/1963'
                ));
                break;
            case 'april':
                results = people.filter(person => (
                person.dob === '4/1/1947' ||
                person.dob === '4/10/1940' ||
                person.dob === '4/20/1939'
                ));
                break;
            case 'may':
                results = people.filter(person => (
                person.dob === '5/9/1951' ||
                person.dob === '5/6/1937'
                ));
                break;
            case 'june':
                results = "No results found"
                break;
            case 'july':
                results = people.filter(person => person.dob === '7/26/1959');
                break;
            case 'august':
                results = people.filter(person => person.dob === '8/5/1967');
                break;
            case 'september':
                results = people.filter(person => person.dob === '9/6/1945');
                break;
            case 'october':
                results =
                people.filter(person => (
                person.dob === '10/28/1948' ||
                person.dob === '10/7/1953'
                ));
                break;
            case 'november':
                results = people.filter(person => person.dob === '11/4/1970');
                break;
            case 'december':
                results = people.filter(person => (
                person.dob === '12/18/1952' ||
                person.dob === '12/23/1969' ||
                person.dob === '12/18/1969' ||
                person.dob === '12/11/1961'
                ));
                break;
            default:
                alert('Invalid input!')
                return searchByDOB(people);
        }
    } else if (dobToSearchString === 'year') {
        const yearToSearchFor = validatedPrompt(
            'Please choose an option to filter by year',
            ['1937', '1938', '1939', '1940', '1945', '1947', '1948','1951', '1952', '1953', '1959', '1961', '1963', '1966', '1967', '1969', '1970', '1972', '1987']
        );
        switch(yearToSearchFor) {
            case '1937':
                results =
                people.filter(person => person.dob === '5/6/1937');
                break;
            case '1938':
                results = 
                people.filter(person => person.dob === '3/16/1938');
                break;
            case '1939':
                results = 
                people.filter(person => person.dob === '4/20/1939');
                break;
            case '1940':
                results = 
                people.filter(person => person.dob === '4/10/1940');
                break;
            case '1945':
                results = 
                people.filter(person => person.dob === '9/6/1945');
                break;
            case '1947':
                results = 
                people.filter(person => person.dob === '4/1/1947');
                break;
            case '1948':
                results = 
                people.filter(person => person.dob === '10/28/1948');
                break;
            case '1949':
                results = 
                people.filter(person => person.dob === '1/18/1949');
                break;
            case '1951':
                results = 
                people.filter(person => person.dob === '5/9/1951');
                break;
            case '1952':
                results = 
                people.filter(person => person.dob === '12/18/1952');
                break;
            case '1953':
                results = 
                people.filter(person => person.dob === '10/7/1953');
                break;
            case '1959':
                results = 
                people.filter(person => person.dob === '7/26/1959');
                break;
            case '1961':
                results =
                people.filter(person => person.dob === '12/11/1961');
                break;
            case '1963':
                results =
                people.filter(person => person.dob === '3/13/1963');
                break;
            case '1966':
                results =
                people.filter(person => person.dob === '2/19/1966');
                break;
            case '1967':
                results =
                people.filter(person => person.dob === '8/5/1967');
                break;
            case '1969':
                results =
                people.filter(person => (
                    person.dob === '12/23/1969' ||
                    person.dob === '12/18/1969'
                ));
                break;
            case '1970':
                results =
                people.filter(person => (
                    person.dob === '11/4/1970' ||
                    person.dob === '2/19/1970'
                ));
                break;
            case '1972':
                results =
                people.filter(person => person.dob === '2/8/1972');
                break;
            case '1987':
                results =
                people.filter(person => person.dob === '2/02/1987');
                break;
            default:
                alert('Invalid input!')
                return searchByDOB(people);

    } 
    } else {
        alert('Invalid input!');
        return searchByDOB(people);
    }

    if (results.length > 0) {
        alert('Filtered Results:\n' + JSON.stringify(results, null, 2));
    } else {
        alert('No results found for the selected criteria.');
    }
    
    return results;
}
function SearchByEyeColor(people) {
    let eyeColorToSearch = validatedPrompt(
        'Please choose an option to filter by for eyeColor trait.',
        ['brown', 'black', 'hazel', 'blue', 'green',]
        );
    let results = [];    
    if (eyeColorToSearch === 'brown') {
        const eyeColorToSearchFor = "brown";
        results = people.filter(person => person.eyeColor === eyeColorToSearchFor)
        }
    else if (eyeColorToSearch === 'black') {
        const eyeColorToSearchFor = "black";
        results = people.filter(person => person.eyeColor === eyeColorToSearchFor)
        }
    else if (eyeColorToSearch === 'hazel') {
        const eyeColorToSearchFor = "hazel";
        results = people.filter(person => person.eyeColor === eyeColorToSearchFor)
        }
    else if (eyeColorToSearch === 'blue') {
        const eyeColorToSearchFor = "blue";
        results = people.filter(person => person.eyeColor === eyeColorToSearchFor)
        }
    else if (eyeColorToSearch === 'green') {
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
    let occupationToSearch = validatedPrompt(
        'Please choose an option to filter by occupation.', 
        ['programmer', 'assistant', 'landscaper', 'nurse', 'student', 'architect', 'doctor', 'politician',]
        );
    let results = [];    
    if (occupationToSearch === 'programmer') {
        const occupationToSearchFor = "programmer";
        results = people.filter(person => person.occupation === occupationToSearchFor)
        }
    else if (occupationToSearch === 'assistant') {
        const occupationToSearchFor = "assistant";
        results = people.filter(person => person.occupation === occupationToSearchFor)
        }
    else if (occupationToSearch === 'landscaper') {
        const occupationToSearchFor = "landscaper";
        results = people.filter(person => person.occupation === occupationToSearchFor)
        }
    else if (occupationToSearch === 'nurse') {
        const occupationToSearchFor = "nurse";
        results = people.filter(person => person.occupation === occupationToSearchFor)
        }
    else if (occupationToSearch === 'student') {
        const occupationToSearchFor = "student";
        results = people.filter(person => person.occupation === occupationToSearchFor)
        }
    else if (occupationToSearch === 'architect') {
        const occupationToSearchFor = "architect";
        results = people.filter(person => person.occupation === occupationToSearchFor)
        }
    else if (occupationToSearch === 'doctor') {
        const occupationToSearchFor = "doctor";
        results = people.filter(person => person.occupation === occupationToSearchFor)
        }
    else if (occupationToSearch === 'politician') {
        const occupationToSearchFor = "politician";
        results = people.filter(person => person.occupation === occupationToSearchFor)
        }
    else {
            alert('Invalid input. Please try agin.');
            SearchByOccupation(people);
        }
    return results
}
function SearchByWeight(people) {
    let weightToSearch = validatedPrompt(
        'Please choose an option to filter by weight.', 
        ['100', '110', '112', '115', '118', '137', '156', '162', '170', '175', '179', '184', '187', '179', '184', '187', '199', '205', '207', '235', '241', '249', '250', '256',]
        );
    let results = [];    
    if (weightToSearch === '100') {
        const weightToSearchFor = parseInt(100);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '110') {
        const weightToSearchFor = parseInt(110);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '112') {
        const weightToSearchFor = parseInt(112);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '115') {
        const weightToSearchFor = parseInt(115);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '118') {
        const weightToSearchFor = parseInt(118);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '137') {
        const weightToSearchFor = parseInt(137);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '156') {
        const weightToSearchFor = parseInt(156);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '162') {
        const weightToSearchFor = parseInt(162);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '170') {
        const weightToSearchFor = parseInt(170);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '175') {
        const weightToSearchFor = parseInt(170);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '179') {
        const weightToSearchFor = parseInt(170);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '184') {
        const weightToSearchFor = parseInt(170);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '187') {
        const weightToSearchFor = parseInt(187);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '199') {
        const weightToSearchFor = parseInt(199);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '205') {
        const weightToSearchFor = parseInt(205);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '207') {
        const weightToSearchFor = parseInt(207);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '235') {
        const weightToSearchFor = parseInt(235);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '241') {
        const weightToSearchFor = parseInt(241);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '249') {
        const weightToSearchFor = parseInt(249);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '250') {
        const weightToSearchFor = parseInt(250);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else if (weightToSearch === '256') {
        const weightToSearchFor = parseInt(256);
        results = people.filter(person => person.weight === weightToSearchFor)
        }
    else {
            alert('Invalid input. Please try agin.');
            SearchByWeight(people);
        }
    
if (results.length > 0) {
    alert('Filtered Results:\n' + JSON.stringify(results, null, 2));
} 
else {
    alert('No results found for the selected criteria.');
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