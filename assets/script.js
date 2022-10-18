var shapes = ["triangle", "square", "pentagon", "circle"];
topics = ["HTML", "CSS", "JS", "GIT"]
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

function listTopics() {
    for(var x = 0; x < shapes.length; x++) {
        console.log(shapes[x]);
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('which topic should we study first');
selectTopic();