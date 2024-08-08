import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Modal from "@mui/material/Modal";
import styles from './Modal.module.scss';
import { BsExclamationCircle } from "react-icons/bs";
import classNames from "classnames/bind";

const cx = classNames.bind();
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

function ModalBank({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} >
        <Box sx={{ "& > svg": { height: "80px", width: "80px" } }}>
          {" "}
          <BsExclamationCircle color="red" />
        </Box>
        <Typography className={cx("modal-modal-title")} variant="h3" component="h2" fontWeight='700'>
          Bạn cần đăng nhập
        </Typography>
        <Typography id="modal-modal-description" sx={{ m: 1 }}>
          Bạn cần đăng nhập để thêm các sản phẩm yêu thích
        </Typography>
        <Box display="flex" justifyContent="space-between" sx={{'& > *': {margin: '0 10px'}}}>
          <Button variant="contained" color="success">Đăng nhập</Button>
          <Button variant="contained" color="error">Không</Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalBank;
