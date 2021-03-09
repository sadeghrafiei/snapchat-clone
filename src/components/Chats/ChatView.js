import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectImage } from '../../features/appSlice';
import './ChatView.css';

function ChatView() {
    const selectedImage = useSelector(selectImage)
    const history = useHistory();

    useEffect(() => {
        if(!selectImage){
            exit()
        }
    },[])

    const exit = () => {
        history.replace('/chats')
    }
    return (
        <div className="chatView">
            <img src={selectImage} onClick={exit} alt="" />
        </div>
    )
}

export default ChatView
