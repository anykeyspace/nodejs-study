// аргументы передаются по цепочке
// обработчики срабатывают в порядке назначения

var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

// подписка на событие
server.on('request', function (request) {
    request.approved = true;
});

server.on('request', function (request) {
    console.log(request);
});

server.on('error', function (err) {
    // ...
});

// emit генерирует события
server.emit('request', {from: "Клиент"});

server.emit('request', {from: "Еще клиент"});

server.emit('error'); // throw TypeError
server.emit('error', new Error("Серверная ошибка"));

// получить обработчики
// emitter.listeners(event)
// количество обработчиков
// EventEmitter.listenerCount(emitter, event)