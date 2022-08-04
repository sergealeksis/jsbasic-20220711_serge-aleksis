function highlight(table) {
  const condition = table.querySelectorAll('tbody td');
  condition.forEach(
        e => {
          if (e.dataset.available) {
              e.dataset.available === 'true' ? 
              e.parentElement.classList.add('available') : 
              e.parentElement.classList.add('unavailable')
          };
              
          if (e.innerText === 'f') {
            e.parentElement.classList.add('female');
          } else if (e.innerText === 'm') {
            e.parentElement.classList.add('male');
          };
          
          e.innerHTML < 18 ? e.parentElement.style.textDecoration = 'line-through' : e 
          })

  const hiddenStatus = table.querySelectorAll('tbody tr');
  hiddenStatus.forEach(
        e => {
          if (!e.classList.contains('available') && !e.classList.contains('unavailable')) {
        e.hidden = true
      }
    })
}