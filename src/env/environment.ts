export const config = {
    env: process.env.STAGE,
    port: process.env.PORT || 8080,
    appName: process.env.APP_NAME || "kafka consumer",
    kafkaHost: "localhost:9092",
    kafkaTopic: "tweets",
    kafkaGroupId: "groupId"
};
