const productos = [
    {id: '0', img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/398/294/products/fernet-branca-6x11-e454976543eaee841d15893017307610-640-0.jpg' , descripcion: 'bebida alcoholica' , nombre: 'Fernet' , categoria: 'aperitivos y otros', precio: '$750', cantidad: ''},
    {id: '1', img: 'https://www.espaciovino.com.ar/media/default/0001/56/thumb_55057_default_big.jpeg' , descripcion: 'bebida alcoholica' , nombre: 'Gancia', categoria: 'aperitivos y otros' , precio: '$450'},
    {id: '2', img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/campc-00011-b769808f440b21f07415749347933957-640-0.jpg' , descripcion: 'bebida alcoholica' , nombre: 'Campari', categoria: 'aperitivos y otros' , precio: '$700', cantidad: ''},
    {id: '3', img: 'https://http2.mlstatic.com/D_NQ_NP_898916-MLA45585455989_042021-O.webp' , descripcion: 'bebida alcoholica' , nombre: 'Jagermeister', categoria: 'aperitivos y otros' , precio: '$2800', cantidad: ''},
    {id: '4', img: 'https://media-verticommnetwork1.netdna-ssl.com/wines/cinzano-rosso-1l-435280.jpg' , descripcion: 'bebida alcoholica' , nombre: 'Cinzano', categoria: 'aperitivos y otros' , precio: '$500', cantidad: ''},
    {id: '5', img: 'https://http2.mlstatic.com/D_NQ_NP_688012-MLA40124042692_122019-O.jpg' , descripcion: 'bebida alcoholica' , nombre: 'Aperol', categoria: 'aperitivos y otros' , precio: '$700', cantidad: ''},
    {id: '6', img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/871/106/products/gin-bombay-sapphire-importado-de-inglaterra-envio-grati-caba-d_nq_np_850676-mla25969646003_092017-f1-150c8da3995d53f61b15360938603463-640-0.jpg' , descripcion: 'bebida alcoholica' , nombre: 'Bombay', categoria: 'whiskies y destilados' , precio: '$2900', cantidad: ''},
    {id: '7', img: 'https://http2.mlstatic.com/D_NQ_NP_766180-MLA32830294161_112019-O.webp' , descripcion: 'bebida alcoholica' , nombre: 'Jack Daniels', categoria: 'whiskies y destilados' , precio: '$6750', cantidad: ''}   
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