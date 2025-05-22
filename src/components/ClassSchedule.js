
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function ClassSchedule() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const loadSchedule = async () => {
      const q = query(collection(db, 'schedules'), where('userId', '==', 'test-user-id'));
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach(doc => data.push(doc.data()));
      setSchedule(data);
    };

    loadSchedule();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Horario de Clases</h2>
      {schedule.length === 0 ? (
        <p>No tienes horario guardado.</p>
      ) : (
        schedule.map((item, i) => (
          <div key={i}>
            <strong>{item.title}</strong><br/>
            {item.time}<br/>
            <a href={item.zoomLink} target="_blank" rel="noopener noreferrer">Zoom</a>
            <hr />
          </div>
        ))
      )}
      <button onClick={() => window.history.back()}>Atrás</button>
    </div>
  );
}

export default ClassSchedule;