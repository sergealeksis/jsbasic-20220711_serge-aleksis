function showSalary(users, age) {
    return users.filter(obj => (obj.age <= age))
    .map(e => (`${e.name}, ${e.balance}`)).join('\n')
}
