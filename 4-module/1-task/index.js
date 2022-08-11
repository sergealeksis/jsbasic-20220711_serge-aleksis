function makeFriendsList(friends) {
  //трансформирую массив, чтобы на выходе получать строку "Имя Фамилия"
  let mappedFriends = friends
                      .map(person => (`${person.firstName} ${person.lastName}`));
  // создаю ненумерованный список
  let ul = document.createElement('ul');
      ul.className = 'firends';
      //убираю маркеры
      ul.style = 'list-style: none;'    
      //добавляю элемент
//создаю элементы списка
  let i;
  for (i=0; i<mappedFriends.length; i++) {
  let newLi = document.createElement('li');
  newLi.innerHTML = mappedFriends[i];
  ul.appendChild(newLi);
  }; 
  return ul
}
