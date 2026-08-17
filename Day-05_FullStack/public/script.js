const userForm = document.getElementById("userForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");

const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");

const message = document.getElementById("message");

const loadUsersBtn = document.getElementById("loadUsersBtn");
const usersContainer = document.getElementById("usersContainer");


// ===============================
// EDITING USER ID
// ===============================

let editingUserId = null;


// ===============================
// ADD / UPDATE USER
// ===============================

userForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const user = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        course: courseInput.value.trim()
    };

    try {

        let response;

        // ===============================
        // UPDATE USER
        // ===============================

        if (editingUserId) {

            response = await fetch(
                `/users/${editingUserId}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(user)
                }
            );

        }

        // ===============================
        // ADD USER
        // ===============================

        else {

            response = await fetch(
                "/users",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(user)
                }
            );

        }

        const data = await response.json();

        if (!response.ok) {

            throw new Error(
                data.error ||
                data.message ||
                "Operation failed"
            );

        }


        // ===============================
        // SUCCESS MESSAGE
        // ===============================

        if (editingUserId) {

            message.textContent =
                "User updated successfully!";

        }

        else {

            message.textContent =
                "User added successfully!";

        }


        // ===============================
        // RESET FORM
        // ===============================

        resetForm();


        // ===============================
        // RELOAD USERS
        // ===============================

        loadUsers();

    }

    catch (error) {

        console.error(
            "Add / Update User Error:",
            error
        );

        message.textContent =
            "Failed to save user.";

    }

});


// ===============================
// LOAD USERS
// ===============================

async function loadUsers() {

    try {

        const response = await fetch("/users");

        const users = await response.json();

        if (!response.ok) {

            throw new Error(
                users.error ||
                "Failed to load users"
            );

        }


        usersContainer.innerHTML = "";


        if (users.length === 0) {

            usersContainer.innerHTML =
                "<p>No users found.</p>";

            return;

        }


        users.forEach(user => {

            const userCard =
                document.createElement("div");

            userCard.className =
                "user-card";


            userCard.innerHTML = `

                <h3>
                    ${user.name}
                </h3>

                <p>
                    Email: ${user.email}
                </p>

                <p>
                    Course: ${user.course}
                </p>

                <button class="edit-btn">
                    Edit
                </button>

                <button class="delete-btn">
                    Delete
                </button>

            `;


            // ===============================
            // EDIT USER
            // ===============================

            const editBtn =
                userCard.querySelector(".edit-btn");


            editBtn.addEventListener(
                "click",
                () => {

                    editingUserId =
                        user._id;


                    nameInput.value =
                        user.name;

                    emailInput.value =
                        user.email;

                    courseInput.value =
                        user.course;


                    submitBtn.textContent =
                        "Update User";

                    cancelBtn.style.display =
                        "inline-block";


                    message.textContent =
                        `Editing ${user.name}`;


                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }
            );


            // ===============================
            // DELETE USER
            // ===============================

            const deleteBtn =
                userCard.querySelector(".delete-btn");


            deleteBtn.addEventListener(
                "click",
                async () => {

                    const confirmDelete =
                        confirm(
                            `Are you sure you want to delete ${user.name}?`
                        );


                    if (!confirmDelete) {

                        return;

                    }


                    try {

                        const response =
                            await fetch(
                                `/users/${user._id}`,
                                {
                                    method: "DELETE"
                                }
                            );


                        const data =
                            await response.json();


                        if (!response.ok) {

                            throw new Error(
                                data.error ||
                                data.message ||
                                "Failed to delete user"
                            );

                        }


                        message.textContent =
                            "User deleted successfully!";


                        loadUsers();

                    }

                    catch (error) {

                        console.error(
                            "Delete User Error:",
                            error
                        );


                        message.textContent =
                            "Failed to delete user.";

                    }

                }
            );


            usersContainer.appendChild(
                userCard
            );

        });

    }

    catch (error) {

        console.error(
            "Load Users Error:",
            error
        );


        usersContainer.innerHTML =
            "<p>Failed to load users.</p>";

    }

}


// ===============================
// CANCEL EDIT
// ===============================

cancelBtn.addEventListener(
    "click",
    () => {

        resetForm();

        message.textContent =
            "Edit cancelled.";

    }
);


// ===============================
// RESET FORM
// ===============================

function resetForm() {

    editingUserId = null;

    userForm.reset();

    submitBtn.textContent =
        "Add User";

    cancelBtn.style.display =
        "none";

}


// ===============================
// LOAD USERS BUTTON
// ===============================

loadUsersBtn.addEventListener(
    "click",
    loadUsers
);