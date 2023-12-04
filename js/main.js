function Main() {
    document.getElementById('HERE').innerHTML =
    "<div id='Main' class='BodyWrapper'>" +
        "<div id='Main_1' class='Contents'"  +
            "style='display: flex; flex-direction: column; justify-content: center; align-items: center;'>" +
            "<p>당신의 밤을</p>" +
            "<p>모기보단 포근하게</p>" +
            "<p onclick='Store()' style='font-size: 20px; color: white; font-weight: bold; background-color: #FE9367; margin: 0; padding: 20px; border-radius: 50px;'>" +
                "S H O P N O W</p>" +
        "</div>" +
        "<div class='Contents' style='height: 70vh;background-color: #e7e9e1; display: flex; flex-direction: column; justify-content: center; align-items: center;'>" +
            "<p style='font-size: 25px; font-weight: bold; margin-top: 0;'>" +
                "무더운 여름 모기에 물려 고생하는 아이 보기 마음 아프시죠.</p>" +
            "<p style='font-size: 25px; font-weight: bold; margin-top: 0;'>" +
                "모기에게서 우리 아이를 지키는 가장 완벽한 방법</p>" +
            "<p style='font-size: 25px; font-weight: bold; margin-top: 0;'>" +
                "이번 여름, 'MOMO'와 함께 공기로 모기를 차단해봐요.</p>" +
        "</div>" +
        "<div class='Contents' style='height: 180vh;'>" +
            "<img src='./img/background_2.png'/>" +
        "</div>" +
        "<div class='Contents' style='height: 40vh; background-color: #D3D6C4; display: flex; align-items: flex-end; padding-bottom: 10vh;'>" +
            "<div style='width: 60vw; font-size: 15px; color: white; display: flex; flex-direction: column;'>" +
                "<p style='margin-top: 0;'>(주) 포근</p>" +
                "<p style='margin-top: 0;'>사업자 등록 번호 : 657-22-01879 | 대표 : 도유빈</p>" +
                "<p style='margin-top: 0;'>21344 인천광역시 부평구 충선로203번길 16, 501호(삼산동, 창성프라자)</p>" +
                "<p style='margin-top: 0;'>고객센터 : 032-0000-0000</p>" +
            "</div>" +
        "</div>" +
    "</div>";
}

function Introduction() {
    document.getElementById('HERE').innerHTML =
    "<div id='Introduction' class='BodyWrapper' style='text-align: center;'>" +
        "<img src='./img/Introduction/001.png' style='margin-top: 10vh;'/>" +
        "<img src='./img/Introduction/002.png' />" +
        "<img src='./img/Introduction/003.png' />" +
        "<img src='./img/Introduction/004.png' />" +
        "<img src='./img/Introduction/005.png' />" +
        "<img src='./img/Introduction/006.png' />" +
        "<img src='./img/Introduction/007.png' />" +
        "<img src='./img/Introduction/008.png' />" +
        "<img src='./img/Introduction/009.png' />" +
        "<img src='./img/Introduction/010.png' />" +
        "<img src='./img/Introduction/011.png' />" +
        "<img src='./img/Introduction/012.png' />" +
        "<img src='./img/Introduction/013.png' />" +
        "<img src='./img/Introduction/014.png' />" +
        "<img src='./img/Introduction/015.png' />" +
        "<img src='./img/Introduction/016.png' />" +
        "<img src='./img/Introduction/017.png' style='margin-bottom: 10vh;'/>" +
        "<div class='Contents' style='width : 100vw; height: 40vh; background-color: #D3D6C4; text-align: start; display: flex; align-items: flex-end; padding-bottom: 10vh;'>" +
            "<div style='width: 60vw; font-size: 15px; color: white; display: flex; flex-direction: column;'>" +
                "<p style='margin-top: 0;'>(주) 포근</p>" +
                "<p style='margin-top: 0;'>사업자 등록 번호 : 657-22-01879 | 대표 : 도유빈</p>" +
                "<p style='margin-top: 0;'>21344 인천광역시 부평구 충선로203번길 16, 501호(삼산동, 창성프라자)</p>" +
                "<p style='margin-top: 0;'>고객센터 : 032-0000-0000</p>" +
            "</div>" +
        "</div>" +
    "</div>";
}

