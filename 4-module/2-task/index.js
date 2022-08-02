function makeDiagonalRed(table) {
  // т.к. необходимы ячейки соответствуют номерам 1:1, 2:2 и т.д.
  // то можно взять i и увеличивать его каждым циклом на +1
  for (i=0; i<table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
  }
}
