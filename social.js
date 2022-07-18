const date = new Date();

const events = {
  "22/6/2022": [
    {
      name: "event1",
      link: "lonk ...",
    },
    {
      name: "event",
      link: "lonk ...",
    },
  ],
  "26/6/2022": [
    {
      name: "dancing programme at macquirie park",
      link: "link ...",
    },
  ],
  "19/6/2022": [
    {
      name: "dancing programme at macquirie park",
      link: "https://www.instagram.com",
    },
  ],
  "28/6/2022": [
    {
      name: "pk",
      link: "https://www.facebook.com/",
    },
  ],
};

const showEvents = (str) => {
  console.log(str);
};
const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  //working on my part

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();
  // console.log(firstDayIndex);

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    const fullDate = `${i}/${date.getMonth()}/${date.getFullYear()}`;

    const hasEvent = events[fullDate];
    const eventLength = hasEvent?.length;

    const today =
      i === new Date().getDate() && date.getMonth() === new Date().getMonth();

    let msg = "";
    if (hasEvent) {
      for (let i = 0; i < hasEvent.length; i++) {
        msg += `<li>
        <a href="${hasEvent[i]?.link}" target ="_blank"  >
        ${hasEvent[i]?.name}</a></li>`;
      }
    }

    days += `<div class=${today && "today"}>
    ${i}  <br />
    <ul>
    ${msg}
    <ul>
    
    </div>`;
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }
  monthDays.innerHTML = days;
};
renderCalendar();
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
