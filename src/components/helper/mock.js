const productos = [
    {id: 1, img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/398/294/products/fernet-branca-6x11-e454976543eaee841d15893017307610-640-0.jpg' , descripcion: 'bebida alcoholica' , nombre: 'fernet' , precio: 750},
    {id: 2, img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/398/294/products/fernet-branca-6x11-e454976543eaee841d15893017307610-640-0.jpg' , descripcion: 'bebida alcoholica' , nombre: 'fernet' , precio: 750},
    {id: 3, img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/398/294/products/fernet-branca-6x11-e454976543eaee841d15893017307610-640-0.jpg' , descripcion: 'bebida alcoholica' , nombre: 'fernet' , precio: 750},
    {id: 4, img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/398/294/products/fernet-branca-6x11-e454976543eaee841d15893017307610-640-0.jpg' , descripcion: 'bebida alcoholica' , nombre: 'fernet' , precio: 750},
    {id: 5, img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/398/294/products/fernet-branca-6x11-e454976543eaee841d15893017307610-640-0.jpg' , descripcion: 'bebida alcoholica' , nombre: 'fernet' , precio: 750}    
];

export const getFetch = new Promise((resolve, reject)=>{
    let condicion = true 
    if(condicion){
        setTimeout(()=> {
            resolve(productos)
        }, 2000)
    }else{
        reject()
    }    
})