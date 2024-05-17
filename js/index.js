const form = document.querySelector("form");
const template = document.querySelector("template");

const data = [];

const updateUI = (users) => {
    data.forEach((user) => {
        const clone = template.content.cloneNode(true);

        const image = clone.querySelector("img");
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newUser = {
        id: Math.random() * new Date().getMilliseconds(),
        name: form.name.value,
        phoneNumber: form["phone-number"].value,
        userImage: form.image.value,
        email: form.email.value,
    };

    data.push(newUser);
});