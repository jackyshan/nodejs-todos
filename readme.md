### npm安装依赖

```
npm install

npm install nodemon -g

nodemon server.js
```

### 安装docker环境的MongoDB

```
docker pull mongo
docker images
docker run -d -p 27017:27017 -v mongo_configdb:/data/configdb -v mongo_db:/data/db --name mongo docker.io/mongo --auth

docker exec -it mongo mongo admin
db.createUser({ user: 'jsmith', pwd: 'some-initial-password', roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] });

db.auth("jsmith","some-initial-password");
use test
db.createUser({ user: 'test', pwd: '123456', roles: [{ role: "readWrite", db: "test" }] });
```
