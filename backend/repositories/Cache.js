const redis = require('ioredis');

class Cache {
  constructor () {
    this.client = redis.createClient({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT
    })

    this.client.on('error', (err) => {
      console.error("Cache connection error: " + err)
    })
  }

  set(key, value, options) {
    return new Promise((resolve, reject) => {
      this.client.set(key, value, (err, reply) => {
        if (err) {
          return reject(err);
        }
        resolve(reply);
      });
    });
  }
  
  get(key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, reply) => {
        if (err) {
          return reject(err);
        }
        resolve(reply);
      });
    });
  }
  
  del(key) {
    return new Promise((resolve, reject) => {
      this.client.del(key, (err, reply) => {
        if (err) {
          return reject(err);
        }
        resolve(reply);
      });
    });
  }

  getAllKey() {
    return new Promise((resolve, reject) => {
      this.client.keys('*', (err, reply) => {
        if (err) {
          return reject(err);
        }
        resolve(reply);
      });
    });
  }

  async getAll() {
    try {
      const keys = await this.client.keys('*');
      const values = await this.client.mget(keys);
      return values;
    } catch (error) {
      console.error('Error fetching data from Redis:', error);
    }
  }

  quit() {
    return this.client.quit();
  }
}

module.exports = new Cache()