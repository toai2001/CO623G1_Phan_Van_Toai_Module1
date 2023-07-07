function chuvi() {
    var bankinh=parseFloat(document.getElementById('bankinh').value)
    var PI = 3.14;
    var dientich=(bankinh * 2 * PI )
    document.getElementById('result').innerHTML= 'Chu vi Hình Tròn:' + dientich
}