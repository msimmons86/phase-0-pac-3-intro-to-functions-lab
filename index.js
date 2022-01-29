function shout(string) {
  return string.toUpperCase();
}
console.log(toUpperCase);

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log('HELLO');
}
logShout('spy')

function logWhisper(string) {
  console.log('hello');
}
logWhisper('spy')

function sayHiToHeadphonedRoommate(string) {
  if (string.toLowerCase() === string) {
    return `I can\'t hear you!`;
  }
  if (string.toUpperCase() === string){
    return `YES INDEED!`;
  }
  if (string === `Let\'s have dinner together!`)
  return `I would love to!`
}