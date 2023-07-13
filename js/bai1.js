/**
 * ? Khối 1: input
 * soNgay
 * 
 * 
 * ? Khối 2: các bước xử lý
 * + Tạo form để người dùng nhập số ngày làm và hiển thị ra màn hình tổng số tiền lương.
 * + Công thức tính lương:
 *      tongSoLuong = soNgay * 100000
 *  * 
 * 
 * ? Khối 3: output
 * tongLuong
 * 
 *  */

document.getElementById("btnTongluong").onclick = function(){
    var soNgay = document.getElementById("soNgayLam").value;
    var tongSoLuong = soNgay * 100000;
    document.getElementById("tongLuong").innerHTML = "Tổng tiền lương: " + tongSoLuong.toLocaleString() + " VND";
}