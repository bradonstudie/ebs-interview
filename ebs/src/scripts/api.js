const BASE_URL = 'https://elite-dev-test-api.azurewebsites.net/api';

const getContacts = async () => fetch(`${BASE_URL}/Contact`, { method: 'GET' })
                                .then(res => res.json());

const createContact = async (contact) => {
  return await fetch(`${BASE_URL}/Contact`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
  .then(res => res.json());
}

const updateContact = async (contact) => {
  return await fetch(`${BASE_URL}/Contact/${contact.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: contact.name, email: contact.email })
  })
  .then(res => res.json());
}

const deleteContact = async (id) => {
  return await fetch(`${BASE_URL}/Contact/${id}`, {
    method: 'DELETE',
  })
  .then(res => res.json());
}

export { getContacts, createContact, updateContact, deleteContact };

