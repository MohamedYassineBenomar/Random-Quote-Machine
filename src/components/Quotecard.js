import React, { useState, useEffect } from 'react';
import { newquote } from '../redux/slices/quotegeneratorslice';
import { useDispatch, useSelector } from 'react-redux';

function Quotecard() {
    const dispatch = useDispatch();
    const currentquote = useSelector(state => state.quotes.currentquote);
    const currentteller = useSelector(state => state.quotes.currentteller);

    const [randomColor, setRandomColor] = useState('rgb(239, 72, 81)');

    useEffect(() => {
        document.body.style.backgroundColor = randomColor;
    }, [randomColor]);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const changeColors = () => {
        const newColor = getRandomColor();
        setRandomColor(newColor);
    };

    const divStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '10px',
        color: randomColor,
        background: '#FFFFFF',
        fontSize: '28px',
        fontFamily: 'Georgia, serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    };

    const btnStyle = {
        background: randomColor,
        color: '#FFFFFF',
        borderRadius: '3px',
        border: 'none',
        padding: '8px 17px', 
    };

    const socialBtnStyle = {
        background: randomColor,
        color: '#FFFFFF',
        borderRadius: '3px',
        border: 'none',
        padding: '8px 17px',
        margin: '2px'
    };

    const BtnsContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    return (
        <div style={divStyle}>   
            <div>
                <p><strong>"</strong> {currentquote} <strong>"</strong> <br/><br/><em>{currentteller}</em> </p>
                <div style={BtnsContainerStyle}>
                    <div>
                        <a href="https://www.facebook.com">
                          <button style={socialBtnStyle}><i class="fab fa-facebook" fa-2x></i></button>
                        </a>
                        <a href="https://www.instagram.com">
                            <button style={socialBtnStyle}><i class="fab fa-instagram" fa-2x></i></button>
                        </a>
                    </div>
                    <div>
                        <button style={btnStyle} onClick={() => {dispatch(newquote()); changeColors()}}>New Quote</button>
                    </div>
                </div>    
            </div>  
        </div>
    );
}

export default Quotecard;
