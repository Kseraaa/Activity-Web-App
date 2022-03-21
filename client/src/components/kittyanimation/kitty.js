import * as React from 'react';
import './kitty-style.css'

function Kittycat() {
    return(
        // ถ้าจะใช้ก็ก็อปเอานะ ถ้า import แมวไม่ขึ้น
            <div class="backcontainer">
                <div class="kitty">
                    <div class="face">
                        <div class="ear"></div>
                        <div class="eye"></div>
                        <div class="mouth">
                            <div class="nose"></div>
                            <div class="whisker-1"></div>
                            <div class="whisker-2"></div>
                        </div>
                        <div class="body">
                            <div class="hand">
                                <div class="hand-l"></div>
                                <div class="hand-r"></div>
                            </div>
                        </div>
                        <div class="tail"></div>
                    </div>
                    <div class="laptop">
                        <div class="logo"></div>
                    </div>
                </div>
            </div>
    );
}

export default Kittycat;