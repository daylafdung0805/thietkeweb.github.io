document.querySelector(".feedback_section").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn gửi biểu mẫu

    // Hiển thị thông báo gửi thành công
    document.getElementById("success-message").style.display = "block";

    // Đặt lại các trường của biểu mẫu
    document.querySelector(".feedback_section").reset();
});


$(document).ready(function() {
    $('#toggle-menu').click(function() {
        $('#menu li:not(:first-child)').slideToggle(); // Chỉ toggle các mục menu trừ logo
    });
});



