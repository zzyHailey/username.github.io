function validateForm() {
    const form = document.getElementById("profile-form");
    const submitButton = document.getElementById("submit-button");
    const message = document.getElementById("messagePanel");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        const inputContainers = document.getElementsByClassName("input-container");
        let inputEmpty = false;

        for (const inputContainer of inputContainers) {
            const input = inputContainer.querySelector("input");
            if (!input || !input.value) {
                inputEmpty = true;
                break;
            }
        }

        if (inputEmpty) {
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.innerHTML = "Please fill in all fields";
        } else{
            
        }
            const age = document.getElementById("age").value;
            if (isNaN(age) || age === "") {
                message.style.backgroundColor = "red";
                message.style.color = "white";
                message.innerHTML = "Please enter a valid number in the age box.";
            } else {
                const hobby = document.getElementById("hobby").value;
                if (hobby.length > 30) {
                    message.style.backgroundColor = "red";
                    message.style.color = "white";
                    message.innerHTML = "Hobbies length has to be shorter than 30 characters";
                } else {
                    message.style.backgroundColor = "green";
                    message.style.color = "white";
                    message.innerHTML = "Registration successful!";
                }
            
        }
    });
}

validateForm();
