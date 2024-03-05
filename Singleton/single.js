class User {
  constructor(login, email) {
    this.login = login;
    this.email = email;
  }
}

class Editor extends User {
  constructor(login, email) {
    super(login, email);
  }
  createPost(title, text) {}
}

class Admin extends User {
  static exist = false;
  static instance = null;

  constructor(login, email) {
    if (Admin.exist) {
      return;
    }
    super(login, email);
    Admin.exist = true;
    Admin.instance = this;
  }
}

const admin1 = new Admin('admin', '');
console.log(admin1);

const admin2 = new Admin('Oleg', '');
console.log(admin2);
