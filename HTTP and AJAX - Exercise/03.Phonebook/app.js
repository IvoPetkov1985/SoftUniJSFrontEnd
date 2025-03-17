function attachEvents() {
    const baseURL = "http://localhost:3030/jsonstore/phonebook";

    const createContactBtn = document.getElementById("btnCreate");
    const personInput = document.getElementById("person");
    const phoneInput = document.getElementById("phone");

    const loadBtn = document.getElementById("btnLoad");
    const phoneList = document.getElementById("phonebook");
    
    loadBtn.addEventListener("click", loadContacts);
    createContactBtn.addEventListener("click", addContact);
    
    async function addContact() {
        const personName = personInput.value;
        const phoneNumber = phoneInput.value;

        const contactObj = {
            person: personName,
            phone: phoneNumber
        };

        await fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(contactObj)
        });

        personInput.value = "";
        phoneInput.value = "";

        loadContacts();
    }

    async function loadContacts() {
        phoneList.innerHTML = "";

        const response = await fetch(baseURL);
        const allContacts = await response.json();

        const arrayOfContacts = Object.values(allContacts);

        for (const contactObj of arrayOfContacts) {
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";

            const liEl = document.createElement("li");
            liEl.textContent = `${contactObj.person}: ${contactObj.phone}`;

            deleteBtn.addEventListener("click", async () => {
                const id = contactObj._id;
                const contactURL = `${baseURL}/${id}`;

                await fetch(contactURL, {
                    method: "DELETE"
                });

                liEl.remove();
            })

            liEl.appendChild(deleteBtn);
            phoneList.appendChild(liEl);
        }
    }
}

attachEvents();