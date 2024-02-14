import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAbNDxVpZR8QyTP052CVfl6C3krj_7E4qE',
  authDomain: 'scratchy-leaderboard.firebaseapp.com',
  projectId: 'scratchy-leaderboard',
  storageBucket: 'scratchy-leaderboard.appspot.com',
  messagingSenderId: '278611233682',
  appId: '1:278611233682:web:9e592fa9501261864acf4b',
  measurementId: 'G-GERG3MNYS7',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default class Firebase {
  constructor() {}
  async add(data) {
    try {
      const docRef = await addDoc(collection(db, 'leaderboard'), {
        name: data.name,
        time: data.time,
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  async load() {
    const leaderboardData = []
    const querySnapshot = await getDocs(collection(db, 'leaderboard'))
    querySnapshot.forEach((doc) => {
      leaderboardData.push({
        name: doc.data().name,
        time: doc.data().time,
      })
    })
    return leaderboardData
  }
}
