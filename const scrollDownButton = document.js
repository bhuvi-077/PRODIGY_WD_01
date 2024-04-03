const scrollDownButton = document.querySelector('.scroll-down-button');
const aboutMeSection = document.querySelector('.about-me');

scrollDownButton.addEventListener('click', () => {
  aboutMeSection.scrollIntoView({ behavior: 'smooth' });
});

// Show popup on hover over About Me section
const aboutMeContent = document.querySelector('.about-me-content');
const popup = document.querySelector('.popup');

aboutMeContent.addEventListener('mouseover', () => {
  popup.style.display = 'block';
});

aboutMeContent.addEventListener('mouseout', () => {
  popup.style.display = 'none';
});