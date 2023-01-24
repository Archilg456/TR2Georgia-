"Use Strict"


document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const checkbox = document.getElementById("save");
    if (checkbox.checked) {
      const usernameValue = document.getElementById("usernameField2").value;
      Cookies.set("savedUsername", usernameValue);
    } else {
      Cookies.remove("savedUsername");
    }
  
    event.target.submit();
  });
  
  const savedUsernameValue = Cookies.get('savedUsername');
  
  if (savedUsernameValue) {
    document.getElementById("usernameField2").value = savedUsernameValue;
    document.getElementById("save").checked = true;
  };
    