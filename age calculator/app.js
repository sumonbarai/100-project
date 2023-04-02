const btn = document.getElementById("btn");
const userName = document.getElementById("userName");
const dob = document.getElementById("dob");
const targetDate = document.getElementById("targetDate");
const output = document.getElementById("output");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const user = userName.value;
  const userDobMilliseconds = Date.parse(dob.value);

  const userTargetDobMilliseconds = Date.parse(targetDate.value);
  if (!user) {
    output.innerText = "Please enter your name";
    output.style.color = "red";
    return;
  }
  if (!userDobMilliseconds) {
    output.innerText = "Please enter your date of birth.";
    output.style.color = "red";
    return;
  }

  const currentDate = new Date();

  let diff;
  if (!userTargetDobMilliseconds) {
    diff = currentDate.getTime() - userDobMilliseconds;
  } else {
    diff = userTargetDobMilliseconds - userDobMilliseconds;
  }
  console.log(userTargetDobMilliseconds);

  const ageDate = new Date(diff);

  const ageYear = ageDate.getFullYear() - 1970;
  const ageMonth = ageDate.getMonth();
  const ageDay = ageDate.getDate();
  if (ageDate < 1) {
    output.innerText =
      "Please enter your correct date of birth and age at the Date";
    output.style.color = "red";
    return;
  }
  const age = `${ageYear} years, ${ageMonth} months, and ${ageDay} days.`;
  output.innerText = `${user}, your age is ${age}`;
  output.style.color = "green";
});
