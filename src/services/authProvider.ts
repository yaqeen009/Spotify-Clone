// import { AuthProvider as OAuthProvider } from "react-oauth2-pkce";
// import type { ReactNode } from "react";


// interface ImportMetaEnv {
//     VITE_SPOTIFY_CLIENT_ID: string,
//     VITE_SPOTIFY_REDIRECT_URI: string,
//     VITE_SPOTIFY_USER_SCOPES: string,

// }
// interface ImportMeta {
//     readonly env: ImportMetaEnv;
// }


// const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
// const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI
// const scopes = import.meta.env.VITE_SPOTIFY_USER_SCOPES.split(" ")
// const authURL = "https://accounts.spotify.com/api/token"

// interface TAuthConfig {
//     clientId: string;
//     redirectUri:string;
//     scopes:string;
//     authURL: string
// }

// const authConfig: TAuthConfig = {
//     clientId: clientId,
//     redirectUri : redirectUri,
//     scopes:scopes,
//     authURL: authURL
// }

// export const AuthProvider = ({children}:{children: ReactNode}) => {
//   return (
//     <OAuthProvider authConfig = {authConfig}>
//       {children}
//     </OAuthProvider>
//   )
// }