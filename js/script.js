var starting = ['Andy', 'Liam', 'John', 'Vikesh', 'Brayden', 'Simon', 'Ryley', 'Matt', 'Larissa', 'Katherine', 'Ruby', 'Sophie', 'Emma', 'Yana', 'Annie', 'Antonia'];

var maxNumberInGroup = 4;
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
    if(people.length % maxNumberOfGroups === 0){
        console.log('even');









        shuffle(remainingStudents);
        var shuffledStudents = shuffle(remainingStudents.slice());
        console.log(shuffledStudents);
        var numberPerGroup = people.length/maxNumberOfGroups;
        console.log(numberPerGroup);
        var j = 0;
        // groups['group1'] = [];
        for (var i = 0; i < shuffledStudents.length; i++) {
            if(i % numberPerGroup === 0){
                j++
                groups['group'+(j)] = [];
            }
            console.log('group'+j);
            groups['group'+j].push({
                name: shuffledStudents[i].name
            })
        }
        console.log(groups);











    } else {
        var evenGroups = false;
        console.log('odd');
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
