require('dotenv/config')
const express =  require('express');
const BullBoard = require('bull-board');
const Queue = require('./app/lib/Queue');
const UserController = require('./app/controllers/UserController');
const app = express();

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));
app.use(express.json());

app.post('/users',  UserController.store);
app.use('/admin/queues', BullBoard.UI);

app.listen(3333, () => {
    console.log('Server running on localhost: 3333');
});