class Contact {
  constructor(contactname, phone, email, address){
  this.contactname = contactname;
  this.phone = phone;
  this.email = email;
  this.address = address;
  }
}

class ContactMap {
  details = {};
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
  // The details object's property-value pairs are used to store contactname-detail pairs

  add(name, detail) {
    // add a contact detail by the name
    // This mimics Map.set(key, value)
    this.details[name] = detail;
  }

  remove(name) {
    //delete the detail by name
    //This mimics Map.delete(key)
    delete this.details[name];
  }

  count() {
    // count the number of contacts
    // This mimics Map.size.
    return Object.keys(this.details).length;
  }

  getDetail(name) {
    // given a full name, return the contact detail through a lookup operation
    //This mimics Map.get(key)
    return this.details[name];
  }

  getAll() {
    // return all contact details as an array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
    return Object.values(this.details);
  }
}