function Store() {
    document.getElementById('HERE').innerHTML =
    "<div id='Store'style='display: flex; justify-content: center; margin-top: 5vh; margin-bottom: 5vh;'>" +
    "        <div style='flex-direction: column;'>" +
    "            <table style='width: 70vw; table-layout: fixed; word-break: break-all;'>" +
    "                <tr style='font-size: 23px; background-color: #d8dad2; height: 8vh; border: 1px solid white;'>" +
    "                    <th style='border: 1px solid white;'>전체 상품</th>" +
    "                    <th style='border: 1px solid white;'>모모</th>" +
    "                    <th style='border: 1px solid white;'>부속품</th>" +
    "                    <th style='border: 1px solid white;'>기타</th>" +
    "                </tr>" +
    "                <tr style='height: 3vh; border-left: 1px solid #F1F2EC; border-right: 1px solid #F1F2EC;'/>" +
    "            </table>" +
    "            <div class='BodyWrapper' style='height: 71vh;'>" +
    "                <table style='width: 70vw; table-layout: fixed; word-break: break-all;'>" +
    "                    <tr style='height: 1vh; border-left: 1px solid #F1F2EC; border-right: 1px solid #F1F2EC;'/>" +
    "                    <tr class='store_photo' style='border: 1px solid rgb(152, 152, 152);'>" +
    "                        <td>" +
    "                            <img src='./img/product.png' />" +
    "                        </td>" +
    "                        <td>" +
    "                            <img src='./img/product.png' />" +
    "                        </td>" +
    "                        <td>" +
    "                            <img src='./img/product.png' />" +
    "                        </td>" +
    "                        <td>" +
    "                            <img src='./img/product.png' />" +
    "                        </td>" +
    "                    </tr>" +
    "                    <tr class='store_txt'>" +
    "                        <td>" +
    "                            <p>MOMO (모모)</p>" +
    "                            <p>139,900원</p>" +
    "                        </td>" +
    "                        <td>" +
    "                            <p>MOMO (모모)</p>" +
    "                            <p>139,900원</p>" +
    "                        </td>" +
    "                        <td>" +
    "                            <p>MOMO (모모)</p>" +
    "                            <p>139,900원</p>" +
    "                        </td>" +
    "                        <td>" +
    "                            <p>MOMO (모모)</p>" +
    "                            <p>139,900원</p>" +
    "                        </td>" +
    "                    </tr>" +
    "                    <tr style='height: 1vh; border-left: 1px solid #F1F2EC; border-right: 1px solid #F1F2EC;'/>" +
    "                    <tr class='store_photo' style='border: 1px solid rgb(152, 152, 152);'>" +
    "                        <td>" +
    "                            <img src='./img/product.png' />" +
    "                        </td>" +
    "                        <td>" +
    "                            <img src='./img/product.png' />" +
    "                        </td>" +
    "                        <td>" +
    "                            <img src='./img/product.png' />" +
    "                        </td>" +
    "                        <td>" +
    "                            <img src='./img/product.png' />" +
    "                        </td>" +
    "                    </tr>" +
    "                    <tr class='store_txt'>" +
    "                        <td>" +
    "                            <p>MOMO (모모)</p>" +
    "                            <p>139,900원</p>" +
    "                        </td>" +
    "                        <td>" +
    "                            <p>MOMO (모모)</p>" +
    "                            <p>139,900원</p>" +
    "                        </td>" +
    "                        <td>" +
    "                            <p>MOMO (모모)</p>" +
    "                            <p>139,900원</p>" +
    "                        </td>" +
    "                        <td>" +
    "                            <p>MOMO (모모)</p>" +
    "                            <p>139,900원</p>" +
    "                        </td>" +
    "                    </tr>" +
    "                    <tr style='height: 1vh; border-left: 1px solid #F1F2EC; border-right: 1px solid #F1F2EC;'/>" +
    "                    <tr class='store_photo' style='border: 1px solid rgb(152, 152, 152);'>" +
    "                        <td>" +
    "                            <img src='./img/product.png' />" +
    "                        </td>" +
    "                        <td>" +
    "                            <img src='./img/product.png' />" +
    "                        </td>" +
    "                        <td>" +
    "                            <img src='./img/product.png' />" +
    "                        </td>" +
    "                        <td>" +
    "                            <img src='./img/product.png' />" +
    "                        </td>" +
    "                    </tr>" +
    "                    <tr class='store_txt'>" +
    "                        <td>" +
    "                            <p>MOMO (모모)</p>" +
    "                            <p>139,900원</p>" +
    "                        </td>" +
    "                        <td>" +
    "                            <p>MOMO (모모)</p>" +
    "                            <p>139,900원</p>" +
    "                        </td>" +
    "                        <td>" +
    "                            <p>MOMO (모모)</p>" +
    "                            <p>139,900원</p>" +
    "                        </td>" +
    "                        <td>" +
    "                            <p>MOMO (모모)</p>" +
    "                            <p>139,900원</p>" +
    "                        </td>" +
    "                    </tr>" +
    "                </table>" +
    "            </div>" +
    "        </div>" +
    "    </div>" +
    "</div>";
}

