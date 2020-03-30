import React from 'react';
import Modal from 'react-modal';
import { TitleWindow, TextWindow } from '../../pages/Main/styles';

export default function Window(props){
  return (
    <Modal isOpen={props.visible} onRequestClose={props.close}>
      <TitleWindow>{props.namehero}</TitleWindow>
      <p></p><hr/><br/>
      <TextWindow><div dangerouslySetInnerHTML={{ __html: props.content }}></div></TextWindow>
      
    </Modal>
  );
}  