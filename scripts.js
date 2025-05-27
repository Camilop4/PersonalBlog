function expandText(){
    document.querySelector(".more").style.display = "inline";
    document.querySelector(".dots").style.display = "none";
};

function loadPost(){
    fetch(`./post/${ruta}`)
    .then(res => res.text())
    .then(data => {
        document.getElementById('post-content').innerHTML = data;
        document.getElementById('post-content').style.display = "block";
    })
    .catch(error = console.error('Error al cargar el post', error));
}