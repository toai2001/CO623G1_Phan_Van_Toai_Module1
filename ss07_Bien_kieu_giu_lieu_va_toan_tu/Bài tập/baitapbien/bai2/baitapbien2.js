function chuyendoi() {
    var doC = parseFloat(document.getElementById("doC").value);
    var doF = (doC * 9/5) + 32;
    document.getElementById("result").innerHTML = "Giá trị độ F tương ứng: " + doF
}