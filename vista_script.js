function filterCommands() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const commandItems = document.querySelectorAll('.command-item');

    commandItems.forEach(item => {
        const title = item.querySelector('.command-title').textContent.toLowerCase();
        if (title.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}