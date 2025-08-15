export const scrollToSection = (href) => {
  if (typeof window !== "undefined") {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
