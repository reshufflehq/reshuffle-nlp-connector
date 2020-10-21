### Reshuffle NLP Connector

[Code](https://github.com/reshufflehq/reshuffle-nlp-connector) |  [npm](https://www.npmjs.com/package/reshuffle-nlp-connector)

`npm install reshuffle-nlp-connector`

This is a [Reshuffle](https://dev.reshuffle.com) connector that provides language detection and sentiment analysis.
 

#### Connector events
N/A

#### Connector actions

##### sentiment

Detect the sentiment of some text

```typescript
async sentiment(text = ''): Promise<{ score: number; vote: string; emoji: string }>
```

###### Example
```js
const text = 'The text I want analyzed'
const connector = new NlpConnector()
const result = await connector.sentiment(text)
console.log('Score: ', result.score, ' Vote: ', result.vote, ' Emoji: ', result.emoji)
```

##### language

Detect the language of some text

```typescript
language(text = ''): { name?: string; code?: string }
```

###### Example
```js
const text = 'The text I want analyzed'
const connector = new NlpConnector()
const result = connector.language(text)
console.log('Name: ', result.name, ' Code: ', result.code)
```

