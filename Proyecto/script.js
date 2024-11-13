// Arreglos para almacenar datos
let proveedores = [];
let muebles = [];
let clientes = [];

// Funciones para registrar datos
function registrarProveedor() {
    const proveedor = {
        nombre: document.getElementById("nombreProveedor").value,
        direccion: document.getElementById("direccionProveedor").value,
        telefono: document.getElementById("telefonoProveedor").value,
        contacto: document.getElementById("contactoProveedor").value,
        tipoMueble: document.getElementById("tipoMuebleProveedor").value
    };
    proveedores.push(proveedor);
    alert("Proveedor registrado exitosamente.");
}

function registrarMueble() {
    const mueble = {
        tipo: document.getElementById("tipoMueble").value,
        material: document.getElementById("materialMueble").value,
        dimensiones: document.getElementById("dimensionesMueble").value,
        color: document.getElementById("colorMueble").value,
        precio: parseFloat(document.getElementById("precioMueble").value)
    };
    muebles.push(mueble);
    alert("Mueble registrado exitosamente.");
}

function registrarCliente() {
    const cliente = {
        id: document.getElementById("idCliente").value,
        nombre: document.getElementById("nombreCliente").value,
        telefono: document.getElementById("telefonoCliente").value,
        direccion: document.getElementById("direccionCliente").value,
        email: document.getElementById("emailCliente").value
    };
    clientes.push(cliente);
    alert("Cliente registrado exitosamente.");
}

// Función para generar reportes básicos
function generarReporte() {
    let reporteHTML = "<h3>Reporte Mensual</h3>";

    reporteHTML += "<h4>Proveedores Registrados</h4><ul>";
    proveedores.forEach(p => {
        reporteHTML += `<li>${p.nombre} - Contacto: ${p.contacto}, Tel: ${p.telefono}</li>`;
    });
    reporteHTML += "</ul>";

    reporteHTML += "<h4>Muebles Registrados</h4><ul>";
    muebles.forEach(m => {
        reporteHTML += `<li>${m.tipo} - ${m.material}, Color: ${m.color}, Precio: $${m.precio.toFixed(2)}</li>`;
    });
    reporteHTML += "</ul>";

    reporteHTML += "<h4>Clientes Registrados</h4><ul>";
    clientes.forEach(c => {
        reporteHTML += `<li>${c.nombre} - ID: ${c.id}, Tel: ${c.telefono}, Email: ${c.email}</li>`;
    });
    reporteHTML += "</ul>";

    document.getElementById("reporteContenido").innerHTML = reporteHTML;
}
