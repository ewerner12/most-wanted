'using strict';

var dataArray = [

{	"id": "272822514",
	"firstName": "Billy",
	"lastName": "Bob",
	"gender": "male",
	"dob": "1/18/1949",
	"height": 71,
	"weight": 175,
	"eyeColor": "brown",
	"occupation": "programmer",
	"parents": [],
	"currentSpouse": 401222887
	},
{	"id": "401222887",
	"firstName": "Uma",
	"lastName": "Bob",
	"gender": "female",
	"dob": "4/1/1947",
	"height": 65,
	"weight": 162,
	"eyeColor": "brown",
	"occupation": "assistant",
	"parents": [],
	"currentSpouse": 272822514 
	},
{	"id": "409574486",
	"firstName": "Michael",
	"lastName": "Walkens",
	"gender": "male",
	"dob": "5/9/1951",
	"height": 76,
	"weight": 250,
	"eyeColor": "brown",
	"occupation": "landscaper",
	"parents": [],
	"currentSpouse": 260451248 
	},
{	"id": "260451248",
	"firstName": "Jon",
	"lastName": "Walkens",
	"gender": "male",
	"dob": "9/6/1945",
	"height": 62,
	"weight": 115,
	"eyeColor": "brown",
	"occupation": "assistant",
	"parents": [],
	"currentSpouse": 409574486 
	},
{	"id": "629807187",
	"firstName": "Jack",
	"lastName": "Pafoy",
	"gender": "male",
	"dob": "3/16/1938",
	"height": 70,
	"weight": 207,
	"eyeColor": "black",
	"occupation": "nurse",
	"parents": [],
	"currentSpouse": 464142841 
	},
{	"id": "464142841",
	"firstName": "Jen",
	"lastName": "Pafoy",
	"gender": "female",
	"dob": "4/10/1940",
	"height": 72,
	"weight": 256,
	"eyeColor": "black",
	"occupation": "student",
	"parents": [],
	"currentSpouse": 629807187 
	},
{	"id": "982411429",
	"firstName": "Mister",
	"lastName": "Potatoo",
	"gender": "male",
	"dob": "12/18/1952",
	"height": 66,
	"weight": 170,
	"eyeColor": "hazel",
	"occupation": "architect",
	"parents": [],
	"currentSpouse": 595767575 
	},
{	"id": "595767575",
	"firstName": "Missuz",
	"lastName": "Potatoo",
	"gender": "female",
	"dob": "10/28/1948",
	"height": 59,
	"weight": 137,
	"eyeColor": "blue",
	"occupation": "architect",
	"parents": [],
	"currentSpouse": 982411429 
	},
{	"id": "693243224",
	"firstName": "Joy",
	"lastName": "Madden",
	"gender": "female",
	"dob": "4/20/1939",
	"height": 69,
	"weight": 199,
	"eyeColor": "hazel",
	"occupation": "doctor",
	"parents": [],
	"currentSpouse": 693243224 
	},
{	"id": "888201200",
	"firstName": "Mader",
	"lastName": "Madden",
	"gender": "male",
	"dob": "5/6/1937",
	"height": 76,
	"weight": 205,
	"eyeColor": "black",
	"occupation": "landscaper",
	"parents": [],
	"currentSpouse": 888201200 
	},
{	"id": "878013758",
	"firstName": "Jill",
	"lastName": "Pafoy",
	"gender": "female",
	"dob": "2/8/1972",
	"height": 74,
	"weight": 118,
	"eyeColor": "brown",
	"occupation": "programmer",
	"parents": [401222887,272822514],
	"currentSpouse": 294874671 
	},
{	"id": "951747547",
	"firstName": "Ralph",
	"lastName": "Bob",
	"gender": "male",
	"dob": "12/23/1969",
	"height": 66,
	"weight": 179,
	"eyeColor": "blue",
	"occupation": "nurse",
	"parents": [401222887,272822514],
	"currentSpouse": 159819275 
	},
{	"id": "159819275",
	"firstName": "Jasmine",
	"lastName": "Bob",
	"gender": "female",
	"dob": "12/18/1969",
	"height": 58,
	"weight": 156,
	"eyeColor": "blue",
	"occupation": "assistant",
	"parents": [409574486,260451248],
	"currentSpouse": 951747547 
	},
{	"id": "348457184",
	"firstName": "Annie",
	"lastName": "Pafoy",
	"gender": "female",
	"dob": "11/4/1970",
	"height": 62,
	"weight": 235,
	"eyeColor": "hazel",
	"occupation": "landscaper",
	"parents": [629807187,464142841],
	"currentSpouse": null 
	},
{	"id": "294874671",
	"firstName": "Dave",
	"lastName": "Pafoy",
	"gender": "male",
	"dob": "8/5/1967",
	"height": 61,
	"weight": 112,
	"eyeColor": "green",
	"occupation": "doctor",
	"parents": [629807187,464142841],
	"currentSpouse": 878013758 
	},
{	"id": "931247228",
	"firstName": "Amii",
	"lastName": "Pafoy",
	"gender": "female",
	"dob": "3/13/1963",
	"height": 74,
	"weight": 184,
	"eyeColor": "brown",
	"occupation": "landscaper",
	"parents": [629807187,464142841],
	"currentSpouse": null 
	},
{	"id": "822843554",
	"firstName": "Regina",
	"lastName": "Madden",
	"gender": "female",
	"dob": "7/26/1959",
	"height": 71,
	"weight": 249,
	"eyeColor": "brown",
	"occupation": "nurse",
	"parents": [693243224, 888201200],
	"currentSpouse": null 
	},
{	"id": "819168108",
	"firstName": "Hana",
	"lastName": "Madden",
	"gender": "female",
	"dob": "10/7/1953",
	"height": 70,
	"weight": 187,
	"eyeColor": "brown",
	"occupation": "politician",
	"parents": [693243224, 888201200],
	"currentSpouse": null 
	},
{	"id": "969837479",
	"firstName": "Eloise",
	"lastName": "Madden",
	"gender": "female",
	"dob": "12/11/1961",
	"height": 63,
	"weight": 241,
	"eyeColor": "brown",
	"occupation": "assistant",
	"parents": [693243224, 888201200],
	"currentSpouse": null 
	},
{	"id": "313207561",
	"firstName": "Mattias",
	"lastName": "Madden",
	"gender": "male",
	"dob": "2/19/1966",
	"height": 70,
	"weight": 110,
	"eyeColor": "blue",
	"occupation": "assistant",
	"parents": [693243224, 888201200],
	"currentSpouse": 313997561 
	},
{	"id": "313997561",
	"firstName": "Ellen",
	"lastName": "Madden",
	"gender": "female",
	"dob": "2/19/1970",
	"height": 67,
	"weight": 100,
	"eyeColor": "blue",
	"occupation": "doctor",
	"parents": [],
	"currentSpouse": 313207561 
	},
{	"id": "313998000",
	"firstName": "Joey",
	"lastName": "Madden",
	"gender": "female",
	"dob": "2/02/1987",
	"height": 67,
	"weight": 100,
	"eyeColor": "blue",
	"occupation": "doctor",
	"parents": [313207561,313997561],
	"currentSpouse": null 
	}
];

