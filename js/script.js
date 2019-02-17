var starting = ['Andy', 'Liam', 'John', 'Vikesh', 'Brayden', 'Simon', 'Ryley', 'Matt', 'Larissa', 'Katherine', 'Ruby', 'Sophie', 'Emma', 'Yana', 'Annie', 'Antonia'];
// var starting = ['Andy', 'Liam', 'John', 'Vikesh', 'Brayden', 'Simon'];

var chosenNumbers = [];
var numberInGroup = 4;
var people = [];
var remainingStudents = [];
var groups = [];
var maxNumberOfGroups = Math.ceil(starting.length / numberInGroup);
var numberOfGroupsCreated = 0;

$(document).ready(function(){
    for (var i = 0; i < starting.length; i++) {
        people.push({
            id: i+1,
            name: starting[i]
        })
    }
    remainingStudents = people;
    $("#peopleNum").text(people.length);
    $("#groupNum").text(maxNumberOfGroups);
    console.log(people);
});


$("#randomize").click(function(){
    if(maxNumberOfGroups === numberOfGroupsCreated){
        console.log("No more Students to Sort")
        return;
    }
    var groupNum = numberOfGroupsCreated + 1;
    groups['group'+groupNum] = [];
    for (var i = 0; i < numberInGroup; i++) {
        if(chosenNumbers === people.lenth){
            console.log("No more Students to Sort")
            break;
        }
        var randomNumber = Math.floor(Math.random() * people.length) + 1;
        checkArray(randomNumber, groupNum)
    }
    $("#groups").append("<li>Group "+groupNum+"</li>");

    numberOfGroupsCreated++;
});

function checkArray(num, groupNum){

    // if(remainingStudents[remainingStudents.findIndex(x => x.id === num)]){
    //     var int = remainingStudents.findIndex(x => x.id === num);
    //     console.log(int);
    //     remainingStudents[int] = null;
    //     console.log(remainingStudents);
    //     // console.log(remainingStudents[remainingStudents.findIndex(x => x.id === num)]);
    // } else {
    //
    // }

    // if(jQuery.inArray(num, chosenNumbers) != -1) {
    //     var randomNumber = Math.floor(Math.random() * people.length) + 1;
    //     checkArray(randomNumber, groupNum);
    // } else {
    //     chosenNumbers.push(num, groupNum);
    //     console.log(people[people.findIndex(x => x.id === num)]);
    //     // groups['group'+groupNum].push({
    //     //     name: people[people.findIndex(x => x.id === num)]
    //     // })
    // }
}
