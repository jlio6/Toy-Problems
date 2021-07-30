class PersonForm {
  constructor(firstName, id) {
    this.firstName = firstName;
    this.id = id;
  }

  submit() {
    return this.firstName + '-' + this.id;
  }
}