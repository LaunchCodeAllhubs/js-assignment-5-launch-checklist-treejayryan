window.addEventListener("load", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
    
        const pilotNameInput = document.querySelector("input[name=pilotName]");
        const copilotNameInput = document.querySelector("input[name=copilotName]");
        const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        const cargoMassInput = document.querySelector("input[name=cargoMass]");

        const pilotName = pilotNameInput.value;
        const copilotName = copilotNameInput.value;
        const fuelLevel = fuelLevelInput.value;
        const cargoMass = cargoMassInput.value;
    
        if (validateInput(pilotName) !== "Is a Number" &&
            validateInput(copilotName) !== "Is a Number" &&
            validateInput(fuelLevel) === "Is a Number" &&
            validateInput(cargoMass) === "Is a Number") {
                formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass);
            } else {
                alert("Make sure to enter valid information for all fields!");
            }
       
    });

   let listedPlanets;
   
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);

       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    });
   
});


