import {KafkaConsumer} from "../kafka/kafka-consumer";
import {ConsumerGroup} from "kafka-node";
import {Socket} from 'socket.io';
import {Subject} from "rxjs";

var count = 0;

export class TweetHandlerConsumerService {

    public feed: Subject<any>;
    private kafkaConsumer: ConsumerGroup;

    constructor() {
        this.feed = new Subject<any>();
        this.kafkaConsumer = this.initKafka();

    }

    private initKafka(): ConsumerGroup {
        this.kafkaConsumer = new KafkaConsumer().createConsumer();
        this.kafkaConsumer.on("message", this.handleTwitterMsg.bind(this));
        return this.kafkaConsumer;
    }

    private handleTwitterMsg(msg: any) {
        count++;
        this.feed.next(msg);
    }

}
