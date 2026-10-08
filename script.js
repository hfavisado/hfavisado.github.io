const today = new Date();
const currentYear = today.getFullYear();

document.querySelectorAll('[data-years-since]').forEach((element) => {
  const [startYear, startMonth] = element.dataset.yearsSince
    .split('-')
    .map(Number);
  const anniversaryHasPassed = today.getMonth() + 1 >= startMonth;
  element.textContent = currentYear - startYear - (anniversaryHasPassed ? 0 : 1);
});

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = currentYear;
});
