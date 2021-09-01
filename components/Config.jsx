import React from "react"
import Image from 'next/image'
import wheel from "../public/wheel.svg"
import ModalConfig from "./ModalConfig";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styled from "@emotion/styled"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
padding: 10px;
`





const Config = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Container>
        <ModalConfig handleClose={handleClose}/>
    </Container>
  );
  return(
    <div>
      <Image
        className="wheel"
        onClick={handleOpen}
        src={wheel}
        alt="Config"
        width="30px"
        height="30px"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}

export default Config