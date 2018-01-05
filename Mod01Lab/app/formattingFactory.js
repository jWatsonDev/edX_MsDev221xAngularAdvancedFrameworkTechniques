app.factory('formattingFactory', ['$window', formattingFactory]);

function formattingFactory() {
    return {
        format: format
    }

    function format(value) {
        return (value.length % 2 === 0) ? value.toUpperCase() : value.toLowerCase();
    }
}