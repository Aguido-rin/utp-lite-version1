
import React, { useEffect, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Payments() {
  const [payments, setPayments] = useState([
    { item: "Matrícula", amount: 1200, dueDate: "2025-03-10", status: "Pagado" },
    { item: "Ciclo 1", amount: 2500, dueDate: "2025-04-01", status: "Por pagar" }
  ]);

  const savePaymentOffline = (payment) => {
    let pending = JSON.parse(localStorage.getItem('pendingPayments')) || [];
    pending.push(payment);
    localStorage.setItem('pendingPayments', JSON.stringify(pending));
    alert('Guardado offline. Se enviará cuando tengas conexión.');
    sendPendingPayments();
  };

  const sendPendingPayments = async () => {
    if (!navigator.onLine) return;

    const pending = JSON.parse(localStorage.getItem('pendingPayments')) || [];

    for (let payment of pending) {
      try {
        await addDoc(collection(db, 'payments'), payment);
        // Elimina pago pendiente después de guardar
        localStorage.setItem(
          'pendingPayments',
          JSON.stringify(JSON.parse(localStorage.getItem('pendingPayments')).filter(p => p.id !== payment.id))
        );
      } catch (err) {
        console.error('Error al enviar:', err);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Pagos</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Monto</th>
            <th>Vencimiento</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, i) => (
            <tr key={i}>
              <td>{payment.item}</td>
              <td>S/. {payment.amount.toFixed(2)}</td>
              <td>{payment.dueDate}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => window.history.back()}>Atrás</button>
    </div>
  );
}

export default Payments;