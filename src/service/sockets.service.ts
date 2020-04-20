// @ts-ignore
import socketio from 'socket.io';
import {TweetHandlerConsumerService} from "./tweet-handler-consumer.service";

export default (io: socketio.Server) => {
    let handler = new TweetHandlerConsumerService();

    io.on('connection', (socket) => {
        console.log('user connected');
        handler.feed.subscribe((msg) => {
            socket.emit("tweet", msg)
        })
    })
};
