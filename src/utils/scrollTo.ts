export const scrollToDownload = () => {
    scrollTo({
        top: document.getElementById('download')?.offsetTop,
        behavior: 'smooth'
    });
};