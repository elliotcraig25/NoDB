let allInfo = [];
let currentIndex = 0;
let arrayOfItems = [
    {id: 1,
    currentItem: 0, 
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
    currentItem: 0, 
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
    currentItem: 0, 
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
    currentItem: 0, 
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
    currentItem: 0, 
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
    updateCurrent: (req, res)=>{
        const {index} = req.body

        currentIndex = index + 1

        res.status(200).send(currentIndex);
    },
    updateA: (req, res)=>{
        const {text} = req.body;
        let parts = arrayOfItems[currentIndex]

        arrayOfItems[currentIndex]={
            id: parts.id,
            currentItem: parts.currentItem,
            senPartOne: parts.senPartOne,
            senPartTwo: parts.senPartTwo,
            senPartThree: parts.senPartThree,
            senPartFour: parts.senPartFour,
            senPartFive: parts.senPartFive,
            wordHolderOne: text,
            wordHolderTwo: parts.wordHolderTwo,
            wordHolderThree: parts.wordHolderThree,
            wordHolderFour: parts.wordHolderFour,
        };
        res.status(200).send(arrayOfItems);
    },
    updateB: (req, res)=>{
        const {text} = req.body;
        let parts = arrayOfItems[currentIndex]

        arrayOfItems[currentIndex]={
            id: parts.id,
            currentItem: parts.currentItem,
            senPartOne: parts.senPartOne,
            senPartTwo: parts.senPartTwo,
            senPartThree: parts.senPartThree,
            senPartFour: parts.senPartFour,
            senPartFive: parts.senPartFive,
            wordHolderOne: parts.wordHolderOne,
            wordHolderTwo: text,
            wordHolderThree: parts.wordHolderThree,
            wordHolderFour: parts.wordHolderFour,
        };
        res.status(200).send(arrayOfItems);
    },
    updateC: (req, res)=>{
        const {text} = req.body;
        let parts = arrayOfItems[currentIndex]

        arrayOfItems[currentIndex]={
            id: parts.id,
            currentItem: parts.currentItem,
            senPartOne: parts.senPartOne,
            senPartTwo: parts.senPartTwo,
            senPartThree: parts.senPartThree,
            senPartFour: parts.senPartFour,
            senPartFive: parts.senPartFive,
            wordHolderOne: parts.wordHolderOne,
            wordHolderTwo: parts.wordHolderTwo,
            wordHolderThree: text,
            wordHolderFour: parts.wordHolderFour,
        };
        res.status(200).send(arrayOfItems);
    },
    updateD: (req, res)=>{
        const {text} = req.body;
        let parts = arrayOfItems[currentIndex]

        arrayOfItems[currentIndex]={
            id: parts.id,
            currentItem: parts.currentItem,
            senPartOne: parts.senPartOne,
            senPartTwo: parts.senPartTwo,
            senPartThree: parts.senPartThree,
            senPartFour: parts.senPartFour,
            senPartFive: parts.senPartFive,
            wordHolderOne: parts.wordHolderOne,
            wordHolderTwo: parts.wordHolderTwo,
            wordHolderThree: parts.wordHolderThree,
            wordHolderFour: text,
        };
        res.status(200).send(arrayOfItems);
    },
}  