import { ConversationList } from "../chat/conversationList.js";

class Chat {
  container = document.createElement("div");
  btnLogout = document.createElement("button");

  conversationList = new ConversationList();

  constructor() {
    this.container.appendChild(this.conversationList.container);

    // this.container.innerHTML = "Chat";

    // this.btnLogout.innerHTML = "Log out";
    // this.btnLogout.addEventListener("click", this.handleLogout);

    // this.container.appendChild(this.btnLogout);
  }

  handleLogout = (e) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Sign out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };
}

export { Chat };
