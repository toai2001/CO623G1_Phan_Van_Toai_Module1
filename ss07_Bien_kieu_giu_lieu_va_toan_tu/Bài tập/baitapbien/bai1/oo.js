function tinhdiem() {
    var diem_vat_li= parseInt(document.getElementById("vatly").value);
    var diem_hoa_hoc= parseInt(document.getElementById("hoahoc").value);
    var diem_sinh_hoc= parseInt(document.getElementById("sinhhoc").value);
    var tong_diem = diem_vat_li + diem_hoa_hoc + diem_sinh_hoc
    var diem_trung_binh = (diem_sinh_hoc+diem_vat_li+diem_hoa_hoc) /3
    document.getElementById('result').innerHTML='Tổng ĐIểm: ' + tong_diem
    document.getElementById('result2').innerHTML='Điểm trung bình: ' + diem_trung_binh
}

