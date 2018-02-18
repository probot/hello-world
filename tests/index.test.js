// Requiring probot allows us to mock out a robot instance
const createProbot = require('probot')
// Nock is an HTTP mocking and expectations library
const nock = require('nock')

// Requiring our app
const app = require('..')

// Create a fixtures folder in your test folder
// Then put any larger testing payloads in there
const payload = require('./fixtures/issue.opened')

nock.disableNetConnect()
// nock.enableNetConnect('127.0.0.1')

describe('Hello World', () => {
  let probot

  beforeEach(() => {
    probot = createProbot({id: 1, cert: 'test'})
    probot.load(app)
  })

  it('comments on new issues', async () => {
    await probot.receive({ event: 'issues', payload })
  })
})
