function dientich() {
    var bankinh=parseFloat(document.getElementById('bankinh').value)
    var PI = 3.14;
    var dientich=(bankinh*bankinh*PI)
    document.getElementById('result').innerHTML= 'DIện tích hình tròn :' + dientich
}