function FAQ() {
    document.getElementById('HERE').innerHTML =
    "<div id='FAQ' class='BodyWrapper'>" +
            "<div class='Contents' style='flex-direction: column;'>" +
                "<p style='margin-bottom: 5vh; font-size: 30px; font-weight: bold;'>자주 묻는 질문</p>" +
                "<table>" +
                    "<tr>" +
                        "<td><span class='material-symbols-outlined' style='font-size: 40px;'>search</span></td>" +
                        "<td style='width: 3vw;'/>" +
                        "<td><input Placeholder='무엇이든 물어보세요' style='height: 50px; font-size: 20px; border-bottom: 1px solid #6a6a6a;'></td>" +
                    "</tr>" +
                "</table>" +
                "<table class='Qna' style='margin-top: 5vh;'>" +
                    "<tr onclick='QNA(1)'>" +
                        "<td class='Qna' style='color: #ACDCEC; padding: 0.5vh 2vw;'><p>Q</p></td>" +
                        "<td class='Qna' style='width: 70vw;'><p style='padding-left: 1vw;'>정말 아이에게 해로운 물질이 안나오나요?</p></td>" +
                    "</tr>" +
                    "<tr onclick='QNA(2)'>" +
                        "<td class='Qna' style='color: #ACDCEC; padding: 0.5vh 2vw;'><p>Q</p></td>" +
                        "<td class='Qna' style='width: 70vw;'><p style='padding-left: 1vw;'>어플에 스위치말고 다른 기능은 어떤 것이 있나요?</p></td>" +
                    "</tr>" +
                    "<tr onclick='QNA(3)'>" +
                        "<td class='Qna' style='color: #ACDCEC; padding: 0.5vh 2vw;'><p>Q</p></td>" +
                        "<td class='Qna' style='width: 70vw;'><p style='padding-left: 1vw;'>스탠드가 쓰러져 아이가 다치진 않을까요?</p></td>" +
                    "</tr>" +
                    "<tr onclick='QNA(4)'>" +
                        "<td class='Qna' style='color: #ACDCEC; padding: 0.5vh 2vw;'><p>Q</p></td>" +
                        "<td class='Qna' style='width: 70vw;'><p style='padding-left: 1vw;'>몇살까지 쓸 수 있나요?</p></td>" +
                    "</tr>" +
                    "<tr onclick='QNA(5)'>" +
                        "<td class='Qna' style='color: #ACDCEC; padding: 0.5vh 2vw;'><p>Q</p></td>" +
                        "<td class='Qna' style='width: 70vw;'><p style='padding-left: 1vw;'>성인이 사용할 수 있는 제품은 없나요?</p></td>" +
                    "</tr>" +
                "</table>" +
            "</div>" +
        "</div>";
}

