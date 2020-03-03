var artistas = [
    {
        nombreArtista:'Metallica',
        caratulaArtista: 'img/metallica-logo.png',
        albumes:[
            {
                tituloAlbum:'Album 1',
                anio:2222,
                genero:'Rock',
                caratula:'img/cover1.jpg',
                canciones:[
                    {
                        nombreCancion:'Perreo intenso',
                        duracion:'3:33'
                    },
                    {
                        nombreCancion:'El Tra',
                        duracion:'3:33'
                    }
                ]
            },
            {
                tituloAlbum:'Album 2',
                anio:2222,
                genero:'Queso',
                caratula:'img/cover2.jpg',
                canciones:[
                    {
                        nombreCancion:'Perreo intenso Remix 1',
                        duracion:'3:33'
                    }
                ]
            },
            {
                tituloAlbum:'Album 3',
                anio:2222,
                genero:'Rock',
                caratula:'img/cover3.jpg',
                canciones:[
                    {
                        nombreCancion:'Perreo intenso, versión cumbión ',
                        duracion:'3:33'
                    }
                ]
            }
        ]
    },
    {
        nombreArtista:'Epica',
        caratulaArtista: 'img/epica-logo.jpg',
        albumes:[
            {
                tituloAlbum:'Album 1',
                anio:2222,
                genero:'Rock',
                caratula:'img/cover1.jpg',
                canciones:[
                    {
                        nombreCancion:'Tusa',
                        duracion:'3:33'
                    }
                ]
            },
            {
                tituloAlbum:'Album 2',
                anio:2222,
                genero:'Queso',
                caratula:'img/cover2.jpg',
                canciones:[
                    {
                        nombreCancion:'Otra rola',
                        duracion:'3:33'
                    }
                ]
            },
            {
                tituloAlbum:'Album 3',
                anio:2222,
                genero:'Rock',
                caratula:'img/cover3.jpg',
                canciones:[
                    {
                        nombreCancion:'Perreo intenso',
                        duracion:'3:33'
                    }
                ]
            }
        ]
    }
];

function generarTabla(){
for(let i=0;i<artistas.length;i++)
    document.querySelector('#tabla-artistas tbody').innerHTML +=
                    `<tr>
                        <td>${artistas[i].nombreArtista}</td>
                        <td><img class="caratula" src="${artistas[i].caratulaArtista}"></td>
                        <td>${artistas[i].albumes.length}</td>
                        <td><button type="button" onclick="verDetalles(${i});">Ver detalles</button></td>
                    </tr>`;

}

generarTabla();


function  verDetalles(indice){
    console.log("Ver detalles del artista?" + indice);
    console.log(artistas[indice]);
    document.getElementById('span-artista').innerHTML = artistas[indice].nombreArtista
    document.querySelector('#tabla-albumes tbody').innerHTML = '';
    for (let j=0;j<artistas[indice].albumes.length; j++){
        const album = artistas[indice].albumes[j];
        document.querySelector('#tabla-albumes tbody').innerHTML +=
            `<tr>
                <td>${album.tituloAlbum}</td>
                <td>${album.anio}</td>
                <td>${album.genero}</td>
                <td>${album.caratula}</td>
                <td>${album.canciones.length}</td>
            </tr>`;
        }
}