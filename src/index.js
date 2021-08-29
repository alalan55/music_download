const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());


app.listen(3000, () => {
    console.log('server init')
})

app.get('/download', (req, res) => {

    try {
        let url = req.query.url;
        res.header('Content-Disposition', 'attachment; filename="song.mp3"');
    
        ytdl(url, { format: 'mp3'}).pipe(res)
        
    } catch (error) {
        res.send({message: error, status: 404})
    }
    

})