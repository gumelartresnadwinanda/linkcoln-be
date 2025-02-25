# Link Collection Application

## Overview

The Link Collection Application allows users to create and manage pages containing collections of links. Users can customize their pages, track analytics, and categorize links. The application supports different user types, including Admin, Paid User, and Free User, while also allowing guests to view links.

## Features

- User authentication and authorization
- Page creation and customization using templates
- Link management with categorization
- Analytics tracking for link clicks and page visits
- Soft delete functionality for data integrity
- Future support for multiple languages

## Database Design

The application uses PostgreSQL with the following tables:

- **Users**: Stores user information and classification.
- **Templates**: Stores templates for customizing pages.
- **Pages**: Stores pages created by users.
- **Categories**: Stores categories for links.
- **Links**: Stores links added to pages.
- **Link_Categories**: Manages the many-to-many relationship between Links and Categories.
- **Analytics**: Stores analytics data for link clicks and page visits.

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/link-collection-app.git
   ```
2. Navigate to the project directory:
   ```
   cd link-collection-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Configuration

1. Update the database configuration in `config/database.ts` with your PostgreSQL connection details.

### Running the Application

1. Run the migration to create the necessary tables:
   ```
   npm run migrate
   ```
2. Start the application:
   ```
   npm start
   ```

## Usage

- Access the application in your web browser at `http://localhost:3000`.
- Users can log in or register to create and manage their pages.
- Guests can view public pages and click on links.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
