class Order {
  constructor(order) {
    this.order = order;
    this.status = 'received';

    KitcenTask.createTask(this);
  }
}

class KitcenTask {
  constructor(task) {
    this.task = task;
    this.status = 'preparing';
  }

  static createTask(task) {
    const kTask = new KitcenTask(task);

    setTimeout(() => {
      DeliveryTask.createTask(kTask);
    }, 3000);
  }
}

class DeliveryTask {
  constructor(task) {
    this.task = task;
    task.task.status = 'in delivery';
  }

  static createTask(task) {
    const dTask = new DeliveryTask(task);

    setTimeout(() => {
      dTask.task.status = 'complete';

      console.log(dTask);
    }, 3000);
  }
}

const o = new Order([{ id: 1, title: 'bear', price: 200, quantity: 5 }]);

console.log(o);
