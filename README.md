# Simple TMDB App (React + Typescript)

This is a simple app that retrieves a list of movies by title via the TMDB movie search API.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/weinnandhasanion/tmdb-app-react-ts.git
cd tmdb-app-react-ts
npm install
# or
yarn
```

### Using the TMDB API Keys

```bash
cp .env.copy .env
```

Update the newly created `.env` file and replace the placeholders with the actual TMDB API keys:

```
VITE_TMDB_API_KEY=<Enter actual API key here>
VITE_TMDB_READ_ACCESS_TOKEN=<Enter actual access token here>
```

### Running the App

Once the actual API keys are added, start the development server:

```bash
npm run dev
# or
yarn dev
```

Then open your browser and go to `http://localhost:5173`.
