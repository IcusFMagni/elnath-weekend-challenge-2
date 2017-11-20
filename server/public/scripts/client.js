var mathObject = {
    x: 0,
    y: 0,
    type: ""
}
$(document).ready(function () {

    $('#add').on('click', addition);
    $('#subtract').on('click', subtract);
    $('#multiply').on('click', multiply)
    $('#divide').on('click', divide)
    $('#historyButton').on('click', historyPrint)
});

function addition () {
    mathObject.type = 'add';
    send();
}

function subtract() {
    mathObject.type = 'subtract';
    send();
}
function multiply() {
    mathObject.type = 'multiply'
    send();
}
function divide() {
    mathObject.type = 'divide'
    send();
}

function send () {
    mathObject.x = $('#x').val()
    mathObject.y = $('#y').val()

    $.ajax ({
        method: 'POST',
        url: '/calc',
        data: {mathObject},
        success: function (response) {
            console.log('sent mathObject')
            returnAnswer()
        }

    })
}

function returnAnswer () {
    $.ajax ({
        method: 'GET',
        url: '/calc',
        success: function (response) {
            $('#answer').html(response)
        }
    })
}

function historyPrint () {
    $.ajax ({
        method: 'GET',
        url: '/calc/history',
        success: function (response) {
            $('#historyLog').html(historyWriter(response))
        }
    })
}

function historyWriter (array) {
    $('#historyLog').empty()
    for (let index = 0; index < array.length; index++) {
        $('#historyLog').append("<p>"+array[index]+'</p>')
        
    }
}