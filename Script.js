const $ = (id) => document.getElementById(id);

// Mobile navigation
const menuBtn = $("menuBtn");
const navLinks = $("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

// Percentage Calculator
$("percentBtn")?.addEventListener("click", () => {
  const value = Number($("percentValue").value);
  const total = Number($("percentTotal").value);
  const result = $("percentResult");

  if (!Number.isFinite(value) || !Number.isFinite(total) || total <= 0) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  result.textContent = `${((value / total) * 100).toFixed(2)}%`;
});

// Grade Calculator
$("gradeBtn")?.addEventListener("click", () => {
  const obtained = Number($("gradeObtained").value);
  const total = Number($("gradeTotal").value);
  const result = $("gradeResult");

  if (
    !Number.isFinite(obtained) ||
    !Number.isFinite(total) ||
    total <= 0 ||
    obtained < 0 ||
    obtained > total
  ) {
    result.textContent = "Enter marks between 0 and the maximum marks.";
   
