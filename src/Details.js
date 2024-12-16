// Enter all your detials in this file


// Profile Image
import profile from "./assets/ui/profile.webp";
// Tech stack images
import bfs4 from "./assets/techstack/bfs4.png";
import excel from "./assets/techstack/excel.png";
import ggplot from "./assets/techstack/ggplot.png";
import github from "./assets/techstack/github.png";
import metplotlib from "./assets/techstack/metplotlib.png";
import pandas from "./assets/techstack/pandas.png";
import powerbi from "./assets/techstack/powerbi.png";
import python from "./assets/techstack/python.png";
import restfulapi from "./assets/techstack/restfulapi.jpg";
import scikitlearn from "./assets/techstack/scikitlearn.png";
import seaborn from "./assets/techstack/seaborn.png";
import Tableausymbol from "./assets/techstack/Tableausymbol.png";
import vscode from "./assets/techstack/vscode.png";
import postman from "./assets/techstack/postman.png";
import scrapy from "./assets/techstack/scrapy.png";
import numpy from "./assets/techstack/numpy.png";

// Porject Images
import chat from "./assets/projects/chat.png";
import priceprediction from "./assets/projects/priceprediction.png";
import recommender from "./assets/projects/recommender.png";
import cricc from "./assets/projects/cricc.png";
import airbnb from "./assets/projects/airbnb.png";



// Enter your Personal Details here
export const personalDetails = {
  name: "Prateek Passi",
  tagline: "“Turning data into insights, insights into action, and action into results.”",
  img: profile,
  about: "Detail-oriented Data Analyst with a strong foundation in data visualization, statistical analysis, and business intelligence tools. Proven ability to translate complex datasets into actionable insights to support strategic decision-making. Experienced in building interactive dashboards, conducting predictive modeling, and optimizing workflows. Eager to apply analytical skills to drive data-driven decision-making in business environments.",
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/prateek1505/",
  github: "https://github.com/Passi264",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Assistant Manager - Technology and Store Operations",
    Company: "Dollarama",
    Location: "Bowmanville",
    Type: "Part Time",
    Duration: "May 2024 - Present",
  },
  {
    Position: "Associate Professional Software Engineer",
    Company: "DXC Technology",
    Location: "Remote",
    Type: "Full Time",
    Duration: "Sep 2022 - April 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Postgraduate Certificate in Data Analytics for Business Decision Making",
    Company: "Durham College",
    Location: "Oshawa",
    Type: "Full Time",
    Duration: "May 2024 - Dec 2024",
  },
  {
    Position: "Postgraduate Certificate in Project Management",
    Company: "Durham College",
    Location: "Oshawa",
    Type: "Full Time",
    Duration: "May 2023 - Dec 2023",
  },
  {
    Position: "Data Analyst",
    Company: "Udemy, YouTube, Google, Medium,Coursera",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2023 - Present",
  },
  {
    Position: "Bachelor in Electrical & Electronics",
    Company: "Guru Gobind Singh Indraprastha University",
    Location: "New Delhi",
    Type: "Full Time",
    Duration: "July 2018 - July 2022",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  python: python,
  pandas: pandas,
  seaborn: seaborn,
  metplotlib: metplotlib,
  scikitlearn: scikitlearn,
  ggplot: ggplot,
  bfs4: bfs4,
  excel: excel,
  vscode: vscode,
  restfulapi: restfulapi,
  powerbi: powerbi,
  Tableausymbol: Tableausymbol,
  github: github,
  postman: postman,
  numpy: numpy,
  scrapy: scrapy
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "WhatsApp Chat Analyzer",
    image: chat,
    description: "Analyze WhatsApp chat data using Python and Streamlit. This tool visualizes user activity, message counts, word frequencies, and emoji usage through timelines, heatmaps, and charts.",
    techstack: "Python, Streamlit",
    previewLink: "https://passi264-whatsapp-chat-anayzer-app-dofipe.streamlit.app/",
    githubLink: "https://github.com/Passi264/Whatsapp-Chat-Anayzer",

  },
  {
    title: "Movie Recommender System",
    image: recommender,
    description: "A movie recommendation system that suggests similar movies based on a selected title. Fetches movie posters and details from the TMDB API, offering a personalized experience for users.",
    techstack: "Python, Streamlit, TMDB API",
    previewLink: "https://passi264-recommenderformovies-app-wqnewe.streamlit.app/",
    githubLink: "https://github.com/Passi264/Recommenderformovies",
  },
  {
    title: "Property Price Prediction Model",
    image: priceprediction,
    description: "A predictive model for forecasting property prices in Bangalore. It is integrated into a website, allowing users to estimate prices based on property type.",
    techstack: "Machine Learning, Python, Web Integration",
    previewLink: "https://passi264-priceprediction-app-gubmoq.streamlit.app/",
    githubLink: "https://github.com/Passi264/PricePrediction",
  },
  {
    title: "Real-Time Currency Conversion Chatbot",
    image: chat,
    description: "A chatbot built using Google's Dialogflow and Flask, hosted on Vercel. It provides real-time currency conversions, enhancing user experience by delivering instant exchange rates.",
    techstack: "Dialogflow, Flask, Vercel",
    previewLink: "https://passi264-frontendforchatbot-app-rllfrw.streamlit.app/",
    githubLink: "https://github.com/Passi264/PricePrediction",
  },
  {
    title: "Power BI Team Selection Report",
    image: cricc,
    description: "A Power BI report designed for sports analysts, allowing them to select the top 11 players across various categories like batters, bowlers, and all-rounders, with performance metrics visualization.",
    techstack: "Power BI",
    previewLink: "https://github.com/Passi264/CricketDashboard",
    githubLink: "https://github.com/Passi264/CricketDashboard",
  },
  {
    title: "Airbnb Tableau Dashboard",
    image: airbnb,
    description: "An academic Tableau dashboard using Airbnb data to help clients analyze pricing trends, booking variations, and market growth, assisting with market entry and strategy.",
    techstack: "Tableau",
    previewLink: "https://github.com/Passi264/AirBnb_Report",
    githubLink: "https://github.com/Passi264/AirBnb_Report",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "prateekpassiwork@gmail.com",
  phone: "226 961 8586",
};
