
function createExpressServer(port, pathIndex, indexArchive){
    const express = require('express')
    const path = require('path');
    const app = express();
    const server = require('http').createServer(app)
    
    app.use(express.static(path.join(__dirname, pathIndex)))
    app.set('views', path.join(__dirname, pathIndex))
    app.engine('html', require('ejs').renderFile)
    app.set('view engine', 'html')
    
    app.use('/', (req, res) => {
        res.render(indexArchive);
    
    })
    server.listen(port)
    console.log('servidor iniciado na porta: '+port)
    
}
module.exports = { 
    createExpressServer()
}
