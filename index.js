function getFirstSelector(selector) {
    return document.querySelector(selector);
};

function nestedTarget() {
    return document.querySelector('#nested .target');
};

function increaseRankBy(n) {
    var toBeChanged = document.querySelectorAll('.ranked-list');
    for(var index in toBeChanged) {
        toBeChanged[index].innerHTML = parseInt(toBeChanged[index]) + n
    }
};

function deepestChild() {
    var grand = document.querySelector('div#grand-node').querySelectorAll('div');
    for(var index in grand) {
        if(grand[index].querySelectorAll('div').length == 1) {
            return grand[index].querySelector('div')
            }
        }
    };

