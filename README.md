# React + TypeScript project

This project is a technical test implementation using React and TypeScript. The primary goal was to replicate the provided Figma design and meet the outlined functional requirements.

## 🚀 Main Features

1. **Authentication**
    - Login form with validation for both email and password fields.
    - The "Continue" button is enabled only when both fields are valid.
    - Credentials are stored in a JSON file.

2. **Home Screen**
    - Includes three main buttons: Search Data, Upload Data, and Try AI.
    - Each button leads to the respective functionality:
        - **Search Data**: A search bar with API integration and dynamic results.
        - **Upload Data**: A form with validation and dynamic field behavior.
        - **Try AI**: A basic chatbot interface using an AI service.

3. **Form Validation**
    - Required fields are marked with a red asterisk.
    - Dynamic behavior based on the selected project type:
        - If "Company Research" is selected, a "Companies" input field appears and becomes required.
    - "Select All" option for the checklist, enabling/disabling all options simultaneously.

4. **API Integration**
    - Financial Modeling Prep API implemented for the search functionality.
    - Dynamic search results update as each character is entered.

5. **AI Integration**
    - Basic chatbot implementation with history feature using an AI service (OpenAI API).

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: MUI
- **Hosting**: Vercel
- **APIs**:
    - Financial Modeling Prep API for search functionality
    - OpenAI API for chatbot functionality

## 📝 Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/oscarlolero/aura-technical-test
   cd aura-technical-test
    ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev[.env](.env)
   ```

## 🛠️ .ENV Configuration
    - Please create a .env file in the root directory with the following variables:
        - VITE_FINANCIAL_MODELING_PREP_API_KEY: Your Financial Modeling Prep API key
        - VITE_OPENAI_API_KEY: Your OpenAI API key
        - VITE_USER_EMAIL: The default user email
        - VITE_USER_PASSWORD: The default user password

## 🛠️ Additional Notes
- The project is hosted on Vercel and can be accessed [here](https://aura-technical-test.vercel.app)
