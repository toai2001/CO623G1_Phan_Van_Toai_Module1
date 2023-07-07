function convertMoney() {
    let amount = parseInt(document.getElementById("Amount").value);
    let fromcurecy = document.getElementById("fromcurrency").value;
    let tocurrency = document.getElementById("tocurrency").value;

    if (fromcurecy == "USD" && tocurrency == "VND") {
        document.getElementById("result").innerHTML = "Kết quả: " + amount * 23000 + " VND";
        console.log("Kết quả: " + amount * 23000 + " VND");
    } else {
        if (fromcurecy == "VND" && tocurrency == "USD") {
            document.getElementById("result").innerHTML = "Kết quả: " + amount / 23000 + " USD";
        }
    }
}