import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id="signnav-button" onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal className="Log-Sign-Modal" onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;