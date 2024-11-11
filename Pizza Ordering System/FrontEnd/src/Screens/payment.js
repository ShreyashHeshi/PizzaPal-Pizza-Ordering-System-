import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('COD');
    const history = useHistory(); // Initialize useHistory

    const handlePayment = () => {
        if (paymentMethod === 'COD') {
            toast.success("Cash on Delivery selected. Your order is being processed!", {
                position: "top-center",
                autoClose: 2000,
            });
        } else if (paymentMethod === 'Online') {
            toast.success("Online Payment selected. Your order is being processed!", {
                position: "top-center",
                autoClose: 2000,
            });
        } else {
            toast.error("Please select a payment method.", {
                position: "top-center",
                autoClose: 2000,
            });
            return;
        }

        // Redirect to Thank You page after a slight delay to allow the toast message to show
        setTimeout(() => {
            history.push('/thank-you'); // Use history.push instead of navigate
        }, 2500);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Payment Page</h2>
            <div style={styles.content}>
                <p>Select Payment Method:</p>
                <div style={styles.paymentOptions}>
                    <label style={styles.label}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="COD"
                            checked={paymentMethod === 'COD'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Cash on Delivery
                    </label>
                    <label style={styles.label}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="Online"
                            checked={paymentMethod === 'Online'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Online Payment
                    </label>
                </div>
                <button style={styles.button} onClick={handlePayment}>
                    Pay Now
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

// Simple styles for the page
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    header: {
        fontSize: '2rem',
        marginBottom: '2rem',
    },
    content: {
        textAlign: 'center',
    },
    paymentOptions: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px',
    },
    label: {
        marginBottom: '10px',
        fontSize: '1rem',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Payment;
