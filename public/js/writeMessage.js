const onSubmit = () => {
    const passcodeIn = document.querySelector("#passcode").value;
    const messageIn = document.querySelector("#message").value;

    console.log(passcodeIn);
    console.log(messageIn);

    const payload = {
        passcode: passcodeIn,
        message: messageIn
    };
    firebase.database().ref().push(payload);
}