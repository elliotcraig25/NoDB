let allInfo = [];
let currentIndex = 0;
let arrayOfItems = [
    {id: 1,
    currentItem: 0, 
    senPartOne: 'The',
    senPartTwo: 'went to',
    senPartThree: 'to get',
    senPartFour: 'then',
    senPartFive: 'home',
    wordHolderOne: '(Noun Here)',
    wordHolderTwo: '(Place Here)',
    wordHolderThree: '(Noun Here)',
    wordHolderFour: '(Past Tense Verb Here)',},
    {id: 2,
    currentItem: 0, 
    senPartOne: 'Me and my',
    senPartTwo: 'walked to',
    senPartThree: 'and ate',
    senPartFour: 'then',
    senPartFive: 'to the bathroom',
    wordHolderOne: '(Noun Here)',
    wordHolderTwo: '(Place Here)',
    wordHolderThree: '(Noun Here)',
    wordHolderFour: '(Past Tense Verb Here)',},
    {id: 3,
    currentItem: 0, 
    senPartOne: '',
    senPartTwo: 'was at',
    senPartThree: 'with',
    senPartFour: 'and they',
    senPartFive: 'together',
    wordHolderOne: '(Noun Here)',
    wordHolderTwo: '(Place Here)',
    wordHolderThree: '(Noun Here)',
    wordHolderFour: '(Past Tense Verb Here)',},
    {id: 4,
    currentItem: 0, 
    senPartOne: 'My',
    senPartTwo: 'went to',
    senPartThree: 'with my',
    senPartFour: 'and',
    senPartFive: '',
    wordHolderOne: '(Noun Here)',
    wordHolderTwo: '(Place Here)',
    wordHolderThree: '(Noun Here)',
    wordHolderFour: '(Past Tense Verb Here)',},
    {id: 5,
    currentItem: 0, 
    senPartOne: 'The',
    senPartTwo: 'who lives at',
    senPartThree: 'loves',
    senPartFour: 'and loves to',
    senPartFive: 'them',
    wordHolderOne: '(Noun Here)',
    wordHolderTwo: '(Place Here)',
    wordHolderThree: '(Noun Here)',
    wordHolderFour: '(Past Tense Verb Here)',}, 
];
let showOnSide = []

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
    protocolX: (req, res)=>{
        arrayOfItems = [];
        res.status(200)
    }
}  