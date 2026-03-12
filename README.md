# React + TypeScript + Vite
Este proyecto es una aplicación sencilla desarrollada con React, TypeScript y Vite que muestra una lista de ODS (Objetivos de Desarrollo Sostenible) seleccionados por alumnos.

Tecnologías utilizadas

React

TypeScript

Vite

CSS

Descripción

La aplicación muestra tarjetas con información sobre distintos ODS favoritos de los alumnos.
Cada tarjeta contiene el número del ODS y el objetivo seleccionado.

Los datos se recorren utilizando map() en React y se muestran mediante un componente Card.

Estructura del proyecto
src
 ├── App.tsx
 ├── Card.tsx
 ├── Ods.tsx
 └── styles.css

App.tsx: Renderiza la lista de ODS.

Card.tsx: Componente que muestra cada tarjeta de ODS.

Ods.tsx: Archivo que contiene los datos de los alumnos.

Ejecución del proyecto

Instalar dependencias:

npm install

Ejecutar el servidor de desarrollo:

npm run dev

Abrir en el navegador:

http://localhost:5173
Objetivo

Practicar el uso de componentes en React, el tipado con TypeScript, el renderizado de listas y la organización de proyectos utilizando Vite.
