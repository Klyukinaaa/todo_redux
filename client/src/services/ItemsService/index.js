import axios from 'axios';

class ItemsService {
  static createItem(token, item) {
    return axios.post('/items/', {
      task: item.task,
      completed: item.completed,
      color: item.color,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static patchItem(token, id, item) {
    return axios.patch(`/items/${id}`, {
      task: item.task,
      completed: item.completed,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static deleteItem(token, id) {
    return axios.delete(`/items/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static getItems(token) {
    return axios.get('/items/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default ItemsService;
