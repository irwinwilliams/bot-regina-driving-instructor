const cheerio = require('cheerio')
var fs = require('fs');


const $ = cheerio.load(fs.readFileSync('regs.html'));
var questions = $(".question");

var json = [];

questions.each(function (i, elem) {
    var question = $(questions[i]);
    var firsSib = $(question.next("ol")[0]);
    var answer = $(firsSib.children(".answer")[0]);

    json.push({
        "question": question.text(), 
        "answer": answer.text()
    });
});

console.log(JSON.stringify(json));