var starting = ['Andy', 'Liam', 'John', 'Brayden', 'Simon', 'Ryley', 'Matt', 'Larissa', 'Katherine', 'Ruby', 'Sophie', 'Emma', 'Yana', 'Annie', 'Antonia'];

var maxNumberInGroup = 3;
var people = [];
var remainingStudents = [];
var groups = [];
var maxNumberOfGroups = Math.ceil(starting.length / maxNumberInGroup);
var numberOfGroupsCreated = 0;
var shuffledStudents;
var currentGroupNum = 1;

$(document).ready(function(){
    for (var i = 0; i < starting.length; i++) {
        people.push({
            id: i+1,
            name: starting[i]
        })
    };
    remainingStudents = people;
    shuffle(remainingStudents);
    shuffledStudents = shuffle(remainingStudents.slice());
    var slot = '<ul class="slot">';
        for (var i = 0; i < shuffledStudents.length; i++) {
            slot += '<li data-name="'+shuffledStudents[i].name+'">'+shuffledStudents[i].name+'</li>';
        }
    slot += '</ul>';

    for (var i = 0; i < maxNumberInGroup; i++) {

        $("#slot").append(slot);
    }
});
console.log(maxNumberOfGroups);


$("#randomize").click(function(){

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
    console.log(groups);
});

$("#group").click(function(){
    if(currentGroupNum > maxNumberOfGroups){
        alert("restarting groups");
        currentGroupNum = 1;
        console.clear();
        console.log(groups);
        return;
    }

    var currentGroup = groups['group'+currentGroupNum];
    var lists = $('.slot');
    lists.each(function(i){
        $(this).find('li[data-name="'+currentGroup[i].name+'"]').addClass('grouped');
    })
    currentGroupNum++;
})

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
