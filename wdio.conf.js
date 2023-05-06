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
        browserName: 'chrome',
        acceptInsecureCerts: true,
        // 'goog:chromeOptions': {
        //     args: ['headless', 'disable-gpu']
        // }
    },
    {
        maxInstances: 5,
        browserName: 'firefox',
        acceptInsecureCerts: true,
        // 'moz:firefoxOptions': {
        //     args: ['-headless']
        // }
    }
],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://c5fd4e85-ba2e-49a0-97a6-0d33ef106b94.serverhub.practicum-services.com',
    waitforTimeout: 20000,
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
        timeout: 60000    //60000
    },
}