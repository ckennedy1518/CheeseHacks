// const firebase = require('firebase');
// require('firebase/firestore');
document.addEventListener("DOMContentLoaded", event => {    
    const app = firebase.app();
    const db = firebase.firestore();

    // db.collection("texts").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         document.querySelector('#title').innerHTML += doc.data().content + '<br>';
    //     });
    // });

    // db.collection("texts").onSnapshot((doc) => {
    //     document.querySelector('#title').innerHTML += doc.data().content + '<br>';
    // });
    
    db.collection("texts").onSnapshot((querySnapshot) => {
        document.querySelector('#title').innerHTML = '';
        querySnapshot.forEach((doc) => {
            document.querySelector('#title').innerHTML += doc.data().content + '<br>';
        });
    });
    
});



function addText(){
    const textBox = document.querySelector('#text-box');
    const newText = textBox.value;
    textBox.value = '';
    const db = firebase.firestore();
    // const my_text = db.collection('texts').doc('text1');
    // my_text.update({content: newText});
    db.collection("texts").doc(newText).set({
        content: newText
    });
};
