var starting = ['Andy', 'Liam', 'John', 'Vikesh', 'Brayden', 'Simon', 'Ryley', 'Matt', 'Larissa', 'Katherine', 'Ruby', 'Sophie', 'Emma', 'Yana', 'Annie', 'Antonia'];

var maxNumberInGroup = 3;
var people = [];
var remainingStudents = [];
var groups = [];
var maxNumberOfGroups = Math.ceil(starting.length / maxNumberInGroup);
var numberOfGroupsCreated = 0;


$(document).ready(function(){
    for (var i = 0; i < starting.length; i++) {
        people.push({
            id: i+1,
            name: starting[i]
        })
    };
    remainingStudents = people;
});
console.log(maxNumberOfGroups);


$("#randomize").click(function(){
    shuffle(remainingStudents);
    var shuffledStudents = shuffle(remainingStudents.slice());
    if(people.length % maxNumberOfGroups === 0){
        var numberPerGroup = people.length/maxNumberOfGroups;
        var j = 0;

        for (var i = 0; i < shuffledStudents.length; i++) {
            if(i % numberPerGroup === 0){
                j++
                groups['group'+(j)] = [];
            }
            groups['group'+j].push({
                name: shuffledStudents[i].name
            })
        }
    } else {
        var groupsRemaining = maxNumberOfGroups;

        for (var i = 1; i <= maxNumberOfGroups; i++) {
            groups['group'+(i)] = [];
        }

        var j = 1;
        for (var i = 0; i < remainingStudents.length; i++) {
            groups['group'+j].push({
                name: shuffledStudents[i].name
            })
            j++;
            if(j == maxNumberOfGroups+1){
                j=1;
            }
        }
    }
});

var shuffle = function (array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};
