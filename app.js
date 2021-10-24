document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    const db = firebase.firestore();

    const my_text = db.collection('texts').doc('text1');

    my_text.onSnapshot(doc => {
        const data = doc.data();
        document.querySelector('#title').innerHTML = data.content;
    });
});

function addText(){
    const db = firebase.firestore();
    const my_text = db.collection('texts').doc('text1');
    my_text.update({content: "Chris"});
};
