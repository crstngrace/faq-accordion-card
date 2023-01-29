// Close other inactive faq
function toggleOnlyOneFAQ() {
  faqs.forEach((currentFAQ) => {
    currentFAQ.addEventListener('click', () => {
      faqs.forEach((faq) => {
        if (faq != currentFAQ) {
          faq.parentElement.removeAttribute('open');
        }
      });
    });
  });
}

const faqs = document.querySelectorAll('summary');
toggleOnlyOneFAQ(faqs);
