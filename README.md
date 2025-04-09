# MovieFlix 🎥

MovieFlix is a mobile application built with [Expo](https://expo.dev) that allows users to explore popular movies, search for specific titles, and view detailed information about each movie. The app also tracks trending movies based on user searches.

## Features

- **Home Screen**: Displays trending and latest movies.
- **Search Functionality**: Search for movies by title with real-time suggestions.
- **Movie Details**: View detailed information about a movie, including genres, budget, revenue, and production companies.
- **Trending Movies**: Tracks and displays the most searched movies.
- **Profile and Saved Tabs**: Placeholder screens for user profile and saved movies.

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo Router**: For file-based routing.
- **Appwrite**: For backend services like database and authentication.
- **TMDB API**: For fetching movie data.
- **TailwindCSS**: For styling using the `nativewind` preset.

## Get Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   EXPO_PUBLIC_MOVIE_API_KEY=<your_tmdb_api_key>
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=<your_appwrite_project_id>
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=<your_appwrite_database_id>
   EXPO_PUBLIC_APPWRITE_COLLECTION_ID=<your_appwrite_collection_id>
   ```

3. **Start the App**:
   ```bash
   npx expo start
   ```

   You can open the app in:
   - [Expo Go](https://expo.dev/go)
   - Android Emulator
   - iOS Simulator

## File Structure

- **`app/`**: Contains all the screens and routing logic.
- **`components/`**: Reusable UI components like `SearchBar`, `MovieCard`, and `TrendingCard`.
- **`services/`**: API and backend service integrations.
- **`constants/`**: Stores static assets like icons and images.
- **`interfaces/`**: TypeScript interfaces for data models.

## Scripts

- **Start the app**:
  ```bash
  npm start
  ```
- **Reset the project**:
  ```bash
  npm run reset-project
  ```
- **Run tests**:
  ```bash
  npm test
  ```

## Learn More

To learn more about developing with Expo, check out the following resources:

- [Expo Documentation](https://docs.expo.dev/): Learn the fundamentals and advanced topics.
- [TMDB API Documentation](https://developer.themoviedb.org/docs): Understand how to fetch movie data.
- [Appwrite Documentation](https://appwrite.io/docs): Learn about backend services.

## Join the Community

- [Expo GitHub](https://github.com/expo/expo): Contribute to the Expo platform.
- [Discord Community](https://chat.expo.dev): Chat with other developers.

## License

This project is licensed under the MIT License.
