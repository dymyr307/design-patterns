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

class UserCreator {
  static userList = {
    user: User,
    editor: Editor,
    admin: Admin,
  };
  static createUser(login, email, role = 'user') {
    const Fabric = UserCreator.userList[role];

    const instance = new Fabric(login, email);
    instance.role = role;

    return instance;
  }
}

class UserAdapter {
  static create(login, email, role = 'user') {
    return UserCreator.createUser(login, email, role);
  }
}

const user1 = UserAdapter.create('Bruce', 'b@mail.com');
console.log(user1);

const admin1 = UserAdapter.create('Bob', 'bob@mail.com', 'admin');
console.log(admin1);
