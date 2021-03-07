
import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

export const HeroWiner = ({ modal, toggle, winer }) => {



    return (
        <Modal isOpen={modal} toggle={toggle}>
            {winer?.draw ?
                <>
                    <ModalHeader toggle={toggle}>Draw</ModalHeader>
                    <ModalBody className='bg-danger' style={{ height: '400px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h1 className='text-white'>Draw</h1>
                    </ModalBody>
                    <ModalBody>
                        <h2 className="text-center">there's not winner this time</h2>
                    </ModalBody>
                </>
                :
                <>
                    <ModalHeader toggle={toggle}>Winner</ModalHeader>
                    <img src={winer.image?.url} alt='winer' height='400' />
                    <ModalBody>
                        <h1 className='text-center'>
                            {winer?.name}
                        </h1>
                    </ModalBody>
                </>
            }


        </Modal>
    )
}
