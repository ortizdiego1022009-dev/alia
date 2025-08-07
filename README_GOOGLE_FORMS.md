# 📝 Configuración de Google Forms para Alia IA

## 🎯 ¿Por qué Google Forms?

- ✅ **100% GRATUITO** - Sin límites de envíos
- ✅ **Sin registro** - No necesitas crear cuentas
- ✅ **Confiable** - Servicio de Google
- ✅ **Fácil de configurar** - Solo 5 minutos
- ✅ **Respuestas automáticas** - Llegan directo a tu email

## 🚀 Pasos para Configurar

### 1. Crear Formulario de Registro

1. Ve a [Google Forms](https://forms.google.com)
2. Haz clic en **"+"** para crear un nuevo formulario
3. Nombra el formulario: **"Registro Alia IA - Acceso Anticipado"**
4. Agrega estos campos:
   - **Nombre** (Texto corto)
   - **Email** (Email) - Marca como obligatorio
   - **¿Cómo te enteraste de Alia IA?** (Opciones múltiples)
   - **¿Qué te interesa más de Alia IA?** (Casillas de verificación)

### 2. Configurar Respuestas

1. Ve a la pestaña **"Respuestas"**
2. Haz clic en **"Crear hoja de cálculo"**
3. Selecciona **"Crear una nueva hoja de cálculo"**
4. Nombra: **"Registros_Alia_IA"**

### 3. Obtener el ID del Formulario

1. Haz clic en **"Enviar"** (botón morado)
2. Selecciona la pestaña **"Insertar"**
3. Copia la URL del iframe que aparece
4. El ID está en la URL: `https://docs.google.com/forms/d/e/**TU_FORM_ID**/viewform`

### 4. Actualizar el Código

Reemplaza `TU_FORM_ID` en el archivo `index.html`:

```html
<iframe 
  src="https://docs.google.com/forms/d/e/TU_FORM_ID/viewform?embedded=true" 
  width="100%" 
  height="400" 
  frameborder="0" 
  marginheight="0" 
  marginwidth="0">
```

### 5. Crear Formulario de Contacto

Repite los pasos 1-4 para crear un formulario de contacto con:
- **Nombre** (Texto corto)
- **Email** (Email)
- **Asunto** (Texto corto)
- **Mensaje** (Texto largo)

## 📧 Configurar Notificaciones por Email

### Opción 1: Respuestas Automáticas (Recomendado)

1. En Google Forms, ve a **"Respuestas"**
2. Haz clic en **"⋮"** (tres puntos)
3. Selecciona **"Obtener notificaciones por email"**
4. Marca **"Recibir notificaciones por email"**
5. Ingresa tu email: `soporte@alia-ia.com`

### Opción 2: Google Sheets + Apps Script

1. Abre la hoja de cálculo creada
2. Ve a **"Extensiones" > "Apps Script"**
3. Agrega este código:

```javascript
function onFormSubmit(e) {
  var responses = e.values;
  var email = responses[1]; // Asumiendo que email es la segunda columna
  var nombre = responses[0]; // Asumiendo que nombre es la primera columna
  
  // Enviar email de confirmación
  MailApp.sendEmail({
    to: "soporte@alia-ia.com",
    subject: "Nuevo registro: " + nombre,
    body: "Nuevo registro para Alia IA:\n\nNombre: " + nombre + "\nEmail: " + email
  });
}
```

## 🎨 Personalizar el Formulario

### Tema y Colores

1. En Google Forms, haz clic en **"Personalizar tema"** (ícono de paleta)
2. Selecciona colores que coincidan con tu sitio:
   - **Color principal**: `#b388ff` (morado)
   - **Color secundario**: `#7c4dff` (morado oscuro)

### Preguntas Adicionales

Puedes agregar más preguntas como:
- **¿En qué dispositivo usarías Alia IA?** (Móvil/Desktop/Ambos)
- **¿Qué funcionalidad te interesa más?** (Chat/Imágenes/Análisis)
- **¿Tienes experiencia con IA?** (Sí/No/Algo)

## 📊 Ventajas de Google Forms

- **📈 Estadísticas automáticas** - Gráficos de respuestas
- **📱 Responsive** - Se adapta a móviles
- **🔒 Seguro** - Protección de Google
- **📧 Notificaciones** - Emails automáticos
- **📊 Exportar datos** - Excel, CSV, PDF
- **🔄 Respuestas múltiples** - Sin límites

## 🛠️ Solución de Problemas

### El formulario no se muestra
- Verifica que el ID del formulario sea correcto
- Asegúrate de que el formulario esté publicado

### No llegan los emails
- Revisa la carpeta de spam
- Verifica la configuración de notificaciones
- Usa la opción de Google Sheets + Apps Script

### El formulario se ve mal en móvil
- Google Forms es automáticamente responsive
- Si hay problemas, ajusta la altura del iframe

## 🎉 ¡Listo!

Con Google Forms tienes:
- ✅ Formularios 100% gratuitos
- ✅ Sin límites de envíos
- ✅ Respuestas automáticas a tu email
- ✅ Estadísticas y análisis
- ✅ Fácil de mantener

**¡No más problemas con Formspree!** 🚀
