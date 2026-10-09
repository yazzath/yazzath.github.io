/* stage 7·5b · slide: s6-add-dish · indicator 7 · final · end state */
/* script.js — runs on every page */

/* ===== 1. The opening-hours rule (§3) ===== */

function isOpen(hour) {
  return hour >= 11 && hour < 22;
}

/* ===== 2. Show today's status in the header (§3) ===== */

const openStatus = document.querySelector("#open-status");
const hourNow = new Date().getHours();

if (isOpen(hourNow)) {
  openStatus.textContent = "Open now · until 22:00";
  openStatus.classList.add("open");
} else {
  openStatus.textContent = "Closed now · opens at 11:00";
  openStatus.classList.add("closed");
}
