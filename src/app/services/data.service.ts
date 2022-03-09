import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   table= [
      {id:'1', cname: 'TestYantra', cdesc: '', csdet: '2009'},
      {id:'2', cname: 'TecnoElevate', cdesc: '', csdet: '2019'},
      {id:'3', cname: 'Tcs', cdesc: '', csdet: '1968'},
      {id:'4', cname: 'Accenture', cdesc: '', csdet: '1989'},
      {id:'5', cname: 'Mindtree', cdesc: '', csdet: '1999'},
      {id:'6', cname: 'Capgemini', cdesc: '', csdet: '1967'},
      {id:'7', cname: 'HCL', cdesc: '', csdet: '1976' },
  
    ];

     
   
   details=[
     {id:'1',cgn:'27AACCT8084C1Z9',bran:'',tech:'software testing', stat:'Bengaluru', count:'India'},
     {id:'2',cgn:'27AACCT8084C1Z9',bran:'',tech:'software Devlopment', stat:'Bengaluru', count:'India'},
     {id:'3',cgn:'07AAACR4849R1ZN.',bran:'',tech:'Business and Technology Services', stat:'Mumbai', count:'India'},
     {id:'4',cgn:'27AAACH3235MHZ3.',bran:'',tech:'technology software, implementation, delivery, and research & development', stat:'Dublin ', count:'Ireland'},
     {id:'5',cgn:'36AABCM8839K1ZY',bran:'',tech:'AI, ML, RPA, IoT, AR/VR', stat:'Bengaluru', count:'India'},
     {id:'6',cgn:'27AABCM4573E2ZI',bran:'',tech:'automation, infrastructure, application development & maintenance, testing and end-user services', stat:'New York', count:' United States'},
     {id:'7',cgn:'33AAACH1645P2ZH',bran:'',tech:'HCL AppScanHCL Accelerate,HCL Launch,HCL OneTest,HCL Compass,HCL VersionVault and HCL RTist.', stat:'Noida', count:'India'},
    ]
   


  constructor() { }
}
