let allInfo = [];

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
        console.log(allInfo)
        res.status(200).send(allInfo)
    },
    addInfo: (req, res) => {
        const index = allInfo[allInfo.length-1].id+1

        const newInfo = {
            body: req.body.text,
            index: index
        };

        allMessages.push(newInfo)
        res.status(200).send(allInfo)
    }
}