import { Server } from 'socket.io';

import app from './app';
import connectDatabase from './Database/connectDB';

connectDatabase();

let usersCurrentInServer = [];

const io = new Server(app, {
    cors: {
        origin: 'http://localhost:3000',
    },
});

io.on('connection', (socket) => {
    socket.on('user_join', (data) => {
        if (!usersCurrentInServer.find((item) => item.name === data.name)) {
            usersCurrentInServer.push({
                name: data.name,
                id: socket.id,
            });
        }

        console.log(usersCurrentInServer);
    });

    socket.on('disconnect', () => {
        usersCurrentInServer = usersCurrentInServer.filter((item) => item.id !== socket.id);
        console.log(usersCurrentInServer);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`\n\n\nRunning on PORT 👉 http://localhost/${PORT} 🙉\n\n\n`);
});
