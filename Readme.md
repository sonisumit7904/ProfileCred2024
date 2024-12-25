# LinkedIn API Integration

A modern web application that seamlessly integrates with LinkedIn's API to authenticate users and retrieve professional profile data. This documentation will guide you through the setup process and help you get started with the application.

## Prerequisites

Before beginning the installation process, ensure you have:

- Node.js (Version 14 or higher) and npm installed on your system
- A LinkedIn Developer account
- Basic familiarity with OAuth 2.0 authentication flow

## Installation

Follow these steps to set up the project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/linkedin-api-integration.git

# Navigate to project directory
cd linkedin-api-integration

# Install dependencies
npm install
```

## LinkedIn API Configuration

### Creating a LinkedIn Application

1. Navigate to the [LinkedIn Developer Portal](https://www.linkedin.com/developers/)
2. Sign in with your LinkedIn credentials
3. Click "Create App" and provide the following information:
   - Application name
   - Company name
   - Logo (if available)
   - Privacy policy URL
4. Under the Auth tab, configure:
   - OAuth 2.0 scopes
   - Redirect URLs (add: http://localhost:3000/auth/linkedin/callback)

### Setting Up Environment Variables

Create a `.env` file in your project root with the following configuration:

```plaintext
LINKEDIN_CLIENT_ID=your_client_id_here
LINKEDIN_CLIENT_SECRET=your_client_secret_here
LINKEDIN_REDIRECT_URI=http://localhost:3000/auth/linkedin/callback
SESSION_SECRET=your_session_secret_here
```

To generate a secure session secret, run:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Project Structure

```
linkedin-api-integration/
├── src/
│   ├── config/
│   │   └── linkedin.js
│   ├── routes/
│   │   └── auth.js
│   └── app.js
├── .env
├── .gitignore
└── package.json
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Authentication Flow

1. User clicks "Sign in with LinkedIn" button
2. User is redirected to LinkedIn's authentication page
3. After successful authentication, LinkedIn redirects back to your application
4. Application exchanges the authorization code for an access token
5. Application uses the access token to fetch user's profile data

## API Endpoints

### Authentication

```
GET /auth/linkedin
GET /auth/linkedin/callback
GET /auth/logout
```

### Profile Data

```
GET /api/profile
GET /api/connections
```

## Security Considerations

1. Store sensitive credentials only in environment variables
2. Never commit the `.env` file to version control
3. Implement rate limiting for API endpoints
4. Validate all incoming requests
5. Keep dependencies updated regularly

## Error Handling

The application implements comprehensive error handling for:

- Invalid LinkedIn API credentials
- Network failures
- Rate limiting
- Token expiration
- Invalid requests

## Development Guidelines

When contributing to this project:

1. Follow the established code style
2. Write clear commit messages
3. Add appropriate documentation
4. Include unit tests for new features
5. Update the changelog

## Troubleshooting

Common issues and solutions:

### Invalid Client ID
- Verify your LinkedIn application credentials
- Ensure the `.env` file contains correct values
- Check if the application is properly registered in LinkedIn Developer Portal

### Callback URL Mismatch
- Verify the redirect URI matches exactly in both LinkedIn Developer Portal and `.env`
- Check for trailing slashes
- Ensure protocol (http/https) matches

### Rate Limiting
- Implement proper caching
- Add delay between consecutive requests
- Monitor API usage

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Support

For additional support:

- Create an issue in the GitHub repository
- Consult the [LinkedIn API Documentation](https://learn.microsoft.com/en-us/linkedin/consumer/)
- Contact the development team