import { SentimentAnalyzer } from 'node-nlp';

const sentiment = new SentimentAnalyzer({language: 'en'});
sentiment
.getSentiment('I hate cats')
.then(result => console.log(result));

sentiment
.getSentiment('I like cats')
.then(result => console.log(result));

sentiment
.getSentiment('Terence is gay')
.then(result => console.log(result));