import {ConsumerGroup, ConsumerGroupOptions} from "kafka-node";
import {config} from "../env/environment";

export class KafkaConsumer {

    kafkaOptions: ConsumerGroupOptions = {
        kafkaHost: config.kafkaHost, // connect directly to kafka broker (instantiates a KafkaClient)
        batch: undefined, // put client batch settings if you need them
        groupId: config.kafkaGroupId,
        sessionTimeout: 15000,
        fromOffset: 'latest',
        encoding: 'utf8'
    };

    createConsumer() {
        return new ConsumerGroup(this.kafkaOptions, config.kafkaTopic);
    }

}
