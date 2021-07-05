const fs = require('fs')

const writeHTML = fileContent => {
    return new Promise((resolve, reject)=> {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err){
                console.log('Error occured')
                reject (err);
                return
            }
            resolve ({
                ok: true, 
                message: 'HTML Created!'
            });
        });
    });
};

const copyStyle = () => {
    return new Promise((resolve, reject) => {
        fs.copyStyle('./dist/style.css', err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: 'Styling Applied'
        });
    });
});
};

module.exports = {writeHTML, copyStyle}