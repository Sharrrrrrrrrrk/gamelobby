const firebaseConfig = {
  apiKey: "AIzaSyCo8StZeM0NRGi9XoTfmTCe_VovLt8nGjw",
  authDomain: "my-game-d7829.firebaseapp.com",
  databaseURL: "https://my-game-d7829-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-game-d7829",
  storageBucket: "my-game-d7829.firebasestorage.app",
  messagingSenderId: "1037507538095",
  appId: "1:1037507538095:web:622371a6f117d60e6bb85a"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();