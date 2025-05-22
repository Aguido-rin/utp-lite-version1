
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const saveScheduleToFirestore = async (userId, schedule) => {
  try {
    const docRef = await addDoc(collection(db, 'schedules'), {
      userId,
      schedule,
      createdAt: new Date()
    });
    console.log('Horario guardado ID:', docRef.id);
  } catch (error) {
    console.error('Error al guardar horario:', error);
  }
};