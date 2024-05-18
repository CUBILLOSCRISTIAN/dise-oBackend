# Diseño backend 🚀
My Microservices Project 📂 <br>
Este proyecto implementa un conjunto de microservicios con Node.js para la gestión de usuarios. Cada servicio está desplegado de manera independiente utilizando Docker y Docker Compose.

## Servicios 🛠️

- **Create User Service**: Crea nuevos usuarios.
- **Edit User Service**: Edita usuarios existentes.
- **Delete User Service**: Elimina usuarios.
- **Read User Service**: Lee los datos de los usuarios.

## Estructura del Proyecto 📂

```
my-microservices/
├── create-user-service/
│   ├── index.js
│   ├── package.json
│   ├── Dockerfile
│   └── user.model.js
├── edit-user-service/
│   ├── index.js
│   ├── package.json
│   ├── Dockerfile
│   └── user.model.js
├── delete-user-service/
│   ├── index.js
│   ├── package.json
│   ├── Dockerfile
│   └── user.model.js
├── read-user-service/
│   ├── index.js
│   ├── package.json
│   ├── Dockerfile
│   └── user.model.js
├── docker-compose-read.yml
└── docker-compose.yml
```

## Requisitos 📋

- Node.js (v18 o superior)
- Docker
- Docker Compose

## Configuración y Ejecución 🚀

### Paso 1: Clonar el repositorio


```sh
git clone https://github.com/CUBILLOSCRISTIAN/dise-oBackend.git
cd my-microservices
```

### Paso 2: Construir y levantar los contenedores

```sh
docker-compose -f docker-compose.yml up --build

```

```sh
docker-compose -f docker-compose-read.yml up --build

```

### Paso 3: Acceder a los servicios

- **Create User Service**: [http://localhost:3001/users](http://localhost:3001/users)
- **Edit User Service**: [http://localhost:3002/users/:id](http://localhost:3002/users/:id)
- **Delete User Service**: [http://localhost:3003/users/:id](http://localhost:3003/users/:id)
- **Read User Service**: [http://localhost:3004/users](http://localhost:3004/users)

## Ejemplos de Uso 📬

### Crear Usuario

```javascript
const createUser = async (userData) => {
  const response = await fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  const data = await response.json();
  return data;
};

createUser({ name: 'John Doe', email: 'john@example.com' })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Editar Usuario

```javascript
const editUser = async (userId, userData) => {
  const response = await fetch(`http://localhost:3002/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  const data = await response.json();
  return data;
};

editUser('123', { name: 'Jane Doe', email: 'jane@example.com' })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Eliminar Usuario

```javascript
const deleteUser = async (userId) => {
  const response = await fetch(`http://localhost:3003/users/${userId}`, {
    method: 'DELETE'
  });
  const data = await response.json();
  return data;
};

deleteUser('123')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Leer Usuarios

```javascript
const getUsers = async () => {
  const response = await fetch('http://localhost:3004/users');
  const data = await response.json();
  return data;
};

getUsers()
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## Notas 📝

- Asegúrate de que Docker y Docker Compose están correctamente instalados en tu máquina.
- Los puertos 3001, 3002, 3003 y 3004 deben estar libres para que los servicios se ejecuten correctamente.

## Contribuciones 🤝

¡Las contribuciones son bienvenidas! Si tienes alguna mejora o encuentras algún problema, por favor abre un issue o un pull request.


---

¡Gracias por usar este proyecto! 😃
