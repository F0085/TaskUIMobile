import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';
import { ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
import { PostProvider } from 'src/providers/post-providers'
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  eventSource= [];
  datos: any[] = [];
  id: string="";
  tareas: any[] = [];
  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };
 
  minDate = new Date().toISOString();
  titulo;
  calendar = {
    mode: 'month',
    currentDate: new Date()
  }
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private menu: MenuController,
    private alertCtrl: AlertController,
    private postPvdr: PostProvider,
    @Inject(LOCALE_ID) private locale: string
    ) { 

    }

  ngOnInit() {
    //Obtiene los datos del usuario logueado
    this.postPvdr.$getListSource.subscribe(list => {
      this.datos= list;
     this.id=this.datos[0].Id_Usuario;
      });
    
    this.menu.close();
    this.cargarTareas();
    this.resetEvent();
  }


  cargarTareas(){
    this.postPvdr.getTareasRes(this.id)
    .subscribe(
   (data) => { // Success
     if(data !=null){
      let start = this.event.startTime;
      let end = this.event.endTime;
      
       this.tareas= data;
       console.log(this.tareas);
       this.tareas.forEach( tar => {
         let fechaini = tar.tarea.FechaInicio+' '+ tar.tarea.Hora_Inicio;
         let fecahfin = tar.tarea.FechaFin+' '+tar.tarea.Hora_Fin
         console.log(fechaini);
        let evento = {
          title: tar.tarea.Nombre,
          startTime: new Date(fechaini),
          endTime: new Date(fecahfin),
          desc: tar.tarea.Descripcion
         }
         this.eventSource.push(evento);
         console.log(this.eventSource);
         this.myCal.loadEvents();
       })
        
      
      }

   
    },
   
   (error) =>{
     console.error(error);
   }
 )

  }
  
  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }



  addEvent() {
    let eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    }

    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;
 
     eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
     eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }
 
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }


// Change current month/week/day
next() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
}
 
async back() {
  var lswiper = document.querySelector('.swiper-container')['swiper'];
  lswiper.slidePrev();
}
 
// Change between month/week/day
changeMode(mode) {
  this.calendar.mode = mode;
}
 
// Focus today
today() {
  this.calendar.currentDate = new Date();
}
 
// Selected date reange and hence title changed
onViewTitleChanged(titutlo) {
  this.titulo = titutlo;
}
 
// Calendar event was clicked
async onEventSelected(event) {
  // Use Angular date pipe for conversion
  let start = formatDate(event.startTime, 'medium', this.locale);
  let end = formatDate(event.endTime, 'medium', this.locale);
 
  const alert = await this.alertCtrl.create({
    header: event.title,
    subHeader: event.desc,
    message: 'Inicio: ' + start + '<br><br>Fin: ' + end,
    buttons: ['OK']
  });
  alert.present();
}
 
// Time slot was clicked
onTimeSelected(ev) {
  let selected = new Date(ev.selectedTime);
  this.event.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.event.endTime = (selected.toISOString());
}


}
