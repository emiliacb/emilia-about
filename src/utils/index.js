const toggleDarkMode = () => {
  const userPreferDark = localStorage.getItem('theme') === 'dark';
  localStorage.setItem('theme', !userPreferDark ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark', !userPreferDark);
};

export { toggleDarkMode };
