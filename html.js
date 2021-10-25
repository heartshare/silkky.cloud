'use strict';
const { resolve } = require('upath');
const { Liquid } = require('liquidjs');
const { readdirSync, writeFileSync } = require('graceful-fs');

const engine = new Liquid({
    extname: '.liquid'
});

function renderHtml() {
    readdirSync(resolve(__dirname, './pages')).forEach(file => {
        engine.renderFile(resolve(__dirname, `./pages/${file}`)).then(html => {
            writeFileSync(resolve(__dirname, `./dist/${file.replace('.liquid', '.html')}`), html);
        });
    });
}

renderHtml();
