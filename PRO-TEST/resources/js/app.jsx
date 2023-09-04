import "./bootstrap";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Addpro from "./components/Dash/Addpro";
import AdminDashboard from "./components/Dash/AdminDashboard";
import AddSkill from "./components/Dash/AddSkill";
import ListPro from "./components/Dash/ListPro";
import ListSkill from "./components/Dash/ListSkill";
import About from "./components/About";
import Scrolll from "./components/scrolll";
import ListDep from "./components/Dash/ListDep";
import AddDp from "./components/Dash/AddDp";
import ListWorkExp from "./components/Dash/ListWorkExp";
import AddWorkExp from "./components/Dash/AddWorkExp";
const root = ReactDOM.createRoot(document.getElementById("app"));

var comp=Home;
    const a = document.getElementById("ppp").getAttribute("data-auth");
    if (1 == a) {
comp = ()=> (<AdminDashboard><Addpro /><AddSkill /><ListPro /><ListSkill /><ListDep/><AddDp/><AddWorkExp/><ListWorkExp/></AdminDashboard>)
    } else {
comp=Home
    }


root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/Contact" element={<Contact />}></Route>
                <Route
                    exact
                    path="/HomeAdmin"
                    Component={comp}
                ></Route>
                <Route exact path="/Projects" element={<Projects />}></Route>
                <Route exact path="/About" element={<About />}></Route>
            </Routes>
            <Scrolll/>

            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
