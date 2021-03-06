import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PostProvider } from 'src/providers/post-providers';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.page.html',
  styleUrls: ['./archivos.page.scss'],
})
export class ArchivosPage implements OnInit {
archivos: any[]=[];
datos: any[]=[];
id: string= "";
textoBuscar = '';
  constructor(private menu: MenuController,
    private postPvdr: PostProvider) { }

  ngOnInit() {
    this.menu.close();
    this.postPvdr.$getListSource.subscribe(list => {
      //console.log(list)
      this.datos= list;
      this.id=this.datos[0].Id_Usuario;
      console.log(this.id);
      });
    this.cargarArchivos();


  }

cargarArchivos(){
  this.postPvdr.buscarDoc(this.id).subscribe(list => {
    //console.log(list)
    this.archivos= list;
   
    console.log(this.archivos);
    });

}

doRefresh(evento){
  this.cargarArchivos();

  setTimeout(() => {
    evento.target.complete();
  }, 2000);

}
//Buscar en la barra de busqueda
buscar(event){
  this.textoBuscar=event.detail.value;
}

}
