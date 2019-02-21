var starting = ['Andy', 'Liam', 'John', 'Brayden', 'Simon', 'Ryley', 'Matt', 'Larissa', 'Katherine', 'Ruby', 'Sophie', 'Emma', 'Yana', 'Annie', 'Antonia'];

var maxNumberInGroup = 3;
var people = [], groups = [];
var maxNumberOfGroups = Math.ceil(starting.length / maxNumberInGroup);
var shuffledStudents;
var currentGroupNum = 0;
var slideHeight, slideWidth;
var ready = false;
var containerWidth = $("#slotContainer").width();

for (var i = 0; i < starting.length; i++) {
    people.push({
        id: i+1,
        name: starting[i].toUpperCase()
    })
};
slideWidth = 100 / maxNumberInGroup;

var spinSpeeds = [];
var matches =[];
var sliders ;
var slideTimeouts;
var currentSlot = 0;
var sliderOn = false;
var myInterval = [];

$(document).ready(function(){

    for (var j = 0; j < maxNumberInGroup; j++) {
        shuffle(people);
        shuffledStudents = shuffle(people.slice());
        var list = '';
        for (var i = 0; i < shuffledStudents.length; i++) {
            if(i%2 == 0){
                var secondItem = 'secondItem';
            } else {
                var secondItem = '';
            }
            list += '<li class="'+secondItem+'" data-name="'+shuffledStudents[i].name+'">'+shuffledStudents[i].name+'</li>';
        }
        $("#slotContainer").append('<div class="slot" data-slot="'+j+'"><ul>'+list+'</ul></div>')
    }
    if(currentGroupNum == 0){
        randomize();
    }
    $('.slot').css('width', slideWidth+'%');
    ready = true;


    sliders = $('.slot');
    sliders.each(function(i, el){
        slideHeight = $(this).find('ul li').height();
        spinSpeeds[i] = 100;
    });

    if(ready == true){
        setTimeout(function(){
            $(".lds-ring").fadeOut(800).remove();
            $(".container").fadeIn(800);
            $("#slotContainer").addClass('ready');
        }, 1000)

    }
});

$("#startGroup").click(function(){
    $(".blank").remove();
    $("#stopSpin").show();
    $("#startGroup").hide();
    currentGroupNum++;
    if(groups['group'+currentGroupNum].length !== maxNumberInGroup){
        for (var i = 0; i < maxNumberInGroup; i++) {
            if(groups['group'+currentGroupNum][i]){
                console.log(groups['group'+currentGroupNum][i].name)
            } else {
                groups['group'+currentGroupNum].push({
                    name: ''
                });
                $(".slot").eq(i).find('ul').append('<li class="blank"></li>');
            }
        }
    }

    sliderOn = true;
    $(sliders).each(function(i){
        var thisElement = $(this);
        setTimeout(function(){
            myInterval[i] = setInterval(function(){
                startSpin(thisElement, spinSpeeds[i]);
            }, spinSpeeds[i])
        }, 1000 * i)
    });
})

$("#stopSpin").click(function(){
    $("#stopSpin").hide();
    slowDown(currentSlot);
})

function slowDown(i){
    var x = 0;
    var intervalID = setInterval(function () {
       if (++x === 3) {
           window.clearInterval(intervalID);
       }
    }, 1000);

    setTimeout(function(){
        clearInterval(myInterval[i]);
        var stoppingSlide = $(".slot").eq(i);
        stopSpin(stoppingSlide, i);
    }, 3000)
}

function stopSpin(el, i){
    el.find('ul').animate({
        top: - slideHeight
    }, 800, function(){
        el.find('ul li:first-child').appendTo(el.find('ul'));
        el.find('ul').css('top', '');
        if(el.find('ul li:first-child').text() !== groups['group'+currentGroupNum][i].name){
            stopSpin(el, i)
        } else {
            if((i+1) < maxNumberInGroup){
                slowDown(i+1)
            }
            if((i+1) == maxNumberInGroup){
                $("#startGroup").show();
            }
        }
    })
}

function startSpin(el, spinSpeed){
    el.find('ul').animate({
        top: - slideHeight
    }, spinSpeed, function(){
        el.find('ul li:first-child').appendTo(el.find('ul'));
        el.find('ul').css('top', '');
    })
}

function createList(){
    $(".slot").remove();
    shuffle(people);
    shuffledStudents = shuffle(people.slice());
    var slot = '<ul class="slot">';
        for (var i = 0; i < people.length; i++) {
            slot += '<li data-name="'+people[i].name+'">'+people[i].name+'</li>';
        }
    slot += '</ul>';

    for (var i = 0; i < maxNumberInGroup; i++) {
        $("#slot").append(slot);
    }
};

function randomize(){
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
        // console.log(maxNumberOfGroups * maxNumberInGroup);
        var groupsRemaining = maxNumberOfGroups;
        for (var i = 1; i <= maxNumberOfGroups; i++) {
            groups['group'+(i)] = [];
        }
        var j = 1;
        for (var i = 0; i < shuffledStudents.length; i++) {
            groups['group'+j].push({
                name: shuffledStudents[i].name
            })
            j++;
            if(j == maxNumberOfGroups+1){
                j=1;
            }
        }

    }
}

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
