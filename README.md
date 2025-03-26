![Angular Embedded Login Banner](/src/assets/angular-banner.png)

# Angular Embedded Login Sample

This sample demonstrates how to add authentication to an Angular application using Frontegg's Embedded Login solution.

## Requirements

- [Node.js](https://nodejs.org)
- npm (comes with Node.js)
- A Frontegg account. [Sign up for free](https://portal.frontegg.com/signup).

## Setup

### 1. Configure Frontegg Application

1. Go to [Frontegg Portal](https://portal.frontegg.com/)
2. Configure your application settings
3. Get your Client ID and API key from the Frontegg Portal

### 2. Configuration

This project comes with pre-configured test credentials in `/config/sandboxContextOptions.ts`. These credentials are set up for demonstration purposes, allowing you to test the authentication flow immediately.

When deploying to production, make sure to replace these test credentials with your own Frontegg application credentials in `/config/sandboxContextOptions.ts`. Use environment variables to store your credentials.

### 3. Install Dependencies

Run the following commands:

```bash
npm install
```

### 4. Run the Application

To start the application, run:

```bash
ng serve
```

The app will be available at [http://localhost:4200](http://localhost:4200).

## What is Happening?

This application demonstrates:

- Implementing Frontegg's Embedded Login in Angular
- Managing user authentication state with Angular services
- Accessing user profile information through Frontegg's Angular SDK
