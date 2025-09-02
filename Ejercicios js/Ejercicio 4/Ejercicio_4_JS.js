const projects = [
    ["TaskManager", "React", "Node", "MongoDB"],
    ["FoodDelivery", "Node", "Express", "MySQL"],
    ["Portfolio", "HTML", "CSS", "React"],
    ["ChatApp", "React", "Firebase", "Node"]
]

const projects2 = [
    ["TaskManager", "React", "Node", "MongoDB"],
    ["Portfolio", "HTML", "CSS", "React"],
    ["FoodDelivery", "Node", "Express", "MySQL"],
    ["ChatApp", "React", "Firebase", "Node"]
]

let projectsArray = [];
let technologiesArray = [];

let projectTech = [];

let organizedProjects = [];
let firstElementOrganizedProjects;


function organizeProjects(projectArray){
    
    let projectName;
    projectArray.forEach(element => {

        projectName = element.at(0);
        projectsArray.push(projectName);
        let projectTechnologies = element.slice(1);
        

        projectTechnologies.forEach(technology => {
            if (!technologiesArray.includes(technology)){
                technologiesArray.push(technology);
            }else if(!projectTech.includes(technology)){
                projectTech.push(technology);
            }
        });
    
    });

    projectArray.forEach(element => {
        element.forEach(value => {
            console.log("Checking value: " + value);
            projectName = element.at(0);
            let techArray = new Array();
            let techFound = organizedProjects.find(tech => tech[0] == value);
            
            if(projectTech.includes(value) && !techFound){
                techArray.push(value);
                techArray.push(projectName);
                console.log(techArray);
                organizedProjects.push(techArray);
            }else if(techFound){
                techFound.push(projectName);
            }

        });
    })

    firstElementOrganizedProjects = organizedProjects.slice();
    firstElementOrganizedProjects.sort();

    //organizedProjects.copyWithin(-1, 1)
    //organizedProjects.
    projectsWithinOrganized = organizedProjects.slice();
    projectsWithinOrganized.forEach(array =>{
        let technologies = array.splice(1)
        technologies.sort();
        technologies.forEach(techValue => {
            array.push(techValue);
        })
        //let finalArray = array.concat(technologies);
        //array.push(technologies);
        //array = finalArray;
    })
    
    //projectsArray.c
    console.log("Projects Name\n");
    console.log(projectsArray);
    console.log("Technologies Used\n");
    console.log(technologiesArray);
    console.log("Repeated Technologies\n");
    console.log(projectTech);
    console.log("Organized Projects by Tech\n");
    console.log(organizedProjects);
    console.log("Alfabetically Organized Projects by Tech\n");
    console.log(firstElementOrganizedProjects);
    console.log("Alfabetically Organized Within Projects by Name\n");
    console.log(projectsWithinOrganized);
}



//console.log(repeatedTech);
//console.log(projectTechArray);