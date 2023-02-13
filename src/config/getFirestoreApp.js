import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-CG-4J194gRUHVMnUeqLcFyuFv2Iwc0k",
  authDomain: "proyecto-final-react-f5bde.firebaseapp.com",
  projectId: "proyecto-final-react-f5bde",
  storageBucket: "proyecto-final-react-f5bde.appspot.com",
  messagingSenderId: "705426741934",
  appId: "1:705426741934:web:f2232ab3f31b554580eb3f"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}