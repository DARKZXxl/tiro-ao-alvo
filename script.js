const btn = document.getElementById('btn');
const extraRows = document.querySelectorAll('.extra-row');
const seta = document.getElementById('seta')

btn.addEventListener('click', () => {
    if (extraRows[0].style.display === 'table-row') {
        btn.innerHTML = 'Mostrar mais'
        
        extraRows.forEach(row => {
            row.style.display = 'none';
        });
    } else {
        btn.innerHTML = 'Mostrar menos'
        
        
        extraRows.forEach(row => {
            row.style.display = 'table-row';
        });
        
    }
});

