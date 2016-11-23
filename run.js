var keywordList = [];

$(function() {
  $('#keywords').change(function() {
     updateFilter($('#search').val());
  });
});

function dumpBookmarks(terms) {
    keywordList = terms.split(',');
};

$(function() {
  $('#enabled').change(function() {
     toggle($('#enabled').val());
  });
});

function toggle(value){
    if (value === true){
        enable();
    }else{
        disable();
    };
};

function disable(){
    chrome.browserAction.setIcon({path:"off.png"});
    chrome.tabs.executeScript(null, {file: "unfilter.js"})
}

function enable(){
    chrome.browserAction.setIcon({path:"on.png"});
    chrome.tabs.executeScript(null, {file: "filter.js"});
}