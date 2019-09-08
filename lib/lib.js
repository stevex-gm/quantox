//stevan library
let $lib={};

$lib.api = data=>{

  return new Promise((rs,rj)=>{
    fetch(data.api, {
      method: 'GET'
    }).then(res => rs(res.json()))
    .catch(err => rj('ERROR LIB API:', err));;
  });
}

$lib.html = (obj, parent, addNotAllowed) => {
  let el = [];
  
  if(!Array.isArray(obj)){ 
    obj=[obj];
  }

  obj.map(o=>{

    if(!o.tag){
       Object.entries(o).forEach(([key, val]) => {
          if($lib.tag.name.includes(key)){
             o.tag = key;
          } 
       });
    }

    let elem = document.createElement(o.tag);
    Object.entries(o).forEach(([key, val]) => {
      if (key!=="tag"){
       // alert(key)
       if(key==="input" || key==="textarea"){
          elem.value = val;
        } else if(key==="style"){
          elem.style.cssText = val;
        } else if(key==="a" && typeof o[key]=="string" ){
          elem.setAttribute("href", val);
        } else 
        if(key==="img" && typeof o[key]=="string" ){
          elem.setAttribute("src", val);
        } else if(key==="htm"){
          let frag = document.createDocumentFragment();
          let html = document.createElement('div');
          html.innerHTML = val;
          while (html.childNodes[0]) {
            frag.appendChild(html.childNodes[0]);
          }
          elem.appendChild(frag);
        } else if(key==="class"){
          elem.className = val;
        } else if(key==="text" || ($lib.tag.name.includes(key)&& typeof o[key]=="string" )){
          elem.appendChild(document.createTextNode(val));
        } else if($lib.tag.attr.includes(key)){
          if(typeof o[key]=="function"){
            elem[key]=val;
          }else if(typeof o[key]=="string"){
            elem[key]=function(){eval(val)};
          }else if(typeof o[key]=="object"){
            alert("Obj: "+o[key])
          }else{
            alert("Else: " + typeof o[key])
          }
        } else if($lib.tag.name.includes(key) && typeof o[key]=="object" ) {

          let childrens = $lib.html(o[key]);
          childrens.map(tag=>{
            elem.appendChild(tag);
          });
        } else if(key==="children"){
          $lib.html(o.children, elem);
        } else if(key==="val"){
          elem.val = val;
        }else {
          elem.setAttribute(key, val);
        }
      }
    });
    
    if(!addNotAllowed) parent?parent.appendChild(elem):document.body.appendChild(elem);
    if(!o.nob) el.push(elem);

  });

  return el;
};

$lib.rhtml = (obj, parent)=>{
  parent.innerHTML = '';
  if(!obj) return;
  $lib.html(obj, parent);
}

