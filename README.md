## Jurassic Cards 0.5 Beta

Just emerging from its shell, this small application serves as an alpha version designed to test an idea for a larger project. This explains the simplistic design and the initially limited functionality. 

The primary aim was to create an application using React TypeScript that could effectively manage calls fetched from a Backend for Frontend app, while also employing a robust and scalable context. I'm already developing Jurassic-scale ideas for an application, and this functional beta has smoothly paved the way forward.

<p align="center">
  <img src="https://i.ibb.co/7ptyYr0/Sin-t-tulo.png" alt="Screen 1" title="Screen 1">
</p>

## Table of Contents 

- [Stack](#stack)
- [Production](#production)
- [Installation](#installation)
- [Functionality / Code Decisions](#functionality)
- [Author](#author)


## Stack 

<img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"><img src="https://img.shields.io/badge/-Vite-747bff?style=for-the-badge&logo=vite&logoColor=white">

## Production 

<div align="center">
    <a href="https://master.d3j97dls5a1tea.amplifyapp.com/
    "><strong>PRODUCTION LINK</strong></a> 
</div>

## Installation 

If, however, you prefer to install the application locally on your computer, please feel free to follow the steps outlined below. These will guide you through cloning the repository onto your machine and setting up the app to run.

```sh
git clone https://github.com/Dave86dev/jurassiccards
cd jurassiccards
npm i
npm run dev
```

## Functionality

As previously mentioned, the entire project is developed in React using TypeScript, deliberately avoiding external libraries or dependencies to maintain as much independence as possible. We have chosen not to use libraries like axios, preferring native fetch methods instead.

The key decision in our development structure was to forego general state managers like Redux Toolkit or Mobx, opting instead for useContext. This strategy is designed to ensure that, even with this choice, the app's overall state remains transparent, streamlined, and capable of scaling.

This fundamental tool enables different views to share a global app state, facilitating cross-information sharing without the need for unnecessary prop spreading or drilling. The app's standout feature is its global state management coupled with the ability to make external calls to a Backend, utilizing a 'Backend for Frontend Structure' (BFF Cards), developed in Laravel PHP. This backend delivers a modeled data array of objects featuring random dinosaurs from an API.

Upon receiving the fetched information, users can click on one of the cards, which then displays a link to an external custom page of the selected dinosaur in the control section. From there, users can navigate to the external Wikipedia page of the chosen dinosaur.

Design-wise, the app is exceedingly simple, offering only a desktop version with a minimalist approach. The primary motivation behind developing this app was to explore the scalability of useContext in a React TypeScript project and to inspire the development of a new, dinosaur-themed project. I aim to develop this project without it taking 65 million years, and I look forward to sharing it with everyone soon.

I promise it will be worth the wait.

Welcome...to Jurassic Cards. ;)


## Contact

- ***David Ochando***  
<a href = "mailto:davidochando1986@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://github.com/Dave86dev" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=green" target="_blank"></a> 

