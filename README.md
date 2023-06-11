# Sprint 8 project

# The purpose of the project is to utilize Automated UI testing to test out a functionality seen in the Urban Routes website.  

# The technologies used for the tests is by utilizing VS code IDE to write JavaScript code and using the “WebdriverIO” framework. As well, DevTools was used to determine HTML elements and their tags. The technique to test and organize the code was by utilizing the Mocha library. In the coding structure, three files were developed to create the organization of the tests. The "page.js" file was created for the purpose to store reusable selectors from the website and to hold the functions that would interact with User Interface. In the "helper.js" file, it contains functions that generate valid input data to be used in the page.js functions. The "createAnOrder.e2e.js" file contains the function calls that are organized to test the functionality and to see if it has the expected result from the tests. 

# Instructions to run test 
# ------------------------------
# 1.  Open the terminal 
# 2.  Go to the project path                       ( Commnad: cd hm08-qa-us )
# 3.  install dependencies in the project folder   ( Command: npm install   )  
# 4.  set the test URL to wdio.conf.js file        (open file and add server URL to the baseURL: section) 
# 3.  Run the WebdriverIO  command                 ( Command: npm run wdio  )


