//require fait un appel à une bibliothèque de node.js. il existe
plusieurs bibliothequzes qui peuvent etre telecharger avec NPM ,le
gestionnaire de paquet Node.js
var http= require ('http');
var server= http.createServer(function(req, res){
//renvoyer le code 200 dans l'entete de la reponse qui signifie au
navigateur "OK" tout va bien
res.writeHead(200,{"Content-Type":
"text/html"});//text/css,text/html,text/plain,image/jpeg,video/mp4,application/zip
ce sont les types de donnée que le serveur devra indiquer qu'il
apprete à envoyer au client
//renvoyer une reponse
//res.end('Salut tout le monde !');
//res.end('<p> La page <strong>HTML </strong> !</p>');
res.write('<!DOCTYPE html>'+
          '<html>'+
             '<head>'+
              '<meta charset="utf-8" />'+
              '<title> Page HTML de Node.js !</title>'+
             '</head>'+
             '<body>'+
              ' <p> Voici notre page page
<strong>HTML</strong>provenant de simisi !</p>'+
             '</body>'+
           '</html>'
)
});
//res.end();

server.on('close', function() {
console.log("bye bye le serveur est clos");
})


console.log("Tout est bien sur le port 8080 de simisi");


server.listen(8080);
//server.close();