/*
//Remove this from your final submission
function printAllToConsole(dataObj){
	for (var key in dataObj) {
		if (dataObj.hasOwnProperty(key)) {
			console.log(key + " -> " + JSON.stringify(dataObj[key]));
		}
	}
}
printAllToConsole(dataObject);
*/

function initSearch()
{
	//////----get all the information you need to run the search----//////
	
	////--get name--////
	var fullName = getSearchName();
	var names = fullName.split(",");
	var firstName = names[0];
	var lastName = names[1];
	var person = getPersonFromDb(firstName, lastName);
	
	////--get search parameters--////
	var descendants = printArrayNamesToString(getDescendants(askForSearchParameter("descendants"), person));
		alert(person.firstName + " " + person.lastName + "'s descendants: \n\n" + descendants);
	var immediateFamily = printArrayNamesToString(getImmediateFamily(askForSearchParameter("immediate family members"), person));
		alert(person.firstName + " " + person.lastName + "'s immediate family: \n\n" + immediateFamily);
	var nextOfKin = printArrayNamesToString(getNextOfKin(askForSearchParameter("next of kin"), person));
		alert(person.firstName + " " + person.lastName + "'s next of kin: " + nextOfKin);
	
	////--get filter parameters--////
	// var isFilteredByGender = askForFilterParameter("gender");
	var genderFilter = setGenderFilter(askForFilterParameter("gender"));
	// var isFilteredByHeight = askForFilterParameter("height"); //need min. and max. values
	var heightFilter = setHeightFilter(askForFilterParameter("height"));
		var heights = heightFilter.split(",");
		var minHeight = heights[0];
		var maxHeight = heights[1];
	// var isFilteredByWeight = askForFilterParameter("weight"); //need min. and max. values
	var weightFilter = setWeightFilter(askForFilterParameter("weight"));
		var weights = weightFilter.split(",");
		var minWeight = weights[0];
		var maxWeight = weights[1];
	// var isFilteredByEyeColor = askForFilterParameter("eye color");
	var eyeColorFilter = setEyeColorFilter(askForFilterParameter("eye color"));
	// var isFilteredByAge = askForFilterParameter("age"); //need min. and max. values
	var ageFilter = setAgeFilter(askForFilterParameter("age"));
		var ages = ageFilter.split(",");
		var minAge = ages[0];
		var maxAge = ages[1];
	// var isFilteredByOccupation = askForFilterParameter("occupation"); //need list of occupations
	var occupationFilter = setOccupationFilter(askForFilterParameter("occupation"));
	
	
	// var yourName = prompt("Who do you want to search for?");
	// var firstName = prompt("First name of person you want to search for?");
	// var lastName = prompt("Last name of person you want to search for?");
	// get name, get search type (info, kin, etc.), ask for parameters
	// pass all results to responder function

	//// then pass that info to the respective function.
	// var result = getPersonInfo(firstName, lastName)

	//// once the search is done, pass the results to the responder function
	responder(fullName);
}

