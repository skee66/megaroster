$(document).foundation()

const megaroster = {
  students: [],

  init() {
    this.studentList = document.querySelector('#student-list')
    this.max = 0
    this.setupEventListeners()
  },

  setupEventListeners() {
    document
      .querySelector('#new-student')
      .addEventListener('submit', this.addStudent.bind(this))
  },

  addStudent(ev) {
    ev.preventDefault()
    const f = ev.target
    const student = {
      id: this.max + 1,
      name: f.studentName.value,
      promote: false,
    }

    this.students.unshift(student)
    
    const listItem = this.buildListItem(student)
    this.prependChild(this.studentList, listItem)
    
    this.max ++
    f.reset()
  },

  prependChild(parent, child) {
    parent.insertBefore(child, parent.firstChild)
  },

  buildListItem(student) {
    const template = document.querySelector('.student.template')
    const li = template.cloneNode(true)
    li.querySelector('.student-name').textContent = student.name
    li.dataset.id = student.id
    this.removeClassName(li, 'template')

    li
      .querySelector('button.remove')
      .addEventListener('click', this.removeStudent.bind(this))

    li
      .querySelector('button.promote')
      .addEventListener('click', this.promoteStudent.bind(this))

    li
      .querySelector('button.moveup')
      .addEventListener('click', this.moveupStudent.bind(this))

    li
      .querySelector('button.movedown')
      .addEventListener('click', this.movedownStudent.bind(this))

    return li
  },

  removeStudent(ev) {
    const btn = ev.target

    // Remove it from the this.students array
    const id = btn.closest('.student').dataset.id
    const index = this.students.findIndex((student) => {
      return student.id == id
    })
    this.students.splice(index, 1)

    btn.closest('.student').remove()
  },

  promoteStudent(ev) {
    const btn = ev.target
    btn.closest('.student').style.border = '2px solid yellow'

    console.log(btn)
    console.log(btn.closest('.student'))
    const id = btn.closest('.student').dataset.id
    const index = this.students.findIndex((student) => {
      return student.id == id
    })
    console.log(name)
    console.log(index)
    console.log(this.students)
    this.students[index].promote = true
  },

  moveupStudent(ev) {
      const btn = ev.target

      //li > span > button
      const span = btn.parentNode
      const li = span.parentNode
      const liPrevSibling = li.previousSibling
      const ul = li.parentNode
      ul.insertBefore(li, liPrevSibling)
      li.remove()

  },

  movedownStudent(ev) {

  },

  removeClassName(el, className) {
    el.className = el.className.replace(className, '').trim()
  }
}
megaroster.init()
