import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCdp5dr-ngIDwxZ4-oYKZNuE2VpKYNDsqA",
  authDomain: "imageuploaddb-51556.firebaseapp.com",
  projectId: "imageuploaddb-51556",
  storageBucket: "gs://imageuploaddb-51556.appspot.com",
  messagingSenderId: "558582007134",
  appId: "1:558582007134:web:c3b38aee85518328233bcf"
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)
