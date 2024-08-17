function showMessage() {
    const messageElement = document.getElementById('message');
    const sisterName = "didi"; // Customize this
    const yourName = "jai"; // Customize this

    const message = `
        Dear ${didi},

        On this special occasion of Raksha Bandhan, I want to take a moment to remind you of how much you mean to me.
        Our bond is precious, and I am truly grateful to have you as my sister.

        May this Raksha Bandhan bring you joy, happiness, and prosperity.
        Here’s to the beautiful memories we’ve shared and the many more to come!

        Happy Raksha Bandhan!

        With love,
        ${jai}
    `;

    messageElement.textContent = message;
    messageElement.style.opacity = 1;
}
