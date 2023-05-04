exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    headless: true,
    capabilities: [
        {
        maxInstances: 5,
        browserName: 'firefox',
        acceptInsecureCerts: true,
        //'goog:chromeOptions': {
          //  args: ['headless', 'disable-gpu']
        //}
    },
    {
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        //'moz:firefoxOptions': {
          //  args: ['-headless']
       // }
    }
],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://8623bacb-7c21-42c7-9c79-5b0d182241ba.serverhub.practicum-services.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'chromedriver', 
        'geckodriver', 
        'intercept', 
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}