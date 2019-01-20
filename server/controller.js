let allInfo = [];
let arrayOfItems = [
    {id: 1,
    senPartOne: 'The',
    senPartTwo: 'went to',
    senPartThree: 'to get',
    senPartFour: 'then',
    senPartFive: 'went home',
    wordHolderOne: 'NOUN',
    wordHolderTwo: 'PLACE',
    wordHolderThree: 'THING',
    wordHolderFour: 'NOUN',},
    {id: 2,
    senPartOne: 'The2',
    senPartTwo: 'went to2',
    senPartThree: 'to get2',
    senPartFour: 'then2',
    senPartFive: 'went home2',
    wordHolderOne: 'NOUN2',
    wordHolderTwo: 'PLACE2',
    wordHolderThree: 'THING2',
    wordHolderFour: 'NOUN2',},
    {id: 3,
    senPartOne: 'The3',
    senPartTwo: 'went to3',
    senPartThree: 'to get3',
    senPartFour: 'then3',
    senPartFive: 'went home3',
    wordHolderOne: 'NOUN3',
    wordHolderTwo: 'PLACE3',
    wordHolderThree: 'THING3',
    wordHolderFour: 'NOUN3',},
    {id: 4,
    senPartOne: 'The4',
    senPartTwo: 'went to4',
    senPartThree: 'to get4',
    senPartFour: 'then2',
    senPartFive: 'went home2',
    wordHolderOne: 'NOUN2',
    wordHolderTwo: 'PLACE2',
    wordHolderThree: 'THING2',
    wordHolderFour: 'NOUN2',},
    {id: 5,
    senPartOne: 'The5',
    senPartTwo: 'went to2',
    senPartThree: 'to get2',
    senPartFour: 'then2',
    senPartFive: 'went home2',
    wordHolderOne: 'NOUN2',
    wordHolderTwo: 'PLACE2',
    wordHolderThree: 'THING2',
    wordHolderFour: 'NOUN2',},
];

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    getInfo: (req, res) => {
        console.log(arrayOfItems)
        res.status(200).send(arrayOfItems)
    },
    addInfo: (req, res) => {
        const newInfo = {
            body: req.body.text,
        };
        
        allInfo.push(newInfo.body)
        
        res.status(200).send(allInfo)
    },
    updateInfo: (req, res) => {
        const responseInput = {
            resInput: req.body.text
        }

        arrayOfItems[0].senPartOne = responseInput.resInput
        console.log(arrayOfItems[0].senPartOne)
        res.status(200)
    }
} 