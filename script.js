function showSection(params) {
  document.querySelectorAll(".main-content > div").forEach((element) => {
    element.classList.add("hidden");
  });

  document.getElementById(params + "Section").classList.remove("hidden");
}

const schoolName = document.getElementById("school-name");
const sidebarName = document.getElementById("sidebar-name");
const schoolSlogan = document.getElementById("school-slogan");

window.onload = () => {
  const schoolSetting = JSON.parse(localStorage.getItem("schoolSetting"));

  if (schoolSetting) {
    schoolName.innerHTML = schoolSetting.schoolName;
    sidebarName.innerHTML = schoolSetting.schoolName;
    schoolSlogan.innerHTML = schoolSetting.schoolSlogan;
  } else {
    schoolName.innerHTML = "Home School";
    schoolSlogan.innerHTML = "Home School";
    schoolSlogan.innerHTML = "dddkkff dsfjfkfv  dddfkkj sdflkfjfk ";
  }

  const schoolSettings = document.getElementById("schoolSettings");

  schoolSettings.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputSchoolName = document.getElementById("inputSchoolName").value;
    const inputSchoolSlogan =
      document.getElementById("inputSchoolSlogan").value;
    const inputSchoolLogo = document.getElementById("inputSchoolLogo").value;

    const settingData = {
      schoolName: inputSchoolName,
      schoolSlogan: inputSchoolSlogan,
      schoolLogo: inputSchoolLogo,
    };

    localStorage.setItem("schoolSetting", JSON.stringify(settingData));

    schoolName.innerHTML = inputSchoolName;
    sidebarName.innerHTML = inputSchoolName;
    schoolSlogan.innerHTML = inputSchoolSlogan;
    schoolSettings.reset();
  });
};

const noticesList = document.getElementById("noticesList");

window.addEventListener("DOMContentLoaded", () => {
  renderNotices();
});

noticeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("noticeTitle").value;
  const content = document.getElementById("noticeContent").value;

  const newNotice = {
    title,
    content,
    id: Date.now(),
  };

  const existingNotices =
    JSON.parse(localStorage.getItem("schoolNotices")) || [];

  existingNotices.unshift(newNotice);

  localStorage.setItem("schoolNotices", JSON.stringify(existingNotices));

  noticeForm.reset();

  renderNotices();
});

function renderNotices() {
  const savedNotices = JSON.parse(localStorage.getItem("schoolNotices")) || [];

  if (savedNotices.length === 0) {
    noticesList.innerHTML = `
    <p>No Notices Available</p>`;
  }

  savedNotices.forEach((ele) => {
    //  console.log(ele);

    const div = document.createElement("div");
    div.classList.add("notice-item");

    div.innerHTML = `
    <h4> ${ele.title} </h4>
    <p> ${ele.content} </p>
    <small> 10/05/2025  </small>`;

    noticesList.appendChild(div);
    console.log(div);
    
  });
}


