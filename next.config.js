const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        API: 'http://localhost:1337',
        GRAPHQL: 'http://localhost:1337/graphql',
      }
    }
  }

  return {
    /* config options for all phases except development here */
    env: {
      API: 'https://api.improveatinvesting.com',
      GRAPHQL: 'https://api.improveatinvesting.com/graphql',
    }
  }
}