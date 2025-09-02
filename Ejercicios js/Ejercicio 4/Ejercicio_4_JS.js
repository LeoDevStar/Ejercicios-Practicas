const projects = [
    ["TaskManager", "React", "Node", "MongoDB"],
    ["FoodDelivery", "Node", "Express", "MySQL"],
    ["Portfolio", "HTML", "CSS", "React"],
    ["ChatApp", "React", "Firebase", "Node"]
]

//Alphabetical Order Test
const projects2 = [
    ["TaskManager", "React", "Node", "MongoDB"],
    ["Portfolio", "HTML", "CSS", "React"],
    ["FoodDelivery", "Node", "Express", "MySQL"],
    ["ChatApp", "React", "Firebase", "Node"]
]

//No Repeated Technology Test
const projects3 = [
    ["Portfolio", "HTML", "CSS", "React"],
    ["FoodDelivery", "Node", "Express", "MySQL"]
]

let projectsArray = [];
let technologiesArray = [];

let projectTech = [];

let preOrganizedProjects = [];
let firstElementOrganizedProjects;
let projectsWithinOrganized;
let organizedProjects;


function organizeProjects(projectArray){
    let projectsArray = [];
    let technologiesArray = [];

    let projectTech = [];

    let preOrganizedProjects = [];
    let firstElementOrganizedProjects = [];
    let projectsWithinOrganized = [];
    let organizedProjects = [];

    let projectName = "";
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
            
            projectName = element.at(0);
            let techArray = new Array();
            let techFound = preOrganizedProjects.find(tech => tech[0] == value);
            
            if(projectTech.includes(value) && !techFound){
                techArray.push(value);
                techArray.push(projectName);
                
                preOrganizedProjects.push(techArray);
            }else if(techFound){
                techFound.push(projectName);
            }

        });
    })

    firstElementOrganizedProjects = preOrganizedProjects.slice();
    firstElementOrganizedProjects.sort();

    
    projectsWithinOrganized = preOrganizedProjects.slice();
    projectsWithinOrganized.forEach(array =>{
        let technologies = array.splice(1)
        technologies.sort();
        technologies.forEach(techValue => {
            array.push(techValue);
        })
        
    })

    organizedProjects = projectsWithinOrganized.slice();
    organizedProjects.sort();

    
    
    /*console.log("Projects Name\n");
    console.log(projectsArray);
    console.log("Technologies Used\n");
    console.log(technologiesArray);
    console.log("Repeated Technologies\n");
    console.log(projectTech);
    console.log("Pre Organized Projects by Tech\n");
    console.log(preOrganizedProjects);
    console.log("Alfabetically Organized Projects by Tech\n");
    console.log(firstElementOrganizedProjects);
    console.log("Alfabetically Organized Within Projects by Name\n");
    console.log(projectsWithinOrganized);*/

    return organizedProjects;
}