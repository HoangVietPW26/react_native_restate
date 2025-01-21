import {Client, Avatars, Account, OAuthProvider, Databases} from "react-native-appwrite"
import * as Linking from 'expo-linking'
import {openAuthSessionAsync} from 'expo-web-browser'

console.log(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
export const config = {
    platform: 'com.vietnguyen.restate',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!,
    galleriesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID!,
    reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID!,
    agentsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID!,
    propetiesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID!
  }


export const client = new Client

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)

export const avatar = new Avatars(client)
export const account = new Account(client)
export const database = new Databases(client)

export async function logIn() {
    try {
        const redirectUri = Linking.createURL('/')
        console.log(redirectUri)
        const response = await account.createOAuth2Token(OAuthProvider.Google, redirectUri)
        console.log('0000000')
        if (!response) throw new Error('Failed to login a')
        console.log("aaaaaa")
        const browserResult = await openAuthSessionAsync(response.toString(), redirectUri)
        console.log(browserResult)
        if (browserResult.type !== 'success') throw new Error('Failed to login b')
        console.log("bbbbbb")
        const url = new URL(browserResult.url)
        const secret  = url.searchParams.get('secret')?.toString()
        const userId = url.searchParams.get('userId')?.toString()

        if (!secret || !userId) throw new Error('Failed to login c')
        console.log("cccccc")
        const session = await account.createSession(userId, secret)  
        
        if (!session) throw new Error('Failed to login d')
        console.log("dddd")

        return true
    } catch (error) {
        console.error(error)
        return false
    }
}


export async function logout() {
    try {
      const result = await account.deleteSession("current");
      return result;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  
  export async function getCurrentUser() {
    try {
      const result = await account.get();
      if (result.$id) {
        const userAvatar = avatar.getInitials(result.name);
  
        return {
          ...result,
          avatar: userAvatar.toString(),
        };
      }
      return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}