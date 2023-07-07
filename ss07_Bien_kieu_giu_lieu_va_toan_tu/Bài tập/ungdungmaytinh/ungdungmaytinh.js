function cong() {
    let so1 = parseInt(document.getElementById("so1").value)
    let so2 = parseInt(document.getElementById("so2").value)
    let tong = so1 + so2
    document.getElementById('result').innerHTML='Kết quả:' + tong


}
function tru() {
    let so1 = parseInt(document.getElementById("so1").value)
    let so2 = parseInt(document.getElementById("so2").value)
    let tru = so1 -so2
    document.getElementById('result').innerHTML='Kết quả:' + tru


}
function nhan() {
    let so1 = parseInt(document.getElementById("so1").value)
    let so2 = parseInt(document.getElementById("so2").value)
    let nhan = so1 * so2
    document.getElementById('result').innerHTML='Kết quả:' + nhan


}
function chia() {
    let so1 = parseInt(document.getElementById("so1").value)
    let so2 = parseInt(document.getElementById("so2").value)
    let chia = so1 / so2
    document.getElementById('result').innerHTML='Kết quả:' + chia


}