function narodnost(){
    let x = document.getElementById("option").value;

    if(x == "cz"){
        document.getElementById("telefonZmena").innerHTML = `<span class="input-group-text" id="inputGroupPrepend">+420</span>`
    }
    else if(x == "sk"){
        document.getElementById("telefonZmena").innerHTML = `<span class="input-group-text" id="inputGroupPrepend">+421</span>`
    }
    else if(x == "jine"){
        document.getElementById("telefonZmena").innerHTML = `<span class="input-group-text" id="inputGroupPrepend">+000</span>`
    }
}

function obor(){
    let x = document.getElementById("option2").value;

    if(x == "informacni"){
        document.getElementById("trida").innerHTML =
       `<select name="trida" class="form-control">
        <option value="it1">IT1</option>
        <option value="it2">IT2</option>
        <option value="it3">IT3</option>
        <option value="it4">IT4</option>
        </select>`        
    }
    else if(x == "strojirenstvi"){
        document.getElementById("trida").innerHTML = 
        `<select name="trida" class="form-control">
        <option value="it1">SV1A</option>
        <option value="it2">SV2A</option>
        <option value="it3">SV3A</option>
        <option value="it4">SV4A</option>
        <option value="it1">SV1B</option>
        <option value="it2">SV2B</option>
        <option value="it3">SV3B</option>
        <option value="it4">SV4B</option>
        </select>` 
    }
    else if(x == "umelecke"){
        document.getElementById("trida").innerHTML =
        `<select name="trida" class="form-control">
        <option value="it1">U1</option>
        <option value="it2">U2</option>
        <option value="it3">U3</option>
        <option value="it4">U4</option>
        </select>` 
    }
}

function confirm(){
    let h = document.getElementById("heslo").value;
    let cH = document.getElementById("confirmHeslo").value;
    let tH = document.getElementById("textHeslo").value;

    if (h == cH){
        document.getElementById("tH").innerHTML +=
        `<div class="valid-feedback">Platný údaj.</div>`
    }
    else if (h !== cH){
        document.getElementById("tH").innerHTML +=
        `<div class="invalid-feedback">Prosím, napište správně heslo.</div>`
    }
}