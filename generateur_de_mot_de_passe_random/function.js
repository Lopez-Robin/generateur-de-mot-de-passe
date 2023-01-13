var affichage = document.getElementById("geeks");

let bouton = document.getElementById("onclick");

function generateP() {
    let pass = '';
    var mdp = '0123456789' + 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'+'?§%*' ;
           
      
    for (let i = 1; i <= 6; i++) {
        var char = Math.floor(Math.random()
                    * mdp.length + 1);
          
        pass += mdp.charAt(char);
    }
      
    return pass;
}

function gfg_Run() {
    
    affichage.innerHTML = generateP();
}

bouton.addEventListener("click",gfg_Run);