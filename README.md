# Richard Store

Ecommerce para la venta de prendas de vestir. Hecho en **React + Vite**, se utilizó **Firebase** para gestión de bases de datos y almacenamiento

Este proyecto está desplegado en las siguientes plataformas:

- Vercel: https://proyecto-final-react-flores.vercel.app/
- Gitub pages: https://richardeflores.github.io/Proyecto-Final-React-Flores/

---

## Funciones principales

1.  **Navegación y páginas:** la aplicación cuenta con una página principal donde podrá ver la lista total de los productos,
2.  **Gestión Global:** El contexto global (`GlobalProvider`) facilita el intercambio de datos entre los diversos componentes, como el carrito de compras.
3.  **Uso de LocalStorage:** En el hook `useCarrito.jsx`, se emplea `localStorage` para conservar de forma persistente los datos del carrito de compras en el navegador. Esto permite que, si el usuario cierra el navegador o actualiza la página, los productos en el carrito permanezcan almacenados hasta que sean eliminados o procesados.
4.  **Integración con Firebase:**Configuración de Firebase destinada al almacenamiento de datos y posibles futuras implementaciones, como autenticación y análisis.

---

## Instalación

1.  Clonar el repositorio:

```
https://github.com/richardeflores/Proyecto-Final-React-Flores.git
```

2. Instalar las dependencias:

```
npm install
```

3. Ejecutar el servidor de Desarrollo:

```
npm run dev
```

---

## Dependencias utilizadas:

- **bootstrap**: Framework para crear interfaces responsivas con componentes y utilidades CSS predefinidos.
- **firebase**: Plataforma para autenticación, almacenamiento y bases de datos en aplicaciones web y móviles.
- **react**: Biblioteca para construir interfaces de usuario con componentes reutilizables.
- **react-bootstrap**: Versiones de componentes de Bootstrap optimizadas para usarse con React. - **react-dom**: Permite renderizar componentes de React en el DOM de navegadores.
- **react-hook-form**: Herramienta para gestionar formularios en React de manera eficiente.
- **react-router-dom**: Librería para manejar rutas y navegación en aplicaciones React.

---

## Licencia

Este proyecto está licenciado bajo los términos de la **Licencia MIT**.
