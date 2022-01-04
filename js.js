

inputly = prompt("nhap diem ly");
inputhoa = prompt("nhap diem hoa");
inputsinh = prompt("nhap diem sinh");

let ly = parseInt(inputly);
let hoa = parseInt(inputhoa);
let sinh = parseInt(inputsinh);
let diemtrungbinh = (ly + hoa + sinh) / 3
let tongdiem = ly + hoa + sinh
document.write("diem trung binh cua ban la:" + diemtrungbinh);

document.write("tong diem cua ban la:" + tongdiem);