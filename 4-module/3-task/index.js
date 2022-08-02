function highlight(table) {
  const status = table.querySelectorAll('tbody td');
  status.forEach(
        e => {if(e.hasAttribute('data-available')) {
        e.dataset.available === 'true' ? 
        e.parentElement.classList.add('available') : 
        e.parentElement.classList.add('unavailable')
      } 
    })
  const hiddenStatus = table.querySelectorAll('tbody tr');
  hiddenStatus.forEach(
        e => {if (!e.classList.contains('available') && !e.classList.contains('unavailable')) {
        e.hidden = true
      }
    } 
  )
   
  const gender = table.querySelectorAll('tbody td');
  gender.forEach(
        e => {if (e.innerText === 'f') {
        e.parentElement.classList.add('female');
  } else if (e.innerText === 'm') {
        e.parentElement.classList.add('male');
  }
  })
   
  const age = table.querySelectorAll('tbody td');
  age.forEach(
        e => e.innerHTML < 18 ?  e.parentElement.style.textDecoration = 'line-through' : e)
};