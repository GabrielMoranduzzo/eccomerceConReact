const productos = [
    {id: 1, img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/398/294/products/fernet-branca-6x11-e454976543eaee841d15893017307610-640-0.jpg' , descripcion: 'bebida alcoholica' , nombre: 'Fernet' , precio: '$750'},
    {id: 2, img: 'https://www.espaciovino.com.ar/media/default/0001/56/thumb_55057_default_big.jpeg' , descripcion: 'bebida alcoholica' , nombre: 'Gancia' , precio: '$450'},
    {id: 3, img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/campc-00011-b769808f440b21f07415749347933957-640-0.jpg' , descripcion: 'bebida alcoholica' , nombre: 'Campari' , precio: '$700'},
    {id: 4, img: 'https://http2.mlstatic.com/D_NQ_NP_898916-MLA45585455989_042021-O.webp' , descripcion: 'bebida alcoholica' , nombre: 'Jagermeister' , precio: '$2800'},
    {id: 5, img: 'https://media-verticommnetwork1.netdna-ssl.com/wines/cinzano-rosso-1l-435280.jpg' , descripcion: 'bebida alcoholica' , nombre: 'Cinzano' , precio: '$500'},
    {id: 6, img: 'https://http2.mlstatic.com/D_NQ_NP_688012-MLA40124042692_122019-O.jpg' , descripcion: 'bebida alcoholica' , nombre: 'Aperol' , precio: '$700'},
    {id: 7, img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/871/106/products/gin-bombay-sapphire-importado-de-inglaterra-envio-grati-caba-d_nq_np_850676-mla25969646003_092017-f1-150c8da3995d53f61b15360938603463-640-0.jpg' , descripcion: 'bebida alcoholica' , nombre: 'Bombay' , precio: '$2900'},
    {id: 8, img: 'https://http2.mlstatic.com/D_NQ_NP_766180-MLA32830294161_112019-O.webp' , descripcion: 'bebida alcoholica' , nombre: 'Jack Daniels' , precio: '$6750'}   
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