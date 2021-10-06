const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt(
    {
        type: 'input',
        message="What is the project title?",
        name:'title',
        validate: (value)=>{ if(value){return true} else {return 'Need a value to continue'}},
    },

    {
        type: 'input',
        message="How do you install your app?",
        name:'intallation',
        validate: (value)=>{ if(value){return true} else {return 'Need a value to continue'}},
    },
    {
        type: 'input',
        message="Instructions for app?",
        name:'Instructions',
        validate: (value)=>{ if(value){return true} else {return 'Need a value to continue'}},
    },
    {
        type: 'input',
        message="How do you install your app?",
        name:'intallation',
        validate: (value)=>{ if(value){return true} else {return 'Need a value to continue'}},
    },
    {
        type: 'input',
        message="How do you use your app?",
        name:'Use of App',
        validate: (value)=>{ if(value){return true} else {return 'Need a value to continue'}},
    },
    {
        type: 'list',
        message="What license did you use?",
        name:'license',
        choices:['The MIT License', 'The GPL License', 'Apache License', 'NA'],
        validate: (value)=>{ if(value){return true} else {return 'Need a value to continue'}},
    },
    {
        type: 'input',
        message="Github Username",
        name:'Username',
        validate: (value)=>{ if(value){return true} else {return 'Need a value to continue'}},
    },

)
