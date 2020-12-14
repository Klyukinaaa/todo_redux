import axios from 'axios';

class ItemsService {
  constructor(token) {
    this.token = token;
  }

  createItem(item) {
    return axios.post('/items/', {
      task: item.task,
      completed: item.completed,
      color: item.color,
    }, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  patchItem(id, item) {
    return axios.patch(`/items/${id}`, {
      task: item.task,
      completed: item.completed,
    }, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  deleteItem(id) {
    return axios.delete(`/items/${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  getItems() {
    return axios.get('/items/', {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
}

export default ItemsService;
