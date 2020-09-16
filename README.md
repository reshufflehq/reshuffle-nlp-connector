# reshuffle-nlp-connector

### Reshuffle NLP Connector

This connector provides language detection and sentiment analysis.

#### Connector actions

##### sentiment

Detect the sentiment of some text

```typescript
async sentiment(text = ''): Promise<{ score: number; vote: string; emoji: string }>
```

##### language

Detect the language of some text

```typescript
language(text = ''): { name?: string; code?: string }
```