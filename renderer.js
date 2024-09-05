document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle()
  document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.darkMode.system()
  document.getElementById('theme-source').innerHTML = 'System'
})
var DNAKeyPad = document.Keypad;
          
            var FlagNewLetr = false;
           
            var aN=0; 
            var tN=0; 
            var gN=0; 
            var cN=0; 
            
            
            function LetrPressed (Letr) {
           
                
                
                if (FlagNewLetr) {
                    DNAKeyPad.ReadOut.value  = Letr;
                    FlagNewLetr = false;
                }
                else {
                    if (DNAKeyPad.ReadOut.value === "Enter Your Primer Sequence Here")
                        DNAKeyPad.ReadOut.value = Letr;
                    else
                        DNAKeyPad.ReadOut.value += Letr;
                }
            
                if (Letr=='A')document.getElementById("aN").innerHTML =++aN;
                if (Letr=='T')document.getElementById("tN").innerHTML =++tN;
                if (Letr=='G')document.getElementById("gN").innerHTML =++gN;
                if (Letr=='C')document.getElementById("cN").innerHTML =++cN; 
                
                document.getElementById("prim").innerHTML=document.getElementById("output").value; 
                
            document.getElementById("Tm").innerHTML =4*(gN+cN)+2*(aN+tN);
               
                

            }
            
            function myReload() {
    location.reload();
}