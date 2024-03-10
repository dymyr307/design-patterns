class Post {
  constructor(title, subtitle) {
    this.title = title;
    this.subtitle = subtitle;
  }
}

class Editor {
  #observers = [];

  constructor(login, role = 'editor') {
    this.login = login;
    this.role = role;
    this.posts = [];
  }
  createPost(title, subtitle) {
    const post = new Post(title, subtitle);
    this.posts.push(post);
    this.notify(post);
  }

  attach(observer) {
    const isExist = this.#observers.includes(observer);

    if (isExist) return;

    this.#observers.push(observer);
    console.log('Editor: Attached an observer');
  }

  detach(observer) {
    const observerIndex = this.#observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Observer was not found');
    }
    this.#observers.splice(observerIndex, 1);
    console.log('Editor: Detached an observer');
  }

  notify(post) {
    for (const observer of this.#observers) {
      observer.update(this.login + ' published a post ' + JSON.stringify(post));
    }
  }
}

class Admin {
  constructor(login, role = 'admin') {
    this.login = login;
    this.role = role;
  }
  update(subject) {
    console.log(subject);
  }
}
const editor1 = new Editor('Thor');
console.log(editor1);
