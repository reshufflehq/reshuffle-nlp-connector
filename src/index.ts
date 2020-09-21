import { Reshuffle, BaseConnector } from 'reshuffle-base-connector'
import { SentimentAnalyzer, Language } from 'node-nlp'

export default class NlpConnector extends BaseConnector<null, null> {
  constructor(app: Reshuffle, id?: string) {
    super(app, null, id)
  }

  private static emojis: {
    [key: string]: string
  } = {
    positive: '🙂',
    neutral: '😐',
    negative: '😡',
  }

  language(text = ''): { name?: string; code?: string } {
    const languages = new Language().guess(text)
    return 0 < languages.length
      ? { name: languages[0].language, code: languages[0].alpha2 }
      : { name: undefined, code: undefined }
  }

  async sentiment(text = ''): Promise<{ score: number; vote: string; emoji: string }> {
    const lang = this.language(text).code || 'en'
    const sa = new SentimentAnalyzer({ language: lang })
    const sn: { vote: string; score: number } = await sa.getSentiment(text)
    return {
      score: sn.score,
      vote: sn.vote,
      emoji: NlpConnector.emojis[sn.vote],
    }
  }
}

export { NlpConnector }
