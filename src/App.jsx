import { useState, useEffect } from "react";

const PLAN = [
  {n:1,bk:["Mateo","Hechos","Salmos","Génesis"],d:[
    ["Mat 1:1-17","Hch 1:1-11","Sal 1","Gén 1-2"],["Mat 1:18-25","Hch 1:12-26","Sal 2","Gén 3-4"],
    ["Mat 2:1-12","Hch 2:1-21","Sal 3","Gén 5-7"],["Mat 2:13-23","Hch 2:22-47","Sal 4","Gén 8-10"],
    ["Mat 3:1-12","Hch 3","Sal 5","Gén 11-12"],["Mat 3:13-17","Hch 4:1-22","Sal 6","Gén 13"],
    ["Mat 4:1-11","Hch 4:23-37","Sal 7","Gén 14-15"],["Mat 4:12-17","Hch 5:1-16","Sal 8","Gén 16-17"],
    ["Mat 4:18-25","Hch 5:17-42","Sal 9","Gén 18-19"],["Mat 5:1-12","Hch 6","Sal 10","Gén 20-21"],
    ["Mat 5:13-20","Hch 7:1-38","Sal 11","Gén 22-23"],["Mat 5:21-32","Hch 7:39-60","Sal 12","Gén 24-25"],
    ["Mat 5:33-48","Hch 8:1-25","Sal 13","Gén 26-27"],["Mat 6:1-15","Hch 8:26-40","Sal 14","Gén 28-30"],
    ["Mat 6:16-24","Hch 9:1-19","Sal 15","Gén 31-32"],["Mat 6:25-34","Hch 9:20-43","Sal 16","Gén 33-34"],
    ["Mat 7:1-14","Hch 10:1-23","Sal 17","Gén 35-37"],["Mat 7:15-29","Hch 10:24-48","Sal 18:1-24","Gén 38-40"],
    ["Mat 8:1-13","Hch 11:1-18","Sal 18:25-50","Gén 41"],["Mat 8:14-22","Hch 11:19-30","Sal 19","Gén 42-43"],
    ["Mat 8:23-34","Hch 12","Sal 20","Gén 44-45"],["Mat 9:1-13","Hch 13:1-25","Sal 21","Gén 46-47"],
    ["Mat 9:14-26","Hch 13:26-52","Sal 22:1-11","Gén 48"],["Mat 9:27-38","Hch 14","Sal 22:12-31","Gén 49"],
    ["Mat 10:1-20","Hch 15:1-21","Sal 23","Gén 50"]
  ]},
  {n:2,bk:["Marcos","2 Corintios","Salmos","1-2 Samuel"],d:[
    ["Mar 1:1-8","2Co 1:1-7","Sal 48","1Sam 1-2"],["Mar 1:9-20","2Co 1:8-14","Sal 49","1Sam 3-4"],
    ["Mar 1:21-34","2Co 1:15-24","Sal 50","1Sam 5-7"],["Mar 1:35-45","2Co 2","Sal 51","1Sam 8-9"],
    ["Mar 2:1-12","2Co 3:1-11","Sal 52","1Sam 10"],["Mar 2:13-17","2Co 3:12-18","Sal 53","1Sam 11-12"],
    ["Mar 2:18-28","2Co 4:1-12","Sal 54","1Sam 13-14"],["Mar 3:1-19","2Co 4:13-18","Sal 55","1Sam 15"],
    ["Mar 3:20-35","2Co 5:1-11","Sal 56","1Sam 16"],["Mar 4:1-20","2Co 5:12-21","Sal 57","1Sam 17"],
    ["Mar 4:21-41","2Co 6:1-10","Sal 58","1Sam 18"],["Mar 5:1-20","2Co 6:11-18","Sal 59","1Sam 19"],
    ["Mar 5:21-43","2Co 7:1-10","Sal 60","1Sam 20"],["Mar 6:1-13","2Co 7:11-16","Sal 61","1Sam 21-22"],
    ["Mar 6:14-29","2Co 8:1-15","Sal 62","1Sam 23-24"],["Mar 6:30-44","2Co 8:16-24","Sal 63","1Sam 25"],
    ["Mar 6:45-56","2Co 9:1-9","Sal 64","1Sam 26-27"],["Mar 7:1-23","2Co 9:10-15","Sal 65","1Sam 28-29"],
    ["Mar 7:24-37","2Co 10:1-12","Sal 66","1Sam 30-31"],["Mar 8:1-13","2Co 10:13-18","Sal 67","2Sam 1"],
    ["Mar 8:14-21","2Co 11:1-15","Sal 68","2Sam 2-3"],["Mar 8:22-30","2Co 11:16-33","Sal 69:1-18","2Sam 4-5"],
    ["Mar 8:31-38","2Co 12:1-10","Sal 69:19-36","2Sam 6-7"],["Mar 9:1-13","2Co 12:11-21","Sal 70","2Sam 8-9"],
    ["Mar 9:14-32","2Co 13","Sal 71","2Sam 10-11"]
  ]},
  {n:3,bk:["Mateo","Romanos","Salmos","Números / Lev / Deut"],d:[
    ["Mat 10:21-42","Rom 1:1-17","Sal 72","Núm 1-4"],["Mat 11:1-19","Rom 1:18-32","Sal 73","Núm 5-8"],
    ["Mat 11:20-30","Rom 2","Sal 74","Núm 9-12"],["Mat 12:1-21","Rom 3","Sal 75","Núm 13-14"],
    ["Mat 12:22-37","Rom 4","Sal 76","Núm 15-18"],["Mat 12:38-50","Rom 5:1-11","Sal 77","Núm 19-22"],
    ["Mat 13:1-23","Rom 5:12-21","Sal 78:1-39","Núm 23-26"],["Mat 13:24-43","Rom 6:1-14","Sal 78:40-72","Núm 27-30"],
    ["Mat 13:44-58","Rom 6:15-23","Sal 79","Núm 31-34"],["Mat 14:1-21","Rom 7:1-12","Sal 80","Núm 35-36"],
    ["Mat 14:22-36","Rom 7:13-25","Sal 81","Lev 1-3"],["Mat 15:1-20","Rom 8:1-17","Sal 82","Lev 4-7"],
    ["Mat 15:21-39","Rom 8:18-39","Sal 83","Lev 8-11"],["Mat 16:1-12","Rom 9:1-18","Sal 84","Lev 12-15"],
    ["Mat 16:13-28","Rom 9:19-33","Sal 85","Lev 16-18"],["Mat 17:1-13","Rom 10","Sal 86","Lev 19-22"],
    ["Mat 17:14-27","Rom 11:1-24","Sal 87","Lev 23-27"],["Mat 18:1-14","Rom 11:25-36","Sal 88","Deut 1-4"],
    ["Mat 18:15-35","Rom 12:1-8","Sal 89:1-18","Deut 5-8"],["Mat 19:1-15","Rom 12:9-21","Sal 89:19-52","Deut 9-12"],
    ["Mat 19:16-30","Rom 13","Sal 90","Deut 13-16"],["Mat 20:1-16","Rom 14","Sal 91","Deut 17-20"],
    ["Mat 20:17-34","Rom 15:1-13","Sal 92","Deut 21-24"],["Mat 21:1-11","Rom 15:14-33","Sal 93","Deut 25-28"],
    ["Mat 21:12-22","Rom 16","Sal 94","Deut 29-34"]
  ]},
  {n:4,bk:["Lucas","Col / Fil","Salmos","1-2 Crónicas"],d:[
    ["Luc 1:1-25","Col 1:1-8","Sal 95","1Cró 1"],["Luc 1:26-38","Col 1:9-14","Sal 96","1Cró 2-3"],
    ["Luc 1:39-56","Col 1:15-20","Sal 97","1Cró 4-5"],["Luc 1:57-66","Col 1:21-29","Sal 98","1Cró 6-7"],
    ["Luc 1:67-80","Col 2:1-7","Sal 99","1Cró 8-9"],["Luc 2:1-20","Col 2:8-15","Sal 100","1Cró 10-11"],
    ["Luc 2:21-40","Col 2:16-23","Sal 101","1Cró 12"],["Luc 2:41-52","Col 3:1-11","Sal 102","1Cró 13-14"],
    ["Luc 3:1-20","Col 3:12-17","Sal 103","1Cró 15-16"],["Luc 3:21-38","Col 3:18-25","Sal 104","1Cró 17-18"],
    ["Luc 4:1-12","Col 4:1-9","Sal 105","1Cró 19-20"],["Luc 4:13-30","Col 4:10-18","Sal 106:1-23","1Cró 21-22"],
    ["Luc 4:31-37","Fil 1:1-7","Sal 106:24-48","1Cró 23-24"],["Luc 4:38-44","Fil 1:8-14","Sal 107","1Cró 25-26"],
    ["Luc 5:1-11","Fil 1:15-20","Sal 108","1Cró 27-29"],["Luc 5:12-16","Fil 1:21-30","Sal 109","2Cró 1-2"],
    ["Luc 5:17-26","Fil 2:1-11","Sal 110","2Cró 3-5"],["Luc 5:27-32","Fil 2:12-18","Sal 111","2Cró 6-7"],
    ["Luc 5:33-39","Fil 2:19-30","Sal 112","2Cró 8-9"],["Luc 6:1-16","Fil 3:1-9","Sal 113","2Cró 10-12"],
    ["Luc 6:17-26","Fil 3:10-14","Sal 114","2Cró 13-16"],["Luc 6:27-36","Fil 3:15-21","Sal 115","2Cró 17-20"],
    ["Luc 6:37-42","Fil 4:1-7","Sal 116","2Cró 21-24"],["Luc 6:43-49","Fil 4:8-13","Sal 117","2Cró 25-28"],
    ["Luc 7:1-10","Fil 4:14-23","Sal 118","2Cró 29-36"]
  ]},
  {n:5,bk:["Marcos","1 Corintios","Salmos","Josué / Jueces / Rut"],d:[
    ["Mar 9:33-50","1Co 1:1-17","Sal 119:1-8","Jos 1-2"],["Mar 10:1-16","1Co 1:18-31","Sal 119:9-16","Jos 3-4"],
    ["Mar 10:17-34","1Co 2","Sal 119:17-24","Jos 5-6"],["Mar 10:35-52","1Co 3","Sal 119:25-32","Jos 7-8"],
    ["Mar 11:1-11","1Co 4","Sal 119:33-40","Jos 9-10"],["Mar 11:12-26","1Co 5","Sal 119:41-48","Jos 11-13"],
    ["Mar 11:27-33","1Co 6:1-11","Sal 119:49-56","Jos 14-16"],["Mar 12:1-12","1Co 6:12-20","Sal 119:57-64","Jos 17-19"],
    ["Mar 12:13-27","1Co 7:1-16","Sal 119:65-72","Jos 20-22"],["Mar 12:28-34","1Co 7:17-40","Sal 119:73-80","Jos 23-24"],
    ["Mar 12:35-44","1Co 8","Sal 119:81-88","Jue 1-2"],["Mar 13:1-13","1Co 9:1-12","Sal 119:89-96","Jue 3-4"],
    ["Mar 13:14-31","1Co 9:13-27","Sal 119:97-104","Jue 5-6"],["Mar 13:32-37","1Co 10:1-13","Sal 119:105-112","Jue 7-8"],
    ["Mar 14:1-11","1Co 10:14-33","Sal 119:113-120","Jue 9-10"],["Mar 14:12-31","1Co 11:1-16","Sal 119:121-128","Jue 11-12"],
    ["Mar 14:32-42","1Co 11:17-34","Sal 119:129-136","Jue 13-14"],["Mar 14:43-52","1Co 12:1-13","Sal 119:137-144","Jue 15-16"],
    ["Mar 14:53-65","1Co 12:14-31","Sal 119:145-152","Jue 17-18"],["Mar 14:66-72","1Co 13","Sal 119:153-160","Jue 19-20"],
    ["Mar 15:1-15","1Co 14:1-25","Sal 119:161-168","Jue 21"],["Mar 15:16-32","1Co 14:26-40","Sal 119:169-176","Rut 1"],
    ["Mar 15:33-41","1Co 15:1-28","Sal 120","Rut 2"],["Mar 15:42-47","1Co 15:29-58","Sal 121","Rut 3"],
    ["Mar 16","1Co 16","Sal 122","Rut 4"]
  ]},
  {n:6,bk:["Lucas","1-2 Tim / Tito / Flm","Proverbios","Esdras / Neh / Est"],d:[
    ["Luc 7:11-17","1Ti 1:1-11","Pro 1","Esd 1"],["Luc 7:18-35","1Ti 1:12-20","Pro 2","Esd 2"],
    ["Luc 7:36-50","1Ti 2","Pro 3","Esd 3"],["Luc 8:1-15","1Ti 3","Pro 4:1-19","Esd 4"],
    ["Luc 8:16-25","1Ti 4:1-10","Pro 4:20-27","Esd 5"],["Luc 8:26-39","1Ti 4:11-16","Pro 5","Esd 6"],
    ["Luc 8:40-56","1Ti 5:1-16","Pro 6:1-19","Esd 7"],["Luc 9:1-17","1Ti 5:17-25","Pro 6:20-35","Esd 8"],
    ["Luc 9:18-27","1Ti 6:1-10","Pro 7:1-12","Esd 9"],["Luc 9:28-36","1Ti 6:11-21","Pro 7:13-27","Esd 10"],
    ["Luc 9:37-50","2Ti 1:1-7","Pro 8:1-21","Neh 1-2"],["Luc 9:51-62","2Ti 1:8-18","Pro 8:22-36","Neh 3"],
    ["Luc 10:1-16","2Ti 2:1-13","Pro 9","Neh 4-5"],["Luc 10:17-24","2Ti 2:14-26","Pro 10:1-16","Neh 6"],
    ["Luc 10:25-37","2Ti 3:1-9","Pro 10:17-32","Neh 7"],["Luc 10:38-42","2Ti 3:10-17","Pro 11:1-15","Neh 8-9"],
    ["Luc 11:1-13","2Ti 4:1-8","Pro 11:16-31","Neh 10"],["Luc 11:14-28","2Ti 4:9-22","Pro 12:1-14","Neh 11"],
    ["Luc 11:29-36","Tit 1:1-9","Pro 12:15-28","Neh 12"],["Luc 11:37-54","Tit 1:10-16","Pro 13:1-12","Neh 13"],
    ["Luc 12:1-12","Tit 2","Pro 13:13-25","Est 1-2"],["Luc 12:13-21","Tit 3:1-8","Pro 14:1-18","Est 3-4"],
    ["Luc 12:22-34","Tit 3:9-15","Pro 14:19-35","Est 5-6"],["Luc 12:35-48","Flm 1-11","Pro 15-16","Est 7-8"],
    ["Luc 12:49-59","Flm 12-25","Pro 17","Est 9-10"]
  ]},
  {n:7,bk:["Mateo","Hechos","Salmos","Éxodo"],d:[
    ["Mat 21:23-32","Hch 15:22-41","Sal 24","Éxo 1"],["Mat 21:33-46","Hch 16:1-15","Sal 25","Éxo 2"],
    ["Mat 22:1-14","Hch 16:16-40","Sal 26","Éxo 3"],["Mat 22:15-33","Hch 17:1-15","Sal 27","Éxo 4"],
    ["Mat 22:34-46","Hch 17:16-34","Sal 28","Éxo 5-6"],["Mat 23:1-12","Hch 18:1-17","Sal 29","Éxo 7-8"],
    ["Mat 23:13-24","Hch 18:18-28","Sal 30","Éxo 9-10"],["Mat 23:25-39","Hch 19:1-22","Sal 31","Éxo 11-12"],
    ["Mat 24:1-14","Hch 19:23-41","Sal 32","Éxo 13-14"],["Mat 24:15-35","Hch 20:1-12","Sal 33","Éxo 15-16"],
    ["Mat 24:36-51","Hch 20:13-38","Sal 34","Éxo 17-18"],["Mat 25:1-13","Hch 21:1-26","Sal 35","Éxo 19-20"],
    ["Mat 25:14-30","Hch 21:27-40","Sal 36","Éxo 21-22"],["Mat 25:31-46","Hch 22","Sal 37:1-22","Éxo 23-24"],
    ["Mat 26:1-16","Hch 23:1-11","Sal 37:23-40","Éxo 25-26"],["Mat 26:17-35","Hch 23:12-35","Sal 38","Éxo 27"],
    ["Mat 26:36-56","Hch 24","Sal 39","Éxo 28-29"],["Mat 26:57-75","Hch 25:1-12","Sal 40","Éxo 30-31"],
    ["Mat 27:1-10","Hch 25:13-27","Sal 41","Éxo 32"],["Mat 27:11-26","Hch 26:1-18","Sal 42-43","Éxo 33-34"],
    ["Mat 27:27-44","Hch 26:19-32","Sal 44:1-12","Éxo 35-36"],["Mat 27:45-56","Hch 27:1-26","Sal 44:13-26","Éxo 37"],
    ["Mat 27:57-66","Hch 27:27-44","Sal 45","Éxo 38"],["Mat 28:1-10","Hch 28:1-16","Sal 46","Éxo 39"],
    ["Mat 28:11-20","Hch 28:17-31","Sal 47","Éxo 40"]
  ]},
  {n:8,bk:["Lucas","Ef / Gál / 1-2 Tes","Salmos","1-2 Reyes"],d:[
    ["Luc 13:1-9","Ef 1:1-14","Sal 123-124","1Re 1-2"],["Luc 13:10-21","Ef 1:15-23","Sal 125","1Re 3-4"],
    ["Luc 13:22-35","Ef 2:1-10","Sal 126","1Re 5-7"],["Luc 14:1-14","Ef 2:11-22","Sal 127","1Re 8:1-30"],
    ["Luc 14:15-24","Ef 3:1-13","Sal 128","1Re 8:31-66"],["Luc 14:25-35","Ef 3:14-21","Sal 129","1Re 9-10"],
    ["Luc 15:1-10","Ef 4:1-16","Sal 130-131","1Re 11-12"],["Luc 15:11-32","Ef 4:17-32","Sal 132","1Re 13-14"],
    ["Luc 16:1-9","Ef 5:1-21","Sal 133-134","1Re 15-16"],["Luc 16:10-18","Ef 5:22-33","Sal 135","1Re 17-18"],
    ["Luc 16:19-31","Ef 6:1-9","Sal 136","1Re 19-20"],["Luc 17:1-10","Ef 6:10-24","Sal 137","1Re 21-22"],
    ["Luc 17:11-19","Gál 1:1-12","Sal 138","2Re 1-2"],["Luc 17:20-37","Gál 1:13-24","Sal 139","2Re 3-4"],
    ["Luc 18:1-8","Gál 2","Sal 140","2Re 5-6"],["Luc 18:9-17","Gál 3:1-14","Sal 141","2Re 7-8"],
    ["Luc 18:18-30","Gál 3:15-29","Sal 142","2Re 9-10"],["Luc 18:31-43","Gál 4:1-20","Sal 143","2Re 11-12"],
    ["Luc 19:1-10","Gál 4:21-31","Sal 144","2Re 13-14"],["Luc 19:11-27","Gál 5:1-12","Sal 145","2Re 15-16"],
    ["Luc 19:28-38","Gál 5:13-26","Sal 146","2Re 17-18"],["Luc 19:39-48","Gál 6","Sal 147","2Re 19-20"],
    ["Luc 20:1-8","1Tes 1-3","Sal 148","2Re 21-22"],["Luc 20:9-19","1Tes 4-5","Sal 149","2Re 23-24"],
    ["Luc 20:20-26","2Tes 1-3","Sal 150","2Re 25"]
  ]},
  {n:9,bk:["Lucas","Hebreos","Proverbios","Isaías"],d:[
    ["Luc 20:27-40","Heb 1:1-9","Pro 18","Isa 1-2"],["Luc 20:41-47","Heb 1:10-14","Pro 19:1-14","Isa 3-5"],
    ["Luc 21:1-19","Heb 2:1-9","Pro 19:15-29","Isa 6-8"],["Luc 21:20-28","Heb 2:10-18","Pro 20:1-15","Isa 9-10"],
    ["Luc 21:29-38","Heb 3","Pro 20:16-30","Isa 11-13"],["Luc 22:1-13","Heb 4:1-11","Pro 21:1-16","Isa 14"],
    ["Luc 22:14-23","Heb 4:12-16","Pro 21:17-31","Isa 15-16"],["Luc 22:24-30","Heb 5","Pro 22:1-16","Isa 17-19"],
    ["Luc 22:31-38","Heb 6:1-12","Pro 22:17-29","Isa 20-21"],["Luc 22:39-46","Heb 6:13-20","Pro 23:1-18","Isa 22-23"],
    ["Luc 22:47-53","Heb 7:1-10","Pro 23:19-35","Isa 24-25"],["Luc 22:54-62","Heb 7:11-28","Pro 24:1-22","Isa 26-28"],
    ["Luc 22:63-71","Heb 8:1-6","Pro 24:23-34","Isa 29-31"],["Luc 23:1-12","Heb 8:7-13","Pro 25:1-14","Isa 32"],
    ["Luc 23:13-25","Heb 9:1-10","Pro 25:15-28","Isa 33-34"],["Luc 23:26-31","Heb 9:11-28","Pro 26:1-16","Isa 35-37"],
    ["Luc 23:32-37","Heb 10:1-18","Pro 26:17-28","Isa 38-39"],["Luc 23:38-43","Heb 10:19-39","Pro 27:1-14","Isa 40"],
    ["Luc 23:44-49","Heb 11:1-16","Pro 27:15-27","Isa 41"],["Luc 23:50-56","Heb 11:17-31","Pro 28:1-14","Isa 42"],
    ["Luc 24:1-12","Heb 11:32-40","Pro 28:15-28","Isa 43"],["Luc 24:13-27","Heb 12:1-13","Pro 29:1-14","Isa 44"],
    ["Luc 24:28-35","Heb 12:14-29","Pro 29:15-27","Isa 45"],["Luc 24:36-44","Heb 13:1-8","Pro 30","Isa 46-47"],
    ["Luc 24:45-53","Heb 13:9-25","Pro 31","Isa 48"]
  ]},
  {n:10,bk:["Juan","Stg / 1 Pedro","Ecl / Cantares","Jeremías / Lam"],d:[
    ["Jn 1:1-18","Stg 1:1-11","Ecl 1","Jer 1-2"],["Jn 1:19-28","Stg 1:12-18","Ecl 2:1-16","Jer 3-4"],
    ["Jn 1:29-34","Stg 1:19-27","Ecl 2:17-26","Jer 5-6"],["Jn 1:35-42","Stg 2:1-13","Ecl 3:1-15","Jer 7-8"],
    ["Jn 1:43-51","Stg 2:14-26","Ecl 3:16-22","Jer 9"],["Jn 2:1-11","Stg 3:1-12","Ecl 4","Jer 10-12"],
    ["Jn 2:12-25","Stg 3:13-18","Ecl 5","Jer 13-15"],["Jn 3:1-15","Stg 4:1-10","Ecl 6","Jer 16"],
    ["Jn 3:16-21","Stg 4:11-17","Ecl 7:1-14","Jer 17-19"],["Jn 3:22-36","Stg 5:1-6","Ecl 7:15-29","Jer 20-21"],
    ["Jn 4:1-14","Stg 5:7-12","Ecl 8","Jer 22-23"],["Jn 4:15-26","Stg 5:13-20","Ecl 9","Jer 24-26"],
    ["Jn 4:27-42","1Pe 1:1-9","Ecl 10","Jer 27-28"],["Jn 4:43-54","1Pe 1:10-16","Ecl 11","Jer 29-30"],
    ["Jn 5:1-15","1Pe 1:17-25","Ecl 12","Jer 31-32"],["Jn 5:16-30","1Pe 2:1-8","Cnt 1","Jer 33-34"],
    ["Jn 5:31-47","1Pe 2:9-17","Cnt 2","Jer 35-37"],["Jn 6:1-15","1Pe 2:18-25","Cnt 3","Jer 38-39"],
    ["Jn 6:16-24","1Pe 3:1-7","Cnt 4:1-7","Jer 40-41"],["Jn 6:25-40","1Pe 3:8-12","Cnt 4:8-16","Jer 42-44"],
    ["Jn 6:41-59","1Pe 3:13-22","Cnt 5","Jer 45-47"],["Jn 6:60-71","1Pe 4:1-11","Cnt 6","Jer 48"],
    ["Jn 7:1-13","1Pe 4:12-19","Cnt 7","Lam 1"],["Jn 7:14-24","1Pe 5:1-7","Cnt 8:1-7","Lam 2"],
    ["Jn 7:25-36","1Pe 5:8-14","Cnt 8:8-14","Lam 3-5"]
  ]},
  {n:11,bk:["Juan","2Pe / 1-3 Jn / Judas","Job","Ezequiel"],d:[
    ["Jn 7:37-44","2Pe 1:1-11","Job 1","Eze 1-3"],["Jn 7:45-53","2Pe 1:12-21","Job 2","Eze 4-6"],
    ["Jn 8:1-11","2Pe 2:1-9","Job 3","Eze 7-8"],["Jn 8:12-20","2Pe 2:10-16","Job 4","Eze 9-11"],
    ["Jn 8:21-30","2Pe 2:17-22","Job 5","Eze 12-13"],["Jn 8:31-47","2Pe 3:1-9","Job 6","Eze 14-15"],
    ["Jn 8:48-59","2Pe 3:10-18","Job 7","Eze 16"],["Jn 9:1-12","1Jn 1:1-4","Job 8","Eze 17-18"],
    ["Jn 9:13-25","1Jn 1:5-10","Job 9:1-20","Eze 19-20"],["Jn 9:26-41","1Jn 2:1-11","Job 9:21-35","Eze 21-22"],
    ["Jn 10:1-10","1Jn 2:12-17","Job 10","Eze 23-24"],["Jn 10:11-21","1Jn 2:18-23","Job 11","Eze 25-26"],
    ["Jn 10:22-42","1Jn 2:24-29","Job 12","Eze 27-28"],["Jn 11:1-16","1Jn 3:1-10","Job 13","Eze 29-30"],
    ["Jn 11:17-37","1Jn 3:11-18","Job 14","Eze 31-32"],["Jn 11:38-44","1Jn 3:19-24","Job 15:1-16","Eze 33-34"],
    ["Jn 11:45-57","1Jn 4:1-6","Job 15:17-35","Eze 35-36"],["Jn 12:1-11","1Jn 4:7-21","Job 16","Eze 37"],
    ["Jn 12:12-19","1Jn 5:1-12","Job 17","Eze 38-39"],["Jn 12:20-36","1Jn 5:13-21","Job 18","Eze 40"],
    ["Jn 12:37-50","2Jn 1-13","Job 19","Eze 41-42"],["Jn 13:1-11","3Jn 1-14","Job 20","Eze 43-44"],
    ["Jn 13:12-17","Jud 1-7","Job 21:1-21","Eze 45-46"],["Jn 13:18-30","Jud 8-16","Job 21:22-34","Eze 47"],
    ["Jn 13:31-38","Jud 17-25","Job 22","Eze 48"]
  ]},
  {n:12,bk:["Juan","Apocalipsis","Job","Oseas / Profetas"],d:[
    ["Jn 14:1-14","Ap 1:1-8","Job 23","Os 1-3"],["Jn 14:15-21","Ap 1:9-20","Job 24","Os 4-6"],
    ["Jn 14:22-31","Ap 2:1-17","Job 25-26","Os 7-8"],["Jn 15:1-8","Ap 2:18-29","Job 27","Os 9-12"],
    ["Jn 15:9-17","Ap 3:1-13","Job 28","Os 13-14"],["Jn 15:18-27","Ap 3:14-22","Job 29","Jl 1"],
    ["Jn 16:1-11","Ap 4","Job 30","Jl 2-3"],["Jn 16:12-24","Ap 5","Job 31:1-23","Am 1-2"],
    ["Jn 16:25-33","Ap 6","Job 31:24-40","Am 3-4"],["Jn 17:1-5","Ap 7","Job 32","Am 5-6"],
    ["Jn 17:6-19","Ap 8","Job 33:1-11","Am 7-8"],["Jn 17:20-26","Ap 9","Job 33:12-33","Am 9"],
    ["Jn 18:1-18","Ap 10","Job 34:1-20","Abd 1"],["Jn 18:19-27","Ap 11","Job 34:21-37","Jon 1-4"],
    ["Jn 18:28-40","Ap 12","Job 35","Miq 1-3"],["Jn 19:1-16","Ap 13","Job 36:1-15","Miq 4-5"],
    ["Jn 19:17-27","Ap 14","Job 36:16-33","Miq 6-7"],["Jn 19:28-37","Ap 15","Job 37","Nah 1-3"],
    ["Jn 19:38-42","Ap 16","Job 38:1-21","Hab 1-3"],["Jn 20:1-9","Ap 17","Job 38:22-41","Sof 1-3"],
    ["Jn 20:10-18","Ap 18","Job 39","Hag 1-2"],["Jn 20:19-23","Ap 19","Job 40","Zac 1-5"],
    ["Jn 20:24-31","Ap 20","Job 41:1-11","Zac 6-9"],["Jn 21:1-14","Ap 21","Job 41:12-34","Zac 10-14"],
    ["Jn 21:15-25","Ap 22","Job 42","Mal 1-4"]
  ]}
];

