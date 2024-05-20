document.addEventListener("DOMContentLoaded", function() {
    function convertText(inputText) {
        return inputText.replace(/[اَُِ]/g, 'ی');
    }

    document.querySelector('.button').addEventListener('click', function() {
        var inputElement = document.querySelector('.input');
        var inputText = inputElement.value;
        var convertedText = convertText(inputText);
        inputElement.value = convertedText;
    });
});
