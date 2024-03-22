document.getElementById('settings-btn').addEventListener('click', function() {
    var iframe = document.getElementById('settings-iframe');
    if (iframe.style.display === 'none') {
        iframe.style.display = 'block';
    } else {
        iframe.style.display = 'none';
    }
});
