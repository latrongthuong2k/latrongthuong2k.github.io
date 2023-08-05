// Lấy tất cả các phần tử main-image
const mainImages = document.querySelectorAll('.main-image');
// Đặt sự kiện lắng nghe khi chuột di chuyển vào main-image
mainImages.forEach((mainImage) => {
    mainImage.addEventListener('mouseenter', () => {
        // Hiển thị overlay
        mainImage.querySelector('.overlay2').style.opacity = 1;

        // // Hiển thị các sub-image và áp dụng hiệu ứng
        // subImages.forEach((subImage, index) => {
        //     setTimeout(() => {
        //         subImage.classList.add('active');
        //     }, 200 * index);
        // });
    });

    // Đặt sự kiện lắng nghe khi chuột di chuển ra khỏi main-image
    mainImage.addEventListener('mouseleave', () => {
        // Ẩn overlay
        mainImage.querySelector('.overlay2').style.opacity = 0;

        // // Ẩn các sub-image
        // subImages.forEach((subImage) => {
        //     subImage.classList.remove('active');
        // });
    });
});
function scrollToPosition() {
    var element = document.getElementById("Portfolio");
    window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
    });
}






