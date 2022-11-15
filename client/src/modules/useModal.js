import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('#root');

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: '1',
    },
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: 0,
        background: 'transparent',
        width: 'min-content',
        height: '-webkit-fill-available'
    },
};

export const ModalHuge = () => {
    const [modal, setModal] = useState(false);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <>
            <p onClick={openModal} style={{ cursor: 'pointer' }}>{`<박스모델 보기>`}</p>
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <Img src="./images/portfolio/huge-modal-1.jpg" alt="box model" />
                <Img src="./images/portfolio/huge-modal-2.jpg" alt="box model" />
                <Img src="./images/portfolio/huge-modal-3.jpg" alt="box model" />
                <Img src="./images/portfolio/huge-modal-4.jpg" alt="box model" />
                <Img src="./images/portfolio/huge-modal-5.jpg" alt="box model" />
                <Img src="./images/portfolio/huge-modal-6.jpg" alt="box model" />
            </Modal>
        </>
    )
}

export const ModalFlag = () => {
    const [modal, setModal] = useState(false);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <>
            <p onClick={openModal} style={{ cursor: 'pointer' }}>{`<로직 보기>`}</p>
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <Img src="./images/portfolio/flag-modal.jpg" alt="logic" />
            </Modal>
        </>
    )
}

export const ModalVom = () => {
    const [modal, setModal] = useState(false);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <>
            <p onClick={openModal} style={{ cursor: 'pointer' }}>{`<플로우차트 보기>`}</p>
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <Img src="./images/portfolio/vom-modal-1.jpg" alt="flowchart" />
                <Img src="./images/portfolio/vom-modal-2.jpg" alt="flowchart" />
                <Img src="./images/portfolio/vom-modal-3.jpg" alt="flowchart" />
            </Modal>
        </>
    )
}

const Img = styled.img`
    height : 100%;
`;