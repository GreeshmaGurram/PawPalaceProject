let mainContainerSectionEl = document.getElementById("mainContainerSection");
let myAccountSectionEl = document.createElement("div");
myAccountSectionEl.id = "myAccountSection";
myAccountSectionEl.classList.add("p-3", "d-block");

function loginPage() {
    mainContainerSectionEl.textContent = "";
    myAccountSectionEl.classList.add("d-none");
    let headingEl = document.createElement("h1");
    headingEl.classList.add("myAccount-heading", "pt-2", "pb-3");
    headingEl.textContent = "Login or Signup";
    myAccountSectionEl.appendChild(headingEl);
    let inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.placeholder = "Mobile Number";
    inputEl.classList.add("p-2", "d-block", "mt-2", "mb-3");
    myAccountSectionEl.appendChild(inputEl);
    let paraEl = document.createElement("p");
    paraEl.textContent = "By continuing, I agree to the Terms of Use & Privacy Policy";
    paraEl.classList.add("mt-4", "mb-2");
    myAccountSectionEl.appendChild(paraEl);
    let buttonEl = document.createElement("button");
    buttonEl.textContent = "CONTINUE";
    buttonEl.classList.add("myAccount-button", "btn", "d-block", "mt-2", "mb-4");
    myAccountSectionEl.appendChild(buttonEl);
    mainContainerSectionEl.appendChild(myAccountSectionEl);
}