function getSearchName()
{
	var searchName = prompt("Enter the first and last name of the person to query,\n separated by a comma: ");

	if(!checkNameFormat(searchName))
	{
		return getSearchName();
	}
	if(!checkDbForName(searchName.split(",")[0], searchName.split(",")[1]))
	{
		alert("Record not found in database. Please try again.");
		return getSearchName();
	}
	return searchName;
}

function checkNameFormat(searchName)
{
	var nameRegex = /[A-Z]{1}[a-z]+[,][A-Z]{1}[a-z]+/;
	
	if(!(nameRegex.test(searchName)))
	{
		alert("Format should be exactly [Firstname,Lastname]!!");
		return false;
	}
	else
	{
		return true;
	}
}

function checkDbForName(firstName, lastName)
{
	for(person in dataArray)
	{
		if(dataArray[person].firstName === firstName && dataArray[person].lastName === lastName)
		{
			return true;
			break;
		}
	}
	return false;
}

function printPersonProfile(person)
{
	alert("FULL PROFILE: " + 
			"\nId: " + person.id + 
			"\nFirst name: " + person.firstName + 
			"\nLast name: " + person.lastName + 
			"\nGender: " + person.gender + 
			"\nDOB: " + person.dob + 
			"\nHeight: " + person.height + 
			"\nWeight: " + person.weight + 
			"\nEye color: " + person.eyeColor + 
			"\nOccupation: " + person.occupation + 
			"\nParent Ids: " + person.parents[0] + ", " + person.parents[1] + "\n"
			);
}

function printArrayNamesToString(peopleArray)
{
	var printedResults = "";
	
	for(i = 0; i < peopleArray.length; i++)
	{
		printedResults += peopleArray[i].firstName + " " + peopleArray[i].lastName + "\n";
	}
	return printedResults;
}

function responder(results)
{
	// results may be a list of strings, an object, or a single string. 
	alert(results);
}

function getPersonFromDb(firstName, lastName)
{
	for(person in dataArray)
	{
		if(dataArray[person].firstName === firstName && dataArray[person].lastName === lastName)
		{
			return dataArray[person];
		}
	}
}

function getPersonInfo(firstName, lastName)
{
	for(person in dataArray)
	{
		if(dataArray[person].firstName === firstName && dataArray[person].lastName === lastName)
		{
			return dataArray[person];
		}
	}
}

function askForSearchParameter(searchType)
{
	var userResponse = prompt("Would you like to list all " + searchType + "?\n" + 
						"    (Enter 'Yes' to include " + searchType + " in results. \n     Enter 'No' or leave blank to skip.)");
	
	if(userResponse === "Yes")
	{
		return true;
	}
	else if(userResponse === "No" || userResponse === "")
	{
		return false;
	}
	else
	{
		alert("Please respond with 'Yes', 'No', or leave blank.");
		return askForSearchParameter(searchType);
	}
}

function getDescendants(isRequestForDescendants, person)
{
	var descendants = [];
	
	if(isRequestForDescendants)
	{
		for(descendant in dataArray)
		{
			for(i = 0; i < dataArray[descendant].parents.length; i++)
			{
				if(dataArray[descendant].parents[i] == person.id)
				{
					descendants.push(dataArray[descendant]);
					descendants.concat(getDescendants(isRequestForDescendants, dataArray[descendant]));
				}
			}
		}
	}
	return descendants;
}

function getGrandchildren(person)
{
	
}

