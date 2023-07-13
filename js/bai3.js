/**
 * ? Khối 1: input
 * soUSD
 * 
 * 
 * ? Khối 2: các bước xử lý
 * + Tạo form để người dùng nhập số USD và hiển thị ra màn hình tổng số tiền được quy đổi sang VND.
 * + Công thức quy đổi:
 *      soVND = soUSD * 23500;
 *  * 
 * 
 * ? Khối 3: output
 * soVND
 * 
 *  */
document.getElementById("btnVND").onclick = function(){
    var soUSD = document.getElementById("USD").value;
    var soVND = soUSD * 23500;
    document.getElementById("VND").innerHTML = "Số tiền nhận được: " + soVND.toLocaleString() + " VND";
}