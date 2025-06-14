function handleSubmit(event) {
  event.preventDefault();

  alert("¡Gracias por tu mensaje! Pronto nos pondremos en contacto.");

  event.target.reset(); // Limpia el formulario
}
