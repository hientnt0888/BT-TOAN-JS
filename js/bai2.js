/**
 * ? Khối 1: input
 *  number1, number2, number3, number4, number5
 * 
 * 
 * ? Khối 2: các bước xử lý
 * + Tạo form để người dùng nhập 5 số thực và hiển thị ra màn hình kết quả trung bình cộng của 5 số vừa nhập.
 * + Công thức tính :
 *      tbCong = (number1 + number2 + number3 + number4 + number) / 5
 *  * 
 * 
 * ? Khối 3: output
 * tbCong
 * 
 *  */

document.getElementById("btnTBC").onclick = function(){
    var number1 = document.getElementById("soThuNhat").value;
    var number2 = document.getElementById("soThuHai").value;
    var number3 = document.getElementById("soThuBa").value;
    var number4 = document.getElementById("soThuTu").value;
    var number5 = document.getElementById("soThuNam").value;
    var tbCong = (Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5)) / 5;
    document.getElementById("dTBCong").innerHTML = "Giá trị trung bình cộng là: " + tbCong;
}