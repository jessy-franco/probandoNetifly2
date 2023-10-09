
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, orderBy, writeBatch, documentId } from "firebase/firestore";
import Swal from 'sweetalert2'

const firebaseConfig = {
    apiKey: "AIzaSyA3MSbhrQxGbh5ZHfQXmI-48uJoUf4DD9Y",
    authDomain: "sucurexreact.firebaseapp.com",
    projectId: "sucurexreact",
    storageBucket: "sucurexreact.appspot.com",
    messagingSenderId: "195160818232",
    appId: "1:195160818232:web:3ed0be42acd7e514b95ccd"
};


const firebaseApp = initializeApp(firebaseConfig);



const dataBase = getFirestore(firebaseApp);



export async function getSingleItem(id) {

    const docRef = doc(dataBase, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: docSnap.id,
            ...docSnap.data(),
        }
    } else {
        Swal.fire({
            imageUrl: "https://ih0.redbubble.net/image.158935923.8203/flat,1000x1000,075,f.jpg",
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
            icon: 'error',
            title: 'Oops...',
            text: ' El producto no existe',
            confirmButtonText: ' <a href="/"}}>Desea volver a home? </a>',
            confirmButtonColor: '#94B49F',
            width: 600,
            padding: '3em',
            color: '#606870',
            background: '#fff',
            backdrop: `grey`,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        });
    }
}




export async function ArrayProd() {
    try {
        const collectionProducts = collection(dataBase, "products")
        const myQuery = query(collectionProducts, orderBy("index"));

        let respuesta = await getDocs(myQuery);

        const products = respuesta.docs.map(docu => {
            return {
                id: docu.id,
                ...docu.data()
            }
        })
        return (products);
    }
    catch (error) {
        console.error(error);
    }
}


export async function ArrayProdByCategory(categoryid) { 
    try {
        const ProductsRef = collection(dataBase, "products")
        const myQuery = query(ProductsRef, where("category", "==", categoryid));

        const querySnapshot = await getDocs(myQuery);
        const products = querySnapshot.docs.map((docu) => {
            return {
                id: docu.id,
                ...docu.data(),
            }
        });
        return products;
    }
    catch (error) {
        console.error(error);
    }
}


export async function createBuyOrderFirestore(buyOrderData) {
    const collectionRef = collection(dataBase, "buyorders")
    const docRef = await addDoc(collectionRef, buyOrderData);
    return (docRef.id);
}

export async function createBuyOrderFirestoreWithStock(buyOrderData) {
    const collectionProductsRef = collection(dataBase, "products");
    const collectionOrdersRef = collection(dataBase, "buyorders");
    const batch = writeBatch(dataBase);
    console.log(dataBase)
    let arrayIds = buyOrderData.items.map((item) => {
        return item.id;
    });
    const myQuery = query(collectionProductsRef, where(documentId(), 'in', arrayIds));

    let productsOrders = await getDocs(myQuery);

    productsOrders.docs.forEach((doc) => {
        let stockActual = doc.data().stock;
        let itemInCart = buyOrderData.items.find((item) => item.id === doc.id);
        let stockActualizado = stockActual - itemInCart.count;

        batch.update(doc.ref, { stock: stockActualizado });

    });

    const docOrderRef = doc(collectionOrdersRef);
    batch.set(docOrderRef, buyOrderData);

    batch.commit();

    return docOrderRef.id;
}