function QNA(n) {
    if (n == 1) {
        document.getElementById('HERE').innerHTML =
        "<div id='FAQ' class='BodyWrapper'>" +
            "<div class='Contents' style='flex-direction: column;'>" +
                "<p style='margin-bottom: 5vh; font-size: 30px; font-weight: bold;'>자주 묻는 질문</p>" +
                "<table>" +
                    "<tr>" +
                        "<td><span class='material-symbols-outlined' style='font-size: 40px;'>search</span></td>" +
                        "<td style='width: 3vw;'/>" +
                        "<td><input Placeholder='무엇이든 물어보세요' style='height: 50px; font-size: 20px; border-bottom: 1px solid #6a6a6a;'></td>" +
                    "</tr>" +
                "</table>" +
                "<table class='qnA' style='margin-top: 5vh;'>" +
                    "<tr>" +
                        "<td style='color: #ACDCEC; padding: 0.5vh 2vw; font-weight: bold;'><span onclick='FAQ()' class='material-symbols-outlined' style='padding-top: 3vh;'>arrow_back</span></td>" +
                        "<td style='width: 70vw;'>" +
                            "<p>본사의 제품은 오로지 공기만을 이용하여 모기가 사용자에게 접근하는 것을 막는 형태이기 때문에 </p>" +
                            "<p>아이에게 해로운 화학물질 등이 전혀 사용되지 않습니다. </p>" +
                            "<p>아이의 건강만을 생각하고 만든 제품이기 때문에 안심하고 사용하셔도 괜찮습니다!</p>" +
                        "</td>" +
                    "</tr>" +
                "</table>" +
            "</div>" +
        "</div>";
    } else if (n == 2) {
        document.getElementById('HERE').innerHTML =
        "<div id='FAQ' class='BodyWrapper'>" +
            "<div class='Contents' style='flex-direction: column;'>" +
                "<p style='margin-bottom: 5vh; font-size: 30px; font-weight: bold;'>자주 묻는 질문</p>" +
                "<table>" +
                    "<tr>" +
                        "<td><span class='material-symbols-outlined' style='font-size: 40px;'>search</span></td>" +
                        "<td style='width: 3vw;'/>" +
                        "<td><input Placeholder='무엇이든 물어보세요' style='height: 50px; font-size: 20px; border-bottom: 1px solid #6a6a6a;'></td>" +
                    "</tr>" +
                "</table>" +
                "<table class='qnA' style='margin-top: 5vh;'>" +
                    "<tr>" +
                        "<td style='color: #ACDCEC; padding: 0.5vh 2vw; font-weight: bold;'><span onclick='FAQ()' class='material-symbols-outlined' style='padding-top: 3vh;'>arrow_back</span></td>" +
                        "<td style='width: 70vw;'>" +
                            "<p>본 제품과 함께 사용할 수 있는 부속품을 판매하는 스토어를 이용하실 수 있고,</p>" +
                            "<p>아이를 키우시는 부모님들을 위한 커뮤니티도 준비되어있습니다.</p>" +
                            "<p>그 외에도 본사에서 출시할 다른 제품들과의 연계도 준비중이니 많은 관심 부탁드립니다 !</p>" +
                        "</td>" +
                    "</tr>" +
                "</table>" +
            "</div>" +
        "</div>";
    } else if (n == 3) {
        document.getElementById('HERE').innerHTML =
        "<div id='FAQ' class='BodyWrapper'>" +
            "<div class='Contents' style='flex-direction: column;'>" +
                "<p style='margin-bottom: 5vh; font-size: 30px; font-weight: bold;'>자주 묻는 질문</p>" +
                "<table>" +
                    "<tr>" +
                        "<td><span class='material-symbols-outlined' style='font-size: 40px;'>search</span></td>" +
                        "<td style='width: 3vw;'/>" +
                        "<td><input Placeholder='무엇이든 물어보세요' style='height: 50px; font-size: 20px; border-bottom: 1px solid #6a6a6a;'></td>" +
                    "</tr>" +
                "</table>" +
                "<table class='qnA' style='margin-top: 5vh;'>" +
                    "<tr>" +
                        "<td style='color: #ACDCEC; padding: 0.5vh 2vw; font-weight: bold;'><span onclick='FAQ()' class='material-symbols-outlined' style='padding-top: 3vh;'>arrow_back</span></td>" +
                        "<td style='width: 70vw;'>" +
                            "<p>아무래도 아이의 위에 위치하다보니 이러한 걱정이 드실 것 같습니다.</p>" +
                            "<p>본 제품은 쓰러지지 않도록 저중점 하중 설게를 통해 만들어 졌기 때문에 안심하셔도 됩니다.</p>" +
                            "<p>그럼에도 불안하실 경우 아이 바로 위에서 사용하는 것이 아닌 옆에서 사용하실 수 있도록 제작되었으니</p>" +
                            "<p>사용설명서 참고 부탁드립니다 !</p>" +
                        "</td>" +
                    "</tr>" +
                "</table>" +
            "</div>" +
        "</div>";
    } else if (n == 4) {
        document.getElementById('HERE').innerHTML =
        "<div id='FAQ' class='BodyWrapper'>" +
            "<div class='Contents' style='flex-direction: column;'>" +
                "<p style='margin-bottom: 5vh; font-size: 30px; font-weight: bold;'>자주 묻는 질문</p>" +
                "<table>" +
                    "<tr>" +
                        "<td><span class='material-symbols-outlined' style='font-size: 40px;'>search</span></td>" +
                        "<td style='width: 3vw;'/>" +
                        "<td><input Placeholder='무엇이든 물어보세요' style='height: 50px; font-size: 20px; border-bottom: 1px solid #6a6a6a;'></td>" +
                    "</tr>" +
                "</table>" +
                "<table class='qnA' style='margin-top: 5vh;'>" +
                    "<tr>" +
                        "<td style='color: #ACDCEC; padding: 0.5vh 2vw; font-weight: bold;'><span onclick='FAQ()' class='material-symbols-outlined' style='padding-top: 3vh;'>arrow_back</span></td>" +
                        "<td style='width: 70vw;'>" +
                            "<p>해당 제품은 시중에서 흔하게 판매되는 유아용 침상을 기준으로 만들어졌습니다. </p>" +
                            "<p>따라서 아이의 성장속도에 따라 차이는 있겠지만 이 침상 안에서 잘 수 있을 때 까지는 사용하실 수 있습니다 !</p>" +
                        "</td>" +
                    "</tr>" +
                "</table>" +
            "</div>" +
        "</div>";
    } else if (n == 5) {
        document.getElementById('HERE').innerHTML =
        "<div id='FAQ' class='BodyWrapper'>" +
            "<div class='Contents' style='flex-direction: column;'>" +
                "<p style='margin-bottom: 5vh; font-size: 30px; font-weight: bold;'>자주 묻는 질문</p>" +
                "<table>" +
                    "<tr>" +
                        "<td><span class='material-symbols-outlined' style='font-size: 40px;'>search</span></td>" +
                        "<td style='width: 3vw;'/>" +
                        "<td><input Placeholder='무엇이든 물어보세요' style='height: 50px; font-size: 20px; border-bottom: 1px solid #6a6a6a;'></td>" +
                    "</tr>" +
                "</table>" +
                "<table class='qnA' style='margin-top: 5vh;'>" +
                    "<tr>" +
                        "<td style='color: #ACDCEC; padding: 0.5vh 2vw; font-weight: bold;'><span onclick='FAQ()' class='material-symbols-outlined' style='padding-top: 3vh;'>arrow_back</span></td>" +
                        "<td style='width: 70vw;'>" +
                            "<p>저희도 어른을 위한 제품이 꼭 필요하다고 느끼고 있기에 현재 개발 중에 있습니다. </p>" +
                            "<p>빠른 시일 내에 고객님과 만나뵐 수 있도록 노력하겠습니다 !</p>" +
                            "<p>또한 캠핑용 이동식 모기장, 반려동물용 모기장 등 다양한 상품이 기획중에 있으니 많은 관심 부탁드립니다.</p>" +
                        "</td>" +
                    "</tr>" +
                "</table>" +
            "</div>" +
        "</div>";
    }
}
