/**
 * ? Khối 1: input
 * chieuDai , chieuRong
 * 
 * 
 * ? Khối 2: các bước xử lý
 * + Tạo form để người dùng nhập chiều dài, chiều rộng của hình chữ nhật và hiển thị ra màn hình chu vi và diện tích của hình chữ nhật đó
 * + Công thức quy đổi:
 *      chuVi = (chieuDai + chieuRong)*2
 *      dienTich = chieuDai * chieuRong
 *  * 
 * 
 * ? Khối 3: output
 * chuVi, dienTich
 * 
 *  */

document.getElementById("btnKetQua").onclick = function(){
    var chieuDai = document.getElementById("dai").value;
    var chieuRong = document.getElementById("rong").value;
    var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    var dienTich = chieuDai * chieuRong;
    document.getElementById("ketQua").innerHTML = "Diện tích bằng: " + dienTich + " cm" + "<span style='vertical-align: super; font-size: 10px;'>2</span>" + "<br>" + "Chu vi bằng: " + chuVi + " cm";
}