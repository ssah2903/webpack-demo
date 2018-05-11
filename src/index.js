function component() {
    var elmn = document.createElement('div');

    elmn.innerHTML = 'Welcome to Webpack';
    return elmn;
}
document.body.appendChild(component());

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);

iAmJavascriptES6();