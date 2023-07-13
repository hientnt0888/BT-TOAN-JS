/**
 * ? Khối 1: input
 *  soNhap
 * 
 * 
 * ? Khối 2: các bước xử lý
 * + Tạo form để người dùng nhập số có 2 chữ số và hiển thị ra màn hình kết quả tổng của hai ký số.
 * + Công thức tính:
 *      -Lấy số ở hàng chục:
 *          hangChuc = Math.floor(soNhap / 10)
 *      -Lấy số ở hàng đơn vị:
 *          hangDonVi = soNhap % 10
 *      -Tổng hai ký số:
 *          tongKySo = hangChuc + hangDonVi
 *  * 
 * 
 * ? Khối 3: output
 * tongKySo
 * 
 *  */

function tonghaikyso() {
    var soNhap = document.getElementById("soHaiChuSo").value;
    var hangChuc = Math.floor(soNhap / 10);
    var hangDonVi = soNhap % 10;
    var tongKySo = hangChuc + hangDonVi;
    console.log(tongKySo);

    if (soNhap >= 10 && soNhap < 100) {
        document.getElementById("tongHaiKySo").innerHTML = "Tổng hai ký số là: " + tongKySo;
    } else {
        document.getElementById("tongHaiKySo").innerHTML = "Số điền vào không hợp lệ";
    }
}
document.getElementById("btnTongKySo").onclick = tonghaikyso;
