document.getElementById('random').onclick = () => {
    const x = ['Đoàn Thị Thảo Nhung', 'Nguyễn Phạm Hồng Ngọc', 'Nguyễn Hải Nam', 'Nguyễn Đình Hiếu'];
    const y = Math.round(Math.random()*3);
    document.getElementById("abc").innerHTML = x[y];
}