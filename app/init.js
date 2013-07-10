iris.path = {
    welcome: {js: "screen/welcome.js", html: "screen/welcome.html"},
    home: {js: "screen/home.js", html: "screen/home.html"},
    plus: {js: "screen/plus.js", html: "screen/plus.html"},
    viewEvent: {js: "screen/viewEvent.js", html: "screen/viewEvent.html"},
    createEvent: {js: "screen/createEvent.js", html: "screen/createEvent.html"},
    notFound: {js: "screen/notFound.js", html: "screen/notFound.html"},
    viewUiEvent: {js: "ui/viewUiEvent.js", html: "ui/viewUiEvent.html"},
    viewUiPlus: {js: "ui/viewUiPlus.js", html: "ui/viewUiPlus.html"}

};

$(document).ready(function() {
    iris.baseUri("app/");
    iris.welcome(iris.path.welcome.js);
});

