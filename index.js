function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToGrandma(string) 
if string === string.toLowerCase
return "I can't hear you!" 
else
     ReferenceError: sayHiToGrandma is not defined
      at Context.<anonymous> (test/index-test.js:40:5)

  5) sayHiToGrandma(string) returns "YES INDEED!" if `string` is uppercase:
     ReferenceError: sayHiToGrandma is not defined
      at Context.<anonymous> (test/index-test.js:44:5)

  6) sayHiToGrandma(string) returns "I love you, too." if `string` is "I love you, Grandma."`:
     ReferenceError: sayHiToGrandma is not defined
      at Context.<anonymous> (test/index-test.js:48:5)
