import { ScrollSmoother } from 'gsap/ScrollSmoother';

export const scrollToDownload = () => {
  console.log('scrollToDownload called');
  const downloadElement = document.getElementById('download');
  console.log('Download element:', downloadElement);

  if (downloadElement) {
    // Use GSAP ScrollSmoother if available
    const smoother = ScrollSmoother.get();
    console.log('ScrollSmoother instance:', smoother);

    if (smoother) {
      console.log('Using ScrollSmoother to scroll');
      smoother.scrollTo(downloadElement, true, 'top top');
    } else {
      console.log('Using native smooth scroll');
      // Fallback to native smooth scroll
      downloadElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  } else {
    console.log('Download element not found');
  }
};
