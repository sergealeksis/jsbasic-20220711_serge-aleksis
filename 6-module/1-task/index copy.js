/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {

  #rows = [];
  #elem = null;

  constructor(rows) {
    this.#rows = rows;
    this.#render();
  }

  get elem() {
    return this.#elem;
  }

  #render() {
    this.#elem = document.createElement('table');
    this.#elem.innerHTML = `
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        ${this.#rowsHTML()}
    </tbody>
    `;

    const toDelete = this.#elem.querySelectorAll('[data-action="remove"]');
    toDelete.forEach(e => e.addEventListener('click', () => {
      e.parentElement.parentElement.remove()
      }));

  }




  #rowsHTML() {
    return this.#rows.map((e) => `
    <tr>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.salary}</td>
        <td>${e.city}</td>
        <td><button data-action="remove">X</button></td>
        </tr>
    `).join('')
  }
}
