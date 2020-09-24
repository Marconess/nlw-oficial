//Dados
const proffys = [
     {
     name:"Diego Fernandes",
     avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
     whatsapp:"89987654534",
      bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
      subject:"Quimica", 
      cost:"20",
      weekday: [0], 
      tim_from:[720], 
      time_to:[1220]  
     },
      {
         name:"Daniel Evngelista",
         avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
         whatsapp:"89987654534",
          bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
          subject:"Quimica", 
          cost:"20",
          weekday: [1], 
          tim_from:[720], 
          time_to:[1220]  
      },
      {
         name:"Mark",
         avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
         whatsapp:"89987654534",
          bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
          subject:"Quimica", 
          cost:"20",
          weekday: [1], 
          tim_from:[720], 
          time_to:[1220]  
      }
 ]   
 
 const subjects = [    
     "Artes",
     "Biologia",
     "Ciências",
     "Educação física",
     "Física",
     "Geografia",
     "História",
     "Matemática",
     "Português",
     "Química",
 ] 
 
 const weekdays = [
     "Domingo",
     "Domingo",
     "Segunda-feira",
     "Terça-feira",
     "Quarta-feira",
     "Quinta-feira",
     "Sexta-feira",
     "Sábado",
 ]
 
 //Funcionalidades
 function pageLanding(req, res) {
     return res.render("index.html")
 }
 
 function pageStudy(req, res) {   
     const filters = req.query
     return res.render("study.html", {proffys, filters, subjects, weekdays})
 }
 
 function pageGiveClasses(req, res) { 
    
 //adicionar dados a lista de proffys
  
 
     return res.render("give-classes.html", { subjects, weekdays})
 }
 
  //Servidor
  const express = require('express')
  const server = express()
  
  
  //configurar nunjucks (template engine)
  const nunjucks = require('nunjucks')
  nunjucks.configure('src/views', {
      express: server,
      noCache: true,
 
  })
 
 //inicio e configuração do servidor
 server
 //configurar arquivos estàticos (css, scripts,imagens)   
 .use(express.static("public"))
 //rotas de aplicação 
 .get("/", pageLanding)
 .get("/study", pageStudy)
 .get("/give-classes", pageGiveClasses)
 //start do servidor 
 .listen(5500)