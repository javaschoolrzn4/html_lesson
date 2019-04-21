const str = "тестовая строка для проверки моей скорости набора"
let func = (str) => {
    str.split('').forEach(element => {
        console.log(element);
        window.onkeypress(element)
        
    });
    
}