
import axios from 'axios'

class Api {
  static register (username, password) {
    return new Promise((resolve, reject) => {
      axios.post('/api/register', {
        username,
        password
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  static login (username, password) {
    return new Promise((resolve, reject) => {
      axios.post('/api/login', {
        username,
        password
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  static getUserData () {
    return new Promise((resolve, reject) => {
      axios.get('/api/user')
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  static changePassword (username, oldPassword, newPassword) {
    return new Promise((resolve, reject) => {
      axios.post('/api/changepassword', {
        username,
        oldPassword,
        newPassword
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  static changeLocation (username, location) {
    return new Promise((resolve, reject) => {
      axios.post('/api/changelocation', {
        username,
        location
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  static getSearchedBooksData (searchText) {
    return new Promise((resolve, reject) => {
      axios.get('/api/books', {
        params: {
          searchText
        }
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  static getAvailableBooksData (searchText) {
    return new Promise((resolve, reject) => {
      axios.get('/api/availablebooks', {
        params: {
          searchText
        }
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  static updateAvatar (index) {
    return new Promise((resolve, reject) => {
      axios.post('/api/changeavatar', {
        avatar: index
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  static requestTrade (book, requesterId) {
    return new Promise((resolve, reject) => {
      axios.post('/api/requesttrade', {
        book,
        requesterId
      })
        .then(() => {
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  static addBooks (books) {
    return new Promise((resolve, reject) => {
      axios.post('/api/addbooks', {
        books
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  static deleteBook (book) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url: '/api/deletebook',
        data: {
          book
        }
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default Api