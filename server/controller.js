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
        const newInfo = {
            body: req.body.text,
        };

        allInfo.push(newInfo.body)
        res.status(200).send(allInfo)
    }
} 