let habits = JSON.parse(localStorage.getItem("habits")) || [];

function render() {
  const container = document.getElementById("habits");
  container.innerHTML = "";
  habits.forEach((habit, i) => {
    const div = document.createElement("div");
    div.className = "habit";
    div.innerHTML = `
      <strong>${habit.name}</strong><br>
      Streak: ${habit.streak}
      <br><button onclick="completeHabit(${i})">Complete</button>
    `;
    container.appendChild(div);
  });
}

function addHabit() {
  const name = prompt("Habit name?");
  if (!name) return;
  habits.push({ name, streak: 0 });
  save();
}

function completeHabit(i) {
  habits[i].streak++;
  save();
}

function save() {
  localStorage.setItem("habits", JSON.stringify(habits));
  render();
}

render();
