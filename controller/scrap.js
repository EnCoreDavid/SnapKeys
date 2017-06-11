const axios = require('axios');
const cheerio = require('cheerio');
const questionLibrary = require('../test/questions');
const EventEmitter = require("events").EventEmitter;

module.exports = (app, text) => {
    
    let section = text;
    if(text.length>100){
        section = text.substring(0,100);
    }
    section = section.replace(/\s/g, "%20");
    console.log(section);
    const cheggLink = `https://www.chegg.com/search/${section}/questions-and-answers?trackid=320802d1&strackid=2d555d86&event=button_submit#p=1`;
    // console.log('List link', listLink);
    // console.log('section', section);
    // axios.get(listLink)
    //     .then((res) => {
    //         const $ = cheerio.load(res);
    //         const singleLink = $(".item-anchor:first").attr("href");
    //         console.log('single link', singleLink);
    //     })
    //     .catch((err) => console.log('List err:', err));
    
    
   const result = questionLibrary.questions.filter(x => x.question === section);
   console.log('result:', result);
   const { answer } = result[0];
   const { key } = result[0];
//    console.log('key', key);
   let slugArry = []
   
    // return axios.get(`https://api.coursera.org/api/courses.v1/?q=search&query=${key}`)
    //     .then((res) => {
    //         // const courseraLinks = res.body.elements;
    //         // console.log('course:', res.data.elements[0].slug);
    //          slug = res.data.elements[0].slug;
    //          slugArry.push(slug);
    //         return slugArry;   
    //     })
    // const courseLink = `https://api.coursera.org/api/courses.v1/?q=search&query=${key}`;
    // var body = new EventEmitter()
    const getData = (res) => {
            // const courseraLinks = res.body.elements;
            // console.log('course:', res.data.elements[0].slug);
            body = res.data.elements[0].slug;
            //  body.emit('update');
            return body;
        }

    // body.on('update', function () {
    // console.log(body); // HOORAY! THIS WORKS!
    // });

    // return { courseLink, cheggLink } ;

    return new Promise ((resolve, reject) => {
         axios.get(`https://api.coursera.org/api/courses.v1/?q=search&query=${key}`)
            .then((res) => { 
                let body = res.data.elements[0].slug;
                const courseLink = `https://www.coursera.org/learn/${body}`;
                resolve({ body, courseLink, cheggLink });
             })
            .catch((err) => {
                reject(err);
            });
    });
}


