

This API provides a list of users and their associated information, such as their WhatsApp number and session ID. It was built with **Node.js** and **Express.js**. You can access this API to retrieve user information in a structured JSON format.

## Features

- **Generate 100 users**: Each user has a `username`, `wa_number` (WhatsApp number), and `session_id`.
- **Return JSON data**: When you access the root endpoint (`/`), you will get a nicely formatted JSON response with user details.
- **Easy to set up**: The API can be run locally or deployed on a server with minimal setup.

## API Endpoints

### `GET /`

- **Description**: Retrieves the list of all 100 users with their respective details (username, WhatsApp number, session ID).
- **Response**: A JSON object containing the following information:
  - `title`: Name of the API
  - `bot_name`: Bot name
  - `creator`: Creator of the bot
  - `channel_link`: WhatsApp channel link
  - `channel_jid`: WhatsApp channel JID
  - `total_users`: An array containing 100 user objects with:
    - `username`: User's username (e.g., `user1`)
    - `wa_number`: User's WhatsApp number (e.g., `+255700000001`)
    - `session_id`: User's session ID (e.g., `session-1`)

### Example Response

```json
{
    "title": "joel xmd users sessions",
    "bot_name": "xmd bot",
    "creator": "joeljamestech",
    "channel_link": "https://whatsapp.com/channel/0029Vak2PevK0IBh2pKJPp2K",
    "channel_jid": "120363317462952356@newsletter",
    "total_users": [
        {
            "username": "user1",
            "wa_number": "+255700000001",
            "session_id": "session-1"
        },
        {
            "username": "user2",
            "wa_number": "+255700000002",
            "session_id": "session-2"
        },
        
    ]
}
```

Setup Instructions

Prerequisites

Node.js (version 14 or higher)

npm (Node Package Manager)


Installation

1. Clone the repository:

git clone https://github.com/your_username/JOEL-XMD-PRO-VISION-USERS


2. Install dependencies:

npm install


3. Create a .env file (optional) to configure environment variables:

PORT=3000



Running the Server

1. Start the server:

node index.js


2. Access the API:

Open your browser or use curl:

curl http://localhost:3000



3. You should see the JSON response containing user details.



Deployment

You can deploy this API to platforms like Heroku, Render, or Vercel. Ensure to set up environment variables for the port and other configurations if needed.

License

MIT License - Feel free to use and modify as per your need.

Contact

For any issues or suggestions, feel free to reach out to the creator at:

Creator's GitHub

WhatsApp Channel



---

Happy coding! 🚀

---
