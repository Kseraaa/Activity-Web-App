import React ,{useState} from "react";
import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faTimes, faCheck} from '@fortawesome/free-solid-svg-icons'


function Shpass(){

    const [show, setShow] = useState(false);

    const valid = (item, v_icon, inv_icon) => {
        let text = document.querySelector(`#${item}`);
        text.style.opacity = "1";

        let valid_icon = document.querySelector(`#${item} .${v_icon}`);
        valid_icon.style.opacity = "1";

        let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
        invalid_icon.style.opacity = "0";
    };

    const invalid = (item, v_icon, inv_icon) =>{
        let text = document.querySelector(`#${item}`);
        text.style.opacity = "0.5";

        let valid_icon = document.querySelector(`#${item} .${v_icon}`);
        valid_icon.style.opacity = "0";

        let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
        invalid_icon.style.opacity = "1";
    }

    const handleInputChange =e =>{
        const password =e.target.value;
        if (password.match(/[A-Z]/) != null ){
           valid('capital', 'fa-check', 'fa-times');
        }
        else {
            invalid("capital", 'fa-check', 'fa-times');
        }

        if(password.match(/[0-9]/) != null){
          valid('num', 'fa-check', 'fa-times');
        }
        else{
            invalid("num", 'fa-check', 'fa-times');
        }

        if(password.match(/[!@#$%^&*]/) != null){
            valid('char', 'fa-check', 'fa-times');
          }
          else{
              invalid("char", 'fa-check', 'fa-times');
          }

          if(password.length > 7) {
            valid('more8', 'fa-check', 'fa-times');
          }
          else{
              invalid("more8", 'fa-check', 'fa-times');
          }
    };

    const handleShowhide = () =>{
        setShow(!show);
    };

    return (
        <div className="pass">
            <div className="containerpass">
                <input 
                  type={show ? "text":"password"}
                  className="password"
                  placeholder="กรุณากรอกรหัส"
                  onChange={handleInputChange}
                />
               {
                   show ? (
                     <FontAwesomeIcon onClick={handleShowhide} icon={faEye} id="show_hide" />
                   ) : (
                     <FontAwesomeIcon onClick={handleShowhide} icon={faEyeSlash} id="show_hide" />
                   )
               }
                <p id="capital">
                    <FontAwesomeIcon className="fa-times icon" icon={faTimes}/>
                    <FontAwesomeIcon className="fa-check icon" icon={faCheck}/>
                    <span>อักษรตัวพิมใหญ่</span>
                </p>

                <p id="char">
                    <FontAwesomeIcon className="fa-times icon" icon={faTimes}/>
                    <FontAwesomeIcon className="fa-check icon" icon={faCheck}/>
                    <span>อักษรพิเศษ</span>
                </p>

                <p id="num">
                    <FontAwesomeIcon className="fa-times icon" icon={faTimes}/>
                    <FontAwesomeIcon className="fa-check icon" icon={faCheck}/>
                    <span>ตัวเลข</span>
                </p>

                <p id="more8">
                    <FontAwesomeIcon className="fa-times icon" icon={faTimes}/>
                    <FontAwesomeIcon className="fa-check icon" icon={faCheck}/>
                    <span>มีมากกว่า8ตัวอักษร</span>
                </p>

            </div>
        </div>
    );

}
export default Shpass;