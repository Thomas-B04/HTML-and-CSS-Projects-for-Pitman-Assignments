document.addEventListener('DOMContentLoaded', function() {
    new Cleave('#phone', {
        delimiters: ['-', '-'],    // Format like 012-345-6789
        blocks: [3, 3, 4],
        numericOnly: true
    });
});