const KEY = "nav-bible-v1";
const START = new Date(2026, 4, 25);

function loadProg() {
  try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { return {}; }
}
function saveProg(d) {
  try { localStorage.setItem(KEY, JSON.stringify(d)); } catch {}
}
function planDay() {
  return Math.max(0, Math.min(Math.floor((new Date() - START) / 86400000), 299));
}
function calcStreak(prog) {
  let s = 0, pd = planDay();
  for (let d = 0; d <= pd; d++) {
    if (prog[`${Math.floor(d/25)}-${d%25}`]) s++; else break;
  }
  return s;
}

const COL_STYLE = [
  { background: "var(--blue-bg)", color: "var(--blue)" },
  { background: "var(--amber-bg)", color: "var(--amber)" },
  { background: "var(--green-bg)", color: "var(--green)" },
  { background: "var(--red-bg)", color: "var(--red)" },
];

export default function App() {
  const [prog, setProg] = useState(() => loadProg());
  const [mi, setMi] = useState(() => Math.floor(planDay() / 25));
  const [sel, setSel] = useState(() => planDay() % 25);

  const toggle = (m, d) => {
    const k = `${m}-${d}`;
    const next = { ...prog, [k]: !prog[k] };
    setProg(next);
    saveProg(next);
  };

  const pd = planDay();
  const cm = Math.floor(pd / 25);
  const cd = pd % 25;
  const total = Object.values(prog).filter(Boolean).length;
  const pct = Math.round(total / 3);
  const streak = calcStreak(prog);
  const month = PLAN[mi];
  const mDone = month.d.filter((_, i) => prog[`${mi}-${i}`]).length;

  return (
    <div>
      <h1 style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 400, marginBottom: 16, color: "var(--t1)" }}>
        Plan Bíblico Navigators
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
        {[["Racha", `${streak}d`], ["Leídos", `${total}/300`], ["Avance", `${pct}%`]].map(([l, v]) => (
          <div key={l} style={{ background: "var(--bg2)", borderRadius: "var(--r)", padding: "10px 12px", border: "0.5px solid var(--bd)" }}>
            <div style={{ fontSize: 11, color: "var(--t3)", marginBottom: 3 }}>{l}</div>
            <div style={{ fontSize: 18, fontWeight: 500, color: "var(--t1)" }}>{v}</div>
          </div>
        ))}
      </div>

      <div style={{ height: 4, background: "var(--bg3)", borderRadius: 2, overflow: "hidden", marginBottom: 16 }}>
        <div style={{ height: "100%", width: `${pct}%`, background: "var(--green)", transition: "width .4s" }} />
      </div>

      <div style={{ display: "flex", gap: 5, overflowX: "auto", marginBottom: 14, paddingBottom: 4 }}>
        {PLAN.map((mo, i) => {
          const done = mo.d.filter((_, j) => prog[`${i}-${j}`]).length;
          return (
            <button key={i} onClick={() => { setMi(i); setSel(i === cm ? cd : null); }}
              style={{ flexShrink: 0, padding: "4px 11px", fontSize: 13, fontWeight: i === mi ? 500 : 400,
                borderRadius: "var(--r)", cursor: "pointer",
                border: i === mi ? "0.5px solid var(--bd3)" : "0.5px solid var(--bd)",
                background: done === 25 ? "var(--green-bg)" : i === mi ? "var(--bg2)" : "transparent",
                color: done === 25 ? "var(--green)" : "var(--t1)" }}>
              M{mo.n}
            </button>
          );
        })}
      </div>

      <div style={{ background: "var(--bg2)", borderRadius: "var(--r2)", border: "0.5px solid var(--bd)", padding: "12px 14px", marginBottom: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontFamily: "var(--serif)", fontSize: 16, color: "var(--t1)" }}>Mes {month.n}</span>
          <span style={{ fontSize: 13, color: mDone === 25 ? "var(--green)" : "var(--t2)" }}>
            {mDone === 25 ? "Completado" : `${mDone}/25`}
          </span>
        </div>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {month.bk.map((b, i) => (
            <span key={i} style={{ fontSize: 11, padding: "2px 9px", borderRadius: 100, ...COL_STYLE[i] }}>{b}</span>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 7, marginBottom: 14 }}>
        {month.d.map((_, di) => {
          const done = !!prog[`${mi}-${di}`];
          const isToday = mi === cm && di === cd;
          const missed = !done && (mi < cm || (mi === cm && di < cd));
          const isSel = sel === di;
          return (
            <button key={di} onClick={() => setSel(isSel ? null : di)}
              style={{ aspectRatio: "1", borderRadius: "var(--r)", cursor: "pointer",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3,
                border: isSel ? "2px solid var(--amber)" : isToday ? "1.5px dashed rgba(180,100,20,0.4)" : done ? "none" : missed ? "0.5px dashed var(--red-bd)" : "0.5px solid var(--bd)",
                background: done ? "var(--green-bg)" : isSel ? "var(--bg2)" : "transparent",
                transition: "all .15s" }}>
              <span style={{ fontSize: 14, fontWeight: isToday ? 600 : 400, lineHeight: 1,
                color: done ? "var(--green)" : isToday ? "var(--amber)" : missed ? "var(--red)" : "var(--t1)" }}>
                {di + 1}
              </span>
              {done && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 5-5" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              {isToday && !done && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--amber)" }} />}
            </button>
          );
        })}
      </div>

      {sel !== null && (
        <div style={{ background: "var(--bg2)", borderRadius: "var(--r2)", border: "0.5px solid var(--bd)", padding: "14px 16px", marginBottom: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontWeight: 500, fontSize: 15, color: "var(--t1)" }}>Día {sel + 1}</span>
              {mi === cm && sel === cd && (
                <span style={{ fontSize: 11, background: "var(--amber-bg)", color: "var(--amber)", padding: "2px 8px", borderRadius: 100 }}>Hoy</span>
              )}
            </div>
            <button onClick={() => toggle(mi, sel)}
              style={{ padding: "5px 14px", fontSize: 13, fontWeight: 500, borderRadius: "var(--r)", cursor: "pointer",
                border: prog[`${mi}-${sel}`] ? "0.5px solid var(--green-bd)" : "0.5px solid var(--bd2)",
                background: prog[`${mi}-${sel}`] ? "var(--green-bg)" : "transparent",
                color: prog[`${mi}-${sel}`] ? "var(--green)" : "var(--t1)" }}>
              {prog[`${mi}-${sel}`] ? "Leído ✓" : "Marcar leído"}
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {month.d[sel].map((r, ri) => (
              <div key={ri} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 100, flexShrink: 0, minWidth: 46, textAlign: "center", ...COL_STYLE[ri] }}>
                  {month.bk[ri].split("/")[0].trim().split(" ")[0]}
                </span>
                <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--t1)" }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <p style={{ fontSize: 11, color: "var(--t3)", lineHeight: 1.7 }}>
        Inicio: 25 may 2026 · Día {pd + 1} del plan · Evangelios, Hechos y Salmos verificados del PDF.
        Epístolas y AT: confirmar con el plan impreso (navlink.org/bible-reading-plan).
      </p>
    </div>
  );
}
