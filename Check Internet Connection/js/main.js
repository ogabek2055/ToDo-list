const popup = document.querySelector(".popup");
WifiIcon = document.querySelector(".icon i");
popupTitle = document.querySelector(".popup .title");
popupDesc = document.querySelector(".desc");
reconnectBtn = document.querySelector(".reconnect");

let isOnline = true,
  intervalId,
  timer = 10;

const checkConnection = async () => {
  try {
    //* Try to fetch random data API. If the status code is between
    //* 200 and 300, the network connection is considered online

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    isOnline = response.status >= 200 && response.status < 300;
  } catch (error) {
    console.log(error);
    isOnline = false; //* if there is an error, the connection is considered offline
  }
  timer = 10;
  clearInterval(intervalId);
  handlePopup(isOnline);
};
const handlePopup = (status) => {
  if (status) {
    //* if the status is true (online), update icon, title, and description accordingly
    WifiIcon.className = "uil uil-wifi";
    popupTitle.innerText = "Restored Connecttion";
    popupDesc.innerHTML =
      "Your device is now successfully connected to the internet.";
      popup.classList.add("online");
    return setTimeout(() => popup.classList.remove("show"), 2000);
  }
    //* if the status is false (offline), update icon, title, and description accordingly
  WifiIcon.className = "uil uil-wifi-slash";
  popupTitle.innerText = "Lost Connection";
  popupDesc.innerHTML = `Your network is unavailable. We will attempt to reconnect
    you in <b>10</b> seconds.`;
  popup.classList.add("show");
  popup.className = "popup show"
  intervalId = setInterval(() => {
    //* Set an interval to decrease the timer by 1 every second
    timer--;

    if (timer === 0) checkConnection(); //* If the timer reaches 0, check the connection again

    popup.querySelector(".desc b").innerText = timer;
  }, 1000);
};
//* only if isOnline is true, Check the  connection status every 3 seconds
setInterval(() => isOnline && checkConnection(), 3000);
reconnectBtn.addEventListener("click", checkConnection);
