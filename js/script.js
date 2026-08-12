const negocio = {

  nombre: "Cositas",

  eslogan: "No solo son cosas son Cositas",

  descripcion:
    "Somos una tienda web especializada en productos únicos y de calidad para tu hogar y estilo de vida",

  direccion:
    "Calle 50 #38-45",

  telefono:
    "573216703979",

  horario:
    "Cualquier hora del día, todos los dias",

  // WhatsApp: escribir número con código de país.
  // Colombia = 57
  whatsapp:
    "573216703979",

  instagram:
    "https://www.instagram.com/cositasweboficial/ ",

  tiktok:
    "https://www.tiktok.com/@cositasweboficial?lang=es-419",

  facebook:
    "https://www.facebook.com/profile.php?id=61590259154551&locale=es_LA ",

  servicios: [

    {
      nombre: "Productos Disponibles",
      descripcion:
        "Mira que productos estan actualmente",
      precio: "Oficial"
    },

    {
      nombre: "Productos en Camino",
      descripcion:
        "Mira que productos van en camino a la tienda",
      precio: "Oficial"
    },

    {
      nombre: "Formas de contacto",
      descripcion:
        "Contactanos",
      precio: "Oficial"
    },

    {
      nombre: "Formas de pago",
      descripcion:
        "Como puedes pagar",
      precio: "Oficial"
    }

  ]
};


// ========================================
// 2. MOSTRAR INFORMACIÓN
// ========================================

document.getElementById("nombreNegocio")
  .textContent = negocio.nombre;

document.getElementById("eslogan")
  .textContent = negocio.eslogan;

document.getElementById("descripcion")
  .textContent = negocio.descripcion;

document.getElementById("direccion")
  .textContent = "Dirección: " + negocio.direccion;

document.getElementById("telefono")
  .textContent = "WhatsApp: " + negocio.telefono;

document.getElementById("horario")
  .textContent = "Horario: " + negocio.horario;


// ========================================
// 3. WHATSAPP
// ========================================

const mensaje = encodeURIComponent(
  "Hola, quiero información sobre los servicios de "
  + negocio.nombre
);

document.getElementById("botonWhatsApp").href =
  "https://wa.me/"
  + negocio.whatsapp
  + "?text="
  + mensaje;


// ========================================
// 4. REDES SOCIALES
// ========================================

document.getElementById("instagram").href =
  negocio.instagram;

document.getElementById("tiktok").href =
  negocio.tiktok;

document.getElementById("facebook").href =
  negocio.facebook;


// ========================================
// 5. SERVICIOS
// ========================================

const contenedor =
  document.getElementById("listaServicios");

negocio.servicios.forEach((servicio) => {

  contenedor.innerHTML += `

    <div class="col-md-6 col-lg-3">

      <div class="card service-card p-4">

        <div class="card-body text-center">

          <i class="bi bi-box fs-1 text-warning"></i>

          <h3 class="h5 mt-3">
            ${servicio.nombre}
          </h3>

          <p>
            ${servicio.descripcion}
          </p>

          <p class="price">
            ${servicio.precio}
          </p>

          <a href="#contacto"
             class="btn btn-dark">
            Más información
          </a>

        </div>

      </div>

    </div>

  `;
});
