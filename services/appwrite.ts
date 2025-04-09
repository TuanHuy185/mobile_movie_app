import { Client, Databases, Query, ID } from "react-native-appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const databases = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
  try{
  const result = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
    Query.equal("searchTerm", query),
  ]);
  if(result.documents.length>0){
    const exitingMovie = result.documents[0];
    await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      exitingMovie.$id,
      {
        count: exitingMovie.count + 1,
      }
    );
  } else{
    await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
      searchTerm: query,
      movieId: movie.id,
      count: 1,
      title: movie.title,
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    });
  }
}
  catch (error) {
    console.log(error);
    throw error;
  }
};
