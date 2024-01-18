const inputForm = document.querySelector("#inputForm");
const userInfo = document.querySelector("#userInfo");

async function githubRespoAPI(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function renderUserInfo(username) {
  userInfo.innerHTML = "";

  const template = `
  <div>
  <tr>
    <td>${username.value}</td>
  </tr>
  </div>
  `;
  userInfo.innerHTML += template;
}

inputForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = event.target[0].value;

  try {
    const userInfoData = await githubRespoAPI(`https://api.github.com/users/${name}`);
    renderUserInfo(name);
    console.log(userInfoData);
  } catch (err) {
    console.log(err);
  }
});
