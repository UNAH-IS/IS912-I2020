// function verPlaylist(codigoPlaylist){
//     console.log('Ver playlist con codigo: ' + codigoPlaylist);
//     $("#vista-playlist").show();
//     $("#vista-artista").hide();
// }

var artistas =[];
var localStorage = window.localStorage;
var artistaSeleccionado;
if (localStorage.getItem('artistas')==null){
    artistas = [
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
    localStorage.setItem('artistas',JSON.stringify(artistas));
}
else{
    artistas = JSON.parse(localStorage.getItem('artistas'));
}

function generarListaArtistas(){
    document.getElementById('lista-artistas').innerHTML = '';
    for(let i=0;i<artistas.length;i++){
        document.getElementById('lista-artistas').innerHTML +=
            `<li class="nav-item">
                <div class="nav-link" onclick="verArtista(${i})">
                    <i class="fas fa-music"></i> ${artistas[i].nombreArtista}
                </div>
            </li>`;
    }
}

generarListaArtistas();

function verArtista(indiceArtista){
    artistaSeleccionado = indiceArtista;
    console.log(artistas[indiceArtista]);
    
    $("#vista-artista").show();
    $("#vista-playlist").hide();
}

function agregarCancion(codigoCancion){
    console.log("Agregar cancion "+codigoCancion);
    $("#modal-playlists").modal('show');
}




let temp = `<section class="container-fluid">
<div class="row">
  <div class="col-4 text-center">
    <div class="cover-image" style="background-image:url(img/cover1.jpg);">
    </div><br>
    <h5 class="text-muted">Album 1</h5>
    <button class="btn btn-success"type="button">Play</button>
  </div>
  <div class="col-8">
    
    <!--Item 1 -->
    <div class="row song-item">
      <div class="col-1"><i class="fas fa-play"></i></div>
      <div class="col-10">
        <div class="song-title">Cancion</div>
        <div class="song-description">Artista - Album</div>
      </div>
      <div class="col-1">
          <span>3:56</span>
          <button onclick="agregarCancion(1)" class="btn btn-outline-success btn-sm" title="Agregar a playlist"><i class="fas fa-plus"></i></button>
      </div>
    </div>
    
  </div>
</div>
</section>
<hr>`;