function getImmediateFamily(isRequestForFamily, person)
{
	var immediateFamily = [];
	
	if(isRequestForFamily)
	{
		immediateFamily = immediateFamily.concat(getParents(person));
		immediateFamily = immediateFamily.concat(getSiblings(person));
		immediateFamily = immediateFamily.concat(getSpouse(person));
		immediateFamily = immediateFamily.concat(getChildren(person));
	}
	return immediateFamily;
}

function getParents(person)
{
	var parents = [];
	
	for(i = 0; i < person.parents.length; i++)
	{
		for(parent in dataArray)
		{
			if(dataArray[parent].id == person.parents[i])
			{
				parents.push(dataArray[parent]);
			}
		}
	}
	return parents;
}

function getGrandparents(person)
{
	
}

function getSiblings(person)
{
	var siblings = [];
	
	for(sibling in dataArray)
	{
		for(i = 0; i < person.parents.length; i++)
		{
			for(j = 0; j < dataArray[sibling].parents.length; j++)
			{
				if((dataArray[sibling].parents[j] == person.parents[i]) && (!siblings.includes(dataArray[sibling])) && (dataArray[sibling] != person))
				{
					siblings.push(dataArray[sibling]);
				}
			}
		}
	}
	return siblings;
}

function getSpouse(person)
{
	var spouse = [];
	
	for(partner in dataArray)
	{
		if(dataArray[partner].id == person.currentSpouse)
		{
			spouse.push(dataArray[partner]);
		}
	}
	return spouse;
}

function getChildren(person)
{
	var children = [];
	
	for(child in dataArray)
	{
		for(i = 0; i < dataArray[child].parents.length; i++)
		{
			if(person.id == dataArray[child].parents[i])
			{
				children.push(dataArray[child]);
			}
		}
	}
	return children;
}

function getNextOfKin(isRequestForKin, person)
{
	var nextOfKin = []; //find way to get eldest of each
	
	if(isRequestForKin)
	{
		if(getSpouse(person) != null)
		{
			nextOfKin.concat(getSpouse(person));
		}
		else if(getChildren(person) != null)
		{
			
		}
		else if(getParents(person) != null)
		{
			
		}
		else if(getSiblings(person) != null)
		{
			
		}
		else if(getGrandchildren(person) != null)
		{
			
		}
		else if(getGrandparents(person) != null)
		{
			
		}
		else if(getNieceNephew(person) != null)
		{
			
		}
		else if(getAuntUncle(person) != null)
		{
			
		}
		else if(getGreatGrandchildren(person) != null)
		{
			
		}
		else if(getGreatGrandparents(person) != null)
		{
			
		}
	}
	return nextOfKin;
}

function getAge(person)
{
	var currentDate = new Date();
	var birthDate =  new Date(person.dob);
	var age = Math.floor((currentDate - birthDate)/(1000 * 60 * 60 * 24 * 365.24));
	
	return age;
}

function getSearchFilterResults()
{
	var dbArray = dataArray;
	var fullFilter = /\d{0,3}[,]\d{0,3}[-]{0,1}\d{0,3}[,]\d[']\d{0,2}["][,]\d{0,3}[lbs$][,]\w{0,10}[,]\w{0,5}/;
	
	var filterString = prompt("Please enter up to five of the search filters below. " + 
						"\nBe sure to include all commas even if you do not select all filters. " +
						"\nThe format of each filter is listed in square brackets." +								
						"\n\nAge[#], Age range[#-#], Height[#'#\"], Weight[#lbs], Occupation[single word], Eye color[single word]")
						
	if(!fullFilter.test(filterString))
	{
		alert("Please provide search filters following the provided format.");
		return getSearchFilterResults();
	}
	else
	{
		var filters = filterString.split(",");
		getPeopleByAge(filters[0]);
		getPeopleByAgeRange(filters[1]);
		getPeopleByHeight(filters[2]);
		getPeopleByWeight(filters[3]);
		getPeopleByOccupation(filters[4]);
		getPeopleByEyeColor(filters[5]);
	}
}

function askForFilterParameter(filterType)
{
	var userResponse = prompt("Would you like to filter results by "  + filterType + "?\n" + 
					"    (Enter 'Yes' to filter results by " + filterType + ". \n     Enter 'No' or leave blank to skip.)");
	
	if(userResponse === "Yes")
	{
		return true;
	}
	else if(userResponse === "No" || userResponse === "")
	{
		return false;
	}
	else
	{
		alert("Please respond with 'Yes', 'No', or leave blank.");
		return askForFilterParameter(filterType);
	}
}

function getPeopleByAge(ageFilter)
{
	if(!ageFilter === "")
	{
		
	}
}

function getPeopleByAgeRange(ageRange)
{
	var minAge = ageRange.split("-")[0];
	var maxAge = ageRange.split("-")[1];
	
	
}

function setGenderFilter(isFilteredByGender)
{
	if(isFilteredByGender)
	{
		var userInput = prompt("Filter by 'male' or 'female'?");
		
		if(userInput === "male")
		{
			return userInput;
		}
		else if(userInput === "female")
		{
			return userInput;
		}
		else
		{
			alert("Please enter 'male' or 'female'.");
			return setGenderFilter(isFilteredByGender);
		}
	}
	else
	{
		return "";
	}
}

function getPeopleByGender()
{
	
}

function setHeightFilter(isFilteredByHeight)
{
	if(isFilteredByHeight)
	{
		var userInput = prompt("Please enter a minimum and maximum height (in inches) limit, separated by a comma." + 
							"\n    (i.e. [55,66])");
							
		if(!validateFilterInput(userInput))
		{
			return setHeightFilter(isFilteredByHeight);
		}
		else
		{
			return userInput;
		}
	}
	else
	{
		return "";
	}
}

function validateFilterInput(userInput) ////can be used for height, weight, and age filters////
{
	var filterRegex = /[0-9]{2,3}[,][0-9]{2,3}/;
	
	if(!filterRegex.test(userInput))
	{
		alert("Min. and max. limits should follow format [55,66] exactly!");
		return false;
	}
	else if((userInput.split(",")[0]) > (userInput.split(",")[1]))
	{
		alert("Max. limit must be higher than min. limit!");
		return false;
	}
	else
	{
		return true;
	}
}

function getPeopleByHeight()
{
	
}

function setWeightFilter(isFilteredByWeight)
{
	if(isFilteredByWeight)
	{
		var userInput = prompt("Please enter a minimum and maximum weight (in pounds) limit (between 2-3 digits), " + 
									"\nseparated by a comma.  (i.e. [99,123])");
							
		if(!validateFilterInput(userInput))
		{
			return setWeightFilter(isFilteredByWeight);
		}
		else
		{
			return userInput;
		}
	}
	else
	{
		return "";
	}
}

function getPeopleByWeight()
{
	
}

function setEyeColorFilter(isFilteredByEyeColor)
{
	if(isFilteredByEyeColor)
	{
		var userInput = prompt("Please choose an eye color to filter by: " + 
								"\n'black', 'blue', 'brown', 'green', 'hazel'.")
		
		if(userInput === "black")
		{
			return userInput;
		}
		else if(userInput === "blue")
		{
			return userInput;
		}
		else if(userInput === "brown")
		{
			return userInput;
		}
		else if(userInput === "green")
		{
			return userInput;
		}
		else if(userInput === "hazel")
		{
			return userInput;
		}
		else
		{
			alert("You must select from one of the provided options!");
			return setEyeColorFilter(isFilteredByEyeColor);
		}
	}
	else
	{
		return "";
	}
}

function getPeopleByEyeColor()
{
	
}

function setAgeFilter(isFilteredByAge)
{
	if(isFilteredByAge)
	{
		var userInput = prompt("Please enter a minimum and maximum age (in years) limit, " + 
							"\nseparated by a comma.  (i.e. [25,99])");
							
		if(!validateFilterInput(userInput))
		{
			return setAgeFilter(isFilteredByAge);
		}
		else
		{
			return userInput;
		}
	}
	else
	{
		return "";
	}
}

function setOccupationFilter(isFilteredByOccupation)
{
	if(isFilteredByOccupation)
	{
		var userInput = prompt("Please choose an occupation to filter by: " + 
				"\n'architect', 'assistant', 'doctor', 'landscaper', 'nurse', 'politician', 'programmer', 'student'.")
		
		if(userInput === "architect")
		{
			return userInput;
		}
		else if(userInput === "assistant")
		{
			return userInput;
		}
		else if(userInput === "doctor")
		{
			return userInput;
		}
		else if(userInput === "landscaper")
		{
			return userInput;
		}
		else if(userInput === "nurse")
		{
			return userInput;
		}
		else if(userInput === "politician")
		{
			return userInput;
		}
		else if(userInput === "programmer")
		{
			return userInput;
		}
		else if(userInput === "student")
		{
			return userInput;
		}
		else
		{
			alert("You must select from one of the provided options!");
			return setOccupationFilter(isFilteredByOccupation);
		}
	}
	else
	{
		return "";
	}
}

function getPeopleByOccupation()
{
	
}

initSearch();

//window.close(); // exit window as the end of the session -- you may remove this