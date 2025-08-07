# 📧 Configuración de Formspree para Alia IA

## ¿Qué es Formspree?

Formspree es un servicio gratuito que permite que los formularios HTML envíen correos electrónicos sin necesidad de un servidor backend. Es perfecto para sitios estáticos como GitHub Pages.

## ✅ Configuración Completada

Tu endpoint de Formspree ya está configurado:
```
https://formspree.io/f/mzzvkveq
```

## 🚀 Pasos para Configurar Formspree

### 1. ✅ Crear cuenta en Formspree
1. Ve a [formspree.io](https://formspree.io)
2. Haz clic en "Sign Up" y crea una cuenta gratuita
3. Verifica tu correo electrónico

### 2. ✅ Crear un nuevo formulario
1. Una vez dentro de tu cuenta, haz clic en "New Form"
2. Dale un nombre como "Alia IA - Registro"
3. Selecciona tu correo electrónico donde quieres recibir los mensajes
4. Haz clic en "Create Form"

### 3. ✅ Obtener el endpoint
1. Después de crear el formulario, Formspree te dio el endpoint:
   ```
   https://formspree.io/f/mzzvkveq
   ```
2. ✅ Este endpoint ya está configurado en el código

### 4. ✅ Actualizar el código HTML
1. ✅ El archivo `index.html` ya tiene tu endpoint real
2. ✅ Ambos formularios (registro y contacto) usan tu endpoint

## 📋 Configuración Avanzada

### Personalizar campos
Puedes agregar campos personalizados al formulario:

```html
<input type="text" name="dispositivo" placeholder="¿Android o iOS?">
<input type="text" name="interes" placeholder="¿Qué te interesa más?">
```

### Configurar notificaciones
En Formspree puedes:
- Configurar respuestas automáticas
- Filtrar spam
- Exportar datos
- Integrar con otras herramientas

### Límites gratuitos
- **Plan gratuito**: 50 envíos por mes
- **Plan Pro**: $8/mes para 1000 envíos
- **Plan Business**: $25/mes para envíos ilimitados

## 🔧 Solución de Problemas

### El formulario no envía
1. ✅ Verifica que el endpoint sea correcto: `https://formspree.io/f/mzzvkveq`
2. ✅ El formulario tiene `method="POST"`
3. Revisa la consola del navegador para errores

### No llegan los correos
1. Revisa tu carpeta de spam
2. Verifica que el correo esté confirmado en Formspree
3. Revisa la configuración de notificaciones

### Error CORS
Si tienes problemas de CORS, asegúrate de que:
1. El dominio esté permitido en Formspree
2. Uses HTTPS en producción

## 📱 Prueba el Formulario

1. Sube los archivos a GitHub Pages
2. Visita tu sitio web
3. Llena el formulario de registro
4. Verifica que llegue el correo a tu email

## 🎯 Beneficios de Formspree

- ✅ **Gratuito** para uso básico
- ✅ **Sin servidor** requerido
- ✅ **Fácil de configurar**
- ✅ **Protección anti-spam**
- ✅ **Analytics incluidos**
- ✅ **Integración con otras herramientas**

## 📞 Soporte

Si tienes problemas:
- [Documentación de Formspree](https://formspree.io/docs/)
- [Soporte de Formspree](https://formspree.io/support/)
- [Comunidad de GitHub](https://github.com/formspree/formspree)

---

**¡Listo!** Tu formulario de registro ya está configurado con tu endpoint real y funcionará perfectamente con GitHub Pages. 